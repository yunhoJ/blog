import { Card, CardContent } from '@/components/ui/card';
import { BlogPostData, BlogPostMeta } from '@/types/blog';
import { User, Calendar, Folder, ChevronRight, Eye, Heart } from 'lucide-react';
import { formatDate } from '@/lib/date';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const getCategoryColor = (category: string) => {
	const colors = [
		'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
		'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
		'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
		'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
		'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
		'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
		'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
		'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
		'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
		'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
		'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
		'bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200',
		'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
		'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
		'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200',
		'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200',
		'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200',
		'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-200',
	];
	const index = category.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
	return colors[index % colors.length];
};

export default function PostCard({
	params,
	category,
	postMeta,
}: {
	params: BlogPostData;
	category: string;
	postMeta: BlogPostMeta;
}) {
	return (
		<Card
			className={cn(
				'group bg-card/50 border-border/40 hover:border-primary/20 gap-0 overflow-hidden border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg',
				postMeta.postMainImageUrl ? 'py-0 pb-6' : 'py-6'
			)}
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
				<div className="flex flex-wrap justify-end gap-2">
					{postMeta.blogPostTag.map((tag) => (
						<Badge
							key={tag.tagName}
							className={cn('text-xs transition-colors', getCategoryColor(tag.tagName))}
						>
							{tag.tagName}
						</Badge>
					))}
				</div>
				<div className="flex items-center gap-1">
					<Badge
						key={category}
						variant="secondary"
						className={cn('text-sm transition-colors', getCategoryColor(category))}
					>
						<Folder className="mr-1" />

						{category}
					</Badge>
					<ChevronRight className="text-muted-foreground h-4 w-4" />
					<h2 className="group-hover:text-primary text-xl font-bold tracking-tight transition-colors">
						{params.postTitle}
					</h2>
				</div>
				{/* {post.description && (
					<p className="text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
						{post.description}
					</p>
				)} */}

				<div className="text-muted-foreground items-centert mt-6 flex items-center justify-between text-xs md:text-sm">
					<div className="flex justify-start gap-x-5">
						{params.user.userName && (
							<span className="flex items-center gap-1.5">
								<User className="h-4 w-4" />
								<span>{params.user.userName}</span>
							</span>
						)}
						{params.postPublished && (
							<span className="flex items-center gap-1.5">
								<Calendar className="h-4 w-4" />
								<time>{formatDate(params.postPublished)}</time>
							</span>
						)}
					</div>

					<div className="flex justify-end gap-x-5">
						<span className="flex items-center gap-1.5">
							<Eye className="h-4 w-4" />
							<span>{postMeta.postViewCount}</span>
						</span>
						<span className="flex items-center gap-1.5">
							<Heart className="h-4 w-4" />
							<span>{postMeta.postLikeCount}</span>
						</span>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
