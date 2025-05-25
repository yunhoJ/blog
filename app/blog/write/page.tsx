import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { createPost } from '@/lib/notion';
import { Loader2 } from 'lucide-react';

const createPostAction = async (formData: FormData) => {
	'use server';
	const title = formData.get('title') as string;
	const tag = formData.get('tag') as string;
	const content = formData.get('content') as string;

	await createPost({ title, tag, content });
	console.log(title, tag, content);
};

export default function Write() {
	return (
		<div className="container py-8">
			<form action={createPostAction}>
				<Card className="mx-auto max-w-2xl">
					<CardContent className="p-6">
						<div className="mb-6 space-y-2">
							<Label htmlFor="title">제목</Label>
							<Input
								id="title"
								name="title"
								placeholder="제목을 입력해주세요"
								className="h-12 text-lg"
							></Input>
						</div>

						<div className="mb-6 space-y-2">
							<Label htmlFor="tag">태그</Label>
							<Input id="tag" name="tag" placeholder="태그를 입력해주세요" className="h-12"></Input>
						</div>

						<div className="space-y-2">
							<Label htmlFor="content">본문</Label>
							<Textarea
								id="content"
								name="content"
								placeholder="작성해주세요"
								className="min-h-[400px]"
							/>
						</div>
						<div className="mt-6 flex justify-end gap-2">
							<Button>
								<Loader2 className="mr-2 hidden h-4 w-4 animate-spin" />
								발행하기
							</Button>
						</div>
					</CardContent>
				</Card>
			</form>
		</div>
	);
}
