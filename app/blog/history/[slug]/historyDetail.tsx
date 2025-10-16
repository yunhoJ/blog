'use client';
import { postApi } from '@/app/api/services/api';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { SelectedVersionData } from '@/types/versionHistory';
import { useEffect, useState } from 'react';
import { VersionComparison } from '@/types/versionHistory';
export default function HistoryDetail({ versionDetail }: { versionDetail: SelectedVersionData }) {
	const [versionDetailData, setVersionDetailData] = useState<VersionComparison>({});
	useEffect(() => {
		const fetchVersionDetailData = async () => {
			const response = await postApi.getVersionDetailData(
				versionDetail.revisionHash,
				versionDetail.previousRevisionHash
			);
			if (response.success) {
				setVersionDetailData(response.data);
			}
		};
		fetchVersionDetailData();
	}, [versionDetail]);
	return (
		<Card>
			<CardHeader>
				<CardTitle>버전 비교 및 상세 내용</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<div className="bg-muted/50 rounded-lg p-4">
						<h3 className="mb-2 font-semibold">현재 선택된 버전: v1.3</h3>
						<p className="text-muted-foreground text-sm">
							이 버전에서는 이미지가 추가되고 내용이 보완되었습니다.
						</p>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<h4 className="text-sm font-medium">
								제목 : {versionDetailData.previousVersion?.postTitle}
							</h4>
							<div className="rounded border border-red-200 bg-red-50 p-3 text-sm dark:border-red-800 dark:bg-red-950/20">
								<pre className="whitespace-pre-wrap">
									{versionDetailData.previousVersion?.postContent}
								</pre>
							</div>
						</div>
						<div className="space-y-2">
							<h4 className="text-sm font-medium">
								제목 : {versionDetailData.currentVersion?.postTitle}
							</h4>
							<div className="rounded border border-green-200 bg-green-50 p-3 text-sm dark:border-green-800 dark:bg-green-950/20">
								<pre className="whitespace-pre-wrap">
									{versionDetailData.currentVersion?.postContent}
								</pre>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
