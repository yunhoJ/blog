'use client';
import { Post } from '@/types/blog';
import Link from 'next/link';
import PostCard from './PostCard';
import { Button } from '@/components/ui/button';

interface PoasListProps {
	posts: Post[];
}
export default function PoasList({ posts }: PoasListProps) {
	return (
		<div className="space-y-6">
			<div className="flex flex-col gap-4">
				{posts.map((post, index) => (
					<Link href={`/blog/${post.slug}`} key={post.id}>
						<PostCard post={post} isFirst={index === 0} />
					</Link>
				))}
			</div>
			<div>
				<Button variant="outline" size="lg" className="w-full">
					더보기
				</Button>
			</div>
		</div>
	);
}
