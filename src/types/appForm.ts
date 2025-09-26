import type {
	Control,
	FieldValues,
	Path,
	Resolver,
	SubmitHandler,
	UseFormProps,
	UseFormReturn,
} from "react-hook-form";

export type AppFormProps<T extends FieldValues> = {
	onSubmit: SubmitHandler<T>;
	children: (methods: UseFormReturn<T>) => React.ReactNode;
	defaultValues?: UseFormProps<T>["defaultValues"];
	className?: string;
	button: string;
	resolver?: Resolver<T>;
};

export type InputProps<T extends FieldValues> = {
	name: Path<T>;
	label: string;
	control: Control<T>;
	type?: string;
	placeholder?: string;
	error?: string;
};
