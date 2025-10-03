import type React from "react";

type PaginationProps = {
	total: number;
	current: number;
	pageSize?: number;
	onPageChange: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
	total,
	current,
	pageSize = 5,
	onPageChange,
}) => {
	const totalPages = Math.ceil(total / pageSize);

	if (totalPages <= 1) return null;

	return (
		<div className="flex justify-center space-x-2">
			<button
				type="button"
				disabled={current === 1}
				onClick={() => onPageChange(current - 1)}
				className="px-3 py-1 rounded bg-gray-300 disabled:bg-gray-100"
			>
				Prev
			</button>

			{[...Array(totalPages)].map((_, i) => {
				const page = i + 1;
				return (
					<button
						type="button"
						key={page}
						onClick={() => onPageChange(page)}
						className={`px-3 py-1 rounded ${
							current === page ? "bg-blue-500 text-white" : "bg-gray-200"
						}`}
					>
						{page}
					</button>
				);
			})}

			<button
				type="button"
				disabled={current === totalPages}
				onClick={() => onPageChange(current + 1)}
				className="px-3 py-1 rounded bg-gray-300 disabled:bg-gray-100"
			>
				Next
			</button>
		</div>
	);
};
