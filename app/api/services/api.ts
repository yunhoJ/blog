import { axiosInstance } from '@/lib/axios';

// 포스트 관련 API
export const postApi = {
	// 포스트 메타 데이터 생성 api
	createPostMeta: async (data: { userId: string }) => {
		const response = await axiosInstance.post('/api/createPostHash', data);
		console.log('data: ', response.data.postHash);
		return response.data.postHash;
	},

	// 임시저장
	createDraft: async (data: {
		postHash: string;
		title: string;
		content: string;
		userId: string;
	}) => {
		const response = await axiosInstance.post('/api/createPostDraft', data);
		return response.data;
	},

	// 포스트 생성
	createPostPublish: async (data: {
		postHash: string;
		category: string;
		visibility: boolean;
		userId: string;
	}) => {
		const response = await axiosInstance.post('/api/createPostPublish', data);
		return response.data;
	},

	// 카테고리 조회
	getCategories: async (userId: string) => {
		const response = await axiosInstance.get(`/api/category?userId=${userId}`);
		return response.data.data;
	},

	// 카테고리 생성
	createCategory: async (userId: string, categoryName: string) => {
		const response = await axiosInstance.post(`/api/category`, { userId, categoryName });
		return response.data;
	},

	// 포스트 조회
	getPost: async (id: string) => {
		const response = await axiosInstance.get(`/api/posts/${id}`);
		return response.data;
	},

	// 포스트 수정
	updatePost: async (
		id: string,
		data: { title?: string; content?: string; markdown?: string; html?: string }
	) => {
		const response = await axiosInstance.patch(`/api/posts/${id}`, data);
		return response.data;
	},

	// 포스트 삭제
	deletePost: async (id: string) => {
		const response = await axiosInstance.delete(`/api/posts/${id}`);
		return response.data;
	},
};
