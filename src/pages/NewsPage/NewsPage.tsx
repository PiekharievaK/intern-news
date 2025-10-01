import type React from "react";
import { Link } from "react-router-dom";
import { useNews } from "../../api/getAllNews";

const NewsPage: React.FC = () => {
	const { data, isLoading, error } = useNews();

	if (isLoading) return <div>loading...</div>;
	if (error) return <div>Something went wrong</div>;

	return (
		<div className="space-y-4">
			<div
				className="flex w-full  place-content-between space-x-10"
				data-slot="main"
			>
				<div className="space-y-4 grow" data-slot="inner">
					{data?.map((item) => {
						const image = item?.image || "https://i.ibb.co/hXCwYmK/4054617.png";

						return (
							<div
								key={item.id}
								className="flex items-start gap-4 p-4 border  rounded-lg bg-[var(--items-bg)] text-[var(--items-t)] shadow-sm"
							>
								<div className="w-28 h-20 flex-shrink-0 overflow-hidden rounded-md bg-neutral-200 dark:bg-neutral-700">
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
									<Link
										to={`/news/${item.id}`}
										className="text-sm font-medium text-[var(--header)] hover:underline self-start"
									>
										Read more
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default NewsPage;
