import { postApi } from '@/app/api/services/api';

import { toastError, toastSuccess } from '@/lib/toasttError';
import PublishModal from './PublishModal';
import { useCallback, useState } from 'react';
import { userId } from '@/app/api/constant/const';

interface PostInfo {
	revisionHash: string;
	postHash: string;
	postTitle: string;
	blogPostPublish: boolean;
	postDraft: boolean;
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
	console.log(postInfo.postDraft);
	const [visibility, setVisibility] = useState(true);
	const handlePublish = useCallback(
		async (category: string | null, imageUrl: string | null) => {
			try {
				if (postInfo.blogPostPublish) {
					toastSuccess('이미 발행중인 포스트입니다.');
					setPostPublishModalOpen(false);
					return;
				}
				await postApi.updatePostPublish({
					postHash: postInfo.postHash,
					revisionHash: postInfo.revisionHash,
					category: category as string,
					visibility: visibility,
					imageUrl: imageUrl as string,
				});
				toastSuccess('발행 되었습니다.');
				onPublishSuccess();
				setPostPublishModalOpen(false);
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
		/>
	);
}
