'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';
import { postApi } from '@/app/api/services/api';

interface PostOtherContentProps {
	firstPostPublishAt: Date;
	postPublish: PostPublish;
	userId: string;
}
interface PostPublish {
	categoryName: string;
	postVisibility: boolean;
}
interface MovePost {
	postHash: string;
	revisionHash: string;
	blogPost: {
		postTitle: string;
		blogPostMeta: {
			firstPostPublishAt: Date;
		};
	};
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
				<div className="mb-4 flex items-center justify-end gap-2">
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
				{/* 데스크탑 뷰 */}
				<div className="hidden grid-cols-2 gap-4 md:grid md:grid-cols-2">
					{/* 이전글 */}
					{!previousPost && (
						<Card className="flex h-full flex-col gap-2 py-4">
							<CardContent>
								<div className="text-muted-foreground flex items-center justify-start gap-2 text-sm">
									<ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
									<span className="font-medium">이전글</span>
								</div>
							</CardContent>
							<CardHeader className="flex-1">
								<CardTitle className="text-muted-foreground line-clamp-1 leading-tight">
									이전글이 없습니다
								</CardTitle>
							</CardHeader>
						</Card>
					)}

					{/* 이전글 */}
					{previousPost && (
						<Link href={`/blog/${previousPost.revisionHash}`} className="group h-full">
							<Card className="flex h-full flex-col gap-2 py-4">
								<CardContent>
									<div className="text-muted-foreground flex items-center justify-start gap-2 text-sm">
										<ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
										<span className="font-medium">이전글</span>
									</div>
								</CardContent>
								<CardHeader className="flex-1">
									<CardTitle
										className="line-clamp-1 leading-tight"
										title={previousPost.blogPost.postTitle}
									>
										{previousPost.blogPost.postTitle}
									</CardTitle>
								</CardHeader>
							</Card>
						</Link>
					)}
					{!nextPost && (
						<Card className="flex h-full flex-col gap-2 py-4">
							<CardContent>
								<div className="text-muted-foreground flex items-center justify-end gap-2 text-sm">
									<span className="font-medium">다음글</span>
									<ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
								</div>
							</CardContent>
							<CardHeader className="flex-1">
								<CardTitle className="text-muted-foreground line-clamp-1 text-end leading-tight">
									다음글이 없습니다
								</CardTitle>
							</CardHeader>
						</Card>
					)}

					{/* 다음글 */}
					{nextPost && (
						<Link href={`/blog/${nextPost.revisionHash}`} className="group block h-full">
							<Card className="flex h-full flex-col gap-2 py-4">
								<CardContent>
									<div className="text-muted-foreground flex items-center justify-end gap-2 text-sm">
										<span className="font-medium">다음글</span>
										<ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
									</div>
								</CardContent>
								<CardHeader className="flex-1">
									<CardTitle
										className="line-clamp-1 text-end leading-tight"
										title={nextPost.blogPost.postTitle}
									>
										{nextPost.blogPost.postTitle}
									</CardTitle>
								</CardHeader>
							</Card>
						</Link>
					)}
				</div>
				{/* 모바일 뷰 */}
				<div className="grid grid-rows-2 gap-4 md:hidden">
					{!nextPost && (
						<Card className="h-full">
							<CardHeader className="flex flex-row items-center justify-start gap-2">
								<div className="text-muted-foreground flex items-center justify-start gap-2 text-sm">
									<ChevronDown className="h-4 w-4 transition-transform" />
									<span className="font-medium">다음글</span>
								</div>
								<CardTitle className="text-muted-foreground line-clamp-1 leading-tight">
									다음글이 없습니다
								</CardTitle>
							</CardHeader>
						</Card>
					)}

					{/* 다음글 */}
					{nextPost && (
						<Link href={`/blog/${nextPost.revisionHash}`} className="group block h-full">
							<Card className="h-full">
								<CardHeader className="flex flex-row items-center justify-start gap-2">
									<div className="text-muted-foreground flex items-center justify-start gap-2 text-sm">
										<ChevronUp className="h-4 w-4 transition-transform" />
										<span className="font-medium">다음글</span>
									</div>
									<CardTitle
										className="line-clamp-1 leading-tight"
										title={nextPost.blogPost.postTitle}
									>
										{nextPost.blogPost.postTitle}
									</CardTitle>
								</CardHeader>
							</Card>
						</Link>
					)}
					{/* 이전글 */}
					{!previousPost && (
						<Card className="h-full">
							<CardHeader className="flex flex-row items-center justify-start gap-2">
								<div className="text-muted-foreground flex items-center justify-start gap-2 text-sm">
									<ChevronDown className="h-4 w-4 transition-transform" />
									<span className="font-medium">이전글</span>
								</div>
								<CardTitle className="text-muted-foreground line-clamp-1 leading-tight">
									이전글이 없습니다
								</CardTitle>
							</CardHeader>
						</Card>
					)}

					{/* 이전글 */}
					{previousPost && (
						<Link href={`/blog/${previousPost.revisionHash}`} className="group h-full">
							<Card className="h-full">
								<CardHeader className="flex flex-row items-center justify-start gap-2">
									<div className="text-muted-foreground flex items-center justify-start gap-2 text-sm">
										<ChevronDown className="h-4 w-4 transition-transform" />
										<span className="font-medium">이전글</span>
									</div>
									<CardTitle
										className="line-clamp-1 leading-tight"
										title={previousPost.blogPost.postTitle}
									>
										{previousPost.blogPost.postTitle}
									</CardTitle>
								</CardHeader>
							</Card>
						</Link>
					)}
				</div>
			</div>
		</>
	);
}
