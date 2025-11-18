import { prisma } from '@/lib/prismaSession';
import { PaginationType } from '@/types/blog';
import { getAuthTokens } from './loginService';

export async function getPublishPost(revisionHash: string) {
	const post = await prisma.blogPost.findUnique({
		where: {
			revisionHash,
		},
	});
	return post;
}

export async function getPost(revisionHash: string) {
	const post = await prisma.blogPost.findUnique({
		where: {
			revisionHash,
			blogPostPublish: {
				postVisibility: true,
			},
		},
		include: {
			blogPostPublish: {
				select: {
					categoryName: true,
					postVisibility: true,
				},
			},
			blogPostMeta: {
				select: {
					postLikeCount: true,
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
export async function existVersionHistory(postHash: string) {
	try {
		await prisma.blogPost.findFirstOrThrow({
			where: {
				postHash,
			},
		});
		return true;
	} catch {
		return false;
	}
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
const getTagList = async (tag: string) => {
	const tagList = await prisma.blogPostTag.findMany({
		where: {
			tagName: tag,
		},
		select: {
			postHash: true,
		},
	});

	return tagList.map((item) => item.postHash);
};
export const getPostListByKeyword = async (keyword: string) => {
	const postList = await prisma.blogPost.findMany({
		where: {
			OR: [
				{ postTitle: { contains: keyword, mode: 'insensitive' } },
				{ postContent: { contains: keyword, mode: 'insensitive' } },
			],
			blogPostPublish: {
				postVisibility: true,
			},
		},
		select: {
			postHash: true,
		},
	});
	return new Set(postList.map((item) => item.postHash));
};
export const getPostPublishData = async (
	userId: string,
	category: string,
	sort: string,
	pageSize: number = 0,
	page: number = 0,
	tag: string = '',
	keyword: string = ''
) => {
	// 태그 필터링이 필요한 경우 먼저 postHash 목록을 가져옵니다
	let taggedPostHashes: string[] | undefined;
	if (tag !== '') {
		taggedPostHashes = await getTagList(tag);
	}
	if (keyword !== '') {
		const keywordPostHashes = Array.from(await getPostListByKeyword(keyword));
		if (taggedPostHashes) {
			taggedPostHashes = taggedPostHashes.filter((hash) => keywordPostHashes.includes(hash));
		} else {
			taggedPostHashes = keywordPostHashes;
		}
	}

	const whereClause = {
		userId,
		postVisibility: true,
		...(category !== '전체' && { categoryName: category }),
		...(taggedPostHashes && { postHash: { in: taggedPostHashes } }),
	};
	const totalCount = await prisma.blogPostPublish.count({ where: whereClause });

	let orderBy = {};
	if (sort === 'viewCount') {
		orderBy = [
			{ blogPost: { blogPostMeta: { postViewCount: 'desc' } } },
			{ blogPost: { postPublished: 'asc' } },
		];
	} else if (sort === 'latest') {
		orderBy = { blogPost: { postPublished: 'desc' } };
	} else if (sort === 'oldest') {
		orderBy = { blogPost: { postPublished: 'asc' } };
	}

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
							postMainImageUrl: true,
							postViewCount: true,
							postLikeCount: true,
							postCommentCount: true,
							blogPostTag: {
								select: {
									tagName: true,
								},
							},
						},
					},
				},
			},
		},
		orderBy: orderBy,
		...(pageSize > 0 &&
			page > 0 && {
				take: paginationData.pageSize,
				skip:
					paginationData.totalPage === 1 ? 0 : (paginationData.page - 1) * paginationData.pageSize,
			}),
	});

	return { posts, paginationData };
};
