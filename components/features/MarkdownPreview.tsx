//toast ui 에서 제공하는 마크다운 에디터 사용
// 'use client';

// import { MDXRemote } from 'next-mdx-remote/rsc';
// // mdx remote 라이브러리 사용
// // 재렌더링 되는 현상 있음 -> react-markdown 으로 대체
// interface MarkdownPreviewProps {
// 	content: string;
// }

// export default function MarkdownPreview({ content }: MarkdownPreviewProps) {
// 	return (
// 		<div className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 prose prose-stone dark:prose-invert h-full max-w-none overflow-auto rounded-md border bg-transparent p-4">
// 			<MDXRemote source={content} options={{ mdxOptions: {} }} />
// 		</div>
// 	);
// }
