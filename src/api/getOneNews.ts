import { useQuery } from "@tanstack/react-query";

type NewsItem = {
	id: number;
	title: string;
	content: string;
	sourceUrl: string;
	newsUrl: string;
	createdAt: string;
	pubDate: string;
	image?: string;
};

const url = import.meta.env.VITE_BASE_URL;
const fetchNewsById = async (id: string): Promise<NewsItem> => {
	const res = await fetch(`${url}/news/${id}`);
	if (!res.ok) {
		throw new Error("Failed to fetch news");
	}

	const fullNews: NewsItem = await res.json();

	return fullNews;
};

export const useNewsById = (id: string | undefined) => {
	return useQuery<NewsItem, Error>({
		queryKey: ["news", id],
		queryFn: async () => {
			if (!id) throw new Error("No news id provided");
			return fetchNewsById(id);
		},
		enabled: !!id,
	});
};
