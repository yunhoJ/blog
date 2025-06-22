import { Card, CardContent } from '@/components/ui/card';
import { BlogPostData, BlogPostMeta } from '@/types/blog';
import { User, Calendar, Folder, ChevronRight, Eye, Heart } from 'lucide-react';
import { formatDate } from '@/lib/date';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const getCategoryColor = (category: string) => {
	const colors = [
		'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
		'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
		'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
		'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
		'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
		'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
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
		<Card className="group bg-card/50 border-border/40 hover:border-primary/20 overflow-hidden border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
			{/* {params.postCoverImage && (
				<div className="relative aspect-[2/1] overflow-hidden">
					<div className="from-background/20 absolute inset-0 z-10 bg-gradient-to-t to-transparent" />
					<Image
						src={params.postCoverImage}
						alt={params.postTitle}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						// priority={isFirst}
						className="object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				</div>
			)} */}
			<CardContent className="p-6">
				<div className="mb-2 flex items-center gap-1">
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
				<div className="text-muted-foreground items-centert mt-6 flex items-center justify-between gap-x-5 text-sm">
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
