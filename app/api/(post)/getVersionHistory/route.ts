import { NextResponse } from 'next/server';
import { checkLogin } from '@/app/api/services/loginService';
import { prisma } from '@/lib/prismaSession';
import * as Diff from 'diff';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const postHash = searchParams.get('postHash');

	const result = await checkLogin();
	if (!result.success) {
		return NextResponse.json(
			{ success: false, message: result.message },
			{ status: result.status }
		);
	}

	if (!postHash) {
		return NextResponse.json(
			{ success: false, message: 'postHash가 필요합니다.' },
			{ status: 400 }
		);
	}

	const versionHistory = await getVersionHistory(postHash);
	if (versionHistory.length === 0) {
		return NextResponse.json(
			{ success: false, message: '버전 히스토리가 없습니다.' },
			{ status: 404 }
		);
	}

	const versionHistoryWithDiff = versionHistory.map((value, idx, arr) => {
		const nextVersion = arr[idx + 1];
		const diffLine = nextVersion
			? calculateDiff(value.postContent, nextVersion.postContent)
			: calculateDiff('', value.postContent);

		// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
		const { postContent, ...rest } = value; // postContent는 제외하고 나머지 속성들을 반환
		return { ...rest, diffLine };
	});

	return NextResponse.json({ success: true, data: versionHistoryWithDiff });
}

async function getVersionHistory(postHash: string) {
	const versionHistory = await prisma.blogPost.findMany({
		where: {
			postHash,
		},
		orderBy: {
			postCreatedAt: 'desc',
		},
		select: {
			revisionHash: true,
			postTitle: true,
			postDraft: true,
			postUpdatedAt: true,
			postContent: true,
			blogPostPublish: {
				select: {
					revisionHash: true,
					userId: true,
					categoryName: true,
					postVisibility: true,
				},
			},
		},
	});

	return versionHistory;
}

function calculateDiff(previousVersion: string, currentVersion: string) {
	const changes = Diff.diffLines(previousVersion, currentVersion);
	const diffLine = {
		added: 0,
		removed: 0,
		unchanged: 0,
	};
	changes.forEach((change) => {
		if (change.added) {
			diffLine.added += change.count || 0;
		} else if (change.removed) {
			diffLine.removed += change.count || 0;
		} else {
			diffLine.unchanged += change.count || 0;
		}
	});
	return diffLine;
}
