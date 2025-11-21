import { checkLogin } from '@/app/api/services/loginService';
import { VersionComparison } from '@/types/versionHistory';
import { prisma } from '@/lib/prismaSession';
import { NextResponse } from 'next/server';
import * as Diff from 'diff';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const revisionHash = searchParams.get('revisionHash') || '';
	const previousRevisionHash = searchParams.get('previousRevisionHash') || '';
	console.log(revisionHash, previousRevisionHash);
	if (!revisionHash && !previousRevisionHash) {
		return NextResponse.json(
			{ success: false, message: 'revisionHash 또는 previousRevisionHash가 없습니다.' },
			{ status: 400 }
		);
	}
	const result = await checkLogin();
	if (!result.success) {
		return NextResponse.json(
			{ success: false, message: result.message },
			{ status: result.status }
		);
	}
	const detailData = await getDetailData(revisionHash, previousRevisionHash);
	const detailDataWithVersion: VersionComparison = {};

	detailData.forEach((value) => {
		if (value.revisionHash === previousRevisionHash) {
			detailDataWithVersion.previousVersion = value;
		}
		if (value.revisionHash === revisionHash) {
			detailDataWithVersion.currentVersion = value;
		}
	});
	const { diffPreviousContent, diffCurrentContent, diffTotalContent } = await diffContent(
		detailDataWithVersion.previousVersion?.postContent || '',
		detailDataWithVersion.currentVersion?.postContent || ''
	);
	detailDataWithVersion.previousVersionChangeContent = diffPreviousContent;
	detailDataWithVersion.currentVersionChangeContent = diffCurrentContent;
	detailDataWithVersion.totalVersionChangeContent = diffTotalContent;
	return NextResponse.json({ success: true, data: detailDataWithVersion });
}

async function getDetailData(revisionHash: string, previousRevisionHash: string) {
	const detailData = await prisma.blogPost.findMany({
		where: {
			revisionHash: {
				in: [revisionHash, previousRevisionHash],
			},
		},
	});
	return detailData;
}
async function diffContent(previousContent: string, currentContent: string) {
	const diff = Diff.diffLines(previousContent, currentContent);
	let diffPreviousContent = ''; // 삭제된 줄들을 모두 포함한 내용
	let diffCurrentContent = ''; // 추가된 줄들을 모두 포함한 내용
	let diffTotalContent = ''; // 추가된 줄들과 삭제된 줄들을 모두 포함한 내용

	for (const part of diff) {
		if (part.added) {
			// 추가된 줄들을 한 줄씩 div로 감싸기
			diffCurrentContent += `<div class="diff-added">\n${part.value}\n</div>\n`;
			diffTotalContent += `<div class="diff-added">\n${part.value}\n</div>\n`;
		} else if (part.removed) {
			// 삭제된 줄들을 한 줄씩 div로 감싸기
			diffPreviousContent += `<div class="diff-removed">\n${part.value}\n</div>\n`;
			diffTotalContent += `<div class="diff-removed">\n${part.value}\n</div>\n`;
		} else {
			diffPreviousContent += part.value;
			diffCurrentContent += part.value;
			diffTotalContent += part.value;
		}
	}
	return { diffPreviousContent, diffCurrentContent, diffTotalContent };
}
