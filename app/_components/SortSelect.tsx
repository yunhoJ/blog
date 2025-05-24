'use client';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SortSelect() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const sort = searchParams.get('sort') || 'latest';
	const handleSortChange = (value: string) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set('sort', value);
		router.push(`?${params.toString()}`);
	};

	return (
		<Select value={sort} onValueChange={handleSortChange}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="정렬방식선택" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="latest">최신순</SelectItem>
				<SelectItem value="oldest">오래된순</SelectItem>
			</SelectContent>
		</Select>
	);
}
