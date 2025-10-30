'use client';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SearchSelect() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [keyword, setKeyword] = useState(searchParams.get('keyword') || '');

	// URL이 외부 요인으로 바뀐 경우 인풋 값을 동기화
	useEffect(() => {
		setKeyword(searchParams.get('keyword') || '');
	}, [searchParams]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setKeyword(value);
		const params = new URLSearchParams(searchParams.toString());
		params.set('keyword', value);
		router.push(`?${params.toString()}`);
	};
	// 디바운스된 검색 적용
	useEffect(() => {
		console.log('✅ EFFECT 실행', keyword);
		const handler = setTimeout(() => {
			console.log('⏰ 디바운스 콜백 실행', keyword);
			const params = new URLSearchParams(searchParams.toString());
			if (keyword) params.set('keyword', keyword);
			else params.delete('keyword');
			router.push(`?${params.toString()}`);
		}, 1000);

		return () => {
			console.log('🧹 CLEANUP 실행');
			clearTimeout(handler);
		};
	}, [keyword]);
	return (
		<div className="relative w-full">
			<SearchIcon className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
			<Input
				placeholder="검색어를 입력하세요"
				className="pl-9"
				onChange={(e) => handleSearch(e)}
				value={keyword}
			/>
		</div>
	);
}
