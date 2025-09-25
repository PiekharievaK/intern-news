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
