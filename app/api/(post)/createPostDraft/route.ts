import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prismaSession';
import { createRevisionHash } from '../../services/createHashdata';

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
async function checkPostHash(postHash: string) {
	const post = await prisma.blogPost.findUnique({
		where: {
			postHash_postDraft: {
				postHash,
				postDraft: true,
			},
		},
	});
	return !!post;
}

async function createPostDraft(postHash: string, title: string, content: string, userId: string) {
	if (await checkPostHash(postHash)) {
		await prisma.blogPost.update({
			where: {
				postHash_postDraft: {
					postHash,
					postDraft: true,
				},
			},
			data: {
				postTitle: title,
				postContent: content,
			},
		});
	} else {
		const revisionHash = createRevisionHash(postHash);
		await prisma.blogPost.create({
			data: {
				revisionHash,
				postHash,
				userId,
				postTitle: title,
				postContent: content,
			},
		});
	}
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
	await prisma.blogPost.delete({
		where: {
			postHash_postDraft: {
				postHash,
				postDraft: true,
			},
			userId,
		},
	});

	const drafts = await prisma.blogPost.findMany({
		where: {
			postHash,
			userId,
		},
	});
	if (drafts.length === 0) {
		await prisma.blogPostMeta.delete({
			where: {
				postHash,
				userId,
			},
		});
	}
	return drafts;
}
