'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/date';
import { usePathname, useRouter } from 'next/navigation';
import { DraftItem } from '@/types/blog';
import { XIcon } from 'lucide-react';
import { useState } from 'react';
import DraftDeleteModal from './\bDraftDeleteModal';

interface DraftListModalProps {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
	drafts: DraftItem[];
}

export default function DraftListModal({ isOpen, onOpenChange, drafts }: DraftListModalProps) {
	const router = useRouter();
	const pathname = usePathname();
	// const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	// 글쓰기 페이지에서 임시저장된 글 목록 모달을 열었을 때, 글쓰기 페이지를 새로고침하여 임시저장된 글 목록을 업데이트
	const updatePage = () => {
		if (pathname === '/blog/write') {
			console.log('pathname', pathname);
			window.location.reload();
		} else {
			router.push('/blog/write');
		}
		onOpenChange(false);
	};
	const handleDraftSelect = (postHash: string) => {
		// localStorage에 postHash 저장하고 글쓰기 페이지로 이동
		localStorage.setItem('postHash', postHash);
		updatePage();
	};

	const handleNewPost = () => {
		// 새 글 작성
		localStorage.removeItem('postHash');
		updatePage();
	};

	return (
		<>
			<Dialog open={isOpen} onOpenChange={onOpenChange}>
				<DialogContent className="max-w-md">
					<DialogHeader>
						<DialogTitle>작업 중인 글 목록</DialogTitle>
					</DialogHeader>

					<div className="max-h-96 space-y-2 overflow-y-auto">
						{drafts.length > 0 ? (
							drafts.map((draft) => (
								<div
									key={draft.postHash}
									className="hover:bg-muted/50 cursor-pointer rounded-lg border p-3 transition-colors"
									onClick={() => handleDraftSelect(draft.postHash)}
								>
									<div className="flex items-center justify-between">
										<h4 className="truncate text-sm font-medium">
											제목 : {draft.postTitle || '제목 없음'}
										</h4>
										<Button
											variant="ghost"
											size="icon"
											onClick={(e) => {
												e.stopPropagation(); // 이벤트 전파 방지
												setIsDeleteModalOpen(true);
											}}
										>
											<XIcon />
										</Button>
									</div>
									<p className="text-muted-foreground mt-1 w-full text-xs">
										수정일 : {formatDate(draft.postUpdatedAt)}
									</p>
								</div>
							))
						) : (
							<div className="text-muted-foreground py-8 text-center">임시저장된 글이 없습니다</div>
						)}
					</div>

					<div className="flex gap-2 pt-4">
						<Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
							취소
						</Button>
						<Button onClick={handleNewPost} className="flex-1">
							새 글 작성
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}
