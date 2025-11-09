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

interface PostInfo {
	revisionHash: string;
	postTitle: string;
}
interface PostDeleteModalProps {
	deleteModalOpen: boolean;
	setDeleteModalOpen: (open: boolean) => void;
	postInfo: PostInfo;
	onDeleteSuccess: () => void;
}

export default function PostDeleteHistoryModal({
	deleteModalOpen,
	setDeleteModalOpen,
	postInfo,
	onDeleteSuccess,
}: PostDeleteModalProps) {
	const handleDelete = async () => {
		try {
			await postApi.deletePostHistory(postInfo.revisionHash);
			toastSuccess('히스토리가 삭제 되었습니다.');
			onDeleteSuccess();
		} catch (error) {
			console.log('error', error);
			toastError(new Error('삭제 중 오류가 발생했습니다.'));
		}
	};

	return (
		<AlertDialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>정말 삭제할까요?</AlertDialogTitle>
					<AlertDialogDescription>제목 : {postInfo.postTitle}</AlertDialogDescription>
					<AlertDialogDescription>히스토리를 삭제하면 복구할 수 없습니다.</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>취소</AlertDialogCancel>
					<AlertDialogAction
						className="bg-destructive hover:bg-destructive/80"
						onClick={handleDelete}
					>
						히스토리 삭제
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
