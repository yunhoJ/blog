import { deleteAuthCookies } from '@/app/api/services/loginService';
import { NextResponse } from 'next/server';

export async function POST() {
	await deleteAuthCookies();
	return NextResponse.json({ success: true, message: '로그아웃 성공' });
}
