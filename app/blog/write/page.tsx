'use client';

import { userId } from '@/app/api/constant/const';
import { postApi } from '@/app/api/services/api';
import MarkdownEditor from '@/components/features/MarkdownEditor';
import PublishModal from '@/components/modal/PublishModal';
import TagSelect from '@/components/modal/TagSelect';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
import { fixBrTags } from '@/lib/replaceContent';
import { toastError, toastSuccess } from '@/lib/toasttError';
import { Editor } from '@toast-ui/react-editor';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
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
	const router = useRouter();
	const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
	const editorRef = useRef<Editor | null>(null);
	const titleRef = useRef<HTMLInputElement>(null);
	const [visibility, setVisibility] = useState(true);
	const [tagList, setTagList] = useState<string[]>([]);
	const [title, setTitle] = useState('');
	const [content, setContent] = useState(' ');
	useEffect(() => {
		const postHash = localStorage.getItem('postHash');
		if (!postHash) return;

		const fetchData = async () => {
			const draftData = await postApi.getDraftData(postHash, userId);
			// API 응답이 { data: { postTitle, postContent } } 형태이므로 data 프로퍼티에 접근
			setTitle(draftData.data.postTitle || '');
			setContent(draftData.data.postContent || ' ');
			// editorRef.current?.getInstance().setMarkdown(draftData.data.postContent || '');
		};
		fetchData();
	}, []);

	const onClickSaveBtn = useCallback(async () => {
		if (!editorRef.current || !titleRef.current) return;
		const title = titleRef.current.value;
		const content = editorRef.current.getInstance().getMarkdown();
		let postHash = localStorage.getItem('postHash');
		if (!postHash) {
			postHash = (await postApi.createPostMeta({ userId })) as string;
			localStorage.setItem('postHash', postHash);
		}
		const fixedContent = fixBrTags(content);
		try {
			await postApi.createDraft({ postHash, title, content: fixedContent, userId });
			console.log('test44', tagList);
			await postApi.createBlogTag(userId, tagList, postHash);
			toastSuccess('저장 되었습니다.');
		} catch {
			toastError(new Error('임시 저장 중 오류가 발생했습니다.'));
		}
	}, [tagList]);

	// 발행 하기 버튼 클릭 시
	const onClickPublishBtn = useCallback(async () => {
		setIsPublishModalOpen(true);
	}, []);

	const handlePublish = useCallback(
		async (category: string | null, imageUrl: string | null) => {
			if (!editorRef.current || !titleRef.current) return;
			// 임시 저장후 포스트 발행
			await onClickSaveBtn();
			await postApi.createPostPublish({
				postHash: localStorage.getItem('postHash') as string,
				category: category as string,
				visibility: visibility,
				userId: userId,
				imageUrl: imageUrl as string,
			});
			setIsPublishModalOpen(false);
			localStorage.removeItem('postHash');
			router.push(`/`);
		},
		[tagList]
	);

	return (
		<div className="container flex h-[90vh] flex-col gap-4 py-8">
			{/* 제목 영역 */}
			<div className="flex flex-row items-center gap-5">
				{/* <Label htmlFor="title" className="text-lg font-semibold whitespace-nowrap">
					제목 :
				</Label> */}
				<Input
					ref={titleRef}
					id="title"
					name="title"
					onChange={(e) => setTitle(e.target.value)}
					value={title}
					placeholder="제목을 입력해주세요"
					className="text-lg"
				/>
			</div>

			{/* <Separator /> */}

			{/* 본문 영역 - 남은 공간 모두 차지 */}
			<div className="flex-1 overflow-hidden rounded-lg">
				<MarkdownEditor editorRef={editorRef} initialContent={content} saveBtn={onClickSaveBtn} />
			</div>

			{/* <Separator /> */}

			{/* 태그 영역과 버튼 */}
			<div className="flex flex-row items-start justify-between">
				<div className="flex-1">
					<TagSelect tagList={tagList} setTagList={setTagList} />
				</div>

				{/* 발행하기 버튼 */}
				<div className="flex justify-end gap-2">
					<Button variant="outline" onClick={onClickSaveBtn}>
						임시저장
					</Button>
					<Button onClick={onClickPublishBtn}>발행하기</Button>
				</div>
			</div>

			{/* 발행하기 모달 */}
			<PublishModal
				isOpen={isPublishModalOpen}
				onOpenChange={setIsPublishModalOpen}
				onPublish={handlePublish}
				onChange={setVisibility}
			/>
		</div>
	);
}
