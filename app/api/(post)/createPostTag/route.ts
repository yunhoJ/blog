import { prisma } from '@/lib/prismaSession';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	const { userId, tagList, postHash } = await req.json();
	console.log('test22', userId, tagList, postHash);
	await createBlogTag(userId, tagList, postHash);
	return NextResponse.json({ message: 'Tag created successfully' });
}
export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const postHash = searchParams.get('postHash');
	if (!postHash) {
		return NextResponse.json({ error: 'postHash is required' }, { status: 400 });
	}
	const tags = await prisma.blogPostTag.findMany({
		select: {
			tagName: true,
		},
		where: { postHash },
	});
	console.log('test33', tags);
	return NextResponse.json({ tags: tags.map((tag) => tag.tagName) });
}

const createBlogTag = async (userId: string, tagList: string[], postHash: string) => {
	console.log(userId, tagList, postHash);
	await prisma.blogPostTag.deleteMany({
		where: {
			postHash,
		},
	});
	const tags = await prisma.blogPostTag.createMany({
		data: tagList.map((tagName) => ({
			userId,
			tagName,
			postHash,
		})),
	});
	console.log(tags);
	return tags;
};
