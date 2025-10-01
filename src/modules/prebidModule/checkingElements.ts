export type CheckingOptions = {
	action: () => boolean;
	onSuccess: () => void;
	onFail?: () => void;
	interval?: number;
	timeout?: number;
};

export function checkingElementsOnPage({
	action,
	onSuccess,
	onFail = () => {},
	interval = 100,
	timeout = 10000,
}: CheckingOptions): void {
	const intervalId = setInterval(() => {
		if (action()) {
			clearInterval(intervalId);
			clearTimeout(timeoutId);
			onSuccess();
		}
	}, interval);

	const timeoutId = setTimeout(() => {
		clearInterval(intervalId);
		onFail();
	}, timeout);
}
