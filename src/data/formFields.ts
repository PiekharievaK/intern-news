export const loginFormFields = [
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

export const registerFormFields = [
	{
		name: "login",
		label: "Login",
		placeholder: "Enter your login",
		type: "text",
	},
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
	{
		name: "confirmPassword",
		label: "Confirm password",
		placeholder: "Enter your password",
		type: "password",
	},
] as const;
