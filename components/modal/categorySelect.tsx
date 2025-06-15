import { userId } from '@/app/api/constant/const';
import { postApi } from '@/app/api/services/api';
import {
	Command,
	CommandInput,
	CommandList,
	CommandItem,
	CommandEmpty,
} from '@/components/ui/command';
import { useEffect, useState } from 'react';

interface CategorySelectorProps {
	onSelect: (category: string | null) => void;
}

const categories = ['운동', '공부', '여행']; // 서버에서 불러올 수도 있음

export default function CategorySelector({ onSelect }: CategorySelectorProps) {
	const [input, setInput] = useState('');
	const [selected, setSelected] = useState<string | null>(null);
	const [allCategories, setAllCategories] = useState(categories);

	useEffect(() => {
		const fetchCategories = async () => {
			const categories = await postApi.getCategories(userId);
			const categoryNames = categories.map((item: { categoryName: string }) => item.categoryName);
			setAllCategories(categoryNames);
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
