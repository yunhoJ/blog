import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { prisma } from '@/lib/prismaSession';

export async function POST(request: NextRequest) {
	const secret = process.env.GITHUB_REACTION_WEBHOOK_SECRET;
	const event = request.headers.get('x-github-event');
	if (!secret) {
		return NextResponse.json(
			{ success: false, message: '리엑션 웹훅 시크릿 키가 설정되지 않았습니다.' },
			{ status: 500 }
		);
	}
	if (event !== 'discussion_comment' && event !== 'discussion') {
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
		switch (event) {
			case 'discussion_comment':
				await updatePostCommentCount(revisionHash, payload.discussion.comments);
				break;
			case 'discussion':
				await updateDiscussionGitnumber(
					revisionHash,
					payload.discussion.number,
					payload.discussion.node_id
				);
				break;
		}
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

const updateDiscussionGitnumber = async (
	revisionHash: string,
	gitnumber: number,
	gitNodeId: string
) => {
	if (typeof gitnumber !== 'number' || gitnumber < 0) {
		throw new Error(`유효하지 않은 디스커션 번호입니다: ${gitnumber}`);
	}
	if (typeof gitNodeId !== 'string' || gitNodeId.length === 0) {
		throw new Error(`유효하지 않은 디스커션 노드 ID입니다: ${gitNodeId}`);
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
		data: { postCommentGitnumber: gitnumber, postCommentGitId: gitNodeId },
	});
};
