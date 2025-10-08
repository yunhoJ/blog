// middleware.ts
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

// 인증이 필요한 api 경로
const protectedPaths = ['/api/createPostDraft', '/api/createPostPublish'];

// 인증이 필요한 페이지 경로
const protectedPagePaths = ['/blog/write'];

export async function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;
	const accessToken = req.cookies.get('accessToken')?.value;
	const refreshToken = req.cookies.get('refreshToken')?.value;

	// 인증이 필요한 api 경로
	if (protectedPaths.some((path) => pathname.startsWith(path))) {
		if (pathname === '/api/createPostDraft' && req.method === 'POST') {
			// 임시저장판 pass
			return NextResponse.next();
		}
		if (pathname === '/api/createPostPublish' && req.method === 'GET') {
			// 포스트 발행 리스트 pass
			return NextResponse.next();
		}
		if (!accessToken && !refreshToken) {
			return NextResponse.json(
				{ success: false, message: '토큰이 없습니다. 로그인해주세요.' },
				{ status: 401 }
			);
		}
	}
	// 인증이 필요한 페이지 경로
	if (protectedPagePaths.some((path) => pathname.startsWith(path))) {
		if (!accessToken && !refreshToken) {
			console.log('로그인 필요 페이지', req.url);
			return NextResponse.redirect(new URL('/', req.url));
		}
	}

	// 토큰이 없으면 401 반환

	// 통과
	return NextResponse.next();
}

export const config = {
	//api 경로만 체크
	matcher: ['/api:path*', '/blog/write'],
};
