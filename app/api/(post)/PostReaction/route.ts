import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prismaSession';
export async function PATCH(request: NextRequest) {
	const { postHash, reactionCount } = await request.json();
	if (!postHash) {
		return NextResponse.json(
			{ success: false, message: 'postHash 값이 없습니다.' },
			{ status: 400 }
		);
	}

	if (typeof reactionCount !== 'number' || reactionCount < 0) {
		return NextResponse.json(
			{ success: false, message: 'reactionCount 값이 숫자가 아니거나 0보다 작습니다.' },
			{ status: 400 }
		);
	}
	try {
		await updatePostReactionCount(postHash, reactionCount);
		return NextResponse.json(
			{ success: true, message: '포스트 리액션 수 업데이트 성공' },
			{ status: 200 }
		);
	} catch (error) {
		console.error('포스트 리액션 수 업데이트 중 오류가 발생했습니다.', error);
		return NextResponse.json(
			{ success: false, message: '포스트 리액션 수 업데이트 중 오류가 발생했습니다.' },
			{ status: 500 }
		);
	}
}

async function updatePostReactionCount(postHash: string, reactionCount: number) {
	const post = await prisma.blogPostMeta.update({
		where: { postHash },
		data: { postLikeCount: reactionCount },
	});
	return post;
}
