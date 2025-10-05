import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { toastError } from '@/lib/toasttError';
import { useAuthStore } from '@/lib/store/useAuthStore';
import { toast } from 'sonner';

interface LoginModalProps {
	isOpen: boolean;
	onOpenChange: (isOpen: boolean) => void;
}

export default function LoginModal({ isOpen, onOpenChange }: LoginModalProps) {
	const [userId, setUserId] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const { login } = useAuthStore();

	useEffect(() => {
		// 모달이 열리면 아이디, 비밀번호, 에러 메시지 초기화
		setUserId('');
		setPassword('');
		setErrorMessage('');
	}, [isOpen]);

	const handleLogin = async () => {
		// 빈 값 체크
		if (!userId.trim() || !password.trim()) {
			setErrorMessage('아이디와 비밀번호를 입력해 주세요.');
			return;
		}

		const success = await login(userId, password);

		if (success) {
			toast.success('로그인 성공!');
			onOpenChange(false);
		} else {
			toastError(new Error('아이디 또는 비밀번호가 올바르지 않습니다.'));
		}
	};

	return (
		<Dialog open={isOpen} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-sm">
				<DialogHeader>
					<DialogTitle className="text-center text-xl font-bold">로그인</DialogTitle>
				</DialogHeader>
				<div className="flex flex-col gap-4 p-4">
					{/* 에러 메시지 표시 */}

					<div className="flex flex-col gap-2">
						<Label htmlFor="id" className="hidden md:block">
							아이디
						</Label>
						<Input
							type="text"
							id="id"
							value={userId}
							onChange={(e) => {
								setUserId(e.target.value);
								// 입력값이 변경되면 에러 메시지 초기화
								if (errorMessage) setErrorMessage('');
							}}
							onKeyDown={(e) => {
								if (e.key === 'Enter') {
									handleLogin();
								}
							}}
							placeholder="아이디를 입력하세요"
						/>
					</div>
					<div className="flex flex-col gap-2">
						<Label htmlFor="password" className="hidden md:block">
							비밀번호
						</Label>
						<Input
							type="password"
							id="password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
								// 입력값이 변경되면 에러 메시지 초기화
								if (errorMessage) setErrorMessage('');
							}}
							onKeyDown={(e) => {
								if (e.key === 'Enter') {
									handleLogin();
								}
							}}
							placeholder="비밀번호를 입력하세요"
						/>
					</div>
					{errorMessage && (
						<div className="rounded-md border border-red-200 bg-red-50 p-2 text-center text-sm text-red-500">
							{errorMessage}
						</div>
					)}
					<Button className="mt-2 md:mt-4" onClick={handleLogin}>
						로그인
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
