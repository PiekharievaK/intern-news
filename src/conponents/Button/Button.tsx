import type React from "react";

interface ButtonProps {
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
	className?: string;
	disabled?: boolean;
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	type = "button",
	onClick,
	className = "",
	disabled = false,
	children,
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`w-full py-2 px-4 rounded bg-blue-500 text-black hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${className} ${
				disabled ? "opacity-50 cursor-not-allowed" : ""
			}`}
		>
			{children}
		</button>
	);
};

export default Button;
