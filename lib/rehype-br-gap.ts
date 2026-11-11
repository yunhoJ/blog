import type { Root, Element, ElementContent } from 'hast';
import { visit, SKIP } from 'unist-util-visit';

// Enter 한 번(remark-breaks가 만든 <br>) 뒤에 반 줄보다 작은 간격(.br-gap, 0.35em)을 넣는다.
// 넣지 않는 경우: 이미지 바로 뒤 <br>, 문단 맨 앞·맨 끝 <br>, pre/code 안. 인용문 안 문단은 넣는다.
const GAP_PARENTS = new Set(['p', 'li', 'td', 'th']);

const isBlank = (n: ElementContent) => n.type === 'text' && !n.value.trim();
const isImage = (n: ElementContent | undefined): boolean =>
	!!n &&
	n.type === 'element' &&
	(n.tagName === 'img' ||
		// <a><img></a> 처럼 이미지 하나만 감싼 경우
		(n.children.filter((c) => !isBlank(c)).length === 1 && isImage(n.children.find((c) => !isBlank(c)))));

export default function rehypeBrGap() {
	return (tree: Root) => {
		visit(tree, 'element', (node: Element, index, parent) => {
			if (node.tagName !== 'br' || index == null || !parent || parent.type !== 'element') return;
			if (!GAP_PARENTS.has(parent.tagName)) return;
			const siblings = parent.children;
			const prev = siblings.slice(0, index).filter((c) => !isBlank(c)).at(-1);
			const next = siblings.slice(index + 1).find((c) => !isBlank(c));
			if (!prev || !next) return; // 문단 맨 앞·맨 끝
			if (isImage(prev)) return; // 이미지 바로 뒤
			if (next.type === 'element' && next.tagName === 'br') return; // 연속 <br>은 마지막 것만
			siblings.splice(index + 1, 0, {
				type: 'element',
				tagName: 'span',
				properties: { className: ['br-gap'], ariaHidden: 'true' },
				children: [],
			});
			return [SKIP, index + 2];
		});
	};
}
