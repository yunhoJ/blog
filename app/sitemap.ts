import { MetadataRoute } from 'next';
import { getPostPublishData } from './api/services/getPost';
import { userId } from './api/constant/const';

// ISR(revalidate)와 force-dynamic은 함께 쓰지 않음 — 동적 생성만 사용
export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	// 기본 URL
	const baseUrl = 'https://www.yunhoj.com';

	// 블로그 게시물 가져오기
	const { posts } = await getPostPublishData(userId, '전체', 'latest');

	// 정적 페이지 lastModified는 "실제 변경과 가까운 값"으로 맞춤 (최근 게시글 업데이트 시각)
	const latestPostModifiedAt =
		posts
			.map((p) => {
				const updated = p.blogPost.postUpdatedAt ? new Date(p.blogPost.postUpdatedAt).getTime() : 0;
				return updated;
			})
			.reduce((acc, cur) => Math.max(acc, cur), 0) || Date.now();

	// 정적 페이지 목록
	const staticPages = [
		{
			url: baseUrl,
			lastModified: new Date(latestPostModifiedAt),
			changeFrequency: 'daily',
			priority: 1,
		},
		// baseUrl과 동일해서 주석
		// {
		// 	url: `${baseUrl}/blog`,
		// 	lastModified: new Date(latestPostModifiedAt),
		// 	changeFrequency: 'daily',
		// 	priority: 1,
		// },
	] as const;

	// 블로그 게시물 URL 생성
	const blogPosts = posts.map((post) => ({
		url: `${baseUrl}/blog/${post.postHash}`,
		lastModified: post.blogPost.postUpdatedAt ? new Date(post.blogPost.postUpdatedAt) : new Date(),
		changeFrequency: 'weekly' as const,
		priority: 0.8,
	}));

	// 정적 페이지와 블로그 게시물 결합
	return [...staticPages, ...blogPosts];
}
