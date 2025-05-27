import PostForm from '@/app/blog/PostForm';

// const createPostAction = async (formData: FormData) => {
// 	'use server';
// 	const title = formData.get('title') as string;
// 	const tag = formData.get('tag') as string;
// 	const content = formData.get('content') as string;

// 	await createPost({ title, tag, content });
// };

export default function Write() {
	return (
		<div className="container py-8">
			<PostForm />
		</div>
	);
}
