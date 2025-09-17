import type React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface News {
	id: number;
	title: string;
	body: string;
}

export const NewsPage: React.FC = () => {
	const [news, setNews] = useState<News[]>([]);

	useEffect(() => {
		const mockNews = [
			{ id: 1, title: "News 1", body: "Content for news 1" },
			{ id: 2, title: "News 2", body: "Content for news 2" },
			{ id: 3, title: "News 3", body: "Content for news 3" },
		];
		setNews(mockNews);
	}, []);

	return (
		<div className="p-4">
			<h2 className="text-2xl font-bold mb-6">News Feed</h2>
			<div className="space-y-4">
				{news.map((item) => (
					<div key={item.id} className="p-4 border rounded">
						<h3 className="text-xl font-semibold">{item.title}</h3>
						<p>{item.body}</p>
						<Link to={`/news/${item.id}`} className="text-blue-500">
							Read more
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};
