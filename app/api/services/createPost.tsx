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
