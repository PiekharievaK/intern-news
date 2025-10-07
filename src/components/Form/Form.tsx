import { useForm, type FieldValues } from "react-hook-form";
import type { AppFormProps } from "../../types/appForm";
import Button from "../Button/Button";

export const AppForm = <T extends FieldValues>({
	onSubmit,
	children,
	defaultValues,
	className,
	resolver,
	button,
}: AppFormProps<T>) => {
	const methods = useForm<T>({
		resolver,
		mode: "onChange",
		defaultValues,
	});

	return (
		<form
			onSubmit={methods.handleSubmit(onSubmit)}
			className={className || "space-y-4"}
		>
			{children(methods)}
			<Button type="submit" className="w-full">
				{button}
			</Button>
		</form>
	);
};
