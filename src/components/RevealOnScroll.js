import { useState, useEffect } from 'react';
export default function useRevealOnScroll(ref) {
	const [isIntersecting, setIsIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry.isIntersecting);
			},
			{ rootMargin: '-200px' }
		);

		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [ref]);

	return isIntersecting;
}
