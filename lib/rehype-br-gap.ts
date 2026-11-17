import type { Root, Element, ElementContent } from 'hast';

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

function walk(parent: Root | Element) {
	const siblings = parent.children;
	let i = 0;
	while (i < siblings.length) {
		const node = siblings[i];
		if (
			parent.type === 'element' &&
			GAP_PARENTS.has(parent.tagName) &&
			node.type === 'element' &&
			node.tagName === 'br'
		) {
			const prev = parent.children.slice(0, i).filter((c) => !isBlank(c)).at(-1);
			const next = parent.children.slice(i + 1).find((c) => !isBlank(c));
			if (prev && next && !isImage(prev) && !(next.type === 'element' && next.tagName === 'br')) {
				parent.children.splice(i + 1, 0, {
					type: 'element',
					tagName: 'span',
					properties: { className: ['br-gap'], ariaHidden: 'true' },
					children: [],
				});
				i += 2;
				continue;
			}
		}
		if (node.type === 'element') walk(node);
		i += 1;
	}
}

export default function rehypeBrGap() {
	return (tree: Root) => {
		walk(tree);
	};
}
