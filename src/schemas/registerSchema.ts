import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

export const registerSchema = z
	.object({
		login: z.string().min(1, "Login is required"),
		email: z
			.string()
			.min(1, "Email is required")
			.refine((val) => /\S+@\S+\.\S+/.test(val), {
				message: "Invalid email address",
			}),
		password: z.string().min(6, "Password must be at least 6 characters"),
		confirmPassword: z.string().min(6, "Please confirm your password"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

export const rgisterResolver = zodResolver(registerSchema);
