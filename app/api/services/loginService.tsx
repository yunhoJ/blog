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
