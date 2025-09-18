import { useThemeStore } from "../../store/themeStore";

export const ThemeButton = () => {
	const { theme, toggleTheme } = useThemeStore();

	return (
		<button
			onClick={toggleTheme}
			type="button"
			className="w-fit bg-[var(--items-bg)] text-[var(--button-text)] hover:bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--text)] transition cursor-pointer py-2 px-4 rounded font-medium"
		>
			{theme === "light" ? "light" : "dark"}
		</button>
	);
};
