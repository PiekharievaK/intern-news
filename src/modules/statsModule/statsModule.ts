type StatEvent = {
	eventType: string;
	timestamp: number;
	details?: Record<string, any>;
};

let eventQueue: StatEvent[] = [];
let timerId: number | null = null;
let enabled = false;

const endpoint = `${import.meta.env.VITE_BASE_URL}/stats`;
const batchSize = 20;
const batchTimeoutMs = 3000;

function pushEvent(eventType: string, details?: Record<string, any>) {
	if (!enabled) return;

	const event: StatEvent = {
		eventType,
		timestamp: Date.now(),
		details,
	};

	eventQueue.push(event);

	if (eventQueue.length >= batchSize) {
		flush();
	} else if (!timerId) {
		timerId = window.setTimeout(() => flush(), batchTimeoutMs);
	}
}

function flush() {
	if (timerId) {
		clearTimeout(timerId);
		timerId = null;
	}

	if (eventQueue.length === 0) return;

	const payload = JSON.stringify(eventQueue);
	eventQueue = [];

	console.log("Sending payload:", payload);

	fetch(endpoint, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: payload,
		keepalive: true,
	}).catch((e) => {
		console.error("Failed to send stats:", e);
	});
}

function handleBeforeUnload() {
	if (eventQueue.length === 0) return;

	const payload = JSON.stringify(eventQueue);
	navigator.sendBeacon(
		endpoint,
		new Blob([payload], { type: "application/json" }),
	);
}

function attachListeners() {
	if (document.readyState === "complete") {
		pushEvent("Load page", { url: location.href });
	} else {
		window.addEventListener("load", () =>
			pushEvent("Load page", { url: location.href }),
		);
	}

	const pbjsEvents = [
		"Load-admodule",
		"auctionInit",
		"auctionEnd",
		"bidRequested",
		"bidResponse",
		"bidWon",
	];
	const checkInterval = 100;
	const maxWaitTime = 10000;
	let waited = 0;

	const intervalId = window.setInterval(() => {
		if (window.pbjs && typeof window.pbjs.onEvent === "function") {
			window.clearInterval(intervalId);

			pbjsEvents.forEach((eventType) => {
				window.pbjs.onEvent(eventType, (data: any) => {
					pushEvent(eventType, data);
				});
			});

			pushEvent("StatsModule", { message: "pbjs.onEvent initialized" });
		} else {
			waited += checkInterval;
			if (waited >= maxWaitTime) {
				window.clearInterval(intervalId);
				console.warn("pbjs.onEvent failed to initialize");
			}
		}
	}, checkInterval);

	window.addEventListener("beforeunload", handleBeforeUnload);
}

export function initStats() {
	if (enabled) return;
	enabled = true;

	attachListeners();
}
