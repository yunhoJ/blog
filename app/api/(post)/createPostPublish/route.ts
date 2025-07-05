import { prisma } from '@/lib/prismaSession';
import { NextRequest, NextResponse } from 'next/server';
import { getPostPublishData } from '../../services/getPost';
import { userId, defaultPageSize } from '../../constant/const';
// import { getPostPublish } from '../../services/getPost';

export async function POST(request: NextRequest) {
	const { postHash, category, visibility, userId, imageUrl } = await request.json();
	const postData = await getPublishedPosts(postHash);
	if (imageUrl) {
		await updatePostMainImage(postHash, imageUrl);
	}
	await createPostPublish(postData.revisionHash, postHash, category, visibility, userId);
	return NextResponse.json({ message: 'Post published successfully' });
}
// export async function GET(request: NextRequest) {
// 	const { searchParams } = new URL(request.url);
// 	const userId = searchParams.get('userId') as string;
// 	const category = searchParams.get('category') as string;
// 	const post = await getPostPublish(userId, category);
// 	return NextResponse.json({ data: post });
// }

export async function GET(request: NextRequest) {
	// 포스트 발행 데이터 조회
	const { searchParams } = new URL(request.url);
	const category = searchParams.get('category') || '전체';
	const sort = searchParams.get('sort') || 'latest';
	const pageSize = Number(searchParams.get('pageSize')) || defaultPageSize;
	const page = Number(searchParams.get('page')) || 1;

	const post = await getPostPublishData(userId, category, sort, pageSize, page);
	return NextResponse.json(post);
}
const getPublishedPosts = async (postHash: string) => {
	// 포스트 발행 상태로 업데이트
	const post = await prisma.blogPost.update({
		where: {
			postHash_postDraft: {
				postHash,
				postDraft: true,
			},
		},
		data: {
			postDraft: false,
			postPublished: new Date(),
		},
	});
	return post;
};

const updatePostMainImage = async (postHash: string, imageUrl: string) => {
	const post = await prisma.blogPostMeta.update({
		where: { postHash },
		data: { postMainImageUrl: imageUrl },
	});
	return post;
};
const createPostPublish = async (
	revisionHash: string,
	postHash: string,
	category: string,
	visibility: boolean,
	userId: string
) => {
	const post = await prisma.blogPostPublish.create({
		data: {
			userId: userId,
			revisionHash,
			postHash,
			categoryName: category,
			postVisibility: visibility,
		},
	});

	// 카테고리 카운트 업데이트
	await prisma.blogCategory.update({
		where: {
			categoryName: category,
		},
		data: {
			[visibility ? 'publicCount' : 'privateCount']: {
				increment: 1,
			},
		},
	});

	return post;
};
