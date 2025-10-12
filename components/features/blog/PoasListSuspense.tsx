'use client';

import Link from 'next/link';
import PostCard from './PostCard';
// import { Button } from '@/components/ui/button';
// import { GetPublishedPostsResponse } from '@/lib/notion';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Loader2 } from 'lucide-react';
import { BlogPostPublish, PaginationType } from '@/types/blog';
import { useAuthStore } from '@/lib/store/useAuthStore';

interface PostListProps {
	postsList: { posts: BlogPostPublish[]; paginationData: PaginationType };
}

export default function PostListSuspense({ postsList }: PostListProps) {
	// const initialData = use(postsPromise);
	const initialData = postsList;

	// console.log('initialData : ', initialData);
	const searchParams = useSearchParams();

	const category = searchParams.get('category');
	const sort = searchParams.get('sort');
	const tag = searchParams.get('tag');
	const fetchPosts = async ({ pageParam }: { pageParam: number }) => {
		const params = new URLSearchParams();
		if (category) params.set('category', category);
		if (sort) params.set('sort', sort);
		if (tag) params.set('tag', tag);
		params.set('page', pageParam.toString());

		const response = await fetch(`/api/createPostPublish?${params.toString()}`);
		if (!response.ok) {
			throw new Error('Failed to fetch posts');
		}

		return response.json();
	};
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
		queryKey: ['posts', category, sort, tag],
		queryFn: fetchPosts,
		initialPageParam: 1,
		getNextPageParam: (lastPage) => {
			if (!lastPage.paginationData.hasNextPage) {
				return undefined;
			}
			return lastPage.paginationData.page + 1;
		},
		initialData: {
			pages: [initialData],
			pageParams: [1],
		},
	});

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
	const { isAuthenticated } = useAuthStore();
	return (
		<div>
			<div className="grid gap-4 md:gap-6">
				{data.pages
					.flatMap((page) => page.posts)
					.map((post) => {
						return (
							<Link href={`/blog/${post.revisionHash}`} key={post.revisionHash} className="min-w-0">
								<PostCard
									params={post.blogPost}
									category={post.categoryName}
									postMeta={post.blogPost.blogPostMeta}
									postHash={post.postHash}
									revisionHash={post.revisionHash}
									isAuthenticated={isAuthenticated}
								/>
							</Link>
						);
					})}
			</div>

			{hasNextPage && !isFetchingNextPage && <div ref={ref} className="h-10" />}
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
