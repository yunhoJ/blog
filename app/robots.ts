import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/api/', '/admin/'],
		},
		sitemap: 'https://www.yunhoj.com/sitemap.xml',
		host: 'https://www.yunhoj.com',
	};
}
