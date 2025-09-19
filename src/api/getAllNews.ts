import { useQuery } from "@tanstack/react-query";

type NewsItem = {
	id: number;
	title: string;
	content: string;
	image?: string;
};

const getAllNews = async (): Promise<NewsItem[]> => {
	const res = await fetch("/src/api/data/prevNews.json");
	if (!res) throw new Error("Failed to fetch news");
	console.log(res);
	return res.json();
};

export const useNews = () => {
	return useQuery({
		queryKey: ["news"],
		queryFn: getAllNews,
	});
};
