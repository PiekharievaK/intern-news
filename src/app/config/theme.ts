const defaultTheme = localStorage.getItem("theme");

if (defaultTheme) {
  document.documentElement.className = defaultTheme;
} else {
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const systemTheme = systemPrefersDark ? "dark" : "light";
  localStorage.setItem("theme", systemTheme);
  document.documentElement.className = systemTheme;
}
