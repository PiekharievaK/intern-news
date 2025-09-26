export const renderAds = (
	ads: { adUnitCode: string; adId: string }[],
): void => {
	ads.forEach((ad) => {
		const iframe = document.querySelector(
			`[data-slot="${ad.adUnitCode}"]`,
		) as HTMLIFrameElement;

		if (!iframe) {
			console.warn(`Cannot find iframe for ${ad.adUnitCode}`);

			return;
		}

		const doc = iframe.contentWindow?.document;
		if (doc) {
			doc.body.style.setProperty("margin", "0", "important");
			if (window.pbjs) {
				window.pbjs.renderAd(doc, ad.adId);
			}
		}
	});
};
