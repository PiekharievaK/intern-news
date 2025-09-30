export const insertAdIframe = (
	targetEl: HTMLElement,
	slotCode: string,
	size: [number, number],
): void => {
	const [width, height] = size;

	if (targetEl.querySelector(`iframe[data-slot="${slotCode}"]`)) {
		console.log(`Iframe for ${slotCode} already exists`);
		return;
	}

	const iframe = document.createElement("iframe");
	iframe.setAttribute("title", "adFrame");
	iframe.setAttribute("data-slot", slotCode);
	iframe.setAttribute("scrolling", "no");
	iframe.className = "resp-iframe";
	iframe.width = `100%`;
	iframe.height = `100%`;
	iframe.style.border = "0";
	iframe.style.display = "block";
	iframe.style.width = `${width}px`;
	iframe.style.height = `${height}px`;

	targetEl.appendChild(iframe);
};
