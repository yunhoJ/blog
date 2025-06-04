'use client';

import { MDXRemote } from 'next-mdx-remote/rsc';

interface MarkdownPreviewProps {
	content: string;
}

export default function MarkdownPreview({ content }: MarkdownPreviewProps) {
	return (
		<div className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 prose prose-stone dark:prose-invert h-full max-w-none overflow-auto rounded-md border bg-transparent p-4">
			<MDXRemote source={content} options={{ mdxOptions: {} }} />
		</div>
	);
}
