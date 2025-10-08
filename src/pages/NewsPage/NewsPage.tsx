import type React from "react";
import { useState } from "react";
import { useNews } from "../../api/getAllNews";
import { Pagination } from "../../components/Pagination/Pagination";
import { NewsItemCard } from "../../components/NewsItem/NewsItem";

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
						return <NewsItemCard key={item.id} item={item} />;
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
