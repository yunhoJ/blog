import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prismaSession';
import { createPostDraft } from '@/app/api/services/createPost';

export async function POST(request: NextRequest) {
	const { postHash, title, content, userId } = await request.json();
	await createPostDraft(postHash, title, content, userId);
	return NextResponse.json({ message: 'Post created successfully' });
}
export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const userId = searchParams.get('userId') as string;
	const drafts = await getDrafts(userId);
	return NextResponse.json({ data: drafts });
}
export async function DELETE(request: NextRequest) {
	const { postHash, userId } = await request.json();
	console.log('postHash', postHash);
	console.log('userId', userId);
	await deletePostDraft(postHash, userId);
	return NextResponse.json({ message: 'Post deleted successfully' });
}

async function getDrafts(userId: string) {
	const drafts = await prisma.blogPost.findMany({
		where: {
			userId,
			postDraft: true,
		},
		select: {
			postHash: true,
			postTitle: true,
			postPublished: true,
			postCreatedAt: true,
			postUpdatedAt: true,
		},
	});
	return drafts;
}

async function deletePostDraft(postHash: string, userId: string) {
	await prisma.blogPost.deleteMany({
		where: {
			postHash,
			postDraft: true,
			userId,
		},
	});

	const draft_count = await prisma.blogPost.count({
		where: {
			postHash,
			userId,
		},
	});

	if (draft_count === 0) {
		await prisma.blogPostMeta.delete({
			where: {
				postHash,
				userId,
			},
		});
	}
}
