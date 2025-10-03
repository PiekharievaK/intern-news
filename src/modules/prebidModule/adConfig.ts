import { configs } from "./configs/PageAdsConfig";

export const getAdConfigKeyForPage = (path: string): keyof typeof configs => {
	if (path === "/login") return "login";
	if (path === "/register") return "register";
	if (path === "/news") return "news";
	if (/^\/news\/[a-fA-F0-9]+$/.test(path)) return "singleNews";
	return "default";
};

export const getAdUnitsForPage = (path: string) => {
	const key = getAdConfigKeyForPage(path);
	return configs[key] || [];
};

export const getAdSlotsForPage = (path: string) => {
	const key = getAdConfigKeyForPage(path);
	return configs[key] || [];
};
