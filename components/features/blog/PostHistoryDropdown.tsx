import PostDeleteHistoryModal from '@/components/modal/PostDeleteHistoryModal';
import PostPublishModal from '@/components/modal/postPublishModal';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { handleAxiosError, toastSuccess } from '@/lib/toasttError';

import { Edit2Icon, MoreVerticalIcon, SendIcon, Trash2Icon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { postApi } from '@/app/api/services/api';
import HistoryDraftModal from '@/components/modal/HistoryDraftModal';
interface PostHistoryDropdownProps {
	revisionHash: string;
	postHash: string;
	postDraft: boolean;
	postTitle: string;
	blogPostPublish: boolean;
	isContainDraft: boolean;
	onSuccess: () => void;
}
export default function PostHistoryDropdown({
	revisionHash,
	postHash,
	postDraft,
	postTitle,
	blogPostPublish,
	isContainDraft,
	onSuccess,
}: PostHistoryDropdownProps) {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [postPublishModalOpen, setPostPublishModalOpen] = useState(false);
	const [draftModalOpen, setDraftModalOpen] = useState(false);
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
	const navigateToEdit = (hash: string) => {
		localStorage.setItem('postHash', hash);
		router.push('/blog/write');
	};
	// 수정시 함수
	const onClickEditHistory = async () => {
		// 수정중인 포스트인지 확인
		if (postDraft) {
			navigateToEdit(postHash);
			return;
		}

		if (isContainDraft) {
			setDraftModalOpen(true);
			return;
		}

		try {
			await postApi.EditPublishPost({ postHash, revisionHash });
			navigateToEdit(postHash);
		} catch (error) {
			handleAxiosError(error, '수정 중 오류가 발생했습니다.');
		}
	};
	// 발행시 함수
	const onClickPublishHistory = () => {
		if (blogPostPublish) {
			toastSuccess('이미 발행중인 포스트입니다.');
			return;
		}

		localStorage.setItem('postHash', postHash);
		setPostPublishModalOpen(true);
	};
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
					*/}
					<DropdownMenuItem onClick={onClickPublishHistory}>
						<SendIcon />
						{revisionHash}
						발행
					</DropdownMenuItem>

					<DropdownMenuItem className="text-primary" onClick={onClickEditHistory}>
						<Edit2Icon className="text-primary" />
						수정
					</DropdownMenuItem>

					<DropdownMenuItem className="text-destructive" onClick={() => setDeleteModalOpen(true)}>
						<Trash2Icon className="text-destructive" />
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
				postInfo={{ revisionHash, postHash, postTitle }}
				onPublishSuccess={onSuccess}
			/>
			<HistoryDraftModal
				draftModalOpen={draftModalOpen}
				setDraftModalOpen={setDraftModalOpen}
				postInfo={{ revisionHash, postHash }}
			/>
		</div>
	);
}
