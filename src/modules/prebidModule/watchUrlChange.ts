export const watchUrlChange = (callback: () => void): void => {
	let lastUrl = window.location.pathname;

	const checkUrl = () => {
		const currentUrl = window.location.pathname;
		if (currentUrl !== lastUrl) {
			lastUrl = currentUrl;
			callback();
		}
	};

	const originalPushState = history.pushState;
	history.pushState = function (...args) {
		originalPushState.apply(this, args);
		setTimeout(checkUrl, 0);
	};

	const originalReplaceState = history.replaceState;
	history.replaceState = function (...args) {
		originalReplaceState.apply(this, args);
		setTimeout(checkUrl, 0);
	};

	window.addEventListener("popstate", checkUrl);
};
