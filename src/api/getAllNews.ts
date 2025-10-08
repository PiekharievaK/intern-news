import { useQuery } from "@tanstack/react-query";

export type NewsItem = {
	id: number;
	title: string;
	content: string;
	image?: string;
	pubDate?: string;
};

type PaginatedResponse = {
	items: NewsItem[];
	totalCount: number;
};

const url = import.meta.env.VITE_BASE_URL;

export const getNews = async (page: number): Promise<PaginatedResponse> => {
	const res = await fetch(`${url}/news${page ? `?page=${page}` : ""}`);

	if (!res.ok) {
		throw new Error("Failed to fetch paginated news");
	}

	return res.json();
};

export const useNews = (page: number) => {
	return useQuery({
		queryKey: ["news", page],
		queryFn: () => getNews(page),
		placeholderData: (previousData) => previousData,
	});
};
