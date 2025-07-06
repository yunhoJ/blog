'use client';

import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import {
	Command,
	CommandList,
	CommandEmpty,
	CommandItem,
	CommandInput,
} from '@/components/ui/command';
import { X } from 'lucide-react';
import { userId } from '@/app/api/constant/const';
import { postApi } from '@/app/api/services/api';
import { toastError } from '@/lib/toasttError';
interface TagSelectProps {
	tagList: string[];
	setTagList: (tagList: string[]) => void;
}
export default function TagSelect({ tagList, setTagList }: TagSelectProps) {
	const [input, setInput] = useState('');
	// const [selectTagList, setSelectTagList] = useState<string[]>(tagList);
	const [isOpen, setIsOpen] = useState(false);
	const [availableTags, setAvailableTags] = useState<string[]>([]);

	const createTag = async (userId: string, tagName: string) => {
		try {
			await postApi.createTag(userId, tagName);
			setTagList([...tagList, tagName]);
		} catch (error) {
			console.log(error);
			toastError(new Error('태그 생성 중 오류가 발생했습니다.'));
		}
		setInput('');
	};
	const removeTag = (tag: string) => {
		console.log('Removing tag:', tag);
		setTagList(tagList.filter((t) => t !== tag));
	};

	useEffect(() => {
		const getTags = async () => {
			const tags = await postApi.getTags(userId);
			setAvailableTags(tags.tags);
			const postHash = localStorage.getItem('postHash');
			if (postHash) {
				const savedTags = await postApi.getBlogTag(postHash);
				setTagList(savedTags.tags);
			}
		};
		getTags();
	}, []);
	return (
		<>
			<div className="mb-2 flex flex-wrap gap-2">
				{tagList.map((tag) => (
					<Badge
						variant="secondary"
						key={tag}
						className="flex items-center gap-1"
						onClick={() => {
							removeTag(tag);
						}}
					>
						{tag}
						<X className="hover:text-destructive ml-1 h-3 w-3 cursor-pointer" />
					</Badge>
				))}
			</div>
			<Command>
				<CommandInput
					placeholder="태그 검색 또는 생성"
					onValueChange={setInput}
					value={input}
					onFocus={() => setIsOpen(true)}
					onBlur={() => setTimeout(() => setIsOpen(false), 200)}
					onKeyDown={(e) => {
						if (e.key === 'Escape' && isOpen) {
							e.preventDefault();
							(e.target as HTMLInputElement).blur();
							setIsOpen(false);
							setInput('');
							// esc누를때 placeholder null 로되는 버그
						}
					}}
				/>
				{isOpen && (
					<CommandList className="max-h-30 overflow-y-auto">
						<CommandEmpty>
							{input.trim() &&
								!tagList.map((tag) => tag.toLowerCase()).includes(input.trim().toLowerCase()) && (
									<div className="flex items-center justify-between">
										<span>“{input.trim()}” 태그를 생성</span>
										<button
											className="text-sm text-blue-500 hover:underline"
											onClick={() => {
												createTag(userId, input.trim());
											}}
										>
											생성
										</button>
									</div>
								)}
						</CommandEmpty>
						{availableTags
							.filter((tag) => !tagList.includes(tag))
							.map((tag) => (
								<CommandItem
									key={tag}
									onSelect={() => {
										setTagList([...tagList, tag]);
										setInput('');
									}}
								>
									{tag}
								</CommandItem>
							))}
					</CommandList>
				)}
			</Command>
		</>
	);
}
