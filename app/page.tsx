import {
	BookOpen,
	Github,
	HandshakeIcon,
	Instagram,
	Linkedin,
	Mail,
	Megaphone,
} from 'lucide-react';

// import TagSection from './_components/TagSection';
import ProfileSection from './_components/ProfileSection';
import ContactSection from './_components/ContactSection';
import { getTags } from '@/lib/notion';
import HeaderSection from './_components/HeaderSection';
import PostListSuspense from '@/components/features/blog/PoasListSuspense';
import { Suspense } from 'react';
import TagSectionClient from './_components/TagSection.client';
import TagSectionSkeleton from './_components/TagSectionSkeleton';
import PostListSkeletion from '@/components/features/blog/PostListSkeletion';
import { getPublishedPosts } from '@/lib/notion';
// import PostListClient from '@/components/features/blog/PoasList.client';
const socialLinks = [
	{ icon: Github, url: 'https://github.com/yunhoJ' },
	{ icon: Linkedin, url: 'https://www.linkedin.com/in/seungmin-dev' },
	{ icon: Instagram, url: 'https://www.instagram.com/seungmin-dev' },
	{ icon: Mail, url: 'mailto:seungmin@seungmin.dev' },
];
interface HomeProps {
	searchParams: Promise<{ tag?: string; sort?: string; page_size?: number; start_cursor?: string }>;
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
	const { tag, sort } = await searchParams;
	const selectedTag = tag || '전체';
	const selectedSort = sort || 'latest';
	// const [tags] = await Promise.all([getTags()]);
	// const [posts, tags] = await Promise.all([
	// 	getPublishedPosts({ tag: selectedTag, sort, page_size, start_cursor }),
	// 	// getTags(),
	// ]);
	const postsPromise = getPublishedPosts({ tag: selectedTag, sort: selectedSort });
	const tags = getTags();

	return (
		<div className="container py-8">
			{/* 왼쪽 사이드바  */}
			<div className="grid grid-cols-[200px_1fr_220px] gap-6">
				<aside>
					<Suspense fallback={<TagSectionSkeleton />}>
						<TagSectionClient tags={tags} selectedTag={selectedTag} />
					</Suspense>
				</aside>
				<div className="space-y-8">
					<HeaderSection selectedTag={selectedTag} />
					{/* <PoasList posts={posts.posts} /> */}
					<Suspense fallback={<PostListSkeletion />}>
						<PostListSuspense postsPromise={postsPromise} />
					</Suspense>
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
