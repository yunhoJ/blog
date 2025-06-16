'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Category } from '@/types/blog';
import { cn } from '@/lib/utils';
import { use, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CategorySectionProps {
	categories: Promise<Category[]>;
	selectedCategory: string;
}
export default function CategorySection({ categories, selectedCategory }: CategorySectionProps) {
	const allCategories = use(categories);
	const [isOpen, setIsOpen] = useState(false);

	// 전체 public 포스트 개수 계산
	const totalPublicCount = allCategories.reduce((acc, category) => acc + category.publicCount, 0);
	const displayList = [{ categoryName: '전체', publicCount: totalPublicCount }, ...allCategories];

	return (
		<>
			{/* lg 이상에서 보이는 카테고리 목록 */}
			<Card className="hidden space-y-3 lg:block">
				<CardHeader>
					<CardTitle>카테고리 목록</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-2 text-sm">
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
				</CardContent>
			</Card>

			{/* lg 미만에서 보이는 접을 수 있는 카테고리 */}
			<Card className="block space-y-3 lg:hidden">
				<CardHeader
					className="flex items-center justify-between"
					onClick={() => setIsOpen(!isOpen)}
				>
					<CardTitle>선택된 카테고리 : {selectedCategory}</CardTitle>

					{isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-4 w-4" />}
				</CardHeader>
				{isOpen && (
					<CardContent className="flex flex-col gap-2 text-sm">
						{displayList.map((category) => (
							<Link
								href={`?category=${category.categoryName}`}
								key={category.categoryName}
								onClick={() => setIsOpen(!isOpen)}
							>
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
					</CardContent>
				)}
			</Card>
		</>
	);
}
