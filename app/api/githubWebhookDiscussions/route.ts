import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { prisma } from '@/lib/prismaSession';

export async function POST(request: NextRequest) {
	const secret = process.env.GITHUB_REACTION_WEBHOOK_SECRET;
	if (!secret) {
		return NextResponse.json(
			{ success: false, message: '리엑션 웹훅 시크릿 키가 설정되지 않았습니다.' },
			{ status: 500 }
		);
	}
	if (request.headers.get('x-github-event') !== 'discussion_comment') {
		return NextResponse.json(
			{ success: false, message: '웹훅 이벤트가 일치하지 않습니다.' },
			{ status: 401 }
		);
	}

	const body = await request.text();
	const expectedSignature = `sha256=${crypto
		.createHmac('sha256', secret)
		.update(body)
		.digest('hex')}`;

	const signature = request.headers.get('x-hub-signature-256');

	if (signature !== expectedSignature) {
		return NextResponse.json(
			{ success: false, message: '웹훅 시그니처가 일치하지 않습니다.' },
			{ status: 401 }
		);
	}

	const payload = JSON.parse(body);

	const revisionHash = payload.discussion.title.split('/')[1];
	if (!revisionHash) {
		return NextResponse.json(
			{ success: false, message: '리비전 해시가 없습니다.' },
			{ status: 401 }
		);
	}
	try {
		await updatePostCommentCount(revisionHash, payload.discussion.comments);
		return NextResponse.json({ success: true, message: '웹훅 처리 성공' }, { status: 200 });
	} catch (error) {
		console.error('웹훅 처리 실패:', error);
		return NextResponse.json({ success: false, message: '웹훅 처리 실패' }, { status: 500 });
	}
}
const updatePostCommentCount = async (revisionHash: string, commentCount: number) => {
	if (typeof commentCount !== 'number' || commentCount < 0) {
		throw new Error(`유효하지 않은 댓글 수입니다: ${commentCount}`);
	}
	const post = await prisma.blogPostPublish.findUnique({
		where: { revisionHash },
		select: { postHash: true },
	});
	if (!post) {
		throw new Error('포스트가 없습니다.');
	}
	await prisma.blogPostMeta.update({
		where: { postHash: post.postHash },
		data: { postCommentCount: commentCount },
	});
};
