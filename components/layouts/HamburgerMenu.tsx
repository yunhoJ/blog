'use client';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { useAuthStore } from '@/lib/store/useAuthStore';
import { useEffect, useState } from 'react';

export default function HamburgerMenu() {
	const [open, setOpen] = useState(false);

	const { isAuthenticated, logout } = useAuthStore();

	// md 이상에서 메뉴 자동 닫기
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768 && open) {
				setOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [open]);

	return (
		<div className="md:hidden">
			<div className="relative">
				{/* 흐림 오버레이 */}
				{open && (
					<div
						className="fixed inset-0 top-[var(--header-height)] bg-black/30"
						onClick={() => setOpen(false)} // 배경 클릭 시 닫기
					/>
				)}
			</div>
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" size="icon">
						<MenuIcon className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>

				<DropdownMenuContent className="w-56 md:hidden">
					<DropdownMenuItem asChild>
						<Link href="/">홈</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href="/blog">블로그</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link href="/about">소개</Link>
					</DropdownMenuItem>
					{isAuthenticated && (
						<>
							<DropdownMenuSeparator />
							<DropdownMenuItem onClick={logout}>로그아웃</DropdownMenuItem>
						</>
					)}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
