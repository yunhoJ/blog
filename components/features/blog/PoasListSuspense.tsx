'use client';

import Link from 'next/link';
import PostCard from './PostCard';
// import { Button } from '@/components/ui/button';
// import { GetPublishedPostsResponse } from '@/lib/notion';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { use, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Loader2 } from 'lucide-react';
import { BlogPostPublish } from '@/types/blog';

interface PostListProps {
	postsPromise: Promise<BlogPostPublish[]>;
}

export default function PostListSuspense({ postsPromise }: PostListProps) {
	const initialData = use(postsPromise);
	console.log('initialData : ', initialData);
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
			// console.log('lastPage nextCursor:', lastPage.nextCursor);
			return lastPage.nextCursor;
		},

		initialData: {
			pages: [initialData],
			pageParams: [undefined],
		},
	});
	console.log('data : ', data);
	console.log('hasNextPage : ', hasNextPage);
	console.log('isFetchingNextPage : ', isFetchingNextPage);
	console.log('fetchNextPage : ', fetchNextPage);

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

	return (
		<div className="space-y-6">
			<div className="grid gap-4">
				{initialData.map((post) => (
					<Link href={`/blog/${post.revisionHash}`} key={post.revisionHash}>
						<PostCard params={post.blogPost} category={post.categoryName} />
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
				{hasNextPage ? (
					<>
						<Loader2 className="text-muted-foreground h-4 w-4 animate-spin" />
						<span className="text-muted-foreground text-sm">로딩중...</span>
					</>
				) : (
					<span className="text-muted-foreground text-sm">더이상 포스트가 없습니다.</span>
				)}
			</div>
		</div>
	);
}
