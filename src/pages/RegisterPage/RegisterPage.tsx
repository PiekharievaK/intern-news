import type React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../../conponents/InputField/InputField";
import Button from "../../conponents/Button/Button";

export type FormData = {
	name: string;
	email: string;
	password: string;
};

const registerSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z.string().refine((val) => /\S+@\S+\.\S+/.test(val), {
		message: "Invalid email address",
	}),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

export const RegisterPage: React.FC = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(registerSchema),
		mode: "onChange",
	});

	const onSubmit: SubmitHandler<FormData> = (data) => {
		console.log(data);
		window.alert("Registration successful");
	};

	return (
		<div className="max-w-md mx-auto p-4 text-[var(--text)]">
			<h2 className="text-2xl font-bold mb-6">Register</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="space-y-4  text-[var(--text)]"
			>
				<InputField
					name="name"
					label="Name"
					control={control}
					placeholder="Enter your name"
					error={errors.name?.message}
				/>

				<InputField
					name="email"
					label="Email"
					control={control}
					type="email"
					placeholder="Enter your email"
					error={errors.email?.message}
				/>

				<InputField
					name="password"
					label="Password"
					control={control}
					type="password"
					placeholder="Enter your password"
					error={errors.password?.message}
				/>

				<Button type="submit" className="w-full">
					Register
				</Button>
			</form>

			<div className="mt-4 text-center">
				<p>
					Already have an account?{" "}
					<a href="/login" className="text-[var(--header)]">
						Login here
					</a>
				</p>
			</div>
		</div>
	);
};
