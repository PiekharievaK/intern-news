import { create } from "zustand";

interface AuthState {
	isAuthenticated: boolean;
	login: string | null;

	setAuth: (data: { login: string }) => void;
	clearAuth: () => void;
	checkAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
	isAuthenticated: !!sessionStorage.getItem("isAuthenticated"),
	login: sessionStorage.getItem("login"),

	setAuth: ({ login }) => {
		sessionStorage.setItem("isAuthenticated", "true");
		sessionStorage.setItem("login", login);
		set({ isAuthenticated: true, login: login });
	},

	clearAuth: () => {
		sessionStorage.removeItem("isAuthenticated");
		sessionStorage.removeItem("login");
		set({ isAuthenticated: false, login: null });
	},

	checkAuth: () => {
		const isAuthenticated =
			sessionStorage.getItem("isAuthenticated") === "true";
		const login = sessionStorage.getItem("login");
		set({ isAuthenticated, login });
		console.log(isAuthenticated, login);
	},
}));
