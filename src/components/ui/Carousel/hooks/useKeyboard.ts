import { useCallback, useEffect } from 'react';

interface UseKeyboardProps {
	containerRef: React.RefObject<HTMLDivElement | null>;
	onNext: () => void;
	onPrev: () => void;
	onGoTo: (index: number) => void;
	onPause?: () => void;
	onResume?: () => void;
	totalItems: number;
	currentIndex: number;
	isTransitioning: boolean;
	autoPlay: boolean;
}

export const useKeyboard = ({
	containerRef,
	onNext,
	onPrev,
	onGoTo,
	onPause,
	onResume,
	totalItems,
	currentIndex,
	isTransitioning,
	autoPlay
}: UseKeyboardProps) => {
	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if (!containerRef.current?.contains(document.activeElement)) return;
			if (isTransitioning) return;

			switch (event.key) {
				case 'ArrowLeft':
				case 'ArrowUp':
					event.preventDefault();
					onPrev();
					break;

				case 'ArrowRight':
				case 'ArrowDown':
					event.preventDefault();
					onNext();
					break;

				case 'Home':
					event.preventDefault();
					onGoTo(0);
					break;

				case 'End':
					event.preventDefault();
					onGoTo(totalItems - 1);
					break;

				case ' ':
					event.preventDefault();
					autoPlay ? onPause?.() : onResume?.();
					break;

				default:
					const n = parseInt(event.key, 10);
					if (n >= 1 && n <= Math.min(9, totalItems)) {
						event.preventDefault();
						onGoTo(n - 1);
					}
			}
		},
		[
			containerRef,
			onNext,
			onPrev,
			onGoTo,
			onPause,
			onResume,
			totalItems,
			isTransitioning,
			autoPlay
		]
	);

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [handleKeyDown]);

	return {};
};
