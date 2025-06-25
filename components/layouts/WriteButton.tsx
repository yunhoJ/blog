'use client';

import { Button } from '../ui/button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { postApi } from '@/app/api/services/api';
import { userId } from '@/app/api/constant/const';
import DraftListModal from '../modal/DraftListModal';
import { DraftItem } from '@/types/blog';

export default function WriteButton() {
	const [isDraftModalOpen, setIsDraftModalOpen] = useState(false);
	const [drafts, setDrafts] = useState<DraftItem[]>([]);
	const router = useRouter();

	const handleWriteClick = async () => {
		const response = await postApi.getDrafts(userId);
		console.log('response.data : ', response.data);
		setDrafts(response.data);

		setIsDraftModalOpen(response.data.length > 0);
		if (response.data.length <= 0) {
			router.push('/blog/write');
		}
	};

	return (
		<>
			<Button size="sm" onClick={handleWriteClick}>
				글쓰기
			</Button>

			{/* 임시저장 목록 모달 */}
			<DraftListModal
				isOpen={isDraftModalOpen}
				onOpenChange={setIsDraftModalOpen}
				drafts={drafts}
				userId={userId}
			/>
		</>
	);
}
