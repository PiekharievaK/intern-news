import { getAdUnitsForPage } from "./adConfig";
import { renderAds } from "./renderAds";

export const refreshPrebidAds = (pageName: string): void => {
	const adUnits = getAdUnitsForPage(pageName);
	console.log("refresh");
	window.pbjs.que.push(() => {
		window.pbjs.addAdUnits(adUnits);
		window.pbjs.requestBids({
			bidsBackHandler: () => {
				const ads = window.pbjs.getHighestCpmBids();
				renderAds(ads);
			},
		});
	});
};
