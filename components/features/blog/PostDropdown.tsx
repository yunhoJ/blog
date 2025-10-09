import PostDeleteModal from '@/components/modal/PostDeleteModal';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { ClockIcon, Edit2, MoreVerticalIcon, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
interface PostDropdownProps {
	revisionHash: string;
	postHash: string;
	postTitle: string;
}
export default function PostDropdown({ revisionHash, postHash, postTitle }: PostDropdownProps) {
	const [open, setOpen] = useState(false);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);

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
		<div
			onClick={(e) => {
				e.stopPropagation(); //부모나 상위 요소로 이벤트가 퍼지는 걸 막음
				e.preventDefault(); //기본 동작을 막음
			}}
		>
			<DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" size="icon" className="h-7 w-7">
						<MoreVerticalIcon className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent sideOffset={4} align="end">
					{/* 히스토리 */}
					<DropdownMenuItem>
						<ClockIcon />
						히스토리
					</DropdownMenuItem>
					<DropdownMenuItem className="text-primary">
						<Edit2 className="text-primary" />
						수정
					</DropdownMenuItem>
					<DropdownMenuItem className="text-destructive" onClick={() => setDeleteModalOpen(true)}>
						<Trash2 className="text-destructive" />
						삭제
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>

			<PostDeleteModal
				deleteModalOpen={deleteModalOpen}
				setDeleteModalOpen={setDeleteModalOpen}
				postInfo={{ revisionHash, postHash, postTitle }}
			/>
		</div>
	);
}
