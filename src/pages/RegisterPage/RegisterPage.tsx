import { InputField } from "../../components/InputField/InputField";
import { AppForm } from "../../components/Form/Form";
import { registerFormFields } from "../../data/formFields.ts";
import { rgisterResolver } from "../../schemas/registerSchema.ts";
import type { registerFormData } from "../../types/form.ts";

const RegisterPage: React.FC = () => {
	const onSubmit = (data: registerFormData) => {
		console.log(data);
		window.alert("Registration successful");
	};

	return (
		<div
			className="text-[var(--text)] flex w-full place-content-between "
			data-slot="main"
		>
			<div className="mx-auto p-4">
				<h2 className="text-2xl font-bold mb-6">Register</h2>
				<AppForm<registerFormData>
					onSubmit={onSubmit}
					resolver={rgisterResolver}
					button="Register"
				>
					{({ control, formState: { errors } }) => (
						<>
							{registerFormFields.map(({ name, label, placeholder, type }) => (
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
		</div>
	);
};

export default RegisterPage;
