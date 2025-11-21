import { BlogPost } from '@/lib/generated/prisma';

export interface PostVersionData {
	revisionHash: string;
	postTitle: string;
	postDraft: boolean;
	postUpdatedAt: string; // ISO date string
	postCreatedAt: string; // ISO date string
	previousRevisionHash: string;
	diffLine: { added: number; removed: number; unchanged: number };
	blogPostPublish?: { categoryName: string; postVisibility: boolean };
}

export interface SelectedVersionData {
	revisionHash: string;
	previousRevisionHash: string;
}
// 더 명확한 타입 정의
export interface VersionComparison {
	previousVersion?: BlogPost;
	currentVersion?: BlogPost;
	previousVersionChangeContent?: string;
	currentVersionChangeContent?: string;
	totalVersionChangeContent?: string;
}

export interface SelectedVersion {
	revisionHash: string;
	historyVersion: string;
}
