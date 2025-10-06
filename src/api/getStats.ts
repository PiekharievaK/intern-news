import { useQuery } from "@tanstack/react-query";
import { fetchWithCredentials } from "./fetchWithCredentials";

const url = import.meta.env.VITE_BASE_URL;

export type Filters = Record<string, any>;

export const fetchStats = async (
	filters: Filters,
	currentPage: number,
	pageSize: number,
) => {
	const params = new URLSearchParams({
		...filters,
		page: currentPage.toString(),
		pageSize: pageSize.toString(),
	});

	const res = await fetchWithCredentials(`${url}/stats?${params.toString()}`);

	if (!res.ok) {
		throw new Error("Failed to fetch statistics");
	}

	return res.json();
};

export const useStats = (
	filters: Filters,
	currentPage: number,
	pageSize: number,
) => {
	return useQuery({
		queryKey: ["stats", filters, currentPage, pageSize],
		queryFn: () => fetchStats(filters, currentPage, pageSize),
		// placeholderData: (previousData) => previousData,
	});
};
