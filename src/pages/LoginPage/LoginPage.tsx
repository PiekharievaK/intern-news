import type React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../../conponents/InputField/InputField";
import Button from "../../conponents/Button/Button";

export type FormData = {
	email: string;
	password: string;
};

const loginSchema = z.object({
	email: z
		.string()
		.min(1, "Email is required")
		.refine((val) => /\S+@\S+\.\S+/.test(val), {
			message: "Invalid email address",
		}),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

export const LoginPage: React.FC = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(loginSchema),
		mode: "onChange",
	});

	const onSubmit: SubmitHandler<FormData> = (data) => {
		console.log(data);
		window.alert("Login successful");
	};

	return (
		<div className="max-w-md mx-auto p-4 text-[var(--text)]">
			<h2 className="text-2xl font-bold mb-6">Login</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="space-y-4 text-[var(--text)]"
			>
				<InputField
					name="email"
					label="Email"
					control={control}
					placeholder="Enter your email"
					type="email"
					error={errors.email?.message}
				/>

				<InputField
					name="password"
					label="Password"
					control={control}
					placeholder="Enter your password"
					type="password"
					error={errors.password?.message}
				/>

				<Button type="submit" className="w-full ">
					Login
				</Button>
			</form>

			<div className="mt-4 text-center">
				<p>
					Don't have an account?{" "}
					<a href="/register" className="text-[var(--header)]">
						Register here
					</a>
				</p>
			</div>
		</div>
	);
};
