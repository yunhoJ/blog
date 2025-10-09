import { prisma } from '@/lib/prismaSession';
import { NextRequest, NextResponse } from 'next/server';
import { getPostPublishData } from '../../services/getPost';
import { userId, defaultPageSize } from '../../constant/const';
import { checkLogin } from '../../services/loginService';
export async function POST(request: NextRequest) {
	const { postHash, category, visibility, userId, imageUrl } = await request.json();
	const postData = await getPublishedPosts(postHash);
	if (imageUrl) {
		await updatePostMainImage(postHash, imageUrl);
	}
	await createPostPublish(postData.revisionHash, postHash, category, visibility, userId);
	return NextResponse.json({ message: 'Post published successfully' });
}

export async function DELETE(request: NextRequest) {
	const { revisionHash, postHash } = await request.json();

	// 로그인 체크
	const result = await checkLogin();
	if (!result.success) {
		return NextResponse.json(
			{ success: false, message: result.message },
			{ status: result.status }
		);
	}
	try {
		await deletePostPublish(revisionHash, postHash, result.user?.userId as string);
	} catch {
		return NextResponse.json(
			{ success: false, message: '삭제 중 오류가 발생했습니다.' },
			{ status: 500 }
		);
	}
	return NextResponse.json({ message: '게시글 삭제 성공' });
}

export async function GET(request: NextRequest) {
	// 포스트 발행 데이터 조회
	const { searchParams } = new URL(request.url);
	const category = searchParams.get('category') || '전체';
	const sort = searchParams.get('sort') || 'latest';
	const pageSize = Number(searchParams.get('pageSize')) || defaultPageSize;
	const page = Number(searchParams.get('page')) || 1;
	const tag = searchParams.get('tag') || '';
	const post = await getPostPublishData(userId, category, sort, pageSize, page, tag);
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

const deletePostPublish = async (revisionHash: string, postHash: string, userId: string) => {
	const post = await prisma.blogPostPublish.delete({
		where: {
			userId: userId,
			revisionHash,
			postHash,
		},
	});

	// 카테고리 카운트 업데이트
	await prisma.blogCategory.update({
		where: {
			categoryName: post.categoryName,
		},
		data: {
			[post.postVisibility ? 'publicCount' : 'privateCount']: {
				decrement: 1,
			},
		},
	});

	return post;
};
