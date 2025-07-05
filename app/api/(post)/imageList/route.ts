import { NextRequest, NextResponse } from 'next/server';
import supabase from '@/app/api/services/imageStorage';

export async function GET(request: NextRequest) {
	const folder = request.nextUrl.searchParams.get('folder');

	if (!folder) {
		return NextResponse.json({ error: 'Folder path is required' }, { status: 400 });
	}

	const { data, error } = await supabase.storage.from('blog-storage').list(folder);

	if (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}

	const imageUrls = data
		.filter((item) => item.name.match(/\.(jpg|jpeg|png|webp|gif)$/i))
		.map((item) => {
			const { data: urlData } = supabase.storage
				.from('blog-storage')
				.getPublicUrl(`${folder}/${item.name}`);
			return {
				name: item.name,
				publicUrl: urlData.publicUrl,
			};
		});

	return NextResponse.json({ imageList: imageUrls });
}
