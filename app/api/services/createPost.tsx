// 프리즈마를 통한 db 데이터 저장
// import { prisma } from '@/lib/prismaSession';
import { PrismaClient } from '@prisma/client';
import { createHash } from 'crypto';
const prisma = new PrismaClient();
export const createPost = async (title: string, content: string) => {
	const postHash = createHash('sha256').update('test').digest('hex');
	console.log(title, content);
	const post = await prisma.BlogPostMeta.create({
		data: {
			postHash,
			userId: 'wjse213', // 임시 유저 아이디
		},
	});
	return post;
};
