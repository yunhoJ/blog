import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Providers from './providers';
import { Toaster } from '@/components/ui/sonner';
import { BLOG_BASE_URL } from './api/constant/const';
const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL(BLOG_BASE_URL),
	title: 'yunho blog',
	keywords: ['yunho', 'blog', 'next.js', 'react', 'typescript'],
	authors: [{ name: 'yunho', url: 'https://yunhoj.com' }],
	description: 'yunho blog',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko" className="scroll-smooth" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<Providers>
					<div className="flex min-h-screen flex-col">
						{/* 1. 헤더 */}
						<Header />
						{/* 2. 메인 */}
						<main className="flex-1">{children}</main>
						<Toaster position="top-center" richColors />
						{/* 3. 푸터 */}
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
