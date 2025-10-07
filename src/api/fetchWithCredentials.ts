import { toast } from "react-toastify";

export const fetchWithCredentials = async (
	input: RequestInfo,
	init?: RequestInit,
) => {
	const res = await fetch(input, {
		...init,
		credentials: "include",
	});

	if (res.status === 401) {
		toast.error("Unauthorized. Maybe redirect or logout.");
	}

	return res;
};
