// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
// import { getPostBySlug, getPublishedPosts } from '@/lib/notion';
import { formatDate } from '@/lib/date';
import {
	CalendarIcon,
	UserIcon,
	ClockIcon,
	Edit2Icon,
	ChevronLeft,
	ChevronRight,
} from 'lucide-react'; //, ChevronRight, ChevronLeft
import React from 'react';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import { compile } from '@mdx-js/mdx';
import withSlugs from 'rehype-slug';
import withToc from '@stefanprobst/rehype-extract-toc';
import withTocExport from '@stefanprobst/rehype-extract-toc/mdx';
import GiscusComments from '@/components/GiscusComments';
import { Metadata } from 'next';
import { getPost } from '@/app/api/services/getPost';
import ViewCountIncrementer from '@/components/features/blog/ViewCountIncrementer';
import type { Root } from 'hast';
import { extractMdxJsxFromP } from '@/lib/replaceContent';
import { notFound } from 'next/navigation';
import remarkBreaks from 'remark-breaks';
import PostOtherContent from '@/components/features/blog/PostOtherContent';

interface BlogPostProps {
	params: Promise<{ slug: string }>;
}
// 동적 메타데이터 생성
export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
	const slug = (await params).slug;
	const post = await getPost(slug);

	if (!post) {
		return {
			title: '포스트를 찾을 수 없습니다',
			description: '요청하신 블로그 포스트를 찾을 수 없습니다.',
		};
	}

	return {
		title: post.postTitle,
		description: post.postContent.slice(0, 100) || `${post.postTitle} - yunho blog`,
		// keywords: post.postTags,
		authors: [{ name: post.user.userName || 'yunho' }],
		publisher: post.user.userName || 'yunho',
		alternates: {
			canonical: `/blog/${post.revisionHash}`,
		},
		openGraph: {
			title: post.postTitle,
			description: post.postContent.slice(0, 100),
			url: `/blog/${post.revisionHash}`,
			type: 'article',
			publishedTime: post.blogPostMeta.firstPostPublishAt?.toISOString() || '',
			modifiedTime: post.postUpdatedAt.toISOString() || '',
			authors: post.user.userName || 'yunho',
			// tags: post.tags,
		},
	};
}

interface TocEntry {
	value: string;
	depth: number;
	id?: string;
	children?: Array<TocEntry>;
}

// 메타 정보 아이템 헬퍼 컴포넌트
function MetaItem({
	icon: Icon,
	title,
	text,
	className = '',
}: {
	icon: React.ComponentType<{ className?: string }>;
	title?: string;
	text: string;
	className?: string;
}) {
	return (
		<div className={`flex items-center gap-1 ${className}`} title={title}>
			<Icon className="h-4 w-4" />
			<span>{text}</span>
		</div>
	);
}

function TableOfContentsLink({ item }: { item: TocEntry }) {
	return (
		<div className="space-y-2">
			<Link
				key={item.id}
				href={`#${item.id}`}
				className={`hover:text-foreground text-muted-foreground block font-medium transition-colors`}
			>
				{item.value}
			</Link>
			{item.children && item.children.length > 0 && (
				<div className="space-y-2 pl-4">
					{item.children.map((subItem) => (
						<TableOfContentsLink key={subItem.id} item={subItem} />
					))}
				</div>
			)}
		</div>
	);
}

export default async function BlogPost({ params }: BlogPostProps) {
	const slug = (await params).slug;
	const post = await getPost(slug);
	if (!post) {
		notFound();
	}
	const rehypeAllowBrJsx = () => {
		return (tree: Root) => {
			extractMdxJsxFromP(tree);
		};
	};

	const schema = {
		...defaultSchema,
		tagNames: [...(defaultSchema.tagNames || []), 'br'],
		attributes: {
			...defaultSchema.attributes,
			span: ['style'],
		},
	};
	const { data } = await compile(post.postContent, {
		rehypePlugins: [
			withSlugs,
			rehypeSanitize,
			withToc,
			withTocExport,
			/** Optionally, provide a custom name for the export. */
			// [withTocExport, { name: 'toc' }],
		],
	});

	return (
		<div className="container py-8">
			{/* 조회수 증가 컴포넌트 - 한 번만 호출 */}
			<ViewCountIncrementer
				postHash={post.postHash}
				userId={post.userId}
				readTime={post.postReadTimeSeconds}
			/>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_220px] md:gap-8 lg:grid-cols-[200px_1fr_220px]">
				<aside className="hidden lg:block">{/* 왼쪽 사이드바  작은 화면일떄 숨김 */}</aside>
				<div className="flex h-full flex-col gap-2 space-y-4 overflow-hidden px-4">
					{/* 헤더 */}
					<div className="flex flex-col gap-2">
						{/* <div className="flex flex-row gap-1">
							{post.tags?.map((tag) => (
								<Badge className="flex-col" key={tag}>
									{tag}
								</Badge>
							))}
						</div> */}
						<h1 className="text-3xl font-bold break-words">{post.postTitle}</h1>
						<div className="flex flex-row gap-3">
							<div className="text-muted-foreground flex w-full items-center justify-start gap-5 text-sm">
								{/* 왼쪽 그룹: 발행일, 수정일 */}
								<div className="flex flex-row gap-2">
									<MetaItem
										icon={CalendarIcon}
										title="게시일"
										text={formatDate(post.blogPostMeta.firstPostPublishAt!)}
									/>
									{/* <MetaItem
										icon={Edit2Icon}
										title="수정일"
										text={formatDate(post.postUpdatedAt!)}
										className="hidden md:flex"
									/> */}
								</div>

								{/* 오른쪽 그룹: 작성자, 읽기 시간 */}
								<div className="flex flex-row gap-2">
									<MetaItem icon={UserIcon} title="작성자" text={post.user.userName} />
									<MetaItem
										icon={ClockIcon}
										title="읽기 시간"
										text={`${post.postReadTimeSeconds / 60}분 읽기`}
									/>
								</div>
							</div>
						</div>
					</div>
					<Separator className="" />
					{/* 모바일 전용 테마 토글 */}
					{/* 모바일 전용 목차 */}
					<div className="sticky top-[var(--header-height)] mb-6 md:hidden">
						<details className="bg-muted/60 rounded-lg p-4 backdrop-blur-sm">
							<summary className="cursor-pointer text-lg font-semibold">목차</summary>
							<nav className="mt-3 space-y-3 text-sm">
								{data?.toc?.map((item: TocEntry) => (
									<TableOfContentsLink key={item.id} item={item} />
								))}
								<div className="space-y-2 border-t pt-5">
									<TableOfContentsLink item={{ id: 'top', value: '맨위로', depth: 2 }} />
									<TableOfContentsLink item={{ id: 'bottom', value: '맨아래로', depth: 2 }} />
								</div>
							</nav>
						</details>
					</div>

					{/* 본문 */}
					<div className="flex-1">
						<main className="mdx-viewer prose dark:prose-invert prose-headings:scroll-mt-[var(--header-height)]">
							<MDXRemote
								source={post.postContent}
								options={{
									mdxOptions: {
										remarkPlugins: [remarkGfm, remarkBreaks],
										rehypePlugins: [
											rehypeSlug,
											rehypeAllowBrJsx, // JSX <br /> 변환 먼저 실행
											[rehypeSanitize, schema],
											// rehypeSanitize, br 허용
											rehypePrettyCode,
										],
									},
								}}
							/>
						</main>
					</div>
					<Separator className="scroll-mt-[var(--header-height)]" id="bottom" />
					<PostOtherContent
						firstPostPublishAt={post.blogPostMeta.firstPostPublishAt!}
						postPublish={post.blogPostPublish!}
						userId={post.userId}
					/>

					<GiscusComments
						postHash={post.postHash}
						postReactionCount={post.blogPostMeta.postLikeCount}
					/>
				</div>
				<aside className="relative hidden md:block">
					<div className="bg-muted/20 sticky top-[var(--sticky-top)] space-y-4 p-6 backdrop-blur-sm">
						<h3 className="text-lg font-semibold">목차</h3>
						<nav className="space-y-2 text-sm">
							{data?.toc?.map((item: TocEntry) => (
								<TableOfContentsLink key={item.id} item={item} />
							))}
							<div className="space-y-2 border-t pt-5">
								<TableOfContentsLink item={{ id: 'top', value: '맨위로', depth: 2 }} />
								<TableOfContentsLink item={{ id: 'bottom', value: '맨아래로', depth: 2 }} />
							</div>
						</nav>
					</div>
				</aside>
			</div>
		</div>
	);
}
