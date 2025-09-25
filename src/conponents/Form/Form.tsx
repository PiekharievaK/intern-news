import { useForm, type FieldValues } from "react-hook-form";
import type { AppFormProps } from "../../types/appForm";

export const AppForm = <T extends FieldValues>({
	onSubmit,
	children,
	defaultValues,
	className,
	resolver,
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
		</form>
	);
};
