import { useQuery } from "@tanstack/react-query";

type NewsItem = {
	id: number;
	title: string;
	content: string;
	image?: string;
};

const fetchNewsById = async (id: string): Promise<NewsItem> => {
	const res = await fetch("/data/fullNews.json");
	if (!res.ok) {
		throw new Error("Failed to fetch news");
	}

	const allNews: NewsItem[] = await res.json();
	const news = allNews.find((item) => item.id.toString() === id);

	if (!news) {
		throw new Error("News not found");
	}

	return news;
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
