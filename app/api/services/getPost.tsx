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

export const getPostPublish = async (userId: string, category: string, sort: string) => {
	const whereClause = {
		userId,
		postVisibility: true,
		...(category !== '전체' && { categoryName: category }),
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
		orderBy:
			sort === 'latest'
				? {
						blogPost: {
							postPublished: 'desc',
						},
					}
				: {
						blogPost: {
							postPublished: 'asc',
						},
					},
	});

	return posts;
};
