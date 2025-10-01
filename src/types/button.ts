export type ButtonProps = {
	type?: "button" | "submit" | "reset";
	onClick?: () => void;
	className?: string;
	disabled?: boolean;
	children: React.ReactNode;
};
