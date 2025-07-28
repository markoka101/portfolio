import { useCallback, useEffect, useRef } from 'react';

interface UseLiveRegionProps {
	enabled: boolean;
	currentIndex: number;
	totalItems: number;
	autoPlay: boolean;
	itemTitles: (string | undefined)[];
}

export const useLiveRegion = ({
	enabled,
	currentIndex,
	totalItems,
	autoPlay,
	itemTitles
}: UseLiveRegionProps) => {
	const liveRegionRef = useRef<HTMLDivElement>(null);
	const timeoutRef = useRef<number | null>(null);

	// Create announcement message
	const createAnnouncement = useCallback(
		(index: number): string => {
			const slideNumber = index + 1;
			const itemTitle = itemTitles[index];
			const baseMessage = `Slide ${slideNumber} of ${totalItems}`;

			if (itemTitle) {
				return `${baseMessage}: ${itemTitle}`;
			}
			return baseMessage;
		},
		[totalItems, itemTitles]
	);

	// Announce slide change with debounce
	const announceSlideChange = useCallback(
		(index: number) => {
			if (!enabled || !liveRegionRef.current) return;

			// Clear previous timeout
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}

			// Debounce announcements to prevent spam during rapid navigation
			timeoutRef.current = setTimeout(() => {
				if (liveRegionRef.current) {
					liveRegionRef.current.textContent = createAnnouncement(index);
				}
			}, 150);
		},
		[enabled, createAnnouncement]
	);

	// Announce when slide changes
	useEffect(() => {
		announceSlideChange(currentIndex);
	}, [currentIndex, announceSlideChange]);

	// Cleanup timeout on unmount
	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	// ARIA live region attributes based on auto-play state[3][4]
	const liveRegionAttributes: React.HTMLAttributes<HTMLDivElement> = {
		'aria-live': autoPlay ? 'off' : 'polite',
		'aria-atomic': true,
		'aria-relevant': 'text',
		style: {
			position: 'absolute',
			left: '-10000px',
			width: '1px',
			height: '1px',
			overflow: 'hidden'
		}
	};

	return {
		liveRegionRef,
		liveRegionAttributes,
		announceSlideChange
	};
};
