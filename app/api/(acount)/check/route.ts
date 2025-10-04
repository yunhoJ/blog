import { NextResponse } from 'next/server';
import {
	deleteAuthCookies,
	getAuthTokens,
	refreshAccessToken,
	verifyToken,
} from '@/app/api/services/loginService';
import jwt from 'jsonwebtoken';

export async function POST() {
	// 쿠키에서 토큰 가져오기
	const { accessToken, refreshToken } = await getAuthTokens();
	let reGenAccessToken = false;

	if (!accessToken && !refreshToken) {
		return NextResponse.json(
			{ success: false, message: '토큰이 없습니다. 로그인해주세요.' },
			{ status: 401 }
		);
	} else if (!accessToken && refreshToken) {
		reGenAccessToken = true;
	} else if (accessToken) {
		try {
			const user = verifyToken(accessToken);

			return NextResponse.json({
				success: true,
				message: '토큰 검증 성공',
				user: {
					userId: user.userId,
					userName: user.userName,
				},
			});
		} catch (error) {
			if (error instanceof jwt.TokenExpiredError && refreshToken) {
				reGenAccessToken = true;
			} else {
				await deleteAuthCookies();
				return NextResponse.json(
					{ success: false, message: '토큰 검증 실패. 다시 로그인해주세요.' },
					{ status: 401 }
				);
			}
		}
	}
	if (reGenAccessToken && refreshToken) {
		try {
			const user = await refreshAccessToken(refreshToken);
			return NextResponse.json({
				success: true,
				message: '토큰 재발급 성공',
				user: {
					userId: user.userId,
					userName: user.userName,
				},
			});
		} catch {
			// 쿠키에서 토큰 삭제
			await deleteAuthCookies();
			return NextResponse.json(
				{ success: false, message: '토큰 재발급 실패. 다시 로그인해주세요.' },
				{ status: 401 }
			);
		}
	}

	// 예상치 못한 경로
	return NextResponse.json(
		{ success: false, message: '알 수 없는 오류가 발생했습니다.' },
		{ status: 500 }
	);
}
