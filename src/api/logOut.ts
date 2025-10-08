import { useMutation } from "@tanstack/react-query";
import { fetchWithCredentials } from "./fetchWithCredentials";
import { toast } from "react-toastify";
import { useAuthStore } from "../store/authStore";

const url = import.meta.env.VITE_BASE_URL;

export const logout = async () => {
	const token = localStorage.getItem("token");
	const res = await fetchWithCredentials(`${url}/auth/logout`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
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
			clearAuth();
			toast.error(`❌ logout failed ${error.message}`);
		},
	});
};
