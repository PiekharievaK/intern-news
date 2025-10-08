import type React from "react";

const LineItemPage: React.FC = () => {
	const baseUrl = import.meta.env.VITE_BASE_URL;
	const src = `${baseUrl}/addServer/form`;

	return (
		<div className="h-full w-full">
			<iframe
				src={src}
				width="100%"
				height="800px"
				style={{ border: "none" }}
				title="Embedded Form"
			/>
		</div>
	);
};

export default LineItemPage;
