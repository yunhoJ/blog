'use client';
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
import { useRouter } from 'next/navigation';

interface CategoryDeleteModalProps {
	categoryDeleteModalOpen: boolean;
	setCategoryDeleteModalOpen: (open: boolean) => void;
	categoryName: string;
}

export default function CategoryDeleteModal({
	categoryDeleteModalOpen,
	setCategoryDeleteModalOpen,
	categoryName,
}: CategoryDeleteModalProps) {
	const router = useRouter();
	const handleDelete = async () => {
		try {
			await postApi.deleteCategory(categoryName);
			toastSuccess('카테고리가 삭제 되었습니다.');
			// 서버 컴포넌트 데이터를 다시 가져와서 부모 컴포넌트 리프레시
			router.refresh();
		} catch (error) {
			handleAxiosError(error, '삭제 중 오류가 발생했습니다.');
		}
	};

	return (
		<AlertDialog open={categoryDeleteModalOpen} onOpenChange={setCategoryDeleteModalOpen}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>정말 삭제할까요?</AlertDialogTitle>
					<AlertDialogDescription>카테고리 : {categoryName}</AlertDialogDescription>
					<AlertDialogDescription>카테고리를 삭제하면 복구할 수 없습니다.</AlertDialogDescription>
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
