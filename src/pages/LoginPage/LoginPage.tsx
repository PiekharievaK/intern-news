import type React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField } from "../../conponents/InputField/InputField";
import Button from "../../conponents/Button/Button";
import { AppForm } from "../../conponents/Form/Form";

export type FormData = {
	email: string;
	password: string;
};

const formFields = [
	{
		name: "email",
		label: "Email",
		type: "email",
		placeholder: "Enter your email",
	},
	{
		name: "password",
		label: "Password",
		type: "password",
		placeholder: "Enter your password",
	},
];

const loginSchema = z.object({
	email: z
		.string()
		.min(1, "Email is required")
		.refine((val) => /\S+@\S+\.\S+/.test(val), {
			message: "Invalid email address",
		}),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginPage: React.FC = () => {
	const onSubmit = (data: FormData) => {
		console.log(data);
		window.alert("Login successful");
	};

	return (
		<div className="max-w-md mx-auto p-4 text-[var(--text)]">
			<h2 className="text-2xl font-bold mb-6">Login</h2>

			<AppForm<FormData>
				resolver={zodResolver(loginSchema)}
				onSubmit={onSubmit}
			>
				{({ control, formState: { errors } }) => (
					<>
						{formFields.map(({ name, label, type, placeholder }) => (
							<InputField
								key={name}
								name={name as keyof FormData}
								label={label}
								type={type}
								placeholder={placeholder}
								control={control}
								error={errors[name as keyof FormData]?.message}
							/>
						))}
						<Button type="submit" className="w-full">
							Login
						</Button>
					</>
				)}
			</AppForm>

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

export default LoginPage;
