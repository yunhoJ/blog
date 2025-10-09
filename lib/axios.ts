import axios from 'axios';
import { useAuthStore } from '@/lib/store/useAuthStore';
import { toastError } from '@/lib/toasttError';
// import router from 'next/router';

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const axiosInstance = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
});

// // 응답 인터셉터 추가
// axiosInstance.interceptors.response.use(
// 	(response) => response,
// 	(error) => {
// 		// 에러 처리 로직
// 		console.error('API Error:', error);
// 		return Promise.reject(error);
// 	}
// );
axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.status === 401) {
			// 로그인 상태일때만 검사
			const { logout, isAuthenticated } = useAuthStore.getState();
			if (isAuthenticated) {
				logout();
				// 로그인 페이지로 이동
				if (window.location.pathname !== '/') {
					window.location.href = '/';
				}
				toastError(new Error('로그인 토큰이 만료되었습니다. 다시 로그인해주세요.'));
			}
		}
		return Promise.reject(error);
	}
);
