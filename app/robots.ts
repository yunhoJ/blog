import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/api/', '/admin/', '/about', '/_next'],
			},
		],
		sitemap: 'https://www.yunhoj.com/sitemap.xml',
	};
}
