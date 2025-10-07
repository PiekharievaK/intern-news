import type React from "react";
import { InputField } from "../../components/InputField/InputField";
import { AppForm } from "../../components/Form/Form";
import { loginFormFields } from "../../data/formFields.ts";
import { loginResolver } from "../../schemas/loginSchema.ts";
import type { loginFormData } from "../../types/form.ts";
import { useLogin } from "../../api/logIn.ts";

const LoginPage: React.FC = () => {
	const loginMutation = useLogin();

	const onSubmit = (data: loginFormData) => {
		loginMutation.mutate(data);
	};

	return (
		<div
			className="flex w-full place-content-between  text-[var(--text)]"
			data-slot="main"
		>
			<div className=" mx-auto p-4">
				<h2 className="text-2xl font-bold mb-6">Login</h2>
				<AppForm<loginFormData>
					resolver={loginResolver}
					onSubmit={onSubmit}
					button="Login"
				>
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
		</div>
	);
};

export default LoginPage;
