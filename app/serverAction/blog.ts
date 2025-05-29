'use server';

import { createPost } from '@/lib/notion';
import { revalidateTag } from 'next/cache';
// import { redirect } from 'next/navigation';
import { z } from 'zod';

const postSchema = z.object({
	title: z.string().min(1, { message: '제목을 입력해주세요.' }),
	tag: z.string().min(1, { message: '태그를 선택해주세요.' }),
	content: z.string().min(10, { message: '내용은 최소 10자 이상 입력해주세요.' }),
});
export interface PostFormState {
	message: string;
	errors?: {
		title?: string[];
		tag?: string[];
		content?: string[];
	};
	formData?: PostFormData;
	success?: boolean;
}
export interface PostFormData {
	title: string;
	tag: string;
	content: string;
}
export async function createPostAction(prevState: PostFormState, formData: FormData) {
	const rawFormData = {
		title: formData.get('title') as string,
		tag: formData.get('tag') as string,
		content: formData.get('content') as string,
	};

	const validatedFields = postSchema.safeParse(rawFormData);

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: '유효성 검사에 실패했습니다.',
			formData: rawFormData,
		};
	}
	try {
		const { title, tag, content } = validatedFields.data;

		await createPost({
			title: title,
			tag: tag,
			content: content,
		});
		// revalidatePath('/'); // 등록 후 캐시 무효화
		revalidateTag('posts'); //태그를 통한 캐시 무효화
		return {
			success: true,
			message: '블로그 포스트가 성공적으로 생성되었습니다.',
		};
	} catch (err) {
		console.log(err);
		return {
			message: '블로그 포스트 생성에 실패했습니다.',
			formData: rawFormData,
		};
	}
	// redirect('/');
}
