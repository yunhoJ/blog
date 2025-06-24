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
import { useState } from 'react';

export default function DraftDeleteModal() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleDelete = () => {
		console.log('삭제');
	};
	return (
		<AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>정말 삭제할까요?</AlertDialogTitle>
					<AlertDialogDescription>삭제하면 복구할 수 없습니다.</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel onClick={() => setIsModalOpen(false)}>취소</AlertDialogCancel>
					<AlertDialogAction onClick={handleDelete}>삭제</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
