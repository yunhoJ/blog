import { NextResponse } from 'next/server';
import { checkLogin } from '@/app/api/services/loginService';

export async function POST() {
	// 쿠키에서 토큰 가져오기
	const result = await checkLogin();
	if (result.success) {
		return NextResponse.json(result);
	} else {
		return NextResponse.json(
			{ success: false, message: result.message },
			{ status: result.status }
		);
	}
}
