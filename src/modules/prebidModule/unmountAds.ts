export const unmountAdSlots = (): void => {
	document.querySelectorAll("[data-slot^='ad-slot-']").forEach((div: any) => {
		div.remove();
	});
};
