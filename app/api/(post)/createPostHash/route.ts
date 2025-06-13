import { NextRequest, NextResponse } from 'next/server';
import { createPostMeta } from '../../services/createPost';

export async function POST(request: NextRequest) {
	//  포스트 메타 데이터 생성 api
	const { userId } = await request.json();
	const hash = await createPostMeta(userId);
	return NextResponse.json({ postHash: hash });
}
