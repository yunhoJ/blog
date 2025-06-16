// lib/toastError.ts
import { toast } from 'sonner';

export function toastError(error: unknown, fallbackMessage = 'Error loading posts') {
	const message =
		typeof error === 'object' && error && 'message' in error
			? (error as { message: string }).message
			: fallbackMessage;
	toast.error(message, {
		duration: 3000,
		style: {
			background: '#ffe5e5', // 연한 붉은 배경
			color: '#b00020', // 진한 붉은 텍스트
			border: '1px solid #f5b5b5',
			borderRadius: '8px',
		},
	});
}
