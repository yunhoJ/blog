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
import { handleAxiosError, toastError, toastSuccess } from '@/lib/toasttError';
import { useQueryClient } from '@tanstack/react-query';

interface PostInfo {
	revisionHash: string;
	postHash: string;
	postTitle: string;
}
interface PostDeleteModalProps {
	deleteModalOpen: boolean;
	setDeleteModalOpen: (open: boolean) => void;
	postInfo: PostInfo;
}

export default function PostDeleteModal({
	deleteModalOpen,
	setDeleteModalOpen,
	postInfo,
}: PostDeleteModalProps) {
	const queryClient = useQueryClient();

	const handleDelete = async () => {
		try {
			const data = await postApi.deletePost(postInfo.revisionHash, postInfo.postHash);

			// GitHub Discussion 삭제
			if (data.success && data.postMatadata.postCommentGitId) {
				await postApi.deleteDiscussion(data.postMatadata.postCommentGitId);
			}

			toastSuccess('삭제 되었습니다.');

			// 삭제 성공시 react query 초기화
			// 1. 포스트 목록 쿼리 무효화 (모든 카테고리, 정렬, 태그 조합)
			await queryClient.invalidateQueries({
				queryKey: ['posts'],
			});
		} catch (error) {
			handleAxiosError(error, '삭제 중 오류가 발생했습니다.');
		}
	};

	return (
		<AlertDialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>정말 삭제할까요?</AlertDialogTitle>
					<AlertDialogDescription>제목 : {postInfo.postTitle}</AlertDialogDescription>
					<AlertDialogDescription>게시글을 삭제하면 복구할 수 없습니다.</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>취소</AlertDialogCancel>
					<AlertDialogAction
						className="bg-destructive hover:bg-destructive/80"
						onClick={handleDelete}
					>
						삭제
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
