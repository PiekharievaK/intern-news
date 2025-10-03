import type React from "react";
import { FIELD_DEFINITIONS } from "../../data/stats";

type StatisticsTableProps = {
	data: any[];
	loading: boolean;
};

const StatisticsTable: React.FC<StatisticsTableProps> = ({ data, loading }) => {
	const formatTimestamp = (timestamp: any) => {
		const date = timestamp;
		if (Number.isNaN(date.getTime())) {
			return "Invalid Date";
		}
		return date.toLocaleString();
	};

	return (
		<div className="border rounded-md overflow-x-auto shadow">
			<table className="min-w-full text-sm">
				<thead className="bg-gray-100 text-left">
					<tr>
						{FIELD_DEFINITIONS.map((field) => (
							<th key={field.key} className="px-4 py-2 border-b font-semibold">
								{field.label}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{loading ? (
						<tr>
							<td
								colSpan={FIELD_DEFINITIONS.length}
								className="px-4 py-2 text-center italic text-gray-500"
							>
								Loading...
							</td>
						</tr>
					) : data && data.length === 0 ? (
						<tr>
							<td
								colSpan={FIELD_DEFINITIONS.length}
								className="px-4 py-2 text-center italic text-gray-500"
							>
								No data found
							</td>
						</tr>
					) : (
						data.map((item, itemIndex) => (
							<tr key={`row-${item.timestamp}`}>
								{FIELD_DEFINITIONS.map((field) => (
									<td
										key={`cell-${field.key}-${itemIndex}`}
										className="px-4 py-2 border-b"
									>
										{field.key === "timestamp"
											? item[field.key]
											: (item[field.key] ?? "—")}
									</td>
								))}
							</tr>
						))
					)}
				</tbody>
			</table>
		</div>
	);
};

export default StatisticsTable;
