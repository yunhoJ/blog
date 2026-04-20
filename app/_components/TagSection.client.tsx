'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Category } from '@/types/blog';
import { cn } from '@/lib/utils';
import { use, useEffect, useState } from 'react';
import { CheckIcon, ChevronDown, ChevronUp, Folder, Hash, Plus, XIcon } from 'lucide-react';
import { useAuthStore } from '@/lib/store/useAuthStore';

import CategoryDropdown from '@/components/features/blog/CategoryDropdown';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toastError, toastSuccess } from '@/lib/toasttError';
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
	const [isAddCategory, setIsAddCategory] = useState(false);
	const [newCategoryName, setNewCategoryName] = useState<string>('');
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

	// 수정 모드 중 스크롤 또는 리사이즈 시 수정 모드 종료
	useEffect(() => {
		const isEditing = editingCategoryName !== null || isAddCategory;
		if (!isEditing) return;

		const handleResize = () => {
			setEditingCategoryName(null);
			setIsAddCategory(false);
			setNewCategoryName('');
		};

		const handleScroll = () => {
			setEditingCategoryName(null);
			setIsAddCategory(false);
			setNewCategoryName('');
		};

		// lg 사이즈 이하는 모바일 판단 및 scroll event 제거
		const isMobile = window.innerWidth < 1024;
		window.addEventListener('scroll', handleScroll);
		if (!isMobile) {
			window.addEventListener('resize', handleResize);
		}

		return () => {
			window.removeEventListener('scroll', handleScroll);
			if (!isMobile) {
				window.removeEventListener('resize', handleResize);
			}
		};
	}, [editingCategoryName, isAddCategory]);

	// Link 클릭 방지 헬퍼 함수
	const preventLinkClick = (e: React.SyntheticEvent) => {
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

	// 카테고리 추가 함수
	const handleAddCategory = async () => {
		try {
			// displayList와 newCategoryName 중복 체크
			const isDuplicate = displayList.some(
				(category) => category.categoryName === newCategoryName.trim()
			);

			if (isDuplicate) {
				toastError(new Error('이미 존재하는 카테고리 이름입니다.'));
				setNewCategoryName('');
				setIsAddCategory(false);
				return;
			}

			await postApi.createCategory(newCategoryName);
			toastSuccess('카테고리가 추가되었습니다.');
			// 카테고리 추가 후 목록 새로고침
			router.push(`/?category=${selectedCategory}`);
			setNewCategoryName('');
			setIsAddCategory(false);
		} catch (error) {
			toastError(new Error('카테고리 추가 중 오류가 발생했습니다.'));
			setNewCategoryName('');
			setIsAddCategory(false);
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
													// 한글 IME 조합 중 Enter는 조합 확정/키 이벤트가 겹칠 수 있어 중복 호출 방지
													// (React KeyboardEvent에도 isComposing이 노출됨)
													if (e.nativeEvent.isComposing) return;
													if (e.key === 'Enter') {
														preventLinkClick(e);
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

					{activeTab === 'categories' && isAuthenticated && (
						<>
							{isAddCategory ? (
								<div className="mt-4 flex items-center gap-2">
									<Input
										className="border-primary"
										type="text"
										autoFocus
										value={newCategoryName}
										onChange={(e) => setNewCategoryName(e.target.value)}
									/>
									<div className="flex items-center gap-1">
										<Button
											size="icon"
											variant="ghost"
											className="hover:bg-destructive/10 h-7 w-7 rounded-md transition-colors"
											onClick={() => {
												setIsAddCategory(false);
												setNewCategoryName('');
											}}
										>
											<XIcon className="text-destructive h-3.5 w-3.5" />
										</Button>

										<Button
											size="icon"
											variant="ghost"
											className="hover:bg-primary/10 h-7 w-7 rounded-md transition-colors"
											onClick={() => {
												handleAddCategory();
											}}
										>
											<CheckIcon className="text-primary h-3.5 w-3.5" />
										</Button>
									</div>
								</div>
							) : (
								<Button
									className="border-muted-foreground/30 bg-muted/30 text-muted-foreground hover:border-primary/50 hover:bg-primary/5 hover:text-primary mt-4 flex w-full items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-all"
									onClick={() => {
										// 카테고리 추가 로직
										setIsAddCategory(true);
									}}
								>
									<Plus className="h-4 w-4" />
									<span>카테고리 추가</span>
								</Button>
							)}
						</>
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
														if (e.nativeEvent.isComposing) return;
														if (e.key === 'Enter') {
															preventLinkClick(e);
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

						{activeTab === 'categories' && isAuthenticated && (
							<>
								{isAddCategory ? (
									<div className="mt-4 flex items-center gap-2">
										<Input
											className="border-primary"
											type="text"
											autoFocus
											value={newCategoryName}
											onChange={(e) => setNewCategoryName(e.target.value)}
										/>
										<div className="flex items-center gap-1">
											<Button
												size="icon"
												variant="ghost"
												className="hover:bg-destructive/10 h-7 w-7 rounded-md transition-colors"
												onClick={() => {
													setIsAddCategory(false);
													setNewCategoryName('');
												}}
											>
												<XIcon className="text-destructive h-3.5 w-3.5" />
											</Button>

											<Button
												size="icon"
												variant="ghost"
												className="hover:bg-primary/10 h-7 w-7 rounded-md transition-colors"
												onClick={() => {
													handleAddCategory();
												}}
											>
												<CheckIcon className="text-primary h-3.5 w-3.5" />
											</Button>
										</div>
									</div>
								) : (
									<Button
										className="border-muted-foreground/30 bg-muted/30 text-muted-foreground hover:border-primary/50 hover:bg-primary/5 hover:text-primary mt-4 flex w-full items-center justify-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-all"
										onClick={() => {
											// 카테고리 추가 로직
											setIsAddCategory(true);
										}}
									>
										<Plus className="h-4 w-4" />
										<span>카테고리 추가</span>
									</Button>
								)}
							</>
						)}
					</CardContent>
				)}
			</Card>
		</>
	);
}
