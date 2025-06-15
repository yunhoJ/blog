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
