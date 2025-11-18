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

	//발행된 포스트 수정
	EditPublishPost: async (data: { postHash: string; revisionHash: string }) => {
		const response = await axiosInstance.post(
			`${axiosInstance.defaults.baseURL}/api/getPostDraftData`,
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
		imageUrl: string;
	}) => {
		const response = await axiosInstance.post(
			`${axiosInstance.defaults.baseURL}/api/createPostPublish`,
			data
		);
		return response.data;
	},
	updatePostPublish: async (data: {
		postHash: string;
		revisionHash: string;
		category: string;
		visibility: boolean;
		imageUrl: string;
	}) => {
		const response = await axiosInstance.put(
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
		page: number,
		keyword: string
	) => {
		const response = await axiosInstance.get(
			`${axiosInstance.defaults.baseURL}/api/createPostPublish?userId=${userId}&category=${category}&sort=${sort}&pageSize=${pageSize}&page=${page}&keyword=${keyword}`
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
	getDraftData: async (postHash: string) => {
		const response = await axiosInstance.get(
			`${axiosInstance.defaults.baseURL}/api/getPostDraftData?postHash=${postHash}`
		);
		return response.data;
	},
	// 임시 저장 포스트 삭제
	deletePostDraft: async (postHash: string) => {
		const response = await axiosInstance.delete(
			`${axiosInstance.defaults.baseURL}/api/createPostDraft`,
			{
				data: { postHash },
			}
		);
		return response.data;
	},
	// 이미지 업로드
	uploadImage: async (data: FormData) => {
		const response = await axiosInstance.post(
			`${axiosInstance.defaults.baseURL}/api/images`,
			data,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}
		);
		return response.data;
	},
	// 이미지 목록 조회
	getImageList: async (folder: string) => {
		const response = await axiosInstance.get(
			`${axiosInstance.defaults.baseURL}/api/imageList?folder=${folder}`
		);
		return response.data;
	},
	// 전체 태그 생성
	createTag: async (userId: string, tagName: string) => {
		const response = await axiosInstance.post(`${axiosInstance.defaults.baseURL}/api/createTag`, {
			userId,
			tagName,
		});
		return response.data;
	},
	// 태그 목록 조회
	getTags: async (userId: string) => {
		const response = await axiosInstance.get(
			`${axiosInstance.defaults.baseURL}/api/createTag?userId=${userId}`
		);
		return response.data;
	},
	// 블로그 태그 생성
	createBlogTag: async (userId: string, tagList: string[], postHash: string) => {
		console.log('test', userId, tagList, postHash);
		const response = await axiosInstance.post(
			`${axiosInstance.defaults.baseURL}/api/createPostTag`,
			{ userId, tagList, postHash }
		);
		return response.data;
	},
	// 블로그 태그 조회
	getBlogTag: async (postHash: string) => {
		const response = await axiosInstance.get(
			`${axiosInstance.defaults.baseURL}/api/createPostTag?postHash=${postHash}`
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

	//포스트 삭제
	deletePost: async (revisionHash: string, postHash: string) => {
		const response = await axiosInstance.delete(
			`${axiosInstance.defaults.baseURL}/api/createPostPublish`,
			{
				data: { revisionHash, postHash },
			}
		);
		return response.data;
	},
	// 히스토리 삭제
	deletePostHistory: async (revisionHash: string) => {
		const response = await axiosInstance.delete(
			`${axiosInstance.defaults.baseURL}/api/getVersionHistory`,
			{ data: { revisionHash } }
		);
		return response.data;
	},
	// 수정중인 포스트 저장
	changeDraftState: async (data: { postHash: string; draftState: boolean }) => {
		const response = await axiosInstance.patch(
			`${axiosInstance.defaults.baseURL}/api/createPostDraft`,
			data
		);
		return response.data;
	},
	// 로그인
	login: async (userId: string, password: string) => {
		const response = await axiosInstance.post(`${axiosInstance.defaults.baseURL}/api/login`, {
			userId,
			password,
		});
		return response.data;
	},
	//로그인 token으로 체크
	checkLogin: async () => {
		const response = await axiosInstance.post(
			`${axiosInstance.defaults.baseURL}/api/check`,
			{},
			{ withCredentials: true }
		);
		return response.data;
	},
	//로그아웃
	logout: async () => {
		const response = await axiosInstance.post(
			`${axiosInstance.defaults.baseURL}/api/logout`,
			{},
			{ withCredentials: true }
		);
		return response.data;
	},
	// 버전 히스토리 조회
	getVersionTimeLine: async (postHash: string) => {
		const response = await axiosInstance.get(
			`${axiosInstance.defaults.baseURL}/api/getVersionHistory?postHash=${postHash}`,
			{ withCredentials: true }
		);
		return response.data;
	},
	// 버전 비교 데이터 조회
	getVersionDetailData: async (revisionHash: string, previousRevisionHash: string) => {
		const response = await axiosInstance.get(
			`${axiosInstance.defaults.baseURL}/api/getVersionHistory/detailData?revisionHash=${revisionHash}&previousRevisionHash=${previousRevisionHash}`,
			{ withCredentials: true }
		);
		return response.data;
	},
	// 포스트 비공개 변경
	updatePostVisibility: async (revisionHash: string, visibility: boolean) => {
		const response = await axiosInstance.patch(
			`${axiosInstance.defaults.baseURL}/api/updatePostVisibility`,
			{ revisionHash, visibility }
		);
		return response.data;
	},
	// 포스트 카테고리 조회
	getPostPublishCategory: async (postHash: string) => {
		const response = await axiosInstance.get(
			`${axiosInstance.defaults.baseURL}/api/getPostPublishCategory?postHash=${postHash}`
		);
		return response.data;
	},
	// 포스트 리액션 수 업데이트
	updatePostReactionCount: async (postHash: string, reactionCount: number) => {
		const response = await axiosInstance.patch(
			`${axiosInstance.defaults.baseURL}/api/PostReaction`,
			{ postHash, reactionCount }
		);
		return response.data;
	},
	// GitHub Discussion 삭제
	deleteDiscussion: async (id: string) => {
		const response = await axiosInstance.delete(
			`${axiosInstance.defaults.baseURL}/api/graphql/discussion`,
			{ data: { id } }
		);
		return response.data;
	},
	// GitHub Discussion title, content 업데이트
	updateDiscussionTitle: async (id: string, revisionHash: string) => {
		const response = await axiosInstance.patch(
			`${axiosInstance.defaults.baseURL}/api/graphql/discussion`,
			{ id, revisionHash }
		);
		return response.data;
	},
};
