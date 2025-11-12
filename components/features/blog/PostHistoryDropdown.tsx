import PostDeleteHistoryModal from '@/components/modal/PostDeleteHistoryModal';
import PostPublishModal from '@/components/modal/postPublishModal';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { MoreVerticalIcon, SendIcon, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
interface PostHistoryDropdownProps {
	revisionHash: string;
	postHash: string;
	postDraft: boolean;
	postTitle: string;
	blogPostPublish: boolean;
	onSuccess: () => void;
}
export default function PostHistoryDropdown({
	revisionHash,
	postHash,
	postDraft,
	postTitle,
	blogPostPublish,
	onSuccess,
}: PostHistoryDropdownProps) {
	console.log('postHash', postHash);
	// const router = useRouter();
	const [open, setOpen] = useState(false);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [postPublishModalOpen, setPostPublishModalOpen] = useState(false);
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
					<Button variant="ghost" size="icon" className="h-5 w-5">
						<MoreVerticalIcon className="h-3 w-3" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent sideOffset={4} align="end">
					{/* 
					<DropdownMenuItem onClick={() => router.push(`/blog/history/${postHash}`)}>
						<ClockIcon />
						히스토리
					</DropdownMenuItem>
					<DropdownMenuItem className="text-primary" onClick={onClickEdit}>
						<Edit2 className="text-primary" />
						수정
					</DropdownMenuItem> */}

					<DropdownMenuItem className="text-primary" onClick={() => setPostPublishModalOpen(true)}>
						<SendIcon className="text-primary" />
						발행
					</DropdownMenuItem>
					<DropdownMenuItem className="text-destructive" onClick={() => setDeleteModalOpen(true)}>
						<Trash2 className="text-destructive" />
						삭제
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>

			<PostDeleteHistoryModal
				deleteModalOpen={deleteModalOpen}
				setDeleteModalOpen={setDeleteModalOpen}
				postInfo={{ revisionHash, postTitle, blogPostPublish }}
				onDeleteSuccess={onSuccess}
			/>
			<PostPublishModal
				postPublishModalOpen={postPublishModalOpen}
				setPostPublishModalOpen={setPostPublishModalOpen}
				postInfo={{ revisionHash, postHash, postTitle, blogPostPublish, postDraft }}
				onPublishSuccess={onSuccess}
			/>
		</div>
	);
}
