import { NextRequest, NextResponse } from 'next/server';
import { checkLogin } from '../../services/loginService';
import { prisma } from '@/lib/prismaSession';

export async function PATCH(request: NextRequest) {
	const { revisionHash, visibility } = await request.json();
	const result = await checkLogin();
	if (!result.success) {
		return NextResponse.json(
			{ success: false, message: result.message },
			{ status: result.status }
		);
	}
	try {
		const post = await getPostPublishData(revisionHash);
		if (!post) {
			return NextResponse.json(
				{ success: false, message: '포스트 데이터를 찾을 수 없습니다.' },
				{ status: 404 }
			);
		}
		if (post.postVisibility === visibility) {
			return NextResponse.json(
				{ success: false, message: '이미 공개 범위가 동일합니다.' },
				{ status: 400 }
			);
		}
		await updatePostVisibilityPrivate(revisionHash, visibility);
		if (visibility) {
			return NextResponse.json({ message: '공개로 변경 되었습니다.' }, { status: 200 });
		} else {
			return NextResponse.json({ message: '비공개로 변경 되었습니다.' }, { status: 200 });
		}
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ success: false, message: '공개 범위 변경 중 오류가 발생했습니다.' },
			{ status: 500 }
		);
	}
}
const getPostPublishData = async (revisionHash: string) => {
	const post = await prisma.blogPostPublish.findUnique({
		where: {
			revisionHash,
		},
	});
	return post;
};
const updatePostVisibilityPrivate = async (revisionHash: string, visibility: boolean) => {
	// 카테고리 카운트 업데이트
	const data = visibility
		? { privateCount: { decrement: 1 }, publicCount: { increment: 1 } }
		: { privateCount: { increment: 1 }, publicCount: { decrement: 1 } };
	// 포스트 비공개 변경
	await prisma.$transaction(async (tx) => {
		const publishPostPromise = tx.blogPostPublish.update({
			where: {
				revisionHash,
			},
			data: {
				postVisibility: visibility,
			},
		});
		const postUpdatePromise = tx.blogPost.update({
			where: {
				revisionHash,
			},
			data: {
				postPublished: new Date(),
			},
		});
		const [publishPost] = await Promise.all([publishPostPromise, postUpdatePromise]);
		await tx.blogCategory.update({
			where: {
				categoryName: publishPost.categoryName,
			},
			data: data,
		});
	});
};
