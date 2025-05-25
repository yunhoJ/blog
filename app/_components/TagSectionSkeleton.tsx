import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function TagSectionSkeleton() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>태그 목록</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col gap-2 text-sm">
					{/* 스켈레톤 아이템 10개 생성 */}
					{Array.from({ length: 6 }).map((_, index) => (
						<div key={index} className="flex items-center justify-between rounded-md p-1.5">
							<Skeleton className="h-4 w-20" />
							<Skeleton className="h-4 w-6" />
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
