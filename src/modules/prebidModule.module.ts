declare global {
	interface Window {
		pbjs: any;
	}
}

type AdUnit = {
	code: string;
	mediaTypes: {
		banner: {
			sizes: [number, number][];
		};
	};
	bids: {
		bidder: string;
		params: Record<string, string | number>;
	}[];
};

type PageConfig = {
	[key: string]: AdUnit[];
};

const SIZE_SQUARE: [number, number] = [300, 250];
const SIZE_VERTICAL: [number, number] = [300, 600];
const SIZE_HORIZONTAL: [number, number] = [600, 300];

const getAdUnitsForPage = (pageName: string): AdUnit[] => {
	const configs: PageConfig = {
		login: [
			{
				code: "ad-slot-1",
				mediaTypes: { banner: { sizes: [SIZE_VERTICAL] } },
				bids: [{ bidder: "adtelligent", params: { aid: "350975" } }],
			},
			{
				code: "ad-slot-2",
				mediaTypes: { banner: { sizes: [SIZE_VERTICAL] } },
				bids: [{ bidder: "bidmatic", params: { source: 886409 } }],
			},
		],
		register: [
			{
				code: "ad-slot-1",
				mediaTypes: { banner: { sizes: [SIZE_VERTICAL] } },
				bids: [{ bidder: "adtelligent", params: { aid: "350975" } }],
			},
			{
				code: "ad-slot-2",
				mediaTypes: { banner: { sizes: [SIZE_VERTICAL] } },
				bids: [{ bidder: "bidmatic", params: { source: 886409 } }],
			},
		],
		news: [
			{
				code: "ad-slot-1",
				mediaTypes: { banner: { sizes: [SIZE_VERTICAL] } },
				bids: [{ bidder: "adtelligent", params: { aid: "350975" } }],
			},
			{
				code: "ad-slot-2",
				mediaTypes: { banner: { sizes: [SIZE_SQUARE, SIZE_HORIZONTAL] } },
				bids: [{ bidder: "bidmatic", params: { source: 886409 } }],
			},
		],
		singleNews: [
			{
				code: "ad-slot-1",
				mediaTypes: { banner: { sizes: [SIZE_SQUARE, SIZE_HORIZONTAL] } },
				bids: [{ bidder: "adtelligent", params: { aid: "350975" } }],
			},
			{
				code: "ad-slot-2",
				mediaTypes: { banner: { sizes: [SIZE_SQUARE] } },
				bids: [{ bidder: "bidmatic", params: { source: 886409 } }],
			},
		],
	};

	return configs[pageName] || [];
};

const unmountAdSlots = (): void => {
	document
		.querySelectorAll("[data-slot^='ad-slot-']")
		.forEach((div) => div.remove());
};

const renderAds = (ads: { adUnitCode: string; adId: string }[]): void => {
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

const refreshPrebidAds = (pageName: string): void => {
	const adUnits = getAdUnitsForPage(pageName);

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

const initPrebid = (pageName: string): void => {
	window.pbjs = window.pbjs || {};
	window.pbjs.que = window.pbjs.que || [];

	window.pbjs.que.push(() => {
		const adUnits = getAdUnitsForPage(pageName);
		window.pbjs.addAdUnits(adUnits);

		window.pbjs.requestBids({
			bidsBackHandler: () => {
				const ads = window.pbjs.getHighestCpmBids();
				renderAds(ads);

				const logEvent = (type: string, data: any): void => {
					console.log(`[PREBID EVENT] ${type}:`, data);
					window.postMessage(
						{ type: "logs", payload: [{ type, payload: data }] },
						"*",
					);
				};

				window.pbjs.onEvent("auctionInit", (data: any) =>
					logEvent("auctionInit", data),
				);
				window.pbjs.onEvent("bidRequested", (data: any) =>
					logEvent("bidRequested", data),
				);
				window.pbjs.onEvent("bidResponse", (data: any) =>
					logEvent("bidResponse", data),
				);
				window.pbjs.onEvent("bidWon", (data: any) => logEvent("bidWon", data));
				window.pbjs.onEvent("auctionEnd", (data: any) =>
					logEvent("auctionEnd", data),
				);
			},
		});

		if (window.location.href !== `${import.meta.env.VITE_HOST}/prebid`) {
			window.open(
				`${import.meta.env.VITE_HOST}/prebid`,
				"_blank",
				"width=600,height=400",
			);
		}
	});
};

initPrebid("login");

export { refreshPrebidAds, unmountAdSlots };
