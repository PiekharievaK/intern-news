const SIZE_SQUARE = [300, 250];
const SIZE_VERTICAL = [300, 600];
const SIZE_HORIZONTAL = [600, 300];

const configs = {
	default: [
		{
			code: "ad-slot-1",
			mediaTypes: { banner: { sizes: [SIZE_SQUARE] } },
			bids: [{ bidder: "adtelligent", params: { aid: "350975" } }],
		},
		{
			code: "ad-slot-2",
			mediaTypes: { banner: { sizes: [SIZE_SQUARE] } },
			bids: [{ bidder: "bidmatic", params: { source: 886409 } }],
		},
	],
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

const getAdConfigKeyForPage = (path: string) => {
	if (path === "/login") return "login";
	if (path === "/register") return "register";
	if (path === "/news") return "news";
	if (path.match(/^\/news\/\d+$/)) return "singleNews";
	return "default";
};

export const getAdUnitsForPage = (pageName: string) => {
	const key = getAdConfigKeyForPage(pageName);
	return configs[key] || [];
};

export const addDefaultAdUnits = () => {
	const existingAds = document.querySelectorAll(".ad-slot");

	if (existingAds.length === 0) {
		const ad1 = document.createElement("div");
		ad1.classList.add("ad-slot");
		ad1.setAttribute("id", "ad-slot-1");
		ad1.style.position = "absolute";
		ad1.style.left = "0";
		ad1.style.bottom = "0";
		ad1.style.width = "300px";
		ad1.style.height = "250px";
		ad1.style.zIndex = "9999";

		const ad2 = document.createElement("div");
		ad2.classList.add("ad-slot");
		ad2.setAttribute("id", "ad-slot-2");
		ad2.style.position = "absolute";
		ad2.style.right = "0";
		ad2.style.bottom = "0";
		ad2.style.width = "300px";
		ad2.style.height = "250px";
		ad2.style.zIndex = "9999";

		document.body.appendChild(ad1);
		document.body.appendChild(ad2);

		console.log("Default ad slots added to the page.");
	}
};
