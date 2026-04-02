import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About | yunho blog',
	description: 'Resume / About',
	robots: {
		index: false,
		follow: false,
	},
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
	return children;
}
