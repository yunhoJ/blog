import { prisma } from '@/lib/prismaSession';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const postHash = searchParams.get('postHash') as string;
	try {
		const post = await getPostPublishCategory(postHash);
		return NextResponse.json({ success: true, data: post?.categoryName ?? null });
	} catch (error) {
		return NextResponse.json(
			{ success: false, message: '카테고리 조회 중 오류가 발생했습니다.' },
			{ status: 500 }
		);
	}
}

const getPostPublishCategory = async (postHash: string) => {
	const post = await prisma.blogPostPublish.findUnique({
		where: {
			postHash,
		},
		select: {
			categoryName: true,
		},
	});
	console.log('post: ', post);
	return post;
};
