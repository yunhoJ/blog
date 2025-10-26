'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Category } from '@/types/blog';
import { cn } from '@/lib/utils';
import { use, useState } from 'react';
import { ChevronDown, ChevronUp, Folder, Hash } from 'lucide-react';

interface CategorySectionProps {
	categories: Promise<Category[]>;
	selectedCategory: string;
	selectedTag: string;
	tags: Promise<Record<string, number>>;
}
export default function CategorySection({
	categories,
	selectedCategory,
	selectedTag,
	tags,
}: CategorySectionProps) {
	const allCategories = use(categories);
	const allTags = use(tags);
	const [isOpen, setIsOpen] = useState(false);
	const [activeTab, setActiveTab] = useState(selectedTag ? 'tags' : 'categories');
	// 전체 public 포스트 개수 계산
	const totalPublicCount = allCategories.reduce((acc, category) => acc + category.publicCount, 0);
	const displayList = [{ categoryName: '전체', publicCount: totalPublicCount }, ...allCategories];

	return (
		<>
			{/* lg 이상에서 보이는 카테고리 목록 */}
			<Card className="hidden space-y-3 border-1 py-4 lg:block">
				<div className="flex justify-center gap-2 px-4">
					<button
						className={cn(
							'text-muted-foreground flex w-full items-center justify-center border-b-2 font-extrabold',
							activeTab === 'categories' && 'border-primary text-primary'
						)}
						onClick={() => setActiveTab('categories')}
					>
						<Folder className="mr-1 h-4 w-4" />
						카테고리
					</button>
					<button
						className={cn(
							'text-muted-foreground flex w-full items-center justify-center border-b-2 font-extrabold',
							activeTab === 'tags' && 'border-primary text-primary'
						)}
						onClick={() => setActiveTab('tags')}
					>
						<Hash className="mr-1 h-4 w-4" />
						태그
					</button>
				</div>

				<CardContent className="flex flex-col gap-2 text-sm">
					{activeTab === 'categories' ? (
						displayList.map((category) => (
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
						))
					) : (
						<div className="flex flex-col gap-2">
							{Object.entries(allTags).map(([tagName, count]) => (
								<Link href={`?tag=${tagName}`} key={tagName}>
									<div
										className={cn(
											'hover:bg-muted-foreground/10 text-muted-foreground flex items-center justify-between rounded-md p-1.5 text-sm transition-colors',
											selectedTag === tagName &&
												'bg-muted-foreground/10 text-foreground font-medium'
										)}
									>
										<span>{tagName}</span>
										<span className="text-muted-foreground/50 text-sm">{count}</span>
									</div>
								</Link>
							))}
						</div>
					)}
				</CardContent>
			</Card>

			{/* lg 미만에서 보이는 접을 수 있는 카테고리 */}
			<Card className="block space-y-3 border-1 pt-0 lg:hidden">
				<div className="flex justify-center gap-2 p-4">
					<button
						className={cn(
							'text-muted-foreground flex w-full items-center justify-center border-b-2 font-extrabold',
							activeTab === 'categories' && 'border-primary text-primary'
						)}
						onClick={() => setActiveTab('categories')}
					>
						<Folder className="mr-1 h-4 w-4" />
						카테고리
					</button>
					<button
						className={cn(
							'text-muted-foreground flex w-full items-center justify-center border-b-2 font-extrabold',
							activeTab === 'tags' && 'border-primary text-primary'
						)}
						onClick={() => setActiveTab('tags')}
					>
						<Hash className="mr-1 h-4 w-4" />
						태그
					</button>
				</div>
				<CardHeader
					className="flex items-center justify-between"
					onClick={() => setIsOpen(!isOpen)}
				>
					{/* {activeTab === 'categories' && selectedCategory ? (
						<CardTitle>카테고리 선택</CardTitle>
					) : (
						<CardTitle>태그 선택</CardTitle>
					)} */}
					{selectedTag ? (
						<CardTitle className="flex items-center gap-1">
							<Hash className="text-primary h-4 w-4" />
							{selectedTag}
						</CardTitle>
					) : (
						<CardTitle className="flex items-center gap-1">
							<Folder className="text-primary h-4 w-4" />
							{selectedCategory}
						</CardTitle>
					)}

					{isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-4 w-4" />}
				</CardHeader>
				{isOpen && (
					<CardContent className="flex flex-col gap-2 text-sm">
						{activeTab === 'categories' ? (
							displayList.map((category) => (
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
							))
						) : (
							<div className="flex flex-col gap-2">
								{Object.entries(allTags).map(([tagName, count]) => (
									<Link href={`?tag=${tagName}`} key={tagName} onClick={() => setIsOpen(!isOpen)}>
										<div
											className={cn(
												'hover:bg-muted-foreground/10 text-muted-foreground flex items-center justify-between rounded-md p-1.5 text-sm transition-colors',
												selectedTag === tagName &&
													'bg-muted-foreground/10 text-foreground font-medium'
											)}
										>
											<span>{tagName}</span>
											<span className="text-muted-foreground/50 text-sm">{count}</span>
										</div>
									</Link>
								))}
							</div>
						)}
					</CardContent>
				)}
			</Card>
		</>
	);
}
