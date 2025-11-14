import { prisma } from '@/lib/prismaSession';
import { NextRequest, NextResponse } from 'next/server';
import { getPostPublishData } from '../../services/getPost';
import { userId, defaultPageSize } from '../../constant/const';
import { checkLogin } from '../../services/loginService';
import supabase from '@/app/api/services/imageStorage';
export async function POST(request: NextRequest) {
	const result = await checkLogin();
	if (!result.success) {
		return NextResponse.json(
			{ success: false, message: result.message },
			{ status: result.status }
		);
	}
	const { userId } = result.user as { userId: string };
	const { postHash, category, visibility, imageUrl } = await request.json();
	try {
		const postData = await getPublishedPosts(postHash, userId);
		if (imageUrl) {
			await updatePostMainImage(postHash, imageUrl);
		}
		// 포스트 발행 - 두 작업을 동시에 실행하고 둘 다 완료되면 리턴
		const [_, postMetadata] = await Promise.all([
			createPostPublish(postData.revisionHash, postHash, category, visibility, userId),
			selectPostMetadata(postHash),
		]);
		return NextResponse.json({
			success: true,
			message: '포스트 발행 성공했습니다.',
			responseData: {
				revisionHash: postData.revisionHash,
				postCommentGitId: postMetadata?.postCommentGitId,
				postCommentGitnumber: postMetadata?.postCommentGitnumber,
				postHash: postMetadata?.postHash,
			},
		});
	} catch (error) {
		return NextResponse.json(
			{ success: false, message: error instanceof Error ? error.message : '오류가 발생했습니다.' },
			{ status: 400 }
		);
	}
}

export async function DELETE(request: NextRequest) {
	const { revisionHash, postHash } = await request.json();

	// 로그인 체크
	const result = await checkLogin();
	if (!result.success) {
		return NextResponse.json(
			{ success: false, message: result.message },
			{ status: result.status }
		);
	}
	try {
		const postMatadata = await deletePostPublish(
			revisionHash,
			postHash,
			result.user?.userId as string
		);
		return NextResponse.json({ success: true, message: '게시글 삭제 성공', postMatadata });
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ success: false, message: '삭제 중 오류가 발생했습니다.' },
			{ status: 500 }
		);
	}
}

export async function GET(request: NextRequest) {
	// 포스트 발행 데이터 조회
	const { searchParams } = new URL(request.url);
	const category = searchParams.get('category') || '전체';
	const sort = searchParams.get('sort') || 'latest';
	const pageSize = Number(searchParams.get('pageSize')) || defaultPageSize;
	const page = Number(searchParams.get('page')) || 1;
	const tag = searchParams.get('tag') || '';
	const keyword = searchParams.get('keyword') || '';

	const post = await getPostPublishData(userId, category, sort, pageSize, page, tag, keyword);
	return NextResponse.json(post);
}

export async function PUT(request: NextRequest) {
	// 포스트 발행 수정
	const result = await checkLogin();
	if (!result.success) {
		return NextResponse.json(
			{ success: false, message: result.message },
			{ status: result.status }
		);
	}
	const { userId } = result.user as { userId: string };
	const { postHash, revisionHash, category, visibility, imageUrl } = await request.json();
	try {
		await updatePostPublish(revisionHash);
		await createPostPublish(revisionHash, postHash, category, visibility, userId);
		if (imageUrl) {
			await updatePostMainImage(postHash, imageUrl);
		}
		return NextResponse.json({ success: true, message: '게시글 발행 성공' });
	} catch (error) {
		return NextResponse.json(
			{ success: false, message: error instanceof Error ? error.message : '오류가 발생했습니다.' },
			{ status: 400 }
		);
	}
}

const getPublishedPosts = async (postHash: string, userId: string) => {
	// 포스트 발행 상태로 업데이트
	const post = await prisma.$transaction(async (tx) => {
		const post = await tx.blogPost.updateManyAndReturn({
			where: {
				userId,
				postHash,
				postDraft: true,
			},
			data: {
				postDraft: false,
				postPublished: new Date(),
			},
		});
		if (post.length === 1) {
			return post[0];
		} else {
			throw new Error('조회된 포스트가 1개 이상입니다.');
		}
	});

	return post;
};
const updatePostPublish = async (revisionHash: string) => {
	const post = await prisma.blogPost.update({
		where: {
			revisionHash,
		},
		data: {
			postDraft: false,
			postPublished: new Date(),
		},
	});

	console.log(post);
};
const updatePostMainImage = async (postHash: string, imageUrl: string) => {
	const post = await prisma.blogPostMeta.update({
		where: { postHash },
		data: { postMainImageUrl: imageUrl },
	});
	return post;
};
const createPostPublish = async (
	revisionHash: string,
	postHash: string,
	category: string,
	visibility: boolean,
	userId: string
) => {
	// 발행 포스트가 있으면 업데이트
	const post = await prisma.blogPostPublish.findUnique({
		where: {
			postHash,
		},
	});
	if (post) {
		if (post.categoryName !== category || post.postVisibility !== visibility) {
			await prisma.blogCategory.update({
				where: {
					categoryName: post.categoryName,
				},
				data: {
					[post.postVisibility ? 'publicCount' : 'privateCount']: {
						decrement: 1,
					},
				},
			});
			await prisma.blogCategory.update({
				where: {
					categoryName: category,
				},
				data: {
					[visibility ? 'publicCount' : 'privateCount']: {
						increment: 1,
					},
				},
			});
		}
		await prisma.blogPostPublish.update({
			where: {
				postHash,
			},
			data: {
				revisionHash,
				categoryName: category,
				postVisibility: visibility,
			},
		});
	} else {
		await prisma.blogPostPublish.create({
			data: {
				userId: userId,
				revisionHash,
				postHash,
				categoryName: category,
				postVisibility: visibility,
			},
		});

		// 카테고리 카운트 업데이트
		await prisma.blogCategory.update({
			where: {
				categoryName: category,
			},
			data: {
				[visibility ? 'publicCount' : 'privateCount']: {
					increment: 1,
				},
			},
		});
	}
};

const deletePostPublish = async (revisionHash: string, postHash: string, userId: string) => {
	const postMatadata = await prisma.$transaction(async (tx) => {
		const post = await tx.blogPostPublish.delete({
			where: {
				userId: userId,
				revisionHash,
				postHash,
			},
		});
		//포스트 태그 삭제
		await tx.blogPostTag.deleteMany({
			where: {
				postHash,
			},
		});
		// 포스트 삭제
		await tx.blogPost.deleteMany({
			where: {
				userId: userId,
				postHash,
			},
		});
		// 포스트 메타 삭제
		const postMatadata = await tx.blogPostMeta.delete({
			where: {
				postHash,
			},
		});
		// 카테고리 카운트 업데이트
		await tx.blogCategory.update({
			where: {
				categoryName: post.categoryName,
			},
			data: {
				[post.postVisibility ? 'publicCount' : 'privateCount']: {
					decrement: 1,
				},
			},
		});
		return postMatadata;
	});

	// 이미지 폴더 삭제
	const { data: files } = await supabase.storage.from('blog-storage').list(postHash);

	if (files && files.length > 0) {
		const filePathList = files.map((file) => `${postHash}/${file.name}`);
		await supabase.storage.from('blog-storage').remove(filePathList);
	}
	return postMatadata;
};

const selectPostMetadata = async (postHash: string) => {
	const post = await prisma.blogPostMeta.findUnique({
		select: {
			postCommentGitId: true,
			postCommentGitnumber: true,
			postHash: true,
		},
		where: {
			postHash,
		},
	});
	return post;
};
