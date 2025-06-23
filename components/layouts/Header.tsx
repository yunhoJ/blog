import Link from 'next/link';
import { ThemeToggle } from '../theme/ThemeToggle';
import WriteButton from './WriteButton';

export default async function Header() {
	return (
		<header className="bg-background sticky top-0 z-50 border-b">
			<div className="container flex h-[var(--header-height)] items-center justify-between px-4">
				<div className="grid w-full grid-cols-3 items-center">
					<div className="flex justify-start">
						<Link href="/" className="text-xl font-semibold">
							<span className="font-bold">yunho 블로그</span>
						</Link>
					</div>

					<nav className="flex justify-center gap-4">
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

					<div className="flex justify-end gap-2">
						<ThemeToggle />
						<WriteButton />
					</div>
				</div>
			</div>
		</header>
	);
}
