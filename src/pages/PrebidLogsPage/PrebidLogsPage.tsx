import { useEffect, useState } from "react";
import type { prebidLog } from "../../types/brebid";

const PrebidLogsPage = () => {
	const [logs, setLogs] = useState<prebidLog[]>([]);

	useEffect(() => {
		const addLog = (type: string, payload: any) => {
			setLogs((prevLogs) => [
				...prevLogs.filter((item) => item.type !== type),
				{ type, payload },
			]);
			console.log(`[PREBID][${type}]`, payload);
		};

		if (window.pbjs?.onEvent) {
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
			<div className="flex">
				{" "}
				<iframe
					title="adFrame"
					data-slot="ad-slot-1"
					frameBorder="0"
					scrolling="no"
					className="  bg-[#f3f3f3] overflow-hidden border-none"
				/>
				<iframe
					title="adFrame"
					data-slot="ad-slot-2"
					frameBorder="0"
					scrolling="no"
					className="  bg-[#f3f3f3] overflow-hidden border-none"
				/>
			</div>
			<ul className="list-none p-0">
				{logs.map((log) => (
					<li
						key={log.type}
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
