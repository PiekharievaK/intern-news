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

	const maxVisiblePages = 6;

	let startPage = 1;
	let endPage = totalPages;

	if (totalPages > maxVisiblePages) {
		const maxPagesBeforeCurrent = Math.floor(maxVisiblePages / 2);
		const maxPagesAfterCurrent = Math.ceil(maxVisiblePages / 2) - 1;

		if (current <= maxPagesBeforeCurrent) {
			startPage = 1;
			endPage = maxVisiblePages;
		} else if (current + maxPagesAfterCurrent >= totalPages) {
			startPage = totalPages - maxVisiblePages + 1;
			endPage = totalPages;
		} else {
			startPage = current - maxPagesBeforeCurrent;
			endPage = current + maxPagesAfterCurrent;
		}
	}

	const pages = [];
	for (let i = startPage; i <= endPage; i++) {
		pages.push(i);
	}

	return (
		<div className="flex justify-center space-x-2">
			<button
				type="button"
				disabled={current === 1}
				onClick={() => onPageChange(1)}
				className="px-3 py-1 rounded bg-gray-300 disabled:bg-gray-100"
			>
				{"<<"}
			</button>

			<button
				type="button"
				disabled={current === 1}
				onClick={() => onPageChange(current - 1)}
				className="px-3 py-1 rounded bg-gray-300 disabled:bg-gray-100"
			>
				Prev
			</button>

			{pages.map((page) => (
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
			))}

			<button
				type="button"
				disabled={current === totalPages}
				onClick={() => onPageChange(current + 1)}
				className="px-3 py-1 rounded bg-gray-300 disabled:bg-gray-100"
			>
				Next
			</button>

			<button
				type="button"
				disabled={current === totalPages}
				onClick={() => onPageChange(totalPages)}
				className="px-3 py-1 rounded bg-gray-300 disabled:bg-gray-100"
			>
				{">>"}
			</button>
		</div>
	);
};
