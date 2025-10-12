'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Plus, Minus, Equal } from 'lucide-react';
import { postApi } from '@/app/api/services/api';
import { useEffect, useState } from 'react';
import { handleAxiosError } from '@/lib/toasttError';
import { formatDate } from '@/lib/date';

interface PostVersionData {
	revisionHash: string;
	postTitle: string;
	postDraft: boolean;
	postUpdatedAt: string; // ISO date string
	diffLine: { added: number; removed: number; unchanged: number };
	blogPostPublish?: { categoryName: string; postVisibility: boolean };
}

export default function VersionTimeLine({ postHash }: { postHash: string }) {
	const [versionHistory, setVersionHistory] = useState<PostVersionData[]>([]);
	useEffect(() => {
		if (!postHash) return;
		const fetchVersionHistory = async () => {
			try {
				const versionHistory = await postApi.getVersionHistory(postHash);
				if (versionHistory.success) {
					setVersionHistory(versionHistory.data);
				}
			} catch (error) {
				handleAxiosError(error, '버전 히스토리 조회 중 오류가 발생했습니다.');
			}
		};
		fetchVersionHistory();
	}, [postHash]);

	return versionHistory.map((version: PostVersionData) => (
		<div key={version.revisionHash} className="relative">
			{/* 타임라인 점 */}
			<div
				className={`absolute left-1 h-3 w-3 rounded-full border-2 ${
					version.blogPostPublish ? 'bg-primary border-primary' : 'bg-background border-border'
				}`}
			></div>

			{/* 버전 카드 */}
			<Card className={`hover:shadow-m ml-8 gap-2 transition-all duration-200`}>
				<CardHeader className="gap-0 pb-0">
					{version.postDraft && (
						<Badge variant={'outline'} className="mb-2">
							수정중
						</Badge>
					)}
					{version.blogPostPublish && (
						<Badge variant={'default'} className="mb-2">
							배포중
						</Badge>
					)}

					<CardTitle className="overflow-hidden leading-tight break-words">
						{version.postTitle}
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="text-muted-foreground flex flex-col gap-1 text-xs">
						<div className="grid grid-cols-3 items-center">
							{version.diffLine.added > 0 && (
								<div className="col-start-1 flex items-center gap-1 text-green-600 dark:text-green-600">
									<Plus className="h-3 w-3" />
									<span>{version.diffLine.added} line</span>
								</div>
							)}
							{version.diffLine.removed > 0 && (
								<div className="col-start-2 flex items-center gap-1 text-red-600 dark:text-red-600">
									<Minus className="h-3 w-3" />
									<span>{version.diffLine.removed} line</span>
								</div>
							)}
							{version.diffLine.unchanged > 0 && (
								<div className="col-start-3 flex items-center gap-1">
									<Equal className="h-3 w-3" />
									<span>{version.diffLine.unchanged} line</span>
								</div>
							)}
						</div>
						<div className="flex items-center gap-1">
							<Clock className="h-3 w-3" />
							<span>{formatDate(version.postUpdatedAt)}</span>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	));
}
