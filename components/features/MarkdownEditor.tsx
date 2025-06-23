'use client';
import '@toast-ui/editor/dist/toastui-editor.css';
import dynamic from 'next/dynamic';
import type { Editor as EditorType } from '@toast-ui/react-editor';

const Editor = dynamic(() => import('@toast-ui/react-editor').then((mod) => mod.Editor), {
	ssr: false,
});

interface MarkdownEditorProps {
	editorRef: React.RefObject<EditorType | null>;
	initialContent?: string;
}

export default function MarkdownEditor({ editorRef, initialContent }: MarkdownEditorProps) {
	return (
		<Editor
			key={initialContent}
			ref={editorRef}
			initialValue={initialContent}
			previewStyle="vertical"
			initialEditType="markdown"
			height="100%"
			useCommandShortcut={true}
			// plugins={[colorSyntax]}
		/>
	);
}
