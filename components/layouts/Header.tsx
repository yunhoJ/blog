'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '../theme/ThemeToggle';
import WriteButton from './WriteButton';
import HamburgerMenu from './HamburgerMenu';

export default function Header() {
	const pathname = usePathname();

	const navLinks = [
		{ href: '/', label: '홈' },
		{ href: '/about', label: '소개' },
	];

	return (
		<header className="bg-background sticky top-0 z-50 border-b">
			<div className="container flex h-[var(--header-height)] items-center justify-between px-4">
				<div className="flex w-full items-center justify-between">
					{/* 로고 */}
					<div className="flex justify-start">
						<Link href="/" className="text-xl font-semibold">
							<span className="font-bold">yunho 블로그</span>
						</Link>
					</div>

					{/* 데스크톱 네비게이션 */}
					<nav className="hidden gap-4 md:flex">
						{navLinks.map(({ href, label }) => {
							const isActive = pathname === href;
							return (
								<Link
									key={href}
									href={href}
									className="font-medium transition-colors"
									style={{
										color: isActive ? 'var(--brand-link)' : undefined,
										boxShadow: isActive ? 'inset 0 -2px 0 var(--brand-underline-active)' : undefined,
									}}
									onMouseEnter={(e) => {
										if (!isActive) {
											e.currentTarget.style.color = 'var(--brand-link-hover)';
										}
									}}
									onMouseLeave={(e) => {
										if (!isActive) {
											e.currentTarget.style.color = '';
										}
									}}
								>
									{label}
								</Link>
							);
						})}
					</nav>

					{/* 우측 버튼들 */}
					<div className="flex items-center gap-2">
						<ThemeToggle />
						<WriteButton />
						<HamburgerMenu />
					</div>
				</div>
			</div>
		</header>
	);
}
