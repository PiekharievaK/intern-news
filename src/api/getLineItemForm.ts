import { useQuery } from "@tanstack/react-query";

const url = import.meta.env.VITE_BASE_URL;
const fetchHtmlSnippet = async (endpoint: string): Promise<string> => {
	const res = await fetch(`${url}${endpoint}`);

	if (!res.ok) {
		throw new Error("Failed to fetch HTML snippet");
	}

	const html = await res.text();
	return html;
};

export const useHtmlSnippet = (endpoint: string | undefined) => {
	return useQuery<string, Error>({
		queryKey: ["html-snippet", endpoint],
		queryFn: async () => {
			if (!endpoint) throw new Error("No endpoint provided");
			return fetchHtmlSnippet(endpoint);
		},
		enabled: !!endpoint,
	});
};
