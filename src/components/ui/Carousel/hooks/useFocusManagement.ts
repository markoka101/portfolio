import { useCallback, useEffect, useRef } from 'react';

interface UseFocusManagementProps {
	containerRef: React.RefObject<HTMLDivElement | null>;
	currentIndex: number;
	totalItems: number;
	isTransitioning: boolean;
}

export const useFocusManagement = ({
	containerRef,
	currentIndex,
	totalItems,
	isTransitioning
}: UseFocusManagementProps) => {
	const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
	const focusedElementBeforeCarousel = useRef<HTMLElement | null>(null);

	// Store reference to focused element when carousel gains focus
	const handleCarouselFocus = useCallback(() => {
		focusedElementBeforeCarousel.current ??= document.activeElement as HTMLElement;
	}, []);

	// Restore focus when carousel loses focus
	const handleCarouselBlur = useCallback(
		(event: React.FocusEvent) => {
			// Only restore focus if we're leaving the entire carousel
			if (!containerRef.current?.contains(event.relatedTarget as Node)) {
				focusedElementBeforeCarousel.current = null;
			}
		},
		[containerRef]
	);

	// Update slide accessibility attributes
	const updateSlideAccessibility = useCallback(() => {
		slideRefs.current.forEach((slide, index) => {
			if (!slide) return;

			const REAL_START = totalItems; // e.g. 4
			const realIndex =
				(((currentIndex - REAL_START) % totalItems) + totalItems) % totalItems;
			const isActive = index === REAL_START + realIndex;
			const isAdjacent = Math.abs(index - currentIndex) === 1;

			// Set proper ARIA attributes[6][10]
			slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
			slide.setAttribute('tabindex', isActive ? '0' : '-1');

			// Update focusable elements within slides
			const focusableElements = slide.querySelectorAll(
				'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
			);

			focusableElements.forEach((element) => {
				if (isActive) {
					element.removeAttribute('tabindex');
				} else {
					element.setAttribute('tabindex', '-1');
				}
			});
		});
	}, [currentIndex]);

	// Update accessibility when slide changes
	useEffect(() => {
		if (!isTransitioning) {
			updateSlideAccessibility();
		}
	}, [currentIndex, isTransitioning, updateSlideAccessibility]);

	// Focus active slide when requested
	const focusActiveSlide = useCallback(() => {
		const activeSlide = slideRefs.current[currentIndex];
		if (activeSlide && !isTransitioning) {
			activeSlide.focus();
		}
	}, [currentIndex, isTransitioning]);

	// Set slide ref
	const setSlideRef = useCallback((index: number, element: HTMLDivElement | null) => {
		slideRefs.current[index] = element;
	}, []);

	return {
		handleCarouselFocus,
		handleCarouselBlur,
		focusActiveSlide,
		setSlideRef,
		slideRefs: slideRefs.current
	};
};
