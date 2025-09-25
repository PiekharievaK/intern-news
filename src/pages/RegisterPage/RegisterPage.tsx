import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputField } from "../../conponents/InputField/InputField";
import Button from "../../conponents/Button/Button";
import { AppForm } from "../../conponents/Form/Form";
import { refreshPrebidAds } from "../../modules/prebidModule.module.ts";
import { useEffect } from "react";

export type FormData = {
	name: string;
	email: string;
	password: string;
};

const formFields = [
	{ name: "name", label: "Name", placeholder: "Enter your name", type: "text" },
	{
		name: "email",
		label: "Email",
		placeholder: "Enter your email",
		type: "email",
	},
	{
		name: "password",
		label: "Password",
		placeholder: "Enter your password",
		type: "password",
	},
] as const;

const registerSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z
		.string()
		.min(1, "Email is required")
		.refine((val) => /\S+@\S+\.\S+/.test(val), {
			message: "Invalid email address",
		}),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

const RegisterPage: React.FC = () => {
	useEffect(() => {
		refreshPrebidAds("news");
	}, []);

	const onSubmit = (data: FormData) => {
		console.log(data);
		window.alert("Registration successful");
	};

	return (
		<div className="text-[var(--text)] flex place-content-between ">
			<iframe
				data-slot="ad-slot-1"
				frameBorder="0"
				scrolling="no"
				className=" bg-[#f3f3f3] overflow-hidden border-none"
			/>
			<div>
				<h2 className="text-2xl font-bold mb-6">Register</h2>
				<AppForm<FormData>
					onSubmit={onSubmit}
					resolver={zodResolver(registerSchema)}
				>
					{({ control, formState: { errors } }) => (
						<>
							{formFields.map(({ name, label, placeholder, type }) => (
								<InputField
									key={name}
									name={name}
									label={label}
									control={control}
									placeholder={placeholder}
									type={type}
									error={errors[name]?.message}
								/>
							))}
							<Button type="submit" className="w-full">
								Register
							</Button>
						</>
					)}
				</AppForm>

				<div className="mt-4 text-center">
					<p>
						Already have an account?{" "}
						<a href="/login" className="text-[var(--header)]">
							Login here
						</a>
					</p>
				</div>
			</div>

			<iframe
				data-slot="ad-slot-2"
				frameBorder="0"
				scrolling="no"
				className=" bg-[#f3f3f3] overflow-hidden border-none"
			/>
		</div>
	);
};

export default RegisterPage;
