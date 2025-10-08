import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export interface JWTPayload {
	userId: string;
	userName: string;
	type: 'access' | 'refresh';
	iat: number;
	exp: number;
}

// 토큰 생성 함수
export const generatAccessToken = (userId: string, userName: string) => {
	return jwt.sign({ userId, userName, type: 'access' }, process.env.JWT_SECRET_KEY!, {
		expiresIn: '15m',
	});
};

export const generatRefreshToken = (userId: string, userName: string) => {
	return jwt.sign({ userId, userName, type: 'refresh' }, process.env.JWT_SECRET_KEY!, {
		expiresIn: '7d',
	});
};

// 쿠키 설정 함수
export const setAuthCookies = async (token: string, type: 'access' | 'refresh') => {
	const cookieStore = await cookies();

	if (type === 'access') {
		cookieStore.set('accessToken', token, {
			httpOnly: true,
			maxAge: 15 * 60, // 15분
			// secure: process.env.NODE_ENV === 'production',
			sameSite: 'lax',
		});
	} else if (type === 'refresh') {
		cookieStore.set('refreshToken', token, {
			httpOnly: true,
			maxAge: 7 * 24 * 60 * 60, // 7일
			// secure: process.env.NODE_ENV === 'production',
			sameSite: 'lax',
		});
	}
};

// 쿠키에서 토큰 가져오기
export const getAuthTokens = async () => {
	const cookieStore = await cookies();
	const accessToken = cookieStore.get('accessToken')?.value;
	const refreshToken = cookieStore.get('refreshToken')?.value;
	return { accessToken, refreshToken };
};

// 토큰 검증
export const verifyToken = (token: string): JWTPayload => {
	return jwt.verify(token, process.env.JWT_SECRET_KEY!) as JWTPayload;
};

// accessToken 만료시 리프레시 토큰 으로 재발급
export const refreshAccessToken = async (refreshToken: string) => {
	const decoded = verifyToken(refreshToken);

	// refreshToken 타입 검증
	if (decoded.type !== 'refresh') {
		throw new Error('Invalid token type');
	}

	const newAccessToken = generatAccessToken(decoded.userId, decoded.userName);
	await setAuthCookies(newAccessToken, 'access');
	return decoded;
};

export const deleteAuthCookies = async () => {
	const cookieStore = await cookies();
	cookieStore.delete('accessToken');
	cookieStore.delete('refreshToken');
};

// 로그인 체크
export const checkLogin = async () => {
	// 쿠키에서 토큰 가져오기
	const { accessToken, refreshToken } = await getAuthTokens();
	let reGenAccessToken = false;

	if (!accessToken && !refreshToken) {
		return {
			success: false,
			message: '토큰이 없습니다. 로그인해주세요.',
			status: 401,
		};
	} else if (!accessToken && refreshToken) {
		reGenAccessToken = true;
	} else if (accessToken) {
		try {
			const user = verifyToken(accessToken);
			return {
				success: true,
				message: '토큰 검증 성공',
				user: {
					userId: user.userId,
					userName: user.userName,
				},
			};
		} catch (error) {
			if (error instanceof jwt.TokenExpiredError && refreshToken) {
				reGenAccessToken = true;
			} else {
				await deleteAuthCookies();
				return {
					success: false,
					message: '토큰 검증 실패. 다시 로그인해주세요.',
					status: 401,
				};
			}
		}
	}

	if (reGenAccessToken && refreshToken) {
		try {
			const user = await refreshAccessToken(refreshToken);
			return {
				success: true,
				message: '토큰 재발급 성공',
				user: {
					userId: user.userId,
					userName: user.userName,
				},
			};
		} catch {
			// 쿠키에서 토큰 삭제
			await deleteAuthCookies();
			return {
				success: false,
				message: '토큰 재발급 실패. 다시 로그인해주세요.',
				status: 401,
			};
		}
	}

	// 예상치 못한 경로
	return {
		success: false,
		message: '알 수 없는 오류가 발생했습니다.',
		status: 500,
	};
};
