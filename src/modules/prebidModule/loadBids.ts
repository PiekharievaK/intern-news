import { getAdUnitsForPage } from "./adConfig";

type Ad = { adUnitCode: string; adId: string };

export const loadBids = (onComplete: (ads: Ad[]) => void): void => {
	const adUnits = getAdUnitsForPage(window.location.pathname);

	window.pbjs.que.push(() => {
		window.pbjs.addAdUnits(adUnits);
		window.pbjs.requestBids({
			bidsBackHandler: () => {
				const latestAds = window.pbjs.getHighestCpmBids?.() || [];
				console.log("Bids received:", latestAds);
				onComplete(latestAds);
			},
		});
	});
};
