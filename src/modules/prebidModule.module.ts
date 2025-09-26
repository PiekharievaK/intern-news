declare global {
	interface Window {
		pbjs: any;
	}
}

import { initPrebid } from "./prebidModule/initPrebid";

initPrebid(window.location.pathname);

