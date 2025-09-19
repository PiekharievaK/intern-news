import type React from "react";
import { useParams } from "react-router-dom";
import { useNewsById } from "../../api/getOneNews";

const FullNewsPage: React.FC = () => {
	const { id } = useParams();
	const { data: news, isLoading, error } = useNewsById(id);

	if (isLoading) return <div>loading...</div>;
	if (error) return <div>Something went wrong</div>;
	const image = news?.image || "https://i.ibb.co/hXCwYmK/4054617.png";
	return (
		<div className="p-4 text-[var(--text)]">
			<div className="flex flex-col md:flex-row gap-6 items-start max-w-5xl mx-auto">
				<div className="flex-1 order-2 md:order-1">
					<h2 className="text-3xl font-semibold mb-4">{news?.title}</h2>
					<p className="text-lg leading-relaxed">{news?.content}</p>
				</div>

				<div className="w-full md:w-[300px] h-[300px] flex-shrink-0 overflow-hidden rounded-lg shadow-md order-1 md:order-2">
					<img
						src={image}
						alt={news?.title}
						className="w-full h-full object-cover"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
};

export default FullNewsPage;
