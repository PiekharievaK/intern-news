export const unmountAdSlots = (): void => {
	document
		.querySelectorAll<HTMLElement>("[data-slot^='ad-slot-']")
		.forEach((div) => {
			div.remove();
		});

	if (window.pbjs) {
		window.pbjs.clearAuction?.();
		window.pbjs.adUnits = [];

		console.log(" Prebid state and queue fully reset");
	}
};
