import Link from 'next/link';
import { ThemeToggle } from '../theme/ThemeToggle';
import WriteButton from './WriteButton';
import HamburgerMenu from './HamburgerMenu';

export default async function Header() {
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
						<Link href="/" className="hover:text-primary font-medium">
							홈
						</Link>
						<Link href="/blog" className="hover:text-primary font-medium">
							블로그
						</Link>
						<Link href="/about" className="hover:text-primary font-medium">
							소개
						</Link>
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
