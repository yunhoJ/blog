import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prismaSession';
import { getCategories } from '../../services/getCategory';

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
