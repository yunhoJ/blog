'use client';

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import { useState } from 'react';
import CategorySelector from './categorySelect';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import ImageSelect from './imageSelect';
import { Separator } from '../ui/separator';

interface PublishModalProps {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
	onPublish: (category: string | null, imageUrl: string | null) => Promise<void>;
	onChange: (value: boolean) => void;
}

export default function PublishModal({
	isOpen,
	onOpenChange,
	onPublish,
	onChange,
}: PublishModalProps) {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
	const handleCategorySelect = (category: string | null) => {
		setSelectedCategory(category);
	};
	const handleSelectedImageUrl = (url: string) => {
		setSelectedImageUrl(url);
	};

	return (
		<Dialog open={isOpen} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>포스트 발행</DialogTitle>
				</DialogHeader>
				<div>
					<CategorySelector onSelect={handleCategorySelect} />
				</div>

				<div className="space-y-2 text-sm">
					<Separator />
					<ImageSelect selectedImageUrl={handleSelectedImageUrl} />
				</div>

				{/* 공개 범위 select */}
				<div className="p flex justify-end">
					<Select defaultValue="public" onValueChange={(value) => onChange(value === 'public')}>
						<SelectTrigger className="w-30">
							<SelectValue placeholder="공개 범위" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="private">비공개</SelectItem>
							<SelectItem value="public">공개</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<DialogFooter>
					<Button variant="outline" onClick={() => onOpenChange(false)}>
						취소
					</Button>
					<Button
						onClick={() => onPublish(selectedCategory, selectedImageUrl)}
						disabled={!selectedCategory}
					>
						발행하기
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
