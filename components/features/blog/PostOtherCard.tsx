'use client';
import Link from 'next/link';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Folder } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MovePost } from '@/types/blog';
import { Badge } from '@/components/ui/badge';

interface PostCardProps {
	post: MovePost | null;
	direction: 'previous' | 'next';
	isMobile?: boolean;
}

export default function PostOtherCard({ post, direction, isMobile = false }: PostCardProps) {
	const isPrevious = direction === 'previous';
	const hasPost = post !== null;
	const title = hasPost ? post.blogPost.postTitle : `${isPrevious ? '이전' : '다음'}글이 없습니다`;
	const href = hasPost ? `/blog/${post.revisionHash}` : undefined;

	if (isMobile) {
		const Icon = isPrevious ? ChevronDown : ChevronUp;
		const content = (
			<Card className="h-full py-4">
				<CardHeader className="flex flex-col gap-3 p-4">
					{/* 메타 정보 영역 */}
					<div className="flex items-center gap-2 text-sm">
						<div className="text-muted-foreground flex items-center gap-1.5">
							<Icon className="h-4 w-4 shrink-0 transition-transform" />
							<span className="font-medium">{isPrevious ? '이전글' : '다음글'}</span>
						</div>
						{post?.categoryName && (
							<Badge
								variant="outline"
								className="text-muted-foreground flex max-w-[140px] items-center gap-1.5"
							>
								<Folder className="h-3 w-3 shrink-0" />
								<span className="min-w-0 truncate">{post.categoryName}</span>
							</Badge>
						)}
					</div>

					{/* 제목 영역 - 아이콘만큼 왼쪽 여백 */}
					<CardTitle
						className={`line-clamp-1 pl-[calc(1rem+0.375rem)] leading-tight ${hasPost ? '' : 'text-muted-foreground'}`}
						title={hasPost ? title : ''}
					>
						{title}
					</CardTitle>
				</CardHeader>
			</Card>
		);

		return hasPost ? (
			<Link href={href!} className="group h-full">
				{content}
			</Link>
		) : (
			content
		);
	}

	// 데스크탑 뷰
	const Icon = isPrevious ? ChevronLeft : ChevronRight;
	const content = (
		<Card className="flex h-full flex-col gap-2 py-4">
			<CardContent className="px-4">
				<div
					className={`text-muted-foreground flex items-center gap-2 text-sm ${isPrevious ? 'justify-start' : 'justify-end'}`}
				>
					{isPrevious ? (
						<>
							<Icon
								className={`h-4 w-4 ${hasPost ? 'transition-transform group-hover:-translate-x-1' : ''}`}
							/>
							<span className="font-medium">이전글</span>
							{post?.categoryName && (
								<Badge
									variant="outline"
									className="text-muted-foreground flex max-w-[140px] items-center gap-1.5"
								>
									<Folder className="h-3 w-3 shrink-0" />
									<span className="truncate">{post?.categoryName}</span>
								</Badge>
							)}
						</>
					) : (
						<>
							{post?.categoryName && (
								<Badge
									variant="outline"
									className="text-muted-foreground flex max-w-[140px] items-center gap-1.5"
								>
									<Folder className="h-3 w-3" />
									<span className="truncate">{post?.categoryName}</span>
								</Badge>
							)}
							<span className="font-medium">다음글</span>
							<Icon
								className={`h-4 w-4 ${hasPost ? 'transition-transform group-hover:translate-x-1' : ''}`}
							/>
						</>
					)}
				</div>
			</CardContent>
			<CardHeader className="flex-1 px-4">
				<CardTitle
					className={`line-clamp-1 leading-tight ${isPrevious ? '' : 'text-end'} ${hasPost ? '' : 'text-muted-foreground'}`}
					title={hasPost ? title : ''}
				>
					{title}
				</CardTitle>
			</CardHeader>
		</Card>
	);

	return hasPost ? (
		<Link href={href!} className={`group ${isPrevious ? 'h-full' : 'block h-full'}`}>
			{content}
		</Link>
	) : (
		content
	);
}
