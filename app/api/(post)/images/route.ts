import { NextRequest, NextResponse } from 'next/server';
import supabase from '@/app/api/services/imageStorage';

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
	const postHash = formData.get('postHash') as string;
	const uploadImageName = normalizeKey(image.name, postHash);
	const { error } = await supabase.storage.from('blog-storage').upload(uploadImageName, image);
	if (error) {
		console.log('error', error);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
	// 이미지 주소 조회 후 반환
	const { data } = await supabase.storage.from('blog-storage').getPublicUrl(uploadImageName);

	return NextResponse.json({
		imageUrl: data.publicUrl,
		imageName: uploadImageName,
	});
}

function normalizeKey(fileName: string, postHash: string) {
	const timeStamp = Date.now();
	const sanitized = fileName
		.normalize('NFKD') // 유니코드 정규화
		.replace(/[^\w.-]/g, '_')
		.replace(/_+/g, '_') // 연속된 _ 하나로 축소
		.replace(/^_+|_+$/g, ''); // 양 끝 _ 제거; // 한글, 공백, 특수문자 제거 및 치환
	return `${postHash}/${timeStamp}_${sanitized}`;
}
