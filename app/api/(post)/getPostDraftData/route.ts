import { prisma } from '@/lib/prismaSession';
import { NextRequest, NextResponse } from 'next/server';
import { checkLogin } from '@/app/api/services/loginService';
import { getPublishPost } from '@/app/api/services/getPost';
import { createPostDraft } from '@/app/api/services/createPost';

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const result = await checkLogin();
	if (!result.success) {
		return NextResponse.json(
			{ success: false, message: result.message },
			{ status: result.status }
		);
	}
	const postHash = searchParams.get('postHash');
	const userId = result.user?.userId as string;
	if (!postHash || !userId) {
		return NextResponse.json(
			{ success: false, message: '유저아이디 또는 포스트해시가 없습니다.' },
			{ status: 400 }
		);
	}
	try {
		const draft = await getDraft(postHash, userId);
		return NextResponse.json({ success: true, data: draft });
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ success: false, message: '임시저장 데이터를 찾을 수 없습니다.' },
			{ status: 400 }
		);
	}
}
// 새로운 임시저장 데이터 생성
export async function POST(request: NextRequest) {
	const result = await checkLogin();
	if (!result.success) {
		return NextResponse.json(
			{ success: false, message: result.message },
			{ status: result.status }
		);
	}
	const userId = result.user?.userId as string;
	const { postHash, revisionHash } = await request.json();
	const post = await getPublishPost(revisionHash);
	if (!post) {
		return NextResponse.json(
			{ success: false, message: '발행된 포스트를 찾을 수 없습니다.' },
			{ status: 400 }
		);
	}
	await createPostDraft(postHash, post.postTitle, post.postContent, userId);
	return NextResponse.json({ success: true, data: '임시 포스트 생성 완료' });
}

async function getDraft(postHash: string, userId: string) {
	const draft = await prisma.blogPost.findFirst({
		where: {
			postHash,
			postDraft: true,
			userId,
		},
		select: {
			postTitle: true,
			postContent: true,
		},
	});
	return draft;
}
