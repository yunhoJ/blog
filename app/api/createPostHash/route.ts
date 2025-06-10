import { NextRequest, NextResponse } from 'next/server';
import { createPost } from '../services/createPost';

export async function POST(request: NextRequest) {
	const { title, content } = await request.json();

	const hash = await createPost(title, content);

	return NextResponse.json({ hash });
}
