import CategoryDeleteModal from '@/components/modal/CategoryDeleteModal';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { toastError } from '@/lib/toasttError';
import { MoreVertical, Pencil, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CategoryDropdownProps {
	categoryName: string;
	categoryCount: number;
}

export default function CategoryDropdown({ categoryName, categoryCount }: CategoryDropdownProps) {
	const [open, setOpen] = useState(false);
	const [categoryDeleteModalOpen, setCategoryDeleteModalOpen] = useState(false);
	// 스크롤 시 드롭다운 닫기
	useEffect(() => {
		if (!open) return;

		const handleResize = () => {
			setOpen(false);
		};

		const handleScroll = () => {
			setOpen(false);
		};

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	}, [open]);
	return (
		<>
			<DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
				<DropdownMenuTrigger
					onClick={(e) => {
						e.preventDefault();
						e.stopPropagation();
					}}
				>
					<MoreVertical className="text-muted-foreground hover:text-primary hover:bg-primary/10 h-5 w-8 transition-all duration-200 hover:scale-110 lg:h-4 lg:w-4" />
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-20 min-w-20">
					<DropdownMenuItem
						className="text-primary"
						onClick={() => {
							// TODO: 카테고리 수정 기능 구현
							console.log('수정:', categoryName);
						}}
					>
						<Pencil className="text-primary h-4 w-4" />
						수정
					</DropdownMenuItem>
					<DropdownMenuItem
						variant="destructive"
						onClick={() => {
							if (categoryCount != 0) {
								toastError(new Error('카테고리에 포스트가 있어 삭제할 수 없습니다.'));
								setOpen(false);
								return;
							}

							setCategoryDeleteModalOpen(true);
						}}
					>
						<Trash2 className="h-4 w-4" />
						삭제
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			{/* 삭제 모달 */}
			<CategoryDeleteModal
				categoryDeleteModalOpen={categoryDeleteModalOpen}
				setCategoryDeleteModalOpen={setCategoryDeleteModalOpen}
				categoryName={categoryName}
			/>
		</>
	);
}
