import { userId } from '@/app/api/constant/const';
import { postApi } from '@/app/api/services/api';
import {
	Command,
	CommandInput,
	CommandList,
	CommandItem,
	CommandEmpty,
} from '@/components/ui/command';
import { handleAxiosError, toastError } from '@/lib/toasttError';
import { useEffect, useState } from 'react';

interface CategorySelectorProps {
	onSelect: (category: string | null) => void;
}

const categories = ['']; // 서버에서 불러올 수도 있음

export default function CategorySelector({ onSelect }: CategorySelectorProps) {
	const [input, setInput] = useState('');
	const [selected, setSelected] = useState<string | null>(null);
	const [allCategories, setAllCategories] = useState(categories);

	useEffect(() => {
		const fetchCategories = async () => {
			// 포스트 카테고리 조회
			const postHash = localStorage.getItem('postHash');
			let selectedPostCategory: string | null = null;
			if (postHash) {
				try {
					const postCategory = await postApi.getPostPublishCategory(postHash);
					if (postCategory.success && postCategory.data) {
						selectedPostCategory = postCategory.data;
						setSelected(selectedPostCategory);
						onSelect(selectedPostCategory);
					}
				} catch (error) {
					handleAxiosError(error);
				}
			}
			// 카테고리 조회
			const categories = await postApi.getCategories(userId);
			const newCategoryNames: string[] = selectedPostCategory ? [selectedPostCategory] : [];
			for (const { categoryName } of categories) {
				if (categoryName === selectedPostCategory) continue;
				newCategoryNames.push(categoryName);
			}
			setAllCategories(newCategoryNames);
		};
		fetchCategories();
	}, []);
	const filtered = allCategories.filter((cat) => cat.toLowerCase().includes(input.toLowerCase()));

	const handleCreate = async () => {
		if (input && !filtered.includes(input)) {
			const category = await postApi.createCategory(userId, input);
			setSelected(category.data.categoryName);
			setAllCategories([...allCategories, category.data.categoryName]);
			onSelect(category.data.categoryName);
		}
	};

	return (
		<Command>
			<CommandInput placeholder="카테고리 검색 또는 생성" onValueChange={setInput} value={input} />
			<CommandList>
				<CommandEmpty>
					<div className="flex items-center justify-between">
						<span>“{input}” 카테고리를 생성</span>
						<button className="text-sm text-blue-500 hover:underline" onClick={handleCreate}>
							생성
						</button>
					</div>
				</CommandEmpty>
				{filtered.map((category) => (
					<CommandItem
						key={category}
						onSelect={() => {
							if (selected === category) {
								setSelected(null);
								onSelect(null);
							} else {
								setSelected(category);
								onSelect(category);
							}
						}}
						className={`${selected === category ? 'data-[selected=true]:text-primary text-primary text-lg font-bold' : ''}`}
					>
						{category}
					</CommandItem>
				))}
			</CommandList>
		</Command>
	);
}
