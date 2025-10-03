import type React from "react";
import type { ButtonProps } from "../../types/button";

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
			className={`group py-2 px-4 rounded font-medium bg-[var(--button-bg)] text-[var(--button-text)] hover:bg-[var(--button-bg-h)]  focus:outline-none focus:ring-2 focus:ring-[var(--text)] transition cursor-pointer ${className} ${
				disabled ? "opacity-50 cursor-not-allowed" : ""
			}`}
		>
			{children}
		</button>
	);
};

export default Button;
