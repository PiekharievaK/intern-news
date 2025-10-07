import type React from "react";
import { useState } from "react";
import { FIELD_DEFINITIONS } from "../../data/stats";
import { Pagination } from "../../components/Pagination/Pagination";
import StatisticsTable from "../../components/StatsTable/StatsTable";
import { saveData } from "../../api/saveData";
import { useStats } from "../../api/getStats";

const StatisticsPage: React.FC = () => {
	const [filters, setFilters] = useState<Record<string, any>>({});
	const [currentPage, setCurrentPage] = useState(1);

	const pageSize = 15;

	const { data, isLoading } = useStats(filters, currentPage, pageSize);

	const handleChange = (key: string, value: any) => {
		setFilters((prev) => ({
			...prev,
			[key]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setCurrentPage(1);
	};

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	return (
		<div className="p-6 font-sans">
			<h1 className="text-2xl font-bold mb-6">📊 Statistics</h1>

			<form onSubmit={handleSubmit} className="flex flex-wrap gap-4 mb-6">
				{FIELD_DEFINITIONS.filter((field) => field.key === "eventType").map(
					(field) => {
						const value = filters[field.key] || "";
						return (
							<div key={field.key} className="flex flex-col">
								<label htmlFor={field.key} className="mb-1 text-sm font-medium">
									{field.label}
								</label>
								<select
									id={field.key}
									value={value}
									onChange={(e) => handleChange(field.key, e.target.value)}
									className="border border-gray-300 rounded px-2 py-1 text-sm"
								>
									<option value="">-- choose --</option>
									{field.options?.map((option) => (
										<option key={option} value={option}>
											{option}
										</option>
									))}
								</select>
							</div>
						);
					},
				)}
			</form>

			<div className="mb-4 space-x-2">
				<button
					type="button"
					onClick={() =>
						saveData(
							filters,
							currentPage,
							pageSize,
							"csv",
							`${import.meta.env.VITE_BASE_URL}/stats`,
						)
					}
					className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded"
				>
					📥 Export as CSV
				</button>
				<button
					type="button"
					onClick={() =>
						saveData(
							filters,
							currentPage,
							pageSize,
							"excel",
							`${import.meta.env.VITE_BASE_URL}/stats`,
						)
					}
					className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded"
				>
					📥 Export as Excel
				</button>
			</div>

			<StatisticsTable data={data?.data || []} loading={isLoading} />

			<Pagination
				total={data?.totalRecords || 0}
				current={currentPage}
				pageSize={pageSize}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};

export default StatisticsPage;
