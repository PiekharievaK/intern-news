import { getAdUnitsForPage } from "./adConfig";
import { renderAds } from "./renderAds";

export const initPrebid = (pageName: string) => {
	window.pbjs = window.pbjs || {};
	window.pbjs.que = window.pbjs.que || [];

	console.log("init");

	const loadAds = () => {
		const adUnits = getAdUnitsForPage(pageName);
		window.pbjs.addAdUnits(adUnits);

		window.pbjs.requestBids({
			bidsBackHandler: () => {
				const ads = window.pbjs.getHighestCpmBids();
				renderAds(ads);
			},
		});
	};

	loadAds();

	const observer = new MutationObserver((mutationsList) => {
		for (let mutation of mutationsList) {
			if (mutation.type === "childList") {
				const iframe = document.querySelector('[data-slot="ad-slot-1"]');
				if (iframe) {
					console.log("Iframe found, rendering ads");
					const ads = window.pbjs.getHighestCpmBids();
					renderAds(ads);

					observer.disconnect();
					break;
				}
			}
		}
	});

	observer.observe(document.body, {
		childList: true,
		subtree: true,
	});

	const timeout = setTimeout(() => {
		console.log("Iframe not found in 5 seconds, stopping retries...");
		observer.disconnect();
	}, 5000);

	let lastPath = window.location.pathname;

	setInterval(() => {
		const currentPath = window.location.pathname;

		if (currentPath !== lastPath) {
			console.log("Path changed:", currentPath);
			lastPath = currentPath;

			observer.disconnect();
			loadAds();
			startMutationObserver();
		}
	}, 1000);

	const startMutationObserver = () => {
		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});
	};

	setInterval(() => {
		console.log("Refreshing ads after interval");
		loadAds();
	}, 10000);
};
