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
				// children도 재귀적으로 처리
				const processedChildren = node.children
					? node.children.map(extractFromNode)
					: node.children;

				return {
					type: 'element',
					tagName: 'span',
					properties: { style: styleAttr?.value as string },
					children: processedChildren,
				};
			}
			if (node.name === 'div') {
				// 모든 속성을 properties 객체로 변환
				const properties: Record<string, string> = {};

				if (node.attributes) {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					node.attributes.forEach((attr: any) => {
						if (attr.type === 'mdxJsxAttribute') {
							// className을 class로 변환
							if (attr.name === 'class') {
								properties.class = String(attr.value);
							}
						}
					});
				}

				// children도 재귀적으로 처리
				const processedChildren = node.children
					? node.children.map(extractFromNode)
					: node.children;

				return {
					type: 'element',
					tagName: 'div',
					properties,
					children: processedChildren,
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
