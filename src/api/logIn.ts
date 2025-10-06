import { useMutation } from "@tanstack/react-query";
import { fetchWithCredentials } from "./fetchWithCredentials";
import { toast } from "react-toastify";
import { useAuthStore } from "../store/authStore";
import { redirect, useNavigate } from "react-router-dom";

const url = import.meta.env.VITE_BASE_URL;

export const login = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}) => {
	const res = await fetchWithCredentials(`${url}/auth/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password }),
	});

	if (!res.ok) {
		const errorData = await res.json();
		throw new Error(errorData);
	}

	return res.json();
};

export const useLogin = () => {
	const setAuth = useAuthStore((state) => state.setAuth);
	const navigate = useNavigate();
	return useMutation({
		mutationFn: login,
		onSuccess: (data) => {
			setAuth({ login: data.login });
			toast.success("Login success");
			navigate("/news");
		},
		onError: (error: Error) => {
			toast.error(`❌ Login failed: ${error.message}`);
		},
	});
};
