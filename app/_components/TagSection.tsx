import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { TagFilterItem } from '@/types/blog';
import { cn } from '@/lib/utils';

interface TagSectionProps {
	tags: TagFilterItem[];
	selectedTag: string;
}

export default function TagSection(props: TagSectionProps) {
	return (
		<Card className="gap-3">
			<CardHeader>
				<CardTitle>태그 목록</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col gap-2 text-sm">
					{props.tags.map((tag) => (
						<Link href={`?tag=${tag.name}`} key={tag.name}>
							<div
								className={cn(
									'hover:bg-muted-foreground/10 text-muted-foreground flex items-center justify-between rounded-md p-1.5 text-sm transition-colors',
									props.selectedTag === tag.name &&
										'bg-muted-foreground/10 text-foreground font-medium'
								)}
							>
								<span>{tag.name}</span>
								<span className="text-muted-foreground/50 text-sm">{tag.count}</span>
							</div>
						</Link>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
