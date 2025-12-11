import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prismaSession';
import { getCategories } from '../../services/getCategory';
import { checkLogin } from '../../services/loginService';

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const userId = searchParams.get('userId');

	if (!userId) {
		return NextResponse.json({ error: 'userId is required' }, { status: 400 });
	}

	const categories = await getCategories(userId);
	return NextResponse.json({ data: categories });
}
export async function POST(request: Request) {
	const { userId, categoryName } = await request.json();
	const category = await createCategory(userId, categoryName);
	console.log('category:tt ', category);
	return NextResponse.json({ data: category });
}
export async function DELETE(request: Request) {
	const result = await checkLogin();
	if (!result.success) {
		return NextResponse.json(
			{ success: false, message: result.message },
			{ status: result.status }
		);
	}
	const userId = result.user?.userId as string;
	const { categoryName } = await request.json();

	if (!categoryName || !userId) {
		return NextResponse.json(
			{ success: false, message: 'categoryName 또는 userId가 없습니다.' },
			{ status: 400 }
		);
	}
	try {
		const isEmptyCategory = await checkEmptyCategory(userId, categoryName);
		if (!isEmptyCategory) {
			return NextResponse.json(
				{ success: false, message: '카테고리에 포스트가 있어 삭제할 수 없습니다.' },
				{ status: 400 }
			);
		}

		await deleteCategory(userId, categoryName);

		return NextResponse.json({ success: true, message: '카테고리 삭제 성공' });
	} catch (error) {
		console.log('error deleteCategory: ', error);
		return NextResponse.json(
			{ success: false, message: '삭제 중 오류가 발생했습니다.' },
			{ status: 500 }
		);
	}
}
// 카테고리 변경
export async function PUT(request: Request) {
	const result = await checkLogin();
	if (!result.success) {
		return NextResponse.json(
			{ success: false, message: result.message },
			{ status: result.status }
		);
	}
	const userId = result.user?.userId as string;
	const { originalCategoryName, changedCategoryName } = await request.json();

	if (!originalCategoryName || !changedCategoryName || !userId) {
		return NextResponse.json(
			{
				success: false,
				message: 'originalCategoryName 또는 changedCategoryName 또는 userId가 없습니다.',
			},
			{ status: 400 }
		);
	}
	try {
		await updateCategory(userId, originalCategoryName, changedCategoryName);
		return NextResponse.json({ success: true, message: '카테고리 변경 성공' });
	} catch (error) {
		console.log('error updateCategory: ', error);
		return NextResponse.json(
			{ success: false, message: '카테고리 변경 중 오류가 발생했습니다.' },
			{ status: 500 }
		);
	}
}

const updateCategory = async (
	userId: string,
	originalCategoryName: string,
	changedCategoryName: string
) => {
	// 카테고리 이름 변경 cascade 설정
	const result = await prisma.blogCategory.update({
		where: {
			categoryName: originalCategoryName,
			userId,
		},
		data: {
			categoryName: changedCategoryName,
		},
	});
	console.log('result: ', result);
	return result;
};
const createCategory = async (userId: string, categoryName: string) => {
	const category = await prisma.blogCategory.create({
		data: {
			userId,
			categoryName,
		},
	});
	console.log('category: ', category);
	return {
		...category,
		privateCount: Number(category.privateCount),
		publicCount: Number(category.publicCount),
	};
};

const checkEmptyCategory = async (userId: string, categoryName: string) => {
	const category = await prisma.blogPostPublish.findFirst({
		where: {
			categoryName,
			userId,
		},
	});
	// 카테고리에 포스트가 있으면 false 반환
	return category ? false : true;
};
const deleteCategory = async (userId: string, categoryName: string) => {
	const category = await prisma.blogCategory.delete({
		where: {
			userId,
			categoryName,
		},
	});
	return category;
};
