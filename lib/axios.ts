import axios from 'axios';

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
