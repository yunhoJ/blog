import { checkLogin } from '@/app/api/services/loginService';
import { VersionComparison } from '@/types/versionHistory';
import { prisma } from '@/lib/prismaSession';
import { NextResponse } from 'next/server';

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
