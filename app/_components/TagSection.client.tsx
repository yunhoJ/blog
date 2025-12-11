'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Category } from '@/types/blog';
import { cn } from '@/lib/utils';
import { use, useEffect, useState } from 'react';
import { CheckIcon, ChevronDown, ChevronUp, Folder, Hash, XIcon } from 'lucide-react';
import { useAuthStore } from '@/lib/store/useAuthStore';

import CategoryDropdown from '@/components/features/blog/CategoryDropdown';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toastError } from '@/lib/toasttError';
import { postApi } from '../api/services/api';
import { useRouter } from 'next/navigation';

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
	const router = useRouter();
	const allCategories = use(categories);
	const { isAuthenticated } = useAuthStore();
	const allTags = use(tags);
	const [isOpen, setIsOpen] = useState(false);
	const [editingCategoryName, setEditingCategoryName] = useState<string | null>(null);
	const [editingCategoryValue, setEditingCategoryValue] = useState<string>('');
	const [activeTab, setActiveTab] = useState(selectedTag ? 'tags' : 'categories');
	// 전체 public 포스트 개수 계산
	const totalPublicCount = allCategories.reduce((acc, category) => acc + category.publicCount, 0);
	const displayList = [{ categoryName: '전체', publicCount: totalPublicCount }, ...allCategories];

	// selectedCategory가 변경되면 수정 모드 종료
	useEffect(() => {
		setEditingCategoryName(null);
		setEditingCategoryValue('');
	}, [selectedCategory]);
	// 수정 모드중 스크롤 또는 리사이즈 시 수정 모드 종료
	useEffect(() => {
		if (!editingCategoryName) return;

		const handleResize = () => {
			setEditingCategoryName(null);
		};

		const handleScroll = () => {
			setEditingCategoryName(null);
		};

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	}, [editingCategoryName]);

	// Link 클릭 방지 헬퍼 함수
	const preventLinkClick = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
	};
	//카테고리 변경 함수
	const handleCategoryChange = async (
		originalCategoryName: string,
		changedCategoryName: string
	) => {
		if (originalCategoryName === changedCategoryName.trim()) return;
		if (changedCategoryName.trim() === '') toastError(new Error('카테고리 이름을 입력해 주세요.'));

		try {
			await postApi.updateCategory(originalCategoryName, changedCategoryName);
			router.push('/?category=' + changedCategoryName);
		} catch (error) {
			toastError(new Error('카테고리 변경 중 오류가 발생했습니다.'));
		}
	};

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
						displayList.map((category) => {
							const isAllCategory = category.categoryName === '전체';
							return (
								<Link
									key={category.categoryName}
									href={`?category=${category.categoryName}`}
									className={cn(
										'hover:bg-muted-foreground/10 text-muted-foreground flex items-center justify-between gap-2 rounded-md p-1.5 text-sm transition-colors',
										selectedCategory === category.categoryName &&
											'bg-muted-foreground/10 text-foreground font-medium'
									)}
								>
									<div className="flex flex-1 items-center justify-between">
										{editingCategoryName === category.categoryName ? (
											<Input
												className="border-primary"
												type="text"
												value={editingCategoryValue}
												onClick={preventLinkClick}
												onChange={(e) => {
													setEditingCategoryValue(e.target.value);
												}}
												onKeyDown={(e) => {
													if (e.key === 'Enter') {
														handleCategoryChange(editingCategoryName, editingCategoryValue);
													}
													if (e.key === 'Escape') {
														setEditingCategoryName(null);
														setEditingCategoryValue('');
													}
												}}
												autoFocus
											/>
										) : (
											<>
												<span>{category.categoryName}</span>
												<span className="text-muted-foreground/50 text-sm">
													{category.publicCount}
												</span>
											</>
										)}
									</div>
									{isAuthenticated &&
										(!isAllCategory ? (
											editingCategoryName === category.categoryName ? (
												<div className="flex items-center gap-1">
													<Button
														size="icon"
														variant="ghost"
														className="hover:bg-destructive/10 h-7 w-7 rounded-md transition-colors"
														onClick={(e) => {
															preventLinkClick(e);
															setEditingCategoryName(null);
															setEditingCategoryValue('');
														}}
													>
														<XIcon className="text-destructive h-3.5 w-3.5" />
													</Button>

													<Button
														size="icon"
														variant="ghost"
														className="hover:bg-primary/10 h-7 w-7 rounded-md transition-colors"
														onClick={(e) => {
															preventLinkClick(e);
															handleCategoryChange(editingCategoryName, editingCategoryValue);
														}}
													>
														<CheckIcon className="text-primary h-3.5 w-3.5" />
													</Button>
												</div>
											) : (
												<div className="flex items-center" onClick={(e) => e.stopPropagation()}>
													<CategoryDropdown
														categoryName={category.categoryName}
														categoryCount={category.publicCount}
														setEditingCategoryName={setEditingCategoryName}
														setEditingCategoryValue={setEditingCategoryValue}
													/>
												</div>
											)
										) : (
											// 전체 카테고리인 경우 빈 공간 추가
											<div className="w-4" />
										))}
								</Link>
							);
						})
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
							displayList.map((category) => {
								const isAllCategory = category.categoryName === '전체';
								return (
									<Link
										key={category.categoryName}
										href={`?category=${category.categoryName}`}
										onClick={() => setIsOpen(!isOpen)}
										className={cn(
											'hover:bg-muted-foreground/10 text-muted-foreground flex items-center justify-between gap-2 rounded-md p-1.5 text-sm transition-colors',
											selectedCategory === category.categoryName &&
												'bg-muted-foreground/10 text-foreground font-medium'
										)}
									>
										<div className="flex flex-1 items-center justify-between">
											{editingCategoryName === category.categoryName ? (
												<Input
													className="border-primary mr-4"
													type="text"
													value={editingCategoryValue}
													onClick={preventLinkClick}
													onChange={(e) => {
														setEditingCategoryValue(e.target.value);
													}}
													onKeyDown={(e) => {
														if (e.key === 'Enter') {
															handleCategoryChange(editingCategoryName, editingCategoryValue);
														}
														if (e.key === 'Escape') {
															setEditingCategoryName(null);
															setEditingCategoryValue('');
														}
													}}
													autoFocus
												/>
											) : (
												<>
													<span>{category.categoryName}</span>
													<span className="text-muted-foreground/50 text-sm">
														{category.publicCount}
													</span>
												</>
											)}
										</div>
										{isAuthenticated &&
											(!isAllCategory ? (
												editingCategoryName === category.categoryName ? (
													<div className="flex items-center gap-1">
														<Button
															size="icon"
															variant="ghost"
															className="hover:bg-destructive/10 h-7 w-7 rounded-md transition-colors"
															onClick={(e) => {
																preventLinkClick(e);
																setEditingCategoryName(null);
																setEditingCategoryValue('');
															}}
														>
															<XIcon className="text-destructive h-3.5 w-3.5" />
														</Button>

														<Button
															size="icon"
															variant="ghost"
															className="hover:bg-primary/10 h-7 w-7 rounded-md transition-colors"
															onClick={(e) => {
																preventLinkClick(e);
																setEditingCategoryName(null);
															}}
														>
															<CheckIcon className="text-primary h-3.5 w-3.5" />
														</Button>
													</div>
												) : (
													<div className="flex items-center" onClick={(e) => e.stopPropagation()}>
														<CategoryDropdown
															categoryName={category.categoryName}
															categoryCount={category.publicCount}
															setEditingCategoryName={setEditingCategoryName}
															setEditingCategoryValue={setEditingCategoryValue}
														/>
													</div>
												)
											) : (
												// 전체 카테고리인 경우 빈 공간 추가
												<div className="w-8" />
											))}
									</Link>
								);
							})
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
