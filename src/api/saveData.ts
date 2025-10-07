export const saveData = async (
	filters: Record<string, any>,
	currentPage: number,
	pageSize: number,
	format: "csv" | "excel",
	endpoint: string,
) => {
	const params = new URLSearchParams({
		...filters,
		page: currentPage.toString(),
		pageSize: pageSize.toString(),
		format: format,
	});

	try {
		const response = await fetch(`${endpoint}?${params.toString()}`);

		if (!response.ok) {
			throw new Error("Failed to fetch the data for export");
		}

		const contentType = response.headers.get("Content-Type");
		let blob: Blob;

		if (contentType?.includes("text/csv")) {
			const csv = await response.text();
			blob = new Blob([csv], { type: "text/csv" });
		} else if (
			contentType?.includes(
				"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
			)
		) {
			const buffer = await response.arrayBuffer();
			blob = new Blob([buffer], {
				type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
			});
		} else {
			throw new Error("Unsupported file type");
		}

		const downloadLink = document.createElement("a");
		const url = window.URL.createObjectURL(blob);
		downloadLink.href = url;
		downloadLink.download = format === "csv" ? "stats.csv" : "stats.xlsx";
		downloadLink.click();
		window.URL.revokeObjectURL(url);
	} catch (error) {
		console.error("Error during data export:", error);
	}
};
