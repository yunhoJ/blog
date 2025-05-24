import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

export default function Loading() {
	return (
		<div className="container py-8">
			<div className="grid grid-cols-[200px_1fr_220px] gap-6">
				<aside></aside>
				<div className="flex h-full flex-col gap-2 space-y-4 px-4">
					{/* 헤더 */}
					<div className="flex flex-col gap-2">
						<div className="flex flex-row gap-1">
							{[...Array(2)].map((_, i) => (
								<Skeleton key={i} className="h-6 w-16" />
							))}
						</div>
						<Skeleton className="h-10 w-3/4" />
						<div className="flex flex-row gap-3">
							<div className="text-muted-foreground flex items-center gap-3 text-sm">
								{[...Array(2)].map((_, i) => (
									<div key={i} className="flex items-center gap-1">
										<Skeleton className="h-4 w-4" />
										<Skeleton className="h-4 w-20" />
									</div>
								))}
							</div>
						</div>
					</div>
					<Separator />

					{/* 본문 */}
					<div className="flex-1 space-y-4">
						{[...Array(5)].map((_, i) => (
							<div key={i} className="space-y-2">
								<Skeleton className="h-6 w-3/4" />
								<Skeleton className="h-4 w-full" />
							</div>
						))}
					</div>
					<Separator />

					{/* 다음/이전 화면 */}
					<div className="flex h-30 gap-5">
						<div className="w-1/2">
							<Skeleton className="h-full w-full" />
						</div>
						<div className="w-1/2">
							<Skeleton className="h-full w-full" />
						</div>
					</div>
				</div>

				{/* 목차 */}
				<aside className="relative">
					<div className="bg-muted/20 sticky top-[var(--sticky-top)] space-y-4 p-6 backdrop-blur-sm">
						<Skeleton className="h-6 w-16" />
						<nav className="space-y-2 text-sm">
							{[...Array(4)].map((_, i) => (
								<Skeleton key={i} className="h-4 w-full" />
							))}
						</nav>
					</div>
				</aside>
			</div>
		</div>
	);
}
