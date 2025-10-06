import { useMutation } from "@tanstack/react-query";
import { fetchWithCredentials } from "./fetchWithCredentials";
import type { registerFormData } from "../types/form";
import { toast } from "react-toastify";

const url = import.meta.env.VITE_BASE_URL;

export const signUp = async ({ email, password, login }: registerFormData) => {
	const res = await fetchWithCredentials(`${url}/auth/signup`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ email, password, login }),
	});

	if (!res.ok) {
		const errorData = await res.json();
		throw new Error(errorData.message);
	}

	return res.json();
};

export const useSignUp = () => {
	return useMutation({
		mutationFn: signUp,
		onSuccess: () => {
			toast.success("Sign up success:");
		},
		onError: (error: Error) => {
			toast.error(`❌Sign up  failed: ${error.message}`);
		},
	});
};
