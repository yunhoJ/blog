'use client';

import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/lib/store/useAuthStore';

type PrintResumeButtonProps = {
	className?: string;
};

export default function PrintResumeButton({ className = '' }: PrintResumeButtonProps) {
	// const { isAuthenticated } = useAuthStore();
	const isAuthenticated = true;
	const handlePrint = () => {
		if (typeof window === 'undefined') return;
		// 이력서 출력 시 헤더 숨기기
		document.body.classList.add('printing-resume');

		window.print();
		document.body.classList.remove('printing-resume');
	};

	return (
		<div className={`flex min-h-10 items-center justify-end print:hidden ${className}`}>
			{isAuthenticated ? (
				<Button
					type="button"
					onClick={handlePrint}
					variant="ghost"
					size="sm"
					className="inline-flex items-center rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-emerald-500 hover:text-emerald-700 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-emerald-500 dark:hover:text-emerald-300"
				>
					PDF로 출력
				</Button>
			) : null}
		</div>
	);
}
