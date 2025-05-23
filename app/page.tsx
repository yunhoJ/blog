import PostCard from '@/components/features/blog/PostCard';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectValue,
	SelectTrigger,
} from '@/components/ui/select';

import {
	BookOpen,
	Github,
	HandshakeIcon,
	Instagram,
	Linkedin,
	Mail,
	Megaphone,
} from 'lucide-react';

import TagSection from './_components/TagSection';
import ProfileSection from './_components/ProfileSection';
import ContactSection from './_components/ContactSection';
import { getPublishedPosts, getTags } from '@/lib/notion';
import Link from 'next/link';

const socialLinks = [
	{ icon: Github, url: 'https://github.com/yunhoJ' },
	{ icon: Linkedin, url: 'https://www.linkedin.com/in/seungmin-dev' },
	{ icon: Instagram, url: 'https://www.instagram.com/seungmin-dev' },
	{ icon: Mail, url: 'mailto:seungmin@seungmin.dev' },
];
interface HomeProps {
	searchParams: Promise<{ tag?: string }>;
}

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
export default async function Home({ searchParams }: HomeProps) {
	const { tag } = await searchParams;
	const selectedTag = tag || '전체';
	const [posts, tags] = await Promise.all([getPublishedPosts(selectedTag), getTags()]);

	return (
		<div className="container py-8">
			{/* 왼쪽 사이드바  */}
			<div className="grid grid-cols-[200px_1fr_220px] gap-6">
				<aside>
					<TagSection tags={tags} selectedTag={selectedTag} />
				</aside>
				<div className="space-y-8">
					<div className="flex items-center justify-between">
						<h2 className="text-3xl font-bold tracking-tight">
							{selectedTag === '전체' ? '블로그 목록' : `${selectedTag} 관련 글`}
						</h2>
						<Select defaultValue="latest">
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="정렬방식선택" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="latest">최신순</SelectItem>
								<SelectItem value="oldest">오래된순</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="flex flex-col gap-4">
						{posts.map((post) => (
							<Link href={`/blog/${post.slug}`} key={post.id}>
								<PostCard post={post} />
							</Link>
						))}
					</div>
				</div>
				{/* 오른쪽 사이드바  */}
				<aside className="flex flex-col gap-4">
					<ProfileSection socialLinks={socialLinks} />
					<ContactSection contactItems={contactItems} />
				</aside>
			</div>
		</div>
	);
}
