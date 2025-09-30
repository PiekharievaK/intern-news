import { checkingElementsOnPage } from "./checkingElements";
import { createAdContainersForPage } from "./createContainer";
import { renderAds } from "./renderAds";
import { loadBids } from "./loadBids";

type Ad = { adUnitCode: string; adId: string };

export const setupPageAds = (): void => {
	let latestAds: Ad[] = [];

	const tryRenderAds = (ads: Ad[]): boolean => {
		if (!ads.length) return false;

		for (const ad of ads) {
			const iframe = document.querySelector(
				`iframe[data-slot="${ad.adUnitCode}"]`,
			);
			if (!iframe) return false;
		}

		renderAds(ads);
		return true;
	};

	checkingElementsOnPage({
		action: () => createAdContainersForPage(window.location.pathname),
		onSuccess: () => {
			console.log("Ad containers created");

			loadBids((ads) => {
				latestAds = ads;

				checkingElementsOnPage({
					action: () => tryRenderAds(latestAds),
					onSuccess: () => console.log("Ads rendered successfully after bids"),
					onFail: () => console.warn("Failed to render ads after 10 seconds"),
				});
			});
		},
		onFail: () => {
			console.warn("Ad containers not found within timeout");
		},
	});
};
