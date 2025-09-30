import { getAdSlotsForPage } from "./adConfig";
import { insertAdIframe } from "./insertAdIframe";

export const createAdContainersForPage = (path: string): boolean => {
	const slots = getAdSlotsForPage(path);

	if (!slots.length) {
		console.warn(`No ad config found for path "${path}"`);
		return false;
	}

	let allCreated = true;

	for (const slot of slots) {
		const { code: slotCode, mediaTypes, anchorSelector, position } = slot;

		const anchor = document.querySelector(`[data-slot="${anchorSelector}"]`);
		if (!anchor) {
			console.warn(`Anchor element not found: ${anchorSelector}`);
			allCreated = false;
			continue;
		}

		const size = mediaTypes?.banner?.sizes?.[0];
		if (!size) {
			console.warn(`No sizes defined for slot ${slotCode}`);
			allCreated = false;
			continue;
		}

		const existingContainer = document.querySelector(
			`[data-slot="${slotCode}"]`,
		);

		if (existingContainer) {
			const existingIframe = existingContainer.querySelector(
				`iframe[data-slot="${slotCode}"]`,
			);
			if (!existingIframe) {
				insertAdIframe(existingContainer as HTMLElement, slotCode, size);
				console.log(`Inserted missing iframe for ${slotCode}`);
			}
			continue;
		}

		const container = document.createElement("div");
		container.style.width = `${size[0]}px`;
		container.style.height = `${size[1]}px`;
		container.style.display = "none";
		container.classList.add("resp-container");
		container.setAttribute("data-slot", slotCode);

		switch (position) {
			case "before":
				anchor.insertAdjacentElement("beforebegin", container);
				break;
			case "after":
				anchor.insertAdjacentElement("afterend", container);
				break;
			case "prepend":
				anchor.insertAdjacentElement("afterbegin", container);
				break;
			case "append":
				anchor.insertAdjacentElement("beforeend", container);
				break;
			default:
				anchor.insertAdjacentElement("beforeend", container);
		}

		insertAdIframe(container, slotCode, size);
	}

	return allCreated;
};
