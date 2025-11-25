import { postApi } from '@/app/api/services/api';

import { handleAxiosError, toastError, toastSuccess } from '@/lib/toasttError';
import PublishModal from './PublishModal';
import { useCallback, useState } from 'react';
import { userId } from '@/app/api/constant/const';
import { useQueryClient } from '@tanstack/react-query';

interface PostInfo {
	revisionHash: string;
	postHash: string;
	postTitle: string;
}
interface PostPublishModalProps {
	postPublishModalOpen: boolean;
	setPostPublishModalOpen: (open: boolean) => void;
	postInfo: PostInfo;
	onPublishSuccess: () => void;
}

export default function PostPublishModal({
	postPublishModalOpen,
	setPostPublishModalOpen,
	postInfo,
	onPublishSuccess,
}: PostPublishModalProps) {
	const queryClient = useQueryClient();
	const [visibility, setVisibility] = useState(true);
	const handlePublish = useCallback(
		async (category: string | null, imageUrl: string | null) => {
			try {
				const postPublishData = await postApi.updatePostPublish({
					postHash: postInfo.postHash,
					revisionHash: postInfo.revisionHash,
					category: category as string,
					visibility: visibility,
					imageUrl: imageUrl as string,
				});
				toastSuccess('발행 되었습니다.');
				// react query 초기화
				queryClient.invalidateQueries({ queryKey: ['posts'] });
				onPublishSuccess();
				setPostPublishModalOpen(false);
				if (
					postPublishData.success &&
					postPublishData.responseData.postCommentGitId &&
					postPublishData.responseData.revisionHash
				) {
					postApi
						.updateDiscussionTitle(
							postPublishData.responseData.postCommentGitId as string,
							postPublishData.responseData.revisionHash as string
						)
						.then(() => {
							toastSuccess('GitHub Discussion 제목 업데이트 되었습니다.');
						})
						.catch((error) => {
							handleAxiosError(error, 'GitHub Discussion 제목 업데이트 중 오류가 발생했습니다.');
						});
				}
			} catch (error) {
				toastError(new Error('발행 중 오류가 발생했습니다.'));
			}
		},
		[visibility]
	);

	return (
		<PublishModal
			isOpen={postPublishModalOpen}
			onOpenChange={setPostPublishModalOpen}
			onPublish={handlePublish}
			onChange={setVisibility}
			postTitle={postInfo.postTitle}
		/>
	);
}
