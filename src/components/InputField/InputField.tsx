import { useController, type FieldValues } from "react-hook-form";
import type { InputProps } from "../../types/appForm";

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
		<div className="mb-4 ">
			<label htmlFor={name} className="block text-sm font-medium ">
				{label}
			</label>
			<input
				{...field}
				id={name}
				type={type}
				placeholder={placeholder}
				className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
			/>
			{error && (
				<span className="text-[var(--error-text)] text-sm">{error}</span>
			)}
		</div>
	);
};
