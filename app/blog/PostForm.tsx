'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { Loader2 } from 'lucide-react';
import { useActionState } from 'react';
import { createPostAction } from '../serverAction/blog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
export default function PostForm() {
	const queryClient = useQueryClient();
	const router = useRouter();
	const [state, formAction, isPending] = useActionState(createPostAction, {
		message: '',
		errors: {},
		formData: {
			title: '',
			tag: '',
			content: '',
		},
	});

	useEffect(() => {
		if (state.success) {
			console.log('state.success');
			queryClient.invalidateQueries({ queryKey: ['posts'] });
			router.push('/');
		}
	}, [state, queryClient, router]);

	return (
		<form action={formAction}>
			<Card className="mx-auto max-w-2xl">
				<CardContent className="p-6">
					{/* 상태 메시지 표시 */}
					{state.message && (
						<Alert className={`mb-6 ${state.errors ? 'bg-red-50' : 'bg-green-50'}`}>
							<AlertDescription>{state.message}</AlertDescription>
						</Alert>
					)}
					<div className="mb-6 space-y-2">
						<Label htmlFor="title">제목</Label>
						<Input
							id="title"
							name="title"
							placeholder="제목을 입력해주세요"
							className="h-12 text-lg"
							defaultValue={state.formData?.title}
						></Input>
						{state.errors?.title && <p className="text-red-500">{state.errors.title}</p>}
					</div>

					<div className="mb-6 space-y-2">
						<Label htmlFor="tag">태그</Label>
						<Input
							id="tag"
							name="tag"
							placeholder="태그를 입력해주세요"
							className="h-12"
							defaultValue={state.formData?.tag}
						></Input>
						{state.errors?.tag && <p className="text-red-500">{state.errors.tag}</p>}
					</div>
					<div className="space-y-2">
						<Label htmlFor="content">본문</Label>
						<Textarea
							id="content"
							name="content"
							placeholder="작성해주세요"
							className="min-h-[400px]"
							defaultValue={state.formData?.content}
						/>
						{state.errors?.content && <p className="text-red-500">{state.errors.content}</p>}
					</div>
					<div className="mt-6 flex justify-end gap-2">
						<Button disabled={isPending}>
							{isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
							발행하기
						</Button>
					</div>
				</CardContent>
			</Card>
		</form>
	);
}
