// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
// import { getPostBySlug, getPublishedPosts } from '@/lib/notion';
import { formatDate } from '@/lib/date';
import { CalendarIcon, UserIcon, ClockIcon } from 'lucide-react'; //, ChevronRight, ChevronLeft
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import { compile } from '@mdx-js/mdx';
import withSlugs from 'rehype-slug';
import withToc from '@stefanprobst/rehype-extract-toc';
import withTocExport from '@stefanprobst/rehype-extract-toc/mdx';
import GiscusComments from '@/components/GiscusComments';
import NotFound from './notfound';
import { Metadata } from 'next';
import { getPost } from '@/app/api/services/getPost';
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
			publishedTime: post.postPublished?.toISOString() || '',
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
		return <NotFound />;
	}
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
						<h1 className="text-3xl font-bold">{post.postTitle}</h1>
						<div className="flex flex-row gap-3">
							<div className="text-muted-foreground flex items-center gap-3 text-sm">
								<div className="flex items-center gap-1">
									<CalendarIcon className="h-4 w-4" />
									<span>{formatDate(post.postCreatedAt!)}</span>
								</div>
								<div className="flex items-center gap-1">
									<UserIcon className="h-4 w-4" />
									<span>{post.user.userName}</span>
								</div>
								<div className="flex items-center gap-1">
									<ClockIcon className="h-4 w-4" />
									<span>5분 읽기</span>
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
								{data?.toc?.map((item) => <TableOfContentsLink key={item.id} item={item} />)}
								<div className="space-y-2 border-t pt-5">
									<TableOfContentsLink item={{ id: 'top', value: '맨위로', depth: 2 }} />
									<TableOfContentsLink item={{ id: 'bottom', value: '맨아래로', depth: 2 }} />
								</div>
							</nav>
						</details>
					</div>

					{/* 본문 */}
					<div className="flex-1">
						<main className="prose dark:prose-invert prose-headings:scroll-mt-[var(--header-height)]">
							<MDXRemote
								source={post.postContent}
								options={{
									mdxOptions: {
										remarkPlugins: [remarkGfm],
										rehypePlugins: [rehypeSlug, rehypeSanitize, rehypePrettyCode],
									},
								}}
							/>
						</main>
					</div>
					<Separator className="" />

					{/* 다음화면 */}
					{/* <div className="flex h-30 gap-5" id="bottom">
						<Link href="/blog/3" className="w-1/2">
							<Button className="hover:bg-muted/50 flex h-full flex-col items-start gap-4 overflow-hidden border-2 bg-transparent text-black">
								<div className="flex flex-row items-center gap-2 font-bold">
									<ChevronLeft className="h-4 w-4" />
									<div>이전화면</div>
								</div>
								<div className="line-clamp-2 w-full text-xs break-words text-ellipsis whitespace-normal text-gray-500">
									화면 샘플내용 입니다. 이전 화면 샘플내용 입니다. 이전 화면 샘플내용 입니다. 이전
									화면 샘플내용 입니다. 이전 화면 샘플내용 입니다. 이전 화면 샘플내용 입니다. 이전
									화면 샘플내용 입니다. 이전 화면 샘플내용 입니다. 이전 화면 샘플내용 입니다. 화면
									샘플내용 입니다. 이전 화면 샘플내용 입니다. 이전 화면 샘플내용 입니다. 이전 화면
									샘플내용 입니다. 이전 화면 샘플내용 입니다. 이전 화면 샘플내용 입니다. 이전 화면
									샘플내용 입니다. 이전 화면 샘플내용 입니다. 이전 화면 샘플내용 입니다.
								</div>
							</Button>
						</Link>
						<Link href="/blog/2" className="w-1/2">
							<Button className="hover:bg-muted/50 flex h-full flex-col items-end gap-4 overflow-hidden border-2 bg-transparent text-ellipsis text-black">
								<div className="flex flex-row items-center gap-2">
									<div className="font-bold">다음화면</div>
									<ChevronRight className="h-4 w-4" />
								</div>
								<div className="line-clamp-2 w-full text-end text-xs break-words text-ellipsis whitespace-normal text-gray-500">
									부모 요소의 높이 제한 버튼(Button)에 h-20(고정 높이)이 적용되어 있어, 내부
									텍스트가 두 줄로 늘어나도 공간이 부족하면 줄바꿈이 일어나지 않을 수 있습니다.
									flex와 min-w-0 조합 flex 컨테이너에서 자식 요소가 min-w-0이 아니면 줄바꿈이 안 될
									수 있지만, 이미 min-w-0을 적용했습니다. Tailwind 플러그인 미설치 line-clamp
									유틸리티는 Tailwind CSS의 공식 플러그인(@tailwindcss/line-clamp)이 설치되어 있어야
									동작합니다. tailwind.config.js의 plugins에 require가 포함되어 있어야 합니다.
								</div>
							</Button>
						</Link>
					</div> */}
					<GiscusComments />
				</div>
				<aside className="relative hidden md:block">
					<div className="bg-muted/20 sticky top-[var(--sticky-top)] space-y-4 p-6 backdrop-blur-sm">
						<h3 className="text-lg font-semibold">목차</h3>
						<nav className="space-y-2 text-sm">
							{data?.toc?.map((item) => <TableOfContentsLink key={item.id} item={item} />)}
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
