import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prismaSession';

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const firstPostPublishAtString = searchParams.get('firstPostPublishAt');
	const categoryName = searchParams.get('categoryName');
	const postVisibilityString = searchParams.get('postVisibility');
	const userId = searchParams.get('userId');
	const scope = searchParams.get('scope') as 'all' | 'category';
	if (!firstPostPublishAtString || !categoryName || !postVisibilityString || !userId || !scope) {
		return NextResponse.json(
			{ success: false, message: 'firstPostPublishAt, categoryName, userid, scope가 필요합니다.' },
			{ status: 400 }
		);
	}
	// string을 Date로 변환
	const firstPostPublishAt = new Date(firstPostPublishAtString);
	const postVisibility = Boolean(postVisibilityString);

	try {
		// 같은 카테고리 내에서 포스트 조회
		const previousPostPromise = getMovePost(
			categoryName,
			userId,
			postVisibility,
			firstPostPublishAt,
			'previous',
			scope
		);
		const nextPostPromise = getMovePost(
			categoryName,
			userId,
			postVisibility,
			firstPostPublishAt,
			'next',
			scope
		);

		// 두 포스트 조회 결과 반환
		const [previousPost, nextPost] = await Promise.all([previousPostPromise, nextPostPromise]);

		// 이전글과 다음글 반환
		const movePost = {
			previousPost,
			nextPost,
		};

		return NextResponse.json({ success: true, data: movePost });
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ success: false, message: '다른 포스트 이동 조회 중 오류가 발생했습니다.' },
			{ status: 500 }
		);
	}
}

async function getMovePost(
	categoryName: string,
	userId: string,
	postVisibility: boolean,
	firstPostPublishAt: Date,
	direction: 'previous' | 'next',
	scope: 'all' | 'category'
) {
	const getPreviousPost = await prisma.blogPostPublish.findFirst({
		select: {
			postHash: true,
			revisionHash: true,
			blogPost: {
				select: {
					postTitle: true,
					blogPostMeta: {
						select: {
							firstPostPublishAt: true,
						},
					},
				},
			},
		},
		where: {
			...(scope === 'category' && { categoryName }),
			userId,
			postVisibility,
			blogPost: {
				blogPostMeta: {
					firstPostPublishAt: {
						[direction === 'previous' ? 'lt' : 'gt']: firstPostPublishAt,
					},
				},
			},
		},
		orderBy: {
			blogPost: {
				blogPostMeta: {
					firstPostPublishAt: direction === 'previous' ? 'desc' : 'asc',
				},
			},
		},
	});

	return getPreviousPost;
}
