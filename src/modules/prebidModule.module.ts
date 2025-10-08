import { initPrebid } from "./prebidModule/initPrebid";

declare global {
	interface Window {
		pbjs: any;
	}
}

const importPrebidFile = () => {
	const el = document.createElement("script");
	el.src = "/prebid10.10.0.js";
	const el1 = document.createElement("script");
	el1.src = "/prebid.js";

	// document.head.appendChild(el);
	document.head.appendChild(el1);
};

importPrebidFile();
initPrebid();
