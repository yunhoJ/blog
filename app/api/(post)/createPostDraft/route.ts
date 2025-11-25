import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prismaSession';
import { createPostDraft } from '@/app/api/services/createPost';
import { checkLogin } from '../../services/loginService';

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
export async function PATCH(request: NextRequest) {
	const result = await checkLogin();
	if (!result.success) {
		return NextResponse.json(
			{ success: false, message: result.message },
			{ status: result.status }
		);
	}
	const userId = result.user?.userId as string;
	const { postHash, draftState } = await request.json();

	if (!postHash || !userId) {
		return NextResponse.json(
			{ success: false, message: '유저아이디 또는 포스트해시가 없습니다.' },
			{ status: 400 }
		);
	}
	try {
		await saveDraftfalse(postHash, userId, draftState);
	} catch (error) {
		console.log('error', error);
		return NextResponse.json(
			{ success: false, message: '임시 포스트 저장 중 오류가 발생했습니다.' },
			{ status: 400 }
		);
	}
	return NextResponse.json({ success: true, message: '임시 포스트 저장 완료' });
}
export async function DELETE(request: NextRequest) {
	const result = await checkLogin();
	if (!result.success) {
		return NextResponse.json(
			{ success: false, message: result.message },
			{ status: result.status }
		);
	}
	const userId = result.user?.userId as string;
	const { postHash } = await request.json();

	if (!postHash || !userId) {
		return NextResponse.json(
			{ success: false, message: '유저아이디 또는 포스트해시가 없습니다.' },
			{ status: 400 }
		);
	}

	await deletePostDraft(postHash, userId);
	return NextResponse.json({ success: true, message: '임시 포스트 삭제 성공' });
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
			postCreatedAt: true,
			postUpdatedAt: true,
			blogPostMeta: {
				select: {
					firstPostPublishAt: true,
				},
			},
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
		// 초안 삭제시 태그 먼저 삭제
		await prisma.blogPostTag.deleteMany({
			where: {
				postHash,
			},
		});
		await prisma.blogPostMeta.delete({
			where: {
				postHash,
				userId,
			},
		});
	}
}
async function saveDraftfalse(postHash: string, userId: string, draftState: boolean) {
	await prisma.blogPost.updateMany({
		where: {
			postHash,
			userId,
		},
		data: {
			postDraft: draftState,
		},
	});
}
