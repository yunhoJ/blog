import type { Root } from 'hast';
export function fixBrTags(content: string) {
	return content.replace(/<br>/g, '<br />');
}
// 마크다운 파일을 파싱하여 mdxJsxTextElement를 일반 element로 변환
export function extractMdxJsxFromP(ast: Root) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const extractFromNode = (node: any) => {
		if (node.type === 'element' && node.tagName === 'p') {
			// p 태그의 자식들 중에서 mdxJsxTextElement 찾기
			if (node.children) {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				node.children = node.children.map((child: any) => {
					if (child.type === 'mdxJsxTextElement' && child.name === 'span') {
						const styleAttr = child.attributes.find(
							// eslint-disable-next-line @typescript-eslint/no-explicit-any
							(attr: any) => attr.type === 'mdxJsxAttribute' && attr.name === 'style'
						);
						// mdxJsxTextElement를 일반 element로 변환
						return {
							type: 'element',
							tagName: 'span',
							properties: { style: styleAttr?.value as string },
							children: child.children || [],
						};
					}
					return child;
				});
			}
		} else if (node.type === 'mdxJsxFlowElement') {
			if (node.name === 'br') {
				return {
					type: 'element',
					tagName: 'br',
					properties: {},
					children: [],
				};
			}
			if (node.name === 'span') {
				const styleAttr = node.attributes.find(
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					(attr: any) => attr.type === 'mdxJsxAttribute' && attr.name === 'style'
				);
				return {
					type: 'element',
					tagName: 'span',
					properties: { style: styleAttr?.value as string },
					children: node.children,
				};
			}
		}

		// 재귀적으로 자식 노드들도 처리
		if (node.children) {
			node.children = node.children.map(extractFromNode);
		}

		return node;
	};

	return extractFromNode(ast);
}
