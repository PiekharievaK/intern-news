import { initPrebid } from "./prebidModule/initPrebid";

declare global {
	interface Window {
		pbjs: any;
	}
}

const importPrebidFile = () => {
	const el = document.createElement("script");
	el.src = "/public/prebid10.10.0.js";

	document.head.appendChild(el);
};

importPrebidFile();
initPrebid();
