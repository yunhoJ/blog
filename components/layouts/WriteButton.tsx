'use client';

import { Button } from '../ui/button';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { postApi } from '@/app/api/services/api';
import { userId } from '@/app/api/constant/const';
import DraftListModal from '@/components/modal/DraftListModal';
import { DraftItem } from '@/types/blog';
import LoginModal from '@/components/modal/loginModal';
import { useAuthStore } from '@/lib/store/useAuthStore';

export default function WriteButton() {
	const [isDraftModalOpen, setIsDraftModalOpen] = useState(false);
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const [drafts, setDrafts] = useState<DraftItem[]>([]);
	const router = useRouter();

	// Zustand 전역 상태 사용
	const { isAuthenticated, checkAuth, logout } = useAuthStore();

	// 컴포넌트 마운트 시 인증 확인
	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	const handleWriteClick = async () => {
		const response = await postApi.getDrafts(userId);
		console.log('response.data : ', response.data);
		setDrafts(response.data);

		setIsDraftModalOpen(response.data.length > 0);
		if (response.data.length <= 0) {
			//로컬스토리지에 데이터 있을경우 지움
			localStorage.removeItem('postHash');
			router.push('/blog/write');
		}
	};

	return (
		<>
			{!isAuthenticated ? (
				<Button size="sm" onClick={() => setIsLoginModalOpen(true)}>
					로그인
				</Button>
			) : (
				<>
					<Button size="sm" onClick={handleWriteClick}>
						글쓰기
					</Button>
					<Button className="hidden md:block" size="sm" onClick={logout}>
						로그아웃
					</Button>
				</>
			)}

			{/* 임시저장 목록 모달 */}
			<DraftListModal
				isOpen={isDraftModalOpen}
				onOpenChange={setIsDraftModalOpen}
				drafts={drafts}
				userId={userId}
			/>
			{/* 로그인 모달 */}
			<LoginModal isOpen={isLoginModalOpen} onOpenChange={setIsLoginModalOpen} />
		</>
	);
}
