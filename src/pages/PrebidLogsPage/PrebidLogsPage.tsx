import { useEffect, useState } from "react";

interface Log {
	type: string;
	payload: any;
}

const PrebidLogsPage = () => {
	const [logs, setLogs] = useState<Log[]>([]);

	const addLog = (type: string, payload: any) => {
		setLogs((prevLogs) => [...prevLogs, { type, payload }]);
		console.log(`[PREBID][${type}]`, payload);
	};

	useEffect(() => {
		if (window.pbjs && window.pbjs.onEvent) {
			window.pbjs.onEvent("auctionInit", (data: any) =>
				addLog("auctionInit", data),
			);
			window.pbjs.onEvent("bidRequested", (data: any) =>
				addLog("bidRequested", data),
			);
			window.pbjs.onEvent("bidResponse", (data: any) =>
				addLog("bidResponse", data),
			);
			window.pbjs.onEvent("bidWon", (data: any) => addLog("bidWon", data));
			window.pbjs.onEvent("auctionEnd", (data: any) =>
				addLog("auctionEnd", data),
			);
		}

		return () => {
			if (window.pbjs) {
				window.pbjs.offEvent("auctionInit");
				window.pbjs.offEvent("bidRequested");
				window.pbjs.offEvent("bidResponse");
				window.pbjs.offEvent("bidWon");
				window.pbjs.offEvent("auctionEnd");
			}
		};
	}, []);

	return (
		<div className="p-4 max-w-3xl mx-auto">
			<h1 className="text-xl font-bold mb-4">Prebid Events Log</h1>

			<ul className="list-none p-0">
				{logs.map((log, idx) => (
					<li
						key={idx}
						className="bg-gray-100 p-3 mb-2 font-mono rounded text-xs overflow-x-auto"
					>
						<details className="mt-2 pl-2">
							<summary className="cursor-pointer text-blue-500 hover:underline">
								<strong>{log.type}</strong>
							</summary>
							<pre className="whitespace-pre-wrap break-words text-sm text-gray-700">
								{JSON.stringify(log.payload, null, 2)}
							</pre>
						</details>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PrebidLogsPage;
