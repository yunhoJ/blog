export interface Category {
	categoryDepth: number;
	categoryName: string;
	privateCount: number;
	publicCount: number;
	upperCategoryName: string | null;
}

export interface TagFilterItem {
	id: string;
	name: string;
	count: number;
}

export interface Post {
	id: string;
	title: string;
	description?: string;
	coverImage?: string;
	tags?: string[];
	author?: string;
	date?: string;
	modifiedDate?: string;
	slug?: string;
}

export interface BlogPostUser {
	userName: string;
}

export interface BlogPostData {
	postTitle: string;
	postPublished: Date | null;
	postReadTimeSeconds: number;
	user: BlogPostUser;
}

export interface BlogPostPublish {
	revisionHash: string;
	categoryName: string;
	userId: string;
	postHash: string;
	postVisibility: boolean;
	blogPost: BlogPostData;
}

export interface PaginationType {
	pageSize: number;
	page: number;
	totalPage: number;
	hasNextPage: boolean;
}

export interface BlogPostMeta {
	postViewCount: number;
	postLikeCount: number;
}

// 임시저장 목록 타입
export interface DraftItem {
	postHash: string;
	postTitle: string;
	postPublished: boolean;
	postCreatedAt: string;
	postUpdatedAt: string;
}
