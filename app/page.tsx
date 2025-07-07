import { Github, Mail } from 'lucide-react';

// import TagSection from './_components/TagSection';
import ProfileSection from './_components/ProfileSection';
// import ContactSection from './_components/ContactSection';
// import { getTags } from '@/lib/notion';
// import HeaderSection from './_components/HeaderSection';
import PostListSuspense from '@/components/features/blog/PoasListSuspense';
import { Suspense } from 'react';
import TagSectionSkeleton from './_components/TagSectionSkeleton';
import PostListSkeletion from '@/components/features/blog/PostListSkeletion';
// import { getPublishedPosts } from '@/lib/notion';
import { defaultPageSize, userId } from './api/constant/const';
import { getCategories, getTags } from './api/services/getCategory';

import CategorySection from './_components/TagSection.client';
import HeaderSection from './_components/HeaderSection';
import ToastBoundary from '@/components/features/ToastBoundary';

import { getPostPublishData } from './api/services/getPost';
import { Metadata } from 'next';

export const metadata: Metadata = {
	verification: {
		google: 'cvAjl-tYQTijFZyAnUYEWjgGYwFDRsAkmd0cpct_T80', // 이 부분이 핵심
	},
};
// import PostListClient from '@/components/features/blog/PoasList.client';
const socialLinks = [
	{ icon: Github, url: 'https://github.com/yunhoJ', title: 'GitHub' },
	// { icon: Linkedin, url: 'https://www.linkedin.com/in/seungmin-dev' },
	// { icon: Instagram, url: 'https://www.instagram.com/seungmin-dev' },
	{ icon: Mail, url: 'mailto:wjse213@gmail.com', title: 'Email' },
];
interface HomeProps {
	searchParams: Promise<{
		category?: string;
		sort?: string;
		pageSize?: number;
		page?: number;
		tag?: string;
	}>;
}

// const contactItems = [
// 	{
// 		icon: Github,
// 		title: 'GitHub',
// 		description: 'GitHub 저장소',
// 		mailto: {
// 			href: 'https://github.com/yunhoJ',
// 		},
// 	},
// 	{
// 		icon: Mail,
// 		title: '기타 문의',
// 		// description: '채용, 인터뷰, 기타 협업 제안',
// 		mailto: {
// 			email: 'wjse213@gmail.com',
// 			subject: '[기타] 문의',
// 			body: '문의 종류:\n문의 내용:',
// 		},
// 	},
// ];
export default async function Home({ searchParams }: HomeProps) {
	// 카테고리 목록 조회
	const categories = getCategories(userId);
	// 테그 목록 조회
	const tags = getTags(userId);
	const { category, sort, pageSize, page, tag } = await searchParams;
	//카테고리 선택
	const selectedCategory = category || '전체';
	const selectedTag = tag || '';
	// 정렬 선택
	const selectedSort = sort || 'latest';
	const selectedPageSize = Number(pageSize) || defaultPageSize;
	const selectedPage = Number(page) || 1;
	// const postsPromise = getPublishedPosts({ sort: selectedSort });
	const postPublish = getPostPublishData(
		userId,
		selectedCategory,
		selectedSort,
		selectedPageSize,
		selectedPage,
		selectedTag
	);
	// TODO: 태그 선택 시 포스트 목록 업데이트
	// 카테고리
	const CategorySectionComponent = () => (
		<aside>
			<Suspense fallback={<TagSectionSkeleton />}>
				<CategorySection
					categories={categories}
					selectedCategory={selectedCategory}
					selectedTag={selectedTag}
					tags={tags}
				/>
			</Suspense>
		</aside>
	);
	// 메인 컨텐츠
	const MainContentComponent = () => (
		<div className="space-y-8">
			<HeaderSection selectedCategory={selectedCategory} selectedTag={selectedTag} />
			<ToastBoundary>
				<Suspense fallback={<PostListSkeletion />}>
					<PostListSuspense postsPromise={postPublish} />
				</Suspense>
			</ToastBoundary>
		</div>
	);
	// 오른쪽 사이드바
	const SidebarComponent = () => (
		<aside className="flex flex-col gap-4">
			<ProfileSection socialLinks={socialLinks} />
			{/* <ContactSection contactItems={contactItems} /> */}
		</aside>
	);

	return (
		<div className="container py-8">
			{/* 데스크톱: 3컬럼 레이아웃 */}
			<div className="hidden gap-6 lg:grid lg:grid-cols-[200px_1fr_220px]">
				<CategorySectionComponent />
				<MainContentComponent />
				<SidebarComponent />
			</div>

			{/* 태블릿: 2컬럼 레이아웃 */}
			<div className="hidden grid-cols-[1fr_220px] gap-6 md:grid lg:hidden">
				<div className="flex flex-col gap-6">
					<CategorySectionComponent />
					<MainContentComponent />
				</div>
				<SidebarComponent />
			</div>

			{/* 모바일: 단일 컬럼 레이아웃 */}
			<div className="flex flex-col gap-6 md:hidden">
				<SidebarComponent />
				<CategorySectionComponent />
				<MainContentComponent />
			</div>
		</div>
	);
}
