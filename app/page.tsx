import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<main className="flex-1">
				<div className="container mx-auto px-4 py-8">
					<div className="space-y-8">
						<h2 className="text-3xl font-bold tracking-tight">홈</h2>

						<div className="flex flex-col gap-4">
							{[1, 2, 3, 4, 5].map((item) => (
								<Link href={`/blog/${item}`} key={item}>
									<Card key={item}>
										<CardHeader>
											<CardTitle>블로그 제목 {item}</CardTitle>
											<CardDescription>
												블로그 설명 샘플 파일 입니다 간단한 설명 적힐 예정 {item}
											</CardDescription>
										</CardHeader>
									</Card>
								</Link>
							))}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
