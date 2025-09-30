export const renderAds = (
	ads: { adUnitCode: string; adId: string }[],
): void => {
	ads.forEach((ad) => {
		const iframe = document.querySelector(
			`iframe[data-slot="${ad.adUnitCode}"]`,
		) as HTMLIFrameElement | null;

		if (!iframe) {
			console.warn(`Iframe not found for ${ad.adUnitCode}`);
			return;
		}

		const iframeDoc = iframe.contentWindow?.document;

		try {
			if (window.pbjs?.renderAd) {
				console.log(`Rendering ad: ${ad.adUnitCode}, adId: ${ad.adId}`);
				window.pbjs.renderAd(iframeDoc, ad.adId);

				const container = iframe.parentElement;
				if (container) {
					container.style.display = "block";
				}
			} else {
				console.warn("pbjs.renderAd is not available");
			}
		} catch (err) {
			console.error(`Error while rendering ${ad.adUnitCode}:`, err);
		}
	});
};
