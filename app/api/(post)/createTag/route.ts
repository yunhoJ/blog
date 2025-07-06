import { prisma } from '@/lib/prismaSession';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	const { userId, tagName } = await req.json();
	await createTag(userId, tagName);
	return NextResponse.json({ message: 'Tag created successfully' });
}
export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const userId = searchParams.get('userId');
	if (!userId) {
		return NextResponse.json({ error: 'userId is required' }, { status: 400 });
	}
	const tags = await getTags(userId);
	return NextResponse.json({ tags: tags.map((tag) => tag.tagName) });
}
const createTag = async (userId: string, tagName: string) => {
	const tags = await prisma.tag.create({
		data: {
			userId,
			tagName,
		},
	});
	return tags;
};

const getTags = async (userId: string) => {
	const tags = await prisma.tag.findMany({
		where: {
			userId,
		},
	});
	return tags;
};
