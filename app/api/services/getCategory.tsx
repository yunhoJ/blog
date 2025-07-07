import { prisma } from '@/lib/prismaSession';

export const getCategories = async (userId: string) => {
	const categories = await prisma.blogCategory.findMany({
		where: {
			userId,
		},
	});

	// BigInt를 일반 숫자로 변환
	return categories.map((category) => ({
		...category,
		privateCount: Number(category.privateCount),
		publicCount: Number(category.publicCount),
	}));
};

export const getTags = async (userId: string) => {
	const tags = await prisma.blogPostPublish.findMany({
		where: {
			userId,
			postVisibility: true,
		},
		select: {
			postHash: true,
		},
	});

	const tagList = await prisma.blogPostTag.findMany({
		where: {
			userId,
			postHash: {
				in: tags.map((tag) => tag.postHash),
			},
		},
		select: {
			tagName: true,
		},
	});
	const countTags = tagList.reduce(
		(acc, cur) => {
			acc[cur.tagName] = (acc[cur.tagName] || 0) + 1;
			return acc;
		},
		{} as Record<string, number>
	);
	return countTags;
};
