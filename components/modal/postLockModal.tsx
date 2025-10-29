import { postApi } from '@/app/api/services/api';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { toastError, toastSuccess } from '@/lib/toasttError';
import { useQueryClient } from '@tanstack/react-query';

interface PostInfo {
	revisionHash: string;
	postHash: string;
	postTitle: string;
}
interface PostDeleteModalProps {
	postLockModalOpen: boolean;
	setPostLockModalOpen: (open: boolean) => void;
	postInfo: PostInfo;
}

export default function PostDeleteModal({
	postLockModalOpen,
	setPostLockModalOpen,
	postInfo,
}: PostDeleteModalProps) {
	const queryClient = useQueryClient();

	const handleLock = async () => {
		try {
			await postApi.updatePostVisibility(postInfo.revisionHash, false);
			toastSuccess('비공개로 변경 되었습니다.');

			// 삭제 성공시 react query 초기화
			// 1. 포스트 목록 쿼리 무효화 (모든 카테고리, 정렬, 태그 조합)
			await queryClient.invalidateQueries({
				queryKey: ['posts'],
			});
		} catch (error) {
			console.log('error', error);
			toastError(new Error('비공개 변경 중 오류가 발생했습니다.'));
		}
	};

	return (
		<AlertDialog open={postLockModalOpen} onOpenChange={setPostLockModalOpen}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>비공개로 변경하시겠습니까?</AlertDialogTitle>
					<AlertDialogDescription>제목 : {postInfo.postTitle}</AlertDialogDescription>
					<AlertDialogDescription>
						비공개로 변경하면 공개 범위가 비공개로 변경됩니다.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>취소</AlertDialogCancel>
					<AlertDialogAction className="bg-primary hover:bg-primary/80" onClick={handleLock}>
						비공개
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
