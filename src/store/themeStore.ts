import { create } from "zustand";
import type { Theme, ThemeState } from "../types/theme";

export const useThemeStore = create<ThemeState>((set) => ({
	theme: (localStorage.getItem("theme") as Theme) || "light",
	toggleTheme: () =>
		set((state) => {
			const newTheme = state.theme === "light" ? "dark" : "light";
			document.documentElement.className = newTheme;
			localStorage.setItem("theme", newTheme);
			return { theme: newTheme };
		}),
}));
