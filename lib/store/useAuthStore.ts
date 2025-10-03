import { create } from 'zustand';
import { postApi } from '@/app/api/services/api';

interface User {
	userId: string;
	userName: string;
}

interface AuthState {
	// 상태
	isAuthenticated: boolean;
	isLoading: boolean;
	user: User | null;

	// 액션
	checkAuth: () => Promise<void>;
	login: (userId: string, password: string) => Promise<boolean>;
	logout: () => void;
	// setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
	// 초기 상태
	isAuthenticated: false,
	isLoading: false,
	user: null,

	// 인증 확인 (토큰 검증)
	checkAuth: async () => {
		set({ isLoading: true });
		try {
			const response = await postApi.checkLogin();

			if (response.success) {
				set({
					isAuthenticated: true,
					user: response.user || null,
					isLoading: false,
				});
			} else {
				set({
					isAuthenticated: false,
					user: null,
					isLoading: false,
				});
			}
		} catch {
			set({
				isAuthenticated: false,
				user: null,
				isLoading: false,
			});
		}
	},

	// 로그인
	login: async (userId: string, password: string) => {
		set({ isLoading: true });
		try {
			const response = await postApi.login(userId, password);

			if (response.success) {
				set({
					isAuthenticated: true,
					user: response.user,
					isLoading: false,
				});
				return true;
			} else {
				set({
					isAuthenticated: false,
					user: null,
					isLoading: false,
				});
				return false;
			}
		} catch {
			set({
				isAuthenticated: false,
				user: null,
				isLoading: false,
			});
			return false;
		}
	},

	// 로그아웃
	logout: async () => {
		const response = await postApi.logout();
		if (response.success) {
			set({
				isAuthenticated: false,
				user: null,
			});
		}
	},
}));
