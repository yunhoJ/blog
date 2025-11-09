'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Plus, Minus, Equal } from 'lucide-react';
import { formatDate } from '@/lib/date';
import { PostVersionData } from '@/types/versionHistory';
import PostHistoryDropdown from '@/components/features/blog/PostHistoryDropdown';

interface VersionTimeLineProps {
	versionTimeLine: PostVersionData[];
	postHash: string;
	onVersionChange: (revisionHash: string, previousRevisionHash: string) => void;
	selectedVersion: string;
	onDeleteSuccess: () => void;
}
export default function VersionTimeLine({
	versionTimeLine,
	postHash,
	onVersionChange,
	selectedVersion,
	onDeleteSuccess,
}: VersionTimeLineProps) {
	return versionTimeLine.map((version: PostVersionData) => (
		<div key={version.revisionHash} className="relative">
			{/* 타임라인 점 */}
			<div
				className={`absolute left-1 h-3 w-3 rounded-full border-2 ${
					version.blogPostPublish ? 'bg-primary border-primary' : 'bg-background border-border'
				}`}
			></div>

			{/* 버전 카드 */}
			<Card
				className={`hover:shadow-m ml-8 cursor-pointer gap-2 transition-all duration-200 ${
					selectedVersion === version.revisionHash ? 'ring-primary bg-primary/10 ring-2' : ''
				}`}
				onClick={() => {
					onVersionChange(version.revisionHash, version.previousRevisionHash);
				}}
			>
				<CardHeader className="gap-0 pb-0">
					{version.postDraft && (
						<Badge
							variant={'outline'}
							className="dark:bg-secondary absolute -top-2 left-10 bg-white"
						>
							수정중
						</Badge>
					)}
					{version.blogPostPublish && (
						<Badge variant={'default'} className="absolute -top-2 left-10">
							배포중
						</Badge>
					)}
					<div className="flex items-start justify-between">
						<CardTitle className={`overflow-hidden leading-tight break-words`}>
							{version.postTitle}
						</CardTitle>
						<PostHistoryDropdown
							revisionHash={version.revisionHash}
							postHash={postHash}
							postTitle={version.postTitle}
							onDeleteSuccess={onDeleteSuccess}
						/>
					</div>
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
