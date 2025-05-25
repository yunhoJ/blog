import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function PostListSkeleton() {
	return (
		<div className="space-y-6">
			<div className="flex flex-col gap-4">
				{/* 스켈레톤 포스트 아이템 6개 생성 */}
				{Array.from({ length: 2 }).map((_, index) => (
					<Card
						key={index}
						className="group bg-card/50 border-border/40 overflow-hidden border backdrop-blur-sm"
					>
						{/* 커버 이미지 스켈레톤 */}
						<div className="relative aspect-[2/1] overflow-hidden">
							<Skeleton className="h-full w-full" />
						</div>

						<CardContent className="p-6">
							{/* 태그 영역 스켈레톤 */}
							<div className="mb-4 flex flex-wrap gap-2">
								{Array.from({ length: Math.floor(Math.random() * 3) + 1 }).map((_, tagIndex) => (
									<Skeleton key={tagIndex} className="h-6 w-16 rounded-full" />
								))}
							</div>
							{/* 제목 스켈레톤 */}
							<Skeleton className="mb-2 h-7 w-3/4" />
							{/* 설명 스켈레톤 */}
							<div className="mt-2 space-y-2">
								<Skeleton className="h-5 w-full" />
								<Skeleton className="h-5 w-2/3" />
							</div>
							{/* 메타데이터 스켈레톤 */}
							<div className="mt-6 flex items-center gap-x-4">
								<div className="flex items-center gap-1.5">
									<Skeleton className="h-4 w-4 rounded-sm" />
									<Skeleton className="h-4 w-16" />
								</div>
								<div className="flex items-center gap-1.5">
									<Skeleton className="h-4 w-4 rounded-sm" />
									<Skeleton className="h-4 w-20" />
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
