import { useCallback, useEffect, useState } from "react";

export const useIntersection = (options: IntersectionObserverInit) => {
	const [intersection, setIntersection] =
		useState<IntersectionObserverEntry | null>(null);

	const [element, setElement] = useState<HTMLElement | null>(null);

	const captureIntersectionElement = useCallback(
		(element: HTMLElement | null) => {
			element && setElement(element);
		},
		[],
	);

	useEffect(() => {
		if (element == null || typeof IntersectionObserver !== "function") return;

		const handler = (entries: IntersectionObserverEntry[]) => {
			setIntersection(entries[0]);
		};
		const observer = new IntersectionObserver(handler, options);
		observer.observe(element);
		return () => {
			setIntersection(null);
			observer.disconnect();
		};
	}, [options, element]);

	return { captureIntersectionElement, element, intersection };
};
