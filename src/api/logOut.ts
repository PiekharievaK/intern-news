import { useMutation } from "@tanstack/react-query";
import { fetchWithCredentials } from "./fetchWithCredentials";
import { toast } from "react-toastify";
import { useAuthStore } from "../store/authStore";

const url = import.meta.env.VITE_BASE_URL;

export const logout = async () => {
	const res = await fetchWithCredentials(`${url}/auth/logout`, {
		method: "GET",
	});

	if (!res.ok) {
		throw new Error();
	}

	return res.json();
};

export const useLogout = () => {
	const clearAuth = useAuthStore((state) => state.clearAuth);

	return useMutation({
		mutationFn: logout,
		onSuccess: () => {
			clearAuth();
			toast.success("logout success:");
		},
		onError: (error: Error) => {
			toast.error(`❌ logout failed ${error.message}`);
		},
	});
};
