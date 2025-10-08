import { Link } from "react-router-dom";
import type { NewsItem } from "../../api/getAllNews";

type Props = {
	item: NewsItem;
};

export const NewsItemCard: React.FC<Props> = ({ item }) => {
	const image = item?.image || "https://i.ibb.co/hXCwYmK/4054617.png";

	return (
		<div
			key={item.id}
			className="flex items-center gap-4 p-4 border rounded-lg bg-[var(--items-bg)] text-[var(--items-t)] shadow-sm"
		>
			<div className="w-28 flex-shrink-0 overflow-hidden rounded-md bg-neutral-200 dark:bg-neutral-700">
				<img
					src={image}
					alt={item.title}
					className="w-full h-full object-contain"
					loading="lazy"
				/>
			</div>

			<div className="flex flex-col">
				<h3 className="text-lg font-semibold mb-1">{item.title}</h3>
				<p className="text-sm line-clamp-2 mb-2">{item.content}</p>
				{item.pubDate && (
					<p className="text-sm line-clamp-2 mb-2">
						{new Date(item.pubDate).toLocaleString()}
					</p>
				)}
				<Link
					to={`/news/${item.id}`}
					className="text-sm font-medium text-[var(--header)] hover:underline self-start"
				>
					Read more
				</Link>
			</div>
		</div>
	);
};
