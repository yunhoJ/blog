import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prismaSession';

export async function POST(request: NextRequest) {
	try {
		const { postHash, userId } = await request.json();

		if (!postHash || !userId) {
			return NextResponse.json({ error: 'postHash and userId are required' }, { status: 400 });
		}

		// 조회수 증가
		await prisma.blogPostMeta.update({
			where: {
				userId: userId,
				postHash: postHash,
			},
			data: {
				postViewCount: {
					increment: 1,
				},
			},
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error('조회수 증가 실패:', error);
		return NextResponse.json({ error: 'Failed to increment view count' }, { status: 500 });
	}
}
