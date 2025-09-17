import {
	useController,
	type Control,
	type FieldValues,
	type Path,
} from "react-hook-form";

interface InputProps<T extends FieldValues> {
	name: Path<T>;
	label: string;
	control: Control<T>;
	type?: string;
	placeholder?: string;
	error?: string;
}

export const InputField = <T extends FieldValues>({
	name,
	label,
	control,
	type = "text",
	placeholder,
	error,
}: InputProps<T>) => {
	const { field } = useController({
		name,
		control,
	});

	return (
		<div className="mb-4">
			<label htmlFor={name} className="block text-sm font-medium text-gray-700">
				{label}
			</label>
			<input
				{...field}
				id={name}
				type={type}
				placeholder={placeholder}
				className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
			/>
			{error && <span className="text-red-500 text-sm">{error}</span>}
		</div>
	);
};
