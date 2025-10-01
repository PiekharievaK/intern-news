import { SIZE_SQUARE, SIZE_VERTICAL, SIZE_HORIZONTAL } from "./configAdSizes";

export const configs = {
	default: [
		{
			code: "ad-slot-1",
			mediaTypes: { banner: { sizes: [SIZE_SQUARE] } },
			bids: [{ bidder: "adtelligent", params: { aid: "350975" } }],
			anchorSelector: "default",
			position: "append",
		},
		{
			code: "ad-slot-2",
			mediaTypes: { banner: { sizes: [SIZE_SQUARE] } },
			bids: [{ bidder: "bidmatic", params: { source: 886409 } }],
			anchorSelector: "default",
			position: "append",
		},
	],
	login: [
		{
			code: "ad-slot-1",
			mediaTypes: { banner: { sizes: [SIZE_VERTICAL] } },
			bids: [{ bidder: "adtelligent", params: { aid: "350975" } }],
			anchorSelector: "main",
			position: "append",
		},
		{
			code: "ad-slot-2",
			mediaTypes: { banner: { sizes: [SIZE_VERTICAL] } },
			bids: [{ bidder: "bidmatic", params: { source: 886409 } }],
			anchorSelector: "main",
			position: "prepend",
		},
	],
	register: [
		{
			code: "ad-slot-1",
			mediaTypes: { banner: { sizes: [SIZE_VERTICAL] } },
			bids: [{ bidder: "adtelligent", params: { aid: "350975" } }],
			anchorSelector: "main",
			position: "append",
		},
		{
			code: "ad-slot-2",
			mediaTypes: { banner: { sizes: [SIZE_VERTICAL] } },
			bids: [{ bidder: "bidmatic", params: { source: 886409 } }],
			anchorSelector: "main",
			position: "prepend",
		},
	],
	news: [
		{
			code: "ad-slot-1",
			mediaTypes: { banner: { sizes: [SIZE_VERTICAL] } },
			bids: [{ bidder: "adtelligent", params: { aid: "350975" } }],
			anchorSelector: "main",
			position: "append",
		},
		{
			code: "ad-slot-2",
			mediaTypes: { banner: { sizes: [SIZE_SQUARE, SIZE_HORIZONTAL] } },
			bids: [{ bidder: "bidmatic", params: { source: 886409 } }],
			anchorSelector: "inner",
			position: "append",
		},
	],
	singleNews: [
		{
			code: "ad-slot-1",
			mediaTypes: { banner: { sizes: [SIZE_SQUARE, SIZE_HORIZONTAL] } },
			bids: [{ bidder: "adtelligent", params: { aid: "350975" } }],
			anchorSelector: "main",
			position: "append",
		},
		{
			code: "ad-slot-2",
			mediaTypes: { banner: { sizes: [SIZE_SQUARE] } },
			bids: [{ bidder: "bidmatic", params: { source: 886409 } }],
			anchorSelector: "main",
			position: "append",
		},
	],
};
