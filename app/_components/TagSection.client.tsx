'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Category } from '@/types/blog';
import { cn } from '@/lib/utils';
import { use } from 'react';

interface CategorySectionProps {
	categories: Promise<Category[]>;
	selectedCategory: string;
}
export default function CategorySection({ categories, selectedCategory }: CategorySectionProps) {
	const allCategories = use(categories);

	// 전체 public 포스트 개수 계산
	const totalPublicCount = allCategories.reduce((acc, category) => acc + category.publicCount, 0);
	const displayList = [{ categoryName: '전체', publicCount: totalPublicCount }, ...allCategories];

	return (
		<Card className="gap-3">
			<CardHeader>
				<CardTitle>카테고리 목록</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col gap-2 text-sm">
					{displayList.map((category) => (
						<Link href={`?category=${category.categoryName}`} key={category.categoryName}>
							<div
								className={cn(
									'hover:bg-muted-foreground/10 text-muted-foreground flex items-center justify-between rounded-md p-1.5 text-sm transition-colors',
									selectedCategory === category.categoryName &&
										'bg-muted-foreground/10 text-foreground font-medium'
								)}
							>
								<span>{category.categoryName}</span>
								<span className="text-muted-foreground/50 text-sm">{category.publicCount}</span>
							</div>
						</Link>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
