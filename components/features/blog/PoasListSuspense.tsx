'use client';

import Link from 'next/link';
import PostCard from './PostCard';
import { Button } from '@/components/ui/button';
import { GetPublishedPostsResponse } from '@/lib/notion';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { use, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Loader2 } from 'lucide-react';

interface PostListProps {
	postsPromise: Promise<GetPublishedPostsResponse>;
}

export default function PostListSuspense({ postsPromise }: PostListProps) {
	const initialData = use(postsPromise);
	const searchParams = useSearchParams();
	const tag = searchParams.get('tag');
	const sort = searchParams.get('sort');

	const fetchPosts = async ({ pageParam }: { pageParam: string | undefined }) => {
		const params = new URLSearchParams();
		if (tag) params.set('tag', tag);
		if (sort) params.set('sort', sort);
		if (pageParam) params.set('startCursor', pageParam);

		const response = await fetch(`/api/posts?${params.toString()}`);
		if (!response.ok) {
			throw new Error('Failed to fetch posts');
		}
		return response.json();
	};
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
		queryKey: ['posts', tag, sort],
		queryFn: fetchPosts,
		initialPageParam: undefined,
		getNextPageParam: (lastPage) => {
			console.log('lastPage nextCursor:', lastPage.nextCursor);
			return lastPage.nextCursor;
		},

		initialData: {
			pages: [initialData],
			pageParams: [undefined],
		},
	});

	// const handleLoadMore = () => {
	// 	if (hasNextPage && !isFetchingNextPage) {
	// 		fetchNextPage();
	// 	}
	// };
	const { ref, inView } = useInView({
		// ref : 감지할 객체
		// inView : true/false
		threshold: 0.5, //요소가 50% 보여지면 트리거
	});
	useEffect(() => {
		if (inView && hasNextPage && !isFetchingNextPage) {
			fetchNextPage();
		}
	}, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

	const allPosts = data?.pages.flatMap((page) => page.posts) ?? [];

	return (
		<div className="space-y-6">
			<div className="grid gap-4">
				{allPosts.map((post, index) => (
					<Link href={`/blog/${post.slug}`} key={post.id}>
						<PostCard post={post} isFirst={index === 0} />
					</Link>
				))}
			</div>
			{/* {hasNextPage && (
				<div>
					<Button
						variant="outline"
						size="lg"
						className="w-full"
						onClick={handleLoadMore}
						disabled={isFetchingNextPage}
					>
						{isFetchingNextPage ? '로딩중...' : '더보기'}
					</Button>
				</div>
			)} */}
			{hasNextPage && !isFetchingNextPage && <div ref={ref} className="h-10 bg-red-500" />}
			<div className="flex items-center justify-center gap-2 py-4">
				<Loader2 className="text-muted-foreground h-4 w-4 animate-spin" />
				<span className="text-muted-foreground text-sm">로딩중...</span>
			</div>
		</div>
	);
}
