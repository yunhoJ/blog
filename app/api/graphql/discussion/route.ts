// GitHub Discussion 삭제 API Route

import { NextRequest, NextResponse } from 'next/server';
import { executeGitHubGraphQL } from '@/lib/graphql/client';
import { DELETE_DISCUSSION_MUTATION } from '@/lib/graphql/schema';

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
