// GitHub Discussion 삭제 API Route

import { NextRequest, NextResponse } from 'next/server';
import { executeGitHubGraphQL } from '@/lib/graphql/client';
import { DELETE_DISCUSSION_MUTATION, UPDATE_DISCUSSION_TITLE_MUTATION } from '@/lib/graphql/schema';
import { prisma } from '@/lib/prismaSession';
import { BLOG_BASE_URL, BLOG_PATH_PREFIX } from '../../constant/const';

// 상수 정의

/**
 * Discussion content 포맷팅 헬퍼 함수
 * @param revisionHash - 포스트 revision hash
 * @param postContent - 포스트 본문 내용
 * @returns 포맷팅된 Discussion content
 */
function formatDiscussionContent(postHash: string, postContent: string): string {
	const blogTitle = `# ${BLOG_PATH_PREFIX}/${postHash}`;
	const blogUrl = `${BLOG_BASE_URL}/${BLOG_PATH_PREFIX}/${postHash}`;
	const content = postContent;

	return `${blogTitle}\n\n${content}\n\n${blogUrl}`;
}

export async function DELETE(request: NextRequest) {
	try {
		const { id } = await request.json();

		if (!id) {
			return NextResponse.json(
				{ success: false, message: 'Discussion ID가 필요합니다.' },
				{ status: 400 }
			);
		}

		const result = await executeGitHubGraphQL(DELETE_DISCUSSION_MUTATION, { id });

		return NextResponse.json({ success: true, data: result });
	} catch (error) {
		console.error('Discussion 삭제 중 오류:', error);
		return NextResponse.json(
			{
				success: false,
				error: error instanceof Error ? error.message : 'Discussion 삭제에 실패했습니다.',
			},
			{ status: 500 }
		);
	}
}

export async function PATCH(request: NextRequest) {
	try {
		const { id, postHash, revisionHash } = await request.json();
		if (!id || !postHash || !revisionHash) {
			return NextResponse.json(
				{ success: false, message: 'Discussion ID 또는 postHash, revisionHash가 필요합니다.' },
				{ status: 400 }
			);
		}

		const postContent = await selectDiscussionContent(revisionHash);
		const formattedContent = formatDiscussionContent(postHash, postContent?.postContent || '');

		const result = await executeGitHubGraphQL(UPDATE_DISCUSSION_TITLE_MUTATION, {
			discussionId: id,
			title: `${BLOG_PATH_PREFIX}/${postHash}`,
			body: formattedContent,
		});
		return NextResponse.json({ success: true, data: result });
	} catch (error) {
		console.error('Discussion 업데이트 중 오류:', error);
		return NextResponse.json(
			{
				success: false,
				error: error instanceof Error ? error.message : 'Discussion 업데이트에 실패했습니다.',
			},
			{ status: 500 }
		);
	}
}
async function selectDiscussionContent(revisionHash: string) {
	const post = await prisma.blogPost.findUnique({
		select: {
			postContent: true,
		},
		where: {
			revisionHash,
		},
	});
	return post;
}
