import type React from "react";
import { InputField } from "../../conponents/InputField/InputField";
import Button from "../../conponents/Button/Button";
import { AppForm } from "../../conponents/Form/Form";
import { useEffect } from "react";

import { refreshPrebidAds } from "../../modules/prebidModule.module.ts";
import { loginFormFields } from "../../data/formFields.ts";
import { loginResolver } from "../../schemas/loginSchema.ts";
import type { loginFormData } from "../../types/form.ts";

const LoginPage: React.FC = () => {
	useEffect(() => {
		refreshPrebidAds("news");
	}, []);

	const onSubmit = (data: loginFormData) => {
		console.log(data);
		window.alert("Login successful");
	};

	return (
		<div className="flex w-full place-content-between  text-[var(--text)]">
			<iframe
				title="adFrame"
				data-slot="ad-slot-1"
				frameBorder="0"
				scrolling="no"
				className=" bg-[#f3f3f3] overflow-hidden border-none"
			/>
			<div className=" p-4">
				{" "}
				<h2 className="text-2xl font-bold mb-6">Login</h2>
				<AppForm<loginFormData> resolver={loginResolver} onSubmit={onSubmit}>
					{({ control, formState: { errors } }) => (
						<>
							{loginFormFields.map(({ name, label, type, placeholder }) => (
								<InputField
									key={name}
									name={name as keyof loginFormData}
									label={label}
									type={type}
									placeholder={placeholder}
									control={control}
									button="Login"
									error={errors[name as keyof loginFormData]?.message}
								/>
							))}
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
			<iframe
				title="adFrame"
				data-slot="ad-slot-2"
				frameBorder="0"
				scrolling="no"
				className="  bg-[#f3f3f3] overflow-hidden border-none"
			/>
		</div>
	);
};

export default LoginPage;
