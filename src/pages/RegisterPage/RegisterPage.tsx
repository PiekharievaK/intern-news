import { InputField } from "../../conponents/InputField/InputField";
import { AppForm } from "../../conponents/Form/Form";
import { registerFormFields } from "../../data/formFields.ts";
import { rgisterResolver } from "../../schemas/registerSchema.ts";
import type { registerFormData } from "../../types/form.ts";

const RegisterPage: React.FC = () => {
	const onSubmit = (data: registerFormData) => {
		console.log(data);
		window.alert("Registration successful");
	};

	return (
		<div className="text-[var(--text)] flex place-content-between ">
			<iframe
				title="ad-frame"
				data-slot="ad-slot-1"
				frameBorder="0"
				scrolling="no"
				className=" bg-[#f3f3f3] overflow-hidden border-none"
			/>
			<div>
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

			<iframe
				title="ad-frame"
				data-slot="ad-slot-2"
				frameBorder="0"
				scrolling="no"
				className=" bg-[#f3f3f3] overflow-hidden border-none"
			/>
		</div>
	);
};

export default RegisterPage;
