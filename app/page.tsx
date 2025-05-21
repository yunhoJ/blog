import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import {
	BookOpen,
	Github,
	HandshakeIcon,
	Instagram,
	Linkedin,
	Mail,
	Megaphone,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const mockTags = [
	{ name: '전체', count: 60 },
	{ name: '프론트엔드', count: 20 },
	{ name: '백엔드', count: 20 },
	{ name: '디자인', count: 10 },
	{ name: 'nextjs', count: 13 },
	{ name: 'typescript', count: 15 },
	{ name: 'tailwindcss', count: 19 },
];

const socialLinks = [
	{ icon: Github, url: 'https://github.com/yunhoJ' },
	{ icon: Linkedin, url: 'https://www.linkedin.com/in/seungmin-dev' },
	{ icon: Instagram, url: 'https://www.instagram.com/seungmin-dev' },
	{ icon: Mail, url: 'mailto:seungmin@seungmin.dev' },
];

const contactItems = [
	{
		icon: Megaphone,
		title: '광고 및 제휴',
		description: '브랜드 홍보, 컨텐츠 제작, 협업 제안',
		mailto: {
			email: 'bruce.lean17@gmail.com',
			subject: '[광고/제휴] 제안',
			body: '브랜드/제품명:\n제안 내용:\n기간:\n예산:',
		},
	},
	{
		icon: BookOpen,
		title: '강의 문의',
		description: '기술 강의, 워크샵, 세미나 진행',
		mailto: {
			email: 'bruce.lean17@gmail.com',
			subject: '[강의] 문의',
			body: '강의 주제:\n예상 인원:\n희망 일정:\n문의 내용:',
		},
	},
	{
		icon: HandshakeIcon,
		title: '기타 문의',
		description: '채용, 인터뷰, 기타 협업 제안',
		mailto: {
			email: 'bruce.lean17@gmail.com',
			subject: '[기타] 문의',
			body: '문의 종류:\n문의 내용:',
		},
	},
];
export default function Home() {
	return (
		<div className="container py-8">
			{/* 왼쪽 사이드바  */}
			<div className="grid grid-cols-[200px_1fr_220px] gap-6">
				<aside>
					<Card className="gap-3">
						<CardHeader>
							<CardTitle>태그 목록</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex flex-col gap-2 text-sm">
								{mockTags.map((tag) => (
									<Link href={`/tag/${tag.name}`} key={tag.name}>
										<div className="hover:bg-muted/50 text-muted-foreground flex flex-row items-center justify-between gap-2 transition-colors">
											<span>{tag.name}</span>
											<span className="text-muted-foreground/50 text-sm">{tag.count}</span>
										</div>
									</Link>
								))}
							</div>
						</CardContent>
					</Card>
				</aside>
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
				{/* 오른쪽 사이드바  */}
				<aside className="flex flex-col gap-4">
					<Card className="gap-4">
						<CardHeader>
							<CardTitle className="flex flex-col items-center">
								<Image
									src="/images/profile.jpeg"
									alt="profile"
									width={200}
									height={200}
									className="mb-6 rounded-4xl"
								/>
								<div className="text-lg font-bold">전윤호</div>
								<div className="text-primary text-sm">backend developer</div>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="flex flex-col gap-2">
								<div className="flex flex-row items-center justify-between">
									{socialLinks.map((link, index) => (
										<a
											key={index}
											href={link.url}
											target="_blank"
											rel="noopener noreferrer"
											className="bg-primary/10 rounded-sm p-2 hover:bg-green-100"
										>
											<link.icon className="h-4 w-4" />
										</a>
									))}
								</div>
								<div className="bg-primary/10 rounded-sm p-2 text-center hover:bg-green-100">
									교육 크리에이터
								</div>
							</div>
						</CardContent>
					</Card>
					<Card className="gap-3">
						<CardHeader>
							<CardTitle>문의하기</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-2">
								{contactItems.map((item, index) => (
									<a
										key={index}
										href={`mailto:${item.mailto.email}?subject=${encodeURIComponent(
											item.mailto.subject
										)}&body=${encodeURIComponent(item.mailto.body)}`}
										className="group bg-primary/5 hover:bg-muted flex items-start gap-4 rounded-lg p-3 transition-colors"
									>
										<div className="bg-primary/20 text-primary shrink-0 items-center justify-center rounded-md p-1.5">
											<item.icon className="h-4 w-4" />
										</div>
										<div className="flex-1">
											<h3 className="font-medium">{item.title}</h3>
											<p className="text-muted-foreground text-xs">{item.description}</p>
										</div>
									</a>
								))}
							</div>
						</CardContent>
					</Card>
				</aside>
			</div>
		</div>
	);
}
