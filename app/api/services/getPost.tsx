import { prisma } from '@/lib/prismaSession';

export async function getPost(revisionHash: string) {
	const post = await prisma.blogPost.findUnique({
		where: {
			revisionHash,
		},
		include: {
			blogPostPublish: {
				select: {
					categoryName: true,
					postVisibility: true,
				},
			},
			user: {
				select: {
					userName: true,
				},
			},
		},
	});
	return post;
}

export const getPostPublish = async (userId: string, category: string) => {
	if (category === '전체') {
		category = '';
	}
	const whereClause = {
		userId,
		postVisibility: true,
		...(category && { categoryName: category }),
	};

	const posts = await prisma.blogPostPublish.findMany({
		where: whereClause,
		include: {
			blogPost: {
				select: {
					postTitle: true,
					postPublished: true,
					postReadTimeSeconds: true,
					user: {
						select: {
							userName: true,
						},
					},
				},
			},
		},
		orderBy: {
			blogPost: {
				postPublished: 'desc',
			},
		},
	});

	return posts;
};
