import { getAdUnitsForPage } from "./adConfig";
import { renderAds } from "./renderAds";

export const refreshPrebidAds = (): void => {
	const adUnits = getAdUnitsForPage(window.location.pathname);

	window.pbjs.que.push(() => {
		window.pbjs.clearAuction?.();
		setTimeout(() => {
			window.pbjs.adUnits = [];
			window.pbjs.addAdUnits(adUnits);
			window.pbjs.requestBids({
				bidsBackHandler: () => {
					const ads = window.pbjs.getHighestCpmBids() || [];
					console.log("Bids after refresh:", ads);
					renderAds(ads);
				},
			});
		}, 200);
	});
};

export const setupAdRefresh = (): NodeJS.Timeout => {
	return setInterval(() => {
		console.log("Ad refresh (10 seconds)");

		const adIframes = document.querySelectorAll(
			'iframe[data-slot^="ad-slot-"]',
		);
		if (!adIframes.length) {
			console.warn("No ad iframes found, skipping refresh");
			return;
		}
		refreshPrebidAds();
	}, 10000);
};
