import { initPrebid } from "./prebidModule/initPrebid";

declare global {
	interface Window {
		pbjs: any;
	}
}

initPrebid();
