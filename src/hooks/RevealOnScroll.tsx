import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

export default function useRevealOnScroll(ref: RefObject<Element | null>) {
	const [isIntersecting, setIsIntersecting] = useState(false);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting);
			},
			{ rootMargin: '-200px' }
		);

		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	}, [ref]);

	return isIntersecting;
}
