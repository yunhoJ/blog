import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prismaSession';
import { createRevisionHash } from '../../services/createHashdata';

export async function POST(request: NextRequest) {
	const { postHash, title, content, userId } = await request.json();
	await createPostDraft(postHash, title, content, userId);
	return NextResponse.json({ message: 'Post created successfully' });
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
