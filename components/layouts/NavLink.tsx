'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={cn(
				'font-medium transition-colors hover:text-brand-link',
				isActive && 'text-brand-link shadow-[inset_0_-2px_0_var(--color-brand-underline-active)]'
			)}
		>
			{children}
		</Link>
	);
}
