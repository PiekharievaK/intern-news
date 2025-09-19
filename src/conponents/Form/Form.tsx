import React from "react";
import {
	useForm,
	type SubmitHandler,
	type UseFormProps,
	type UseFormReturn,
	type Resolver,
	type FieldValues,
} from "react-hook-form";

type AppFormProps<T extends FieldValues> = {
	onSubmit: SubmitHandler<T>;
	children: (methods: UseFormReturn<T>) => React.ReactNode;
	defaultValues?: UseFormProps<T>["defaultValues"];
	className?: string;
	resolver?: Resolver<T>;
};

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
