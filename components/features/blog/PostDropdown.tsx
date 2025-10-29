import { postApi } from '@/app/api/services/api';
import PostDeleteModal from '@/components/modal/PostDeleteModal';
import PostLockModal from '@/components/modal/postLockModal';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { handleAxiosError } from '@/lib/toasttError';

import { ClockIcon, Edit2, LockIcon, MoreVerticalIcon, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
interface PostDropdownProps {
	revisionHash: string;
	postHash: string;
	postTitle: string;
}
export default function PostDropdown({ revisionHash, postHash, postTitle }: PostDropdownProps) {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);
	const [postLockModalOpen, setPostLockModalOpen] = useState(false);
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
	// 수정시 함수
	const onClickEdit = async () => {
		// 수정중인 포스트인지 확인
		try {
			const draftData = await postApi.getDraftData(postHash);
			console.log('draftData', draftData);
			if (!draftData.data) {
				//임시저장 데이터가 없으면 새로 작성 현재 배포되어 있는 revisionhash를 사용
				await postApi.EditPublishPost({ postHash, revisionHash });
			}
			localStorage.setItem('postHash', postHash);
			router.push(`/blog/write`);
		} catch (error) {
			handleAxiosError(error, '수정 중 오류가 발생했습니다.');
		}
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
					<Button variant="ghost" size="icon" className="h-7 w-7">
						<MoreVerticalIcon className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent sideOffset={4} align="end">
					<DropdownMenuItem onClick={() => setPostLockModalOpen(true)}>
						<LockIcon />
						비공개
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => router.push(`/blog/history/${postHash}`)}>
						<ClockIcon />
						히스토리
					</DropdownMenuItem>
					<DropdownMenuItem className="text-primary" onClick={onClickEdit}>
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
			<PostLockModal
				postLockModalOpen={postLockModalOpen}
				setPostLockModalOpen={setPostLockModalOpen}
				postInfo={{ revisionHash, postHash, postTitle }}
			/>
		</div>
	);
}
