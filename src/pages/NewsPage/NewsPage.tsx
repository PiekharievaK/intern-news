import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNews } from "../../api/getAllNews";
import { Pagination } from "../../components/Pagination/Pagination";

const NewsPage: React.FC = () => {
	const [page, setPage] = useState(1);
	const { data, isLoading, error } = useNews(page);

	if (isLoading) return <div>loading...</div>;
	if (error) return <div>Something went wrong</div>;

	const items = data?.items ?? [];
	const totalCount = data?.totalCount ?? 0;

	return (
		<div className="space-y-4">
			<div
				className="flex w-full place-content-between space-x-10"
				data-slot="main"
			>
				<div className="space-y-4 grow" data-slot="inner">
					{items.map((item) => {
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
					<Pagination
						total={totalCount}
						current={page}
						onPageChange={(newPage: React.SetStateAction<number>) =>
							setPage(newPage)
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default NewsPage;
