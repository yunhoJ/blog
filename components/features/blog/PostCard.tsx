import { Card, CardContent } from '@/components/ui/card';
import { BlogPostData, BlogPostMeta } from '@/types/blog';
import {
	User,
	Calendar,
	Folder,
	ChevronRight,
	Eye,
	Heart,
	Hash,
	MessageSquareText,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import PostDropdown from '@/components/features/blog/PostDropdown';
import PostDate from '@/components/common/PostDate';


export default function PostCard({
	params,
	category,
	postMeta,
	postHash,
	revisionHash,
	isAuthenticated,
}: {
	params: BlogPostData;
	category: string;
	postMeta: BlogPostMeta;
	postHash: string;
	revisionHash: string;
	isAuthenticated: boolean;
}) {
	return (
		<Card
			className={cn(
				'group bg-card/50 border-border/40 gap-0 overflow-hidden border backdrop-blur-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-lg',
				postMeta.postMainImageUrl ? 'py-0 pb-6' : 'py-6'
			)}
			style={{
				'--hover-border': 'var(--brand-border-strong)',
			} as React.CSSProperties}
			onMouseEnter={(e) => {
				e.currentTarget.style.borderColor = 'var(--brand-border-strong)';
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.borderColor = '';
			}}
		>
			{postMeta.postMainImageUrl && (
				<div className="relative aspect-[2/1] overflow-hidden">
					<div className="from-background/20 absolute inset-0 z-10 bg-gradient-to-t to-transparent" />
					<Image
						src={postMeta.postMainImageUrl}
						alt={postMeta.postMainImageUrl.split('_').pop() || 'main_image.png'}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				</div>
			)}
			<CardContent
				className={cn(
					'p-6',
					!postMeta.postMainImageUrl && postMeta.blogPostTag.length > 0 ? 'pt-0' : ''
				)}
			>
				<div className="flex items-center justify-between">
					<Badge
						key={category}
						variant="secondary"
						className="text-sm transition-colors"
						style={{
							backgroundColor: 'var(--brand-tag-bg)',
							color: 'var(--brand-tag-text)',
							border: 'none',
						}}
					>
						<Folder />
						<ChevronRight className="text-muted-foreground h-4 w-4" />
						{category}
					</Badge>
					<div className="flex basis-4/5 flex-wrap items-center justify-end gap-2">
						{postMeta.blogPostTag.map((tag) => (
							<Badge
								key={tag.tagName}
								className="text-xs transition-colors"
								style={{
									backgroundColor: 'var(--brand-tag-bg)',
									color: 'var(--brand-tag-text)',
									border: 'none',
								}}
							>
								<Hash />
								{tag.tagName}
							</Badge>
						))}
					</div>
				</div>
				<div className="mt-6 flex items-center justify-between gap-4">
					<h2
						className="truncate text-xl font-bold tracking-tight transition-colors"
						style={{
							color: 'inherit',
						}}
						onMouseEnter={(e) => {
							const card = e.currentTarget.closest('.group');
							if (card?.matches(':hover')) {
								e.currentTarget.style.color = 'var(--brand-link)';
							}
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.color = 'inherit';
						}}
					>
						{params.postTitle}
					</h2>
					{isAuthenticated && (
						<PostDropdown
							revisionHash={revisionHash}
							postHash={postHash}
							postTitle={params.postTitle}
						/>
					)}
				</div>
				{/* {post.description && (
					<p className="text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
						{post.description}
					</p>
				)} */}

				<div className="text-muted-foreground items-centert mt-6 flex items-center justify-between text-xs md:text-sm">
					<div className="flex justify-start gap-x-2 sm:gap-x-5">
						{params.user.userName && (
							<span className="flex items-center gap-1 sm:gap-1.5">
								<User className="h-4 w-4" />
								<span>{params.user.userName}</span>
							</span>
						)}
						{postMeta.firstPostPublishAt && (
							<span className="flex items-center gap-1 sm:gap-1.5">
								<Calendar className="h-4 w-4" />
								<time className="mobile:hidden block">
									<PostDate date={postMeta.firstPostPublishAt} includeTime={false} />
								</time>
								<time className="mobile:block hidden">
									<PostDate date={postMeta.firstPostPublishAt} includeTime={true} />
								</time>
							</span>
						)}
					</div>

					<div className="flex justify-end gap-x-2 sm:gap-x-5">
						<span className="flex items-center gap-1 sm:gap-1.5">
							<Eye className="h-4 w-4" />
							<span>{postMeta.postViewCount}</span>
						</span>
						<span className="flex items-center gap-1 sm:gap-1.5">
							<Heart className="h-4 w-4" />
							<span>{postMeta.postLikeCount}</span>
						</span>
						<span className="flex items-center gap-1 sm:gap-1.5">
							<MessageSquareText className="h-4 w-4" />
							<span>{postMeta.postCommentCount}</span>
						</span>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
