import Link from 'next/link';
import { ThemeToggle } from '../theme/ThemeToggle';
import WriteButton from './WriteButton';
import HamburgerMenu from './HamburgerMenu';
import NavLink from './NavLink';

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
						<NavLink href="/">홈</NavLink>
						{/* <Link href="/blog" className="hover:text-primary font-medium">
							블로그
						</Link> */}
						<NavLink href="/about">소개</NavLink>
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
