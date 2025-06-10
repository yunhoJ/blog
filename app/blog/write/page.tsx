'use client';

import MarkdownEditor from '@/components/features/MArkdownEditor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Editor } from '@toast-ui/react-editor';
import { useCallback, useRef } from 'react';
// import { Editor } from '@toast-ui/react-editor';
// import { Separator } from '@/components/ui/separator';
// import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
// import { Textarea } from '@/components/ui/textarea';
// import dynamic from 'next/dynamic';
// import { useRef } from 'react';

// const createPostAction = async (formData: FormData) => {
// 	'use server';
// 	const title = formData.get('title') as string;
// 	const tag = formData.get('tag') as string;
// 	const content = formData.get('content') as string;

// 	await createPost({ title, tag, content });
// };

export default function Write() {
	const editorRef = useRef<Editor | null>(null);
	const onClickEnrollBtn = useCallback(() => {
		if (!editorRef.current) return;
		const markdown = editorRef.current.getInstance().getMarkdown();
		const html = editorRef.current.getInstance().getHTML();
		console.log('markdown', markdown);
		console.log('html', html);
	}, []);
	return (
		<div className="container flex h-[90vh] flex-col gap-4 py-8">
			{/* 제목 영역 */}
			<div className="flex flex-row items-center gap-5">
				{/* <Label htmlFor="title" className="text-lg font-semibold whitespace-nowrap">
					제목 :
				</Label> */}
				<Input id="title" name="title" placeholder="제목을 입력해주세요" className="text-lg" />
			</div>

			{/* <Separator /> */}

			{/* 본문 영역 - 남은 공간 모두 차지 */}
			<div className="flex-1 overflow-hidden rounded-lg">
				<MarkdownEditor editorRef={editorRef} />
			</div>

			{/* <Separator /> */}

			{/* 태그 영역과 버튼 */}
			<div className="flex flex-row justify-between">
				<div>
					<Label className="text-lg font-semibold">태그 선택</Label>
					<div className="mt-2">태그 선택 컴포넌트가 들어갈 자리</div>
				</div>

				{/* 발행하기 버튼 */}
				<div className="flex justify-end gap-2">
					<Button variant="outline">임시저장</Button>
					<Button onClick={onClickEnrollBtn}>발행하기</Button>
				</div>
			</div>
		</div>
	);
}
