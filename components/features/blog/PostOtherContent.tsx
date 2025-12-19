'use client';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { postApi } from '@/app/api/services/api';
import { MovePost } from '@/types/blog';
import PostCard from './PostOtherCard';
import { Badge } from '@/components/ui/badge';
import { Folder } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
interface PostOtherContentProps {
	firstPostPublishAt: Date;
	postPublish: PostPublish;
	userId: string;
}
interface PostPublish {
	categoryName: string;
	postVisibility: boolean;
}
export default function PostOtherContent({
	firstPostPublishAt,
	postPublish,
	userId,
}: PostOtherContentProps) {
	const [previousPost, setPreviousPost] = useState<MovePost | null>(null);
	const [nextPost, setNextPost] = useState<MovePost | null>(null);
	const [scope, setScope] = useState<'all' | 'category'>('category');

	const isInitialLoadRef = useRef(true); // 초기 로드인지 추적

	useEffect(() => {
		const fetchMovePost = async () => {
			const response = await postApi.getMovePost(
				firstPostPublishAt.toISOString(),
				postPublish.categoryName,
				postPublish.postVisibility,
				userId,
				scope
			);
			if (response.success) {
				// 초기 로드 시에만 자동으로 'all'로 변경 (사용자가 직접 선택하지 않은 경우)
				if (isInitialLoadRef.current && !response.data.previousPost && !response.data.nextPost) {
					setScope('all');
					isInitialLoadRef.current = false;
				} else {
					setPreviousPost(response.data.previousPost);
					setNextPost(response.data.nextPost);
				}
			}
		};
		fetchMovePost();
	}, [firstPostPublishAt, postPublish.categoryName, postPublish.postVisibility, userId, scope]);
	return (
		<>
			<div className="dark:bg-background rounded-xl border bg-white p-4">
				<div className="mb-4 flex items-center justify-between gap-2">
					<div className="flex min-w-0 flex-col gap-2 md:flex-row md:items-center">
						<span className="text-muted-foreground shrink-0 text-sm font-medium">
							현재 카테고리:
						</span>
						<Badge variant="outline" className="border-primary max-w-full shrink gap-1.5">
							<Folder className="h-3 w-3 shrink-0" />
							<span className="truncate">{postPublish.categoryName}</span>
						</Badge>
					</div>

					<div className="flex shrink-0 items-center gap-2">
						<span className="text-muted-foreground text-sm">범위:</span>
						<div className="bg-muted inline-flex gap-2 rounded-md border p-1">
							<Button
								variant={scope === 'all' ? 'secondary' : 'ghost'}
								size="sm"
								onClick={() => setScope('all')}
								className={`text-sm font-medium transition-all ${
									scope === 'all'
										? 'bg-background hover:bg-background shadow-sm'
										: 'text-muted-foreground hover:text-foreground'
								}`}
							>
								전체
							</Button>
							<Button
								variant={scope === 'category' ? 'secondary' : 'ghost'}
								size="sm"
								onClick={() => setScope('category')}
								className={`text-sm font-medium transition-all ${
									scope === 'category'
										? 'bg-background hover:bg-background shadow-sm'
										: 'text-muted-foreground hover:text-foreground'
								}`}
							>
								카테고리
							</Button>
						</div>
					</div>
				</div>
				{/* 데스크탑 뷰 */}
				<div className="hidden grid-cols-2 gap-4 md:grid md:grid-cols-2">
					<PostCard post={previousPost} direction="previous" />
					<PostCard post={nextPost} direction="next" />
				</div>
				{/* 모바일 뷰 */}
				<div className="grid grid-rows-2 gap-4 md:hidden">
					<PostCard post={nextPost} direction="next" isMobile />
					<PostCard post={previousPost} direction="previous" isMobile />
				</div>
			</div>
		</>
	);
}
