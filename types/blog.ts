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
	postReadTimeSeconds: number;
	postUpdatedAt: Date;
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
	postCommentCount: number;
	postMainImageUrl: string | null; // optional이면서 null도 허용
	firstPostPublishAt: Date | null;
	blogPostTag: {
		tagName: string;
	}[];
}

// 임시저장 목록 타입
export interface DraftItem {
	postHash: string;
	postTitle: string;
	postCreatedAt: string;
	postUpdatedAt: string;
}
// 다른 포스트 이동 타입
export interface MovePost {
	postHash: string;
	revisionHash: string;
	categoryName: string;
	blogPost: {
		postTitle: string;
		blogPostMeta: {
			firstPostPublishAt: Date;
		};
	};
}
