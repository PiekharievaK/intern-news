export const FIELD_DEFINITIONS = [
	{
		key: "eventType",
		label: "Event Type",
		type: "select",
		options: [
			"pageLoad",
			"adModuleLoad",
			"auctionInit",
			"auctionEnd",
			"bidRequested",
			"bidResponse",
			"bidWon",
		],
	},
	{ key: "timestamp", label: "Timestamp", type: "number" },
	//    { key: 'details', label: 'Details', type: 'string' },
	//   { key: 'adapter', label: 'Adapter', type: 'text' },
	//   { key: 'creativeId', label: 'Creative ID', type: 'text' },
	//   { key: 'cpm', label: 'CPM', type: 'number' },
	//   { key: 'date', label: 'Date', type: 'date' },
	//   { key: 'hour', label: 'Hour', type: 'number' },
];

export const MOCK_STATISTICS = [
	{
		event: "pageLoad",
		adapter: "AdapterA",
		creativeId: "creative123",
		cpm: 1.23,
		date: "2025-10-01",
		hour: 9,
	},
	{
		event: "bidWon",
		adapter: "AdapterB",
		creativeId: "creative456",
		cpm: 2.34,
		date: "2025-10-01",
		hour: 10,
	},
	{
		event: "bidResponse",
		adapter: "AdapterA",
		creativeId: "creative789",
		cpm: 3.45,
		date: "2025-10-02",
		hour: 11,
	},
];
