import { axiosInstance } from '@/lib/axios';
if (process.env.NODE_ENV === 'development') {
	axiosInstance.defaults.baseURL = 'http://localhost:3000';
} else {
	axiosInstance.defaults.baseURL = 'https://www.yunhoj.com';
}

// 포스트 관련 API
export const postApi = {
	// 포스트 메타 데이터 생성 api
	createPostMeta: async (data: { userId: string }) => {
		const response = await axiosInstance.post(
			`${axiosInstance.defaults.baseURL}/api/createPostHash`,
			data
		);
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
		const response = await axiosInstance.post(
			`${axiosInstance.defaults.baseURL}/api/createPostDraft`,
			data
		);
		return response.data;
	},

	// 포스트 생성
	createPostPublish: async (data: {
		postHash: string;
		category: string;
		visibility: boolean;
		userId: string;
	}) => {
		const response = await axiosInstance.post(
			`${axiosInstance.defaults.baseURL}/api/createPostPublish`,
			data
		);
		return response.data;
	},

	// 포스트 발행 데이터 조회
	getPostPublish: async (
		userId: string,
		category: string,
		sort: string,
		pageSize: number,
		page: number
	) => {
		const response = await axiosInstance.get(
			`${axiosInstance.defaults.baseURL}/api/createPostPublish?userId=${userId}&category=${category}&sort=${sort}&pageSize=${pageSize}&page=${page}`
		);
		return response.data;
	},

	// 카테고리 조회
	getCategories: async (userId: string) => {
		const response = await axiosInstance.get(
			`${axiosInstance.defaults.baseURL}/api/category?userId=${userId}`
		);
		return response.data.data;
	},

	// 카테고리 생성
	createCategory: async (userId: string, categoryName: string) => {
		const response = await axiosInstance.post(`${axiosInstance.defaults.baseURL}/api/category`, {
			userId,
			categoryName,
		});
		return response.data;
	},
	// 조회수 증가
	incrementViewCount: async (postHash: string, userId: string) => {
		const response = await axiosInstance.post(
			`${axiosInstance.defaults.baseURL}/api/postViewCount`,
			{ postHash, userId }
		);
		return response.data;
	},
	// 임시저장 목록 조회
	getDrafts: async (userId: string) => {
		const response = await axiosInstance.get(
			`${axiosInstance.defaults.baseURL}/api/createPostDraft?userId=${userId}`
		);
		return response.data;
	},
	//임시저장 데이터 조회
	getDraftData: async (postHash: string, userId: string) => {
		const response = await axiosInstance.get(
			`${axiosInstance.defaults.baseURL}/api/getPostDraftData?postHash=${postHash}&userId=${userId}`
		);
		return response.data;
	},

	// 포스트 수정
	updatePost: async (
		id: string,
		data: { title?: string; content?: string; markdown?: string; html?: string }
	) => {
		const response = await axiosInstance.patch(
			`${axiosInstance.defaults.baseURL}/api/posts/${id}`,
			data
		);
		return response.data;
	},

	// 포스트 삭제
	deletePost: async (id: string) => {
		const response = await axiosInstance.delete(
			`${axiosInstance.defaults.baseURL}/api/posts/${id}`
		);
		return response.data;
	},
};
