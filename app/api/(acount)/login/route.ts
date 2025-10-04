import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prismaSession';
import bcrypt from 'bcrypt';
import {
	generatAccessToken,
	generatRefreshToken,
	setAuthCookies,
} from '@/app/api/services/loginService';

export async function POST(request: NextRequest) {
	try {
		const { userId, password } = await request.json();

		// 사용자 조회 (아이디만으로)
		const user = await loginPost(userId);
		// 사용자 조회 실패
		if (!user) {
			return Response.json({ success: false, message: '아이디와 비밀번호가 일치하지 않습니다.' });
		}
		// 비밀번호가 10번 이상 틀림
		if (user.failedLoginCount >= 10) {
			return NextResponse.json({
				success: false,
				message: '비밀번호가 10번 이상 틀렸습니다. 관리자에게 문의하세요.',
			});
		}

		// 비밀번호 검증 - 입력된 평문 비밀번호와 저장된 해시 비교
		const isPasswordValid = await bcrypt.compare(password, user.userPassword);
		// 비밀번호가 일치하지 않음
		if (!isPasswordValid) {
			await updateUserFailedLoginCount(userId, true);
			return NextResponse.json({
				success: false,
				message: '아이디와 비밀번호가 일치하지 않습니다.',
			});
		}
		const accessToken = generatAccessToken(user.userId, user.userName);
		const refreshToken = generatRefreshToken(user.userId, user.userName);

		// 쿠키 저장
		await setAuthCookies(accessToken, 'access');
		await setAuthCookies(refreshToken, 'refresh');
		// 로그인 성공
		// 비밀번호 틀린 횟수 초기화
		await updateUserFailedLoginCount(userId, false);
		await updateUserUpdatedAt(userId);
		// 마지막 updatedAt 업데이트
		return NextResponse.json({
			success: true,
			message: '로그인 성공',
			user: {
				userId: user.userId,
				userName: user.userName,
			},
		});
	} catch (error) {
		console.error('로그인 오류:', error);
		return NextResponse.json(
			{ success: false, message: '서버 오류가 발생했습니다.' },
			{ status: 500 }
		);
	}
}

const loginPost = async (userId: string) => {
	const user = await prisma.user.findUnique({
		where: {
			userId,
		},
	});

	return user;
};
const updateUserUpdatedAt = async (userId: string) => {
	await prisma.user.update({
		where: { userId },
		data: { updatedAt: new Date() },
	});
};

const updateUserFailedLoginCount = async (userId: string, isFailed: boolean) => {
	await prisma.user.update({
		where: { userId },
		data: { failedLoginCount: isFailed ? { increment: 1 } : { set: 0 } },
	});
};
