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
import { DraftItem } from '@/types/blog';
import { postApi } from '@/app/api/services/api';

interface DraftDeleteModalProps {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
	selectedDraft: DraftItem | null;
	userId: string;
	parentOnOpenChange: (open: boolean) => void;
}

export default function DraftDeleteModal({
	isOpen,
	onOpenChange,
	selectedDraft,
	userId,
	parentOnOpenChange,
}: DraftDeleteModalProps) {
	const handleDelete = async () => {
		if (selectedDraft?.postHash) {
			console.log('삭제');
			await postApi.deletePostDraft({ postHash: selectedDraft.postHash, userId });
			onOpenChange(false);
			parentOnOpenChange(false);
		}
	};
	return (
		<AlertDialog open={isOpen} onOpenChange={onOpenChange}>
			<AlertDialogContent className="w-md">
				<AlertDialogHeader>
					<AlertDialogTitle>정말 삭제할까요?</AlertDialogTitle>
					<AlertDialogDescription>
						&ldquo;{selectedDraft?.postTitle || '제목 없음'}&rdquo; 글을 삭제하면 복구할 수
						없습니다.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel onClick={() => onOpenChange(false)}>취소</AlertDialogCancel>
					<AlertDialogAction
						className="bg-destructive hover:bg-destructive/90 px-6 py-2"
						onClick={handleDelete}
					>
						삭제
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
