import { NextRequest, NextResponse } from 'next/server';
import supabase from '../services/imageStorage';

// 이미지 주소 조회
export async function GET(request: NextRequest) {
	const searchParams = request.nextUrl.searchParams;
	const imageName = searchParams.get('imageName');
	if (!imageName) {
		return NextResponse.json({ error: 'Image name is required' }, { status: 400 });
	}
	const { data } = await supabase.storage.from('blog-storage').getPublicUrl(imageName);

	return NextResponse.json({ data });
}

export async function POST(request: NextRequest) {
	const contentType = request.headers.get('Content-Type');

	if (!contentType?.includes('multipart/form-data')) {
		return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });
	}
	const formData = await request.formData();
	const image = formData.get('uploadImages') as File;

	const { error } = await supabase.storage
		.from('blog-storage')
		.upload('test/test/' + image.name, image);
	if (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
	// 이미지 주소 조회 후 반환
	const { data } = await supabase.storage.from('blog-storage').getPublicUrl(image.name);

	return NextResponse.json({ data });
}
