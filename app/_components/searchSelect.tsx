'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';

export default function SearchSelect() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [keyword, setKeyword] = useState(searchParams.get('keyword') || '');
	const typingRef = useRef(false);

	useEffect(() => {
		const urlKeyword = searchParams.get('keyword') || '';

		// 1. 외부 요인 (뒤로가기 등)
		if (!typingRef.current && urlKeyword !== keyword) {
			setKeyword(urlKeyword);
			return;
		}

		// 2. 내부 요인 (사용자 입력)
		if (typingRef.current) {
			const handler = setTimeout(() => {
				const params = new URLSearchParams(searchParams.toString());
				if (keyword) params.set('keyword', keyword);
				else params.delete('keyword');
				router.push(`?${params.toString()}`);
				typingRef.current = false;
			}, 400);

			return () => clearTimeout(handler);
		}
	}, [keyword, searchParams]);
	return (
		<div className="relative w-full">
			<SearchIcon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
			<Input
				placeholder="검색어를 입력하세요"
				className="pl-9"
				value={keyword}
				onChange={(e) => {
					typingRef.current = true;
					setKeyword(e.target.value);
				}}
			/>
		</div>
	);
}
