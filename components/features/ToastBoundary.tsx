'use client';

import { ErrorBoundary } from 'react-error-boundary';
import { toast } from 'sonner';

// 파일 상단에 선언 (컴포넌트 바깥)
let hasShownError = false;

function ErrorFallback({ error }: { error: Error }) {
	if (!hasShownError) {
		toast.error(`에러 발생: ${error.message}`);
		hasShownError = true;
	}
	return null;
}

export default function ToastBoundary({ children }: { children: React.ReactNode }) {
	return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
}
