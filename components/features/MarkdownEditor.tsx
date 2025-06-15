'use client';
import '@toast-ui/editor/dist/toastui-editor.css';
import dynamic from 'next/dynamic';
import type { Editor as EditorType } from '@toast-ui/react-editor';

const Editor = dynamic(() => import('@toast-ui/react-editor').then((mod) => mod.Editor), {
	ssr: false,
});

interface MarkdownEditorProps {
	editorRef: React.RefObject<EditorType | null>;
}

export default function MarkdownEditor({ editorRef }: MarkdownEditorProps) {
	return (
		<Editor
			ref={editorRef}
			initialValue="hello react editor world!"
			previewStyle="vertical"
			initialEditType="markdown"
			height="100%"
			useCommandShortcut={true}
			// plugins={[colorSyntax]}
		/>
	);
}
