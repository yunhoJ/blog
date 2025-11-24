// 프리즈마를 통한 db 데이터 저장
import { prisma } from '@/lib/prismaSession';
import { createPostHash, createRevisionHash } from './createHashdata';
export const createPost = async (
	userId: string,
	title: string,
	content: string,
	postHash?: string
) => {
	// 블로그 글 저장
	if (!postHash) {
		postHash = await createPostMeta(userId);
	}
	const revisionHash = createRevisionHash(postHash);

	const post = await prisma.blogPost.create({
		data: {
			postHash,
			userId: userId,
			postTitle: title,
			postContent: content,
			revisionHash: revisionHash,
		},
	});
	return post;
};

export const createPostMeta = async (userId: string) => {
	// 블로그 글 메타 저장
	const postHash = createPostHash(userId);

	await prisma.blogPostMeta.create({
		data: {
			postHash,
			userId: userId,
		},
	});
	return postHash;
};

async function checkPostHash(postHash: string, userId: string) {
	const post = await prisma.blogPost.findFirst({
		where: {
			postHash,
			postDraft: true,
			userId,
		},
	});
	return post;
}

export async function createPostDraft(
	postHash: string,
	title: string,
	content: string,
	userId: string
) {
	const post = await checkPostHash(postHash, userId);
	// 30초당 180자 기준으로 계산
	const readTimeSeconds = calculateReadTime(content) * 30;
	if (post) {
		await prisma.blogPost.update({
			where: {
				revisionHash: post.revisionHash,
			},
			data: {
				postTitle: title,
				postContent: content,
				postReadTimeSeconds: readTimeSeconds,
			},
		});
	} else {
		const revisionHash = createRevisionHash(postHash);
		await prisma.blogPost.create({
			data: {
				revisionHash,
				postHash,
				userId,
				postTitle: title,
				postContent: content,
				postReadTimeSeconds: readTimeSeconds,
			},
		});
	}
}
function calculateReadTime(content: string) {
	// HTML/Markdown 태그 제거
	const textOnly = content
		.replace(/<[^>]*>/g, '') // HTML 태그 제거
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '') // 마크다운 링크
		.replace(/!\[([^\]]*)\]\([^)]*\)/g, '') // 이미지
		.replace(/[#*`_~]/g, '') // 마크다운 문법
		.replace(/\s+/g, '') // 연속 공백 제거
		.replace(/\n/g, '') // 줄바꿈 제거
		.trim();

	// 전체 문자 수 기준으로 계산 (한국어 포함)
	// 평균 읽기 속도: 30초당 180자 (초당 약 3자)
	const charCount = textOnly.length;
	const readTimeSeconds = Math.round(charCount / 180);

	// 최소 1분 (30초)
	return readTimeSeconds === 0 ? 1 : readTimeSeconds;
}
