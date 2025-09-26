const SIZE_SQUARE = [300, 250];

export const addDefaultAdUnits = () => {
	const body = document.body;

	if (!document.querySelector('[data-slot="ad-slot-1"]')) {
		console.log("Adding default ad-slot-1");

		const adSlot1 = document.createElement("div");
		adSlot1.setAttribute("data-slot", "ad-slot-1");
		adSlot1.style.position = "absolute";
		adSlot1.style.bottom = "0";
		adSlot1.style.left = "0";
		adSlot1.style.width = `${SIZE_SQUARE[0]}px`;
		adSlot1.style.height = `${SIZE_SQUARE[1]}px`;
		adSlot1.style.zIndex = "9999";
		adSlot1.style.backgroundColor = "#f0f0f0";
		body.appendChild(adSlot1);
	}

	if (!document.querySelector('[data-slot="ad-slot-2"]')) {
		console.log("Adding default ad-slot-2");

		const adSlot2 = document.createElement("div");
		adSlot2.setAttribute("data-slot", "ad-slot-2");
		adSlot2.style.position = "absolute";
		adSlot2.style.bottom = "0";
		adSlot2.style.right = "0";
		adSlot2.style.width = `${SIZE_SQUARE[0]}px`;
		adSlot2.style.height = `${SIZE_SQUARE[1]}px`;
		adSlot2.style.zIndex = "9999";
		adSlot2.style.backgroundColor = "#f0f0f0";
		body.appendChild(adSlot2);
	}
};
