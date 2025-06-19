import { MetadataRoute } from 'next';
import { getPostPublishData } from './api/services/getPost';
import { userId } from './api/constant/const';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	// 기본 URL
	const baseUrl = 'https://www.yunhoj.com';

	// 정적 페이지 목록
	const staticPages = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 1,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.9,
		},
	] as const;

	// 블로그 게시물 가져오기
	const { posts } = await getPostPublishData(userId, '전체', 'latest');
	// 블로그 게시물 URL 생성
	const blogPosts = posts.map((post) => ({
		url: `${baseUrl}/blog/${post.revisionHash}`,
		lastModified: post.blogPost.postPublished ? new Date(post.blogPost.postPublished) : new Date(),
		changeFrequency: 'weekly' as const,
		priority: 0.7,
	}));

	// 정적 페이지와 블로그 게시물 결합
	return [...staticPages, ...blogPosts];
}
