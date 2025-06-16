import { prisma } from '@/lib/prismaSession';
import { PaginationType } from '@/types/blog';

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

const pagination = (totalCount: number, pageSize: number, page: number): PaginationType => {
	// totalcount가 0이면 1페이지 반환
	const totalPage = totalCount === 0 ? 1 : Math.ceil(totalCount / pageSize);
	//  페이지가 총 페이지 수보다 크면 에러
	if (page > totalPage || page < 0 || pageSize < 0) {
		throw new Error('유효하지 않은 페이지 번호입니다.');
	}
	return {
		pageSize,
		page,
		totalPage,
		hasNextPage: page < totalPage,
	};
};

export const getPostPublishData = async (
	userId: string,
	category: string,
	sort: string,
	pageSize: number = 0,
	page: number = 0
) => {
	const whereClause = {
		userId,
		postVisibility: true,
		...(category !== '전체' && { categoryName: category }),
	};
	const totalCount = await prisma.blogPostPublish.count({ where: whereClause });

	const paginationData = pagination(totalCount, pageSize, page);
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
					blogPostMeta: {
						select: {
							postViewCount: true,
							postLikeCount: true,
						},
					},
				},
			},
		},
		orderBy:
			sort === 'latest'
				? { blogPost: { postPublished: 'desc' } }
				: { blogPost: { postPublished: 'asc' } },
		...(pageSize > 0 &&
			page > 0 && {
				take: paginationData.pageSize,
				skip:
					paginationData.totalPage === 1 ? 0 : (paginationData.page - 1) * paginationData.pageSize,
			}),
	});

	return { posts, paginationData };
};
