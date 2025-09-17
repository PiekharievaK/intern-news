import type React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface News {
	id: number;
	title: string;
	body: string;
}

const FullNewsPage: React.FC = () => {
	const { id } = useParams();
	const [news, setNews] = useState<News | null>(null);

	useEffect(() => {
		const mockNews = [
			{ id: 1, title: "News 1", body: "Full content for news 1" },
			{ id: 2, title: "News 2", body: "Full content for news 2" },
			{ id: 3, title: "News 3", body: "Full content for news 3" },
		];
		const currentNews = mockNews.find((item) => item.id.toString() === id);
		setNews(currentNews || null);
	}, [id]);

	if (!news) return <div>Loading...</div>;

	return (
		<div className="p-4">
			<h2 className="text-2xl font-bold mb-6">{news.title}</h2>
			<p>{news.body}</p>
		</div>
	);
};

export default FullNewsPage;
