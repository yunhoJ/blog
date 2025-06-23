import { prisma } from '@/lib/prismaSession';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const postHash = searchParams.get('postHash');
	const userId = searchParams.get('userId');
	if (!postHash || !userId) {
		return NextResponse.json({ error: 'postHash or userId is required' }, { status: 400 });
	}
	const draft = await getDraft(postHash, userId);
	return NextResponse.json({ data: draft });
}

async function getDraft(postHash: string, userId: string) {
	const draft = await prisma.blogPost.findUnique({
		where: {
			postHash_postDraft: {
				postHash,
				postDraft: true,
			},
			userId,
		},
		select: {
			postTitle: true,
			postContent: true,
		},
	});
	return draft;
}
