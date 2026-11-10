import { MetadataRoute } from 'next';
import { BLOG_BASE_URL } from './api/constant/const';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/api/', '/admin/'],
			},
		],
		sitemap: `${BLOG_BASE_URL}/sitemap.xml`,
	};
}
