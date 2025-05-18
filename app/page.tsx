import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function Home() {
	return (
		//min-h-screen 으로 전체 높이 보장 grid로 3개 영역 분할
		<div className="flex min-h-screen flex-col">
			{/* 1. 헤더 */}
			<header className="sticky top-0 z-50 border-b">
				<div className="container mx-auto flex h-14 items-center px-4">
					<a href="#" className="text-xl font-semibold">
						<span className="font-bold">yunho 블로그</span>
					</a>
					<nav className="ml-auto flex items-center gap-4">
						<a href="#" className="hover:text-primary font-medium">
							홈
						</a>
						<a href="#" className="hover:text-primary font-medium">
							블로그
						</a>
						<a href="#" className="hover:text-primary font-medium">
							소개
						</a>
					</nav>
				</div>
			</header>
			{/* 2. 메인 */}
			<main className="flex-1">
				<div className="container mx-auto px-4 py-8">
					<div className="space-y-8">
						<h2 className="text-3xl font-bold tracking-tight">블로그 목록</h2>
						<div className="space-y-4">
							{[1, 2, 3, 4, 5].map((item) => (
								<Card key={item}>
									<CardHeader>
										<CardTitle>블로그 제목 {item}</CardTitle>
										<CardDescription>
											블로그 설명 샘플 파일 입니다 간단한 설명 적힐 예정 {item}
										</CardDescription>
									</CardHeader>
								</Card>
							))}
						</div>
					</div>
				</div>
			</main>
			{/* 3. 푸터 */}
			<footer className="border-t">
				<div className="container mx-auto flex h-14 items-center justify-center">
					<p className="text-muted-foreground text-sm">
						built with Next.js Tailwind CSS and shadcn/ui
					</p>
				</div>
			</footer>
		</div>
	);
}
