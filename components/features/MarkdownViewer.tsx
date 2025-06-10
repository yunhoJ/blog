'use client';
import ReactMarkdown from 'react-markdown';

import remarkGfm from 'remark-gfm';
export default function MarkdownViewer({ content }: { content: string }) {
	return (
		<div className="prose dark:prose-invert">
			<ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
		</div>
	);
}
