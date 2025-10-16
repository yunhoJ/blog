import Link from 'next/link';
import { Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import { Metadata } from 'next';

export const metadata: Metadata = {
	title: '페이지를 찾을 수 없습니다',
	description: '요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.',
	robots: {
		index: false,
		follow: false,
	},
};

export default function NotFound() {
	return (
		<div className="container py-16">
			<div className="flex min-h-[60vh] items-center justify-center">
				<Card className="w-full max-w-2xl">
					<CardContent className="p-8 text-center">
						{/* 404 Number with Icon */}
						<div className="mb-8 flex items-center justify-center">
							<div className="relative">
								<h1 className="text-muted-foreground/50 text-8xl font-bold md:text-9xl">404</h1>
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="relative">
										<Search className="text-primary animate-spin-slow h-16 w-16 group-hover:animate-bounce md:h-20 md:w-20" />
										{/* Cute eyes for the search icon */}
										<div className="text-secondary absolute top-4 left-4 h-2 w-2 animate-ping rounded-full bg-current delay-500"></div>
										<div className="text-secondary absolute top-4 right-4 h-2 w-2 animate-ping rounded-full bg-current delay-700"></div>
									</div>
								</div>
							</div>
						</div>

						{/* Error Message */}
						<div className="mb-8 space-y-4">
							<h2 className="text-2xl font-bold tracking-tight md:text-3xl">
								페이지를 찾을 수 없습니다
							</h2>
							<p className="text-muted-foreground">
								요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
								<br />
								다른 페이지를 찾아보시거나 홈으로 돌아가세요.
							</p>
						</div>

						{/* Action Buttons */}
						<div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
							<Button asChild className="w-full sm:w-auto">
								<Link href="/" className="flex items-center gap-2">
									<Home className="h-4 w-4" />
									홈으로 돌아가기
								</Link>
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
