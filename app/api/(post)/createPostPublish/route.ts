import { prisma } from '@/lib/prismaSession';
import { NextRequest, NextResponse } from 'next/server';
import { getPostPublish } from '../../services/getPost';

export async function POST(request: NextRequest) {
	const { postHash, category, visibility, userId } = await request.json();
	const postData = await getPublishedPosts(postHash);
	await createPostPublish(postData.revisionHash, postHash, category, visibility, userId);
	return NextResponse.json({ message: 'Post published successfully' });
}
export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const userId = searchParams.get('userId') as string;
	const category = searchParams.get('category') as string;
	const post = await getPostPublish(userId, category);
	return NextResponse.json({ data: post });
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
	return post;
};
