import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
	return (
		<div className="container py-8">
			<div className="grid grid-cols-[200px_1fr_220px] gap-6">
				{/* 왼쪽 사이드바 - 태그 목록 */}
				<aside>
					<div className="space-y-4 rounded-xl border bg-white p-4">
						<Skeleton className="mb-2 h-6 w-20" />
						<div className="space-y-2">
							{[...Array(8)].map((_, i) => (
								<Skeleton key={i} className="h-5 w-full" />
							))}
						</div>
					</div>
				</aside>

				{/* 메인 컨텐츠 영역 */}
				<div className="space-y-8">
					{/* 헤더 */}
					<div className="mb-2 flex items-center justify-between">
						<Skeleton className="h-8 w-32" />
						<Skeleton className="h-8 w-24" />
					</div>

					{/* 포스트 리스트 */}
					<div className="space-y-8">
						{[...Array(2)].map((_, i) => (
							<div key={i} className="flex flex-col gap-4 rounded-xl border bg-white p-6">
								<Skeleton className="h-56 w-full rounded-lg" />
								<div className="flex gap-2">
									{[...Array(3)].map((_, j) => (
										<Skeleton key={j} className="h-5 w-12 rounded" />
									))}
								</div>
								<Skeleton className="h-6 w-1/2" />
								<Skeleton className="h-4 w-full" />
								<div className="mt-2 flex items-center gap-4">
									<Skeleton className="h-4 w-16" />
									<Skeleton className="h-4 w-24" />
								</div>
							</div>
						))}
					</div>
				</div>

				{/* 오른쪽 사이드바 */}
				<aside className="flex flex-col gap-4">
					{/* 프로필 */}
					<div className="flex flex-col items-center gap-4 rounded-xl border bg-white p-4">
						<Skeleton className="h-16 w-16 rounded-full" />
						<Skeleton className="h-5 w-24" />
						<Skeleton className="h-4 w-20" />
						<div className="flex gap-2">
							{[...Array(4)].map((_, i) => (
								<Skeleton key={i} className="h-8 w-8 rounded-full" />
							))}
						</div>
						<Skeleton className="mt-2 h-8 w-32" />
					</div>
					{/* 문의하기 */}
					<div className="flex flex-col gap-3 rounded-xl border bg-white p-4">
						{[...Array(3)].map((_, i) => (
							<div key={i} className="flex items-center gap-3">
								<Skeleton className="h-8 w-8 rounded-md" />
								<div className="flex-1 space-y-1">
									<Skeleton className="h-4 w-20" />
									<Skeleton className="h-3 w-32" />
								</div>
							</div>
						))}
					</div>
				</aside>
			</div>
		</div>
	);
}
