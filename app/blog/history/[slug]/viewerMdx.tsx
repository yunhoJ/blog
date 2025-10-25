'use client';

import { useEffect, useState } from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { visit } from 'unist-util-visit';

// remark / rehype 플러그인
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import { Root } from 'hast';
import { extractMdxJsxFromP } from '@/lib/replaceContent';
export default function MdxClient({ source }: { source: string }) {
	const rehypeAllowBrJsx = () => {
		return (tree: Root) => {
			extractMdxJsxFromP(tree);
		};
	};
	const schema = {
		...defaultSchema,
		tagNames: [...(defaultSchema.tagNames || []), 'br'],
		attributes: {
			...defaultSchema.attributes,
			span: ['style', 'class'],
		},
	};
	console.log(schema);
	const [mdx, setMdx] = useState<MDXRemoteSerializeResult | null>(null);

	useEffect(() => {
		const process = async () => {
			const result = await serialize(source, {
				mdxOptions: {
					remarkPlugins: [remarkGfm],
					rehypePlugins: [
						rehypeSlug,
						rehypeAllowBrJsx, // JSX <br /> 변환 먼저 실행
						[rehypeSanitize, schema],
						rehypePrettyCode,
					],
				},
			});
			setMdx(result);
		};

		process();
	}, [source]);
	console.log(mdx?.compiledSource);
	if (!mdx) return <div>Loading...</div>;
	return (
		<>
			<MDXRemote {...mdx} />
			<style
				dangerouslySetInnerHTML={{
					__html: `
					.mdx-viewer pre {
						overflow-x: auto !important;
						white-space: pre !important;
						word-wrap: normal !important;
					}

					.mdx-viewer code {
						white-space: pre !important;
						word-wrap: normal !important;
					}

					.mdx-viewer ol {
						list-style-type: decimal !important;
						padding-left: 1.5rem !important;
					}

					.mdx-viewer ul {
						list-style-type: disc !important;
						padding-left: 1.5rem !important;
					}

					.mdx-viewer li {
						display: list-item !important;
						margin: 0.25rem 0 !important;
					}
                    .mdx-viewer p {
						white-space: pre-wrap !important;
						word-wrap: break-word !important;
					}

				`,
				}}
			/>
		</>
	);
}
