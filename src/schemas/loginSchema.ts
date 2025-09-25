import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const loginSchema = z.object({
	email: z
		.string()
		.min(1, "Email is required")
		.refine((val) => /\S+@\S+\.\S+/.test(val), {
			message: "Invalid email address",
		}),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

export const loginResolver = zodResolver(loginSchema);
