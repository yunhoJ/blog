import PoasList from '@/components/features/blog/PoasList';
import { getPublishedPosts, getTags } from '@/lib/notion';
import ContactSection from '../_components/ContactSection';
import HeaderSection from '../_components/HeaderSection';
import ProfileSection from '../_components/ProfileSection';
import TagSection from '../_components/TagSection';
import {
	Github,
	Linkedin,
	Instagram,
	Mail,
	Megaphone,
	BookOpen,
	HandshakeIcon,
} from 'lucide-react';
interface BlogProps {
	searchParams: Promise<{ tag?: string; sort?: string }>;
}
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
export default async function Blog({ searchParams }: BlogProps) {
	const { tag, sort } = await searchParams;
	const selectedTag = tag || '전체';
	// const [tags] = await Promise.all([getTags()]);
	const [posts, tags] = await Promise.all([getPublishedPosts(selectedTag, sort), getTags()]);

	return (
		<div className="container py-8">
			{/* 왼쪽 사이드바  */}
			<div className="grid grid-cols-[200px_1fr_220px] gap-6">
				<aside>
					<TagSection tags={tags} selectedTag={selectedTag} />
				</aside>
				<div className="space-y-8">
					<HeaderSection selectedTag={selectedTag} />
					<PoasList posts={posts} />
					{/* <PostListClient /> */}
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
