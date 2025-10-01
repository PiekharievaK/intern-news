import { setupPageAds } from "./setupPageAds";
import { setupAdRefresh } from "./refreshAds";
import { unmountAdSlots } from "./unmountAds";
import { watchUrlChange } from "./watchUrlChange";

let adRefreshInterval: NodeJS.Timeout | null = null;

const onPathChange = (): void => {
	console.log("Path changed:", window.location.pathname);

	unmountAdSlots();

	if (adRefreshInterval) {
		clearInterval(adRefreshInterval);
		adRefreshInterval = null;
	}

	setupPageAds();
	adRefreshInterval = setupAdRefresh();
};

export const initPrebid = (): void => {
	window.pbjs = window.pbjs || {};
	window.pbjs.que = window.pbjs.que || [];

	setupPageAds();
	adRefreshInterval = setupAdRefresh();

	watchUrlChange(onPathChange);
};
