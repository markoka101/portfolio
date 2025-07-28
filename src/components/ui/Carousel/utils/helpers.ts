// Animation utilities
export const requestAnimFrame = (callback: () => void): void => {
	requestAnimationFrame(callback);
};

// Index calculations for infinite loop
export const normalizeIndex = (index: number, total: number): number => {
	return ((index % total) + total) % total;
};

export const getTransformValue = (
	extendedIndex: number,
	itemWidth: number,
	gap: number,
	offset: number = 0
): string => {
	// Move the track so that extendedIndex=0 positions the first element in place.
	const raw = -extendedIndex * (itemWidth + gap) + offset;
	const position = Math.round(raw);
	return `translate3d(${position}px,0,0)`;
};

// Debounce utility for performance
export const debounce = <T extends (...args: any[]) => void>(func: T, wait: number): T => {
	let timeout: ReturnType<typeof setTimeout>;
	return ((...args: any[]) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), wait);
	}) as T;
};

// Check if element is in viewport
export const isInViewport = (element: HTMLElement): boolean => {
	const rect = element.getBoundingClientRect();
	return rect.top >= 0 && rect.bottom <= window.innerHeight;
};
