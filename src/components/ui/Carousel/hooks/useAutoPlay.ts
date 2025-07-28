import { useCallback, useEffect, useRef } from 'react';

interface UseAutoPlayProps {
	autoPlay: boolean;
	interval: number;
	isDragging: boolean;
	isTransitioning: boolean;
	onNext: () => void;
}

export const useAutoPlay = ({
	autoPlay,
	interval,
	isDragging,
	isTransitioning,
	onNext
}: UseAutoPlayProps) => {
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const isPausedRef = useRef(false);

	const clearTimer = useCallback(() => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	}, []);

	const startTimer = useCallback(() => {
		if (!autoPlay || isPausedRef.current) return;

		clearTimer();
		intervalRef.current = setInterval(() => {
			if (!isDragging && !isTransitioning && !isPausedRef.current) {
				onNext();
			}
		}, interval);
	}, [autoPlay, interval, isDragging, isTransitioning, onNext, clearTimer]);

	const pause = useCallback(() => {
		isPausedRef.current = true;
		clearTimer();
	}, [clearTimer]);

	const resume = useCallback(() => {
		isPausedRef.current = false;
		startTimer();
	}, [startTimer]);

	// Start/stop based on conditions
	useEffect(() => {
		if (autoPlay && !isDragging && !isTransitioning) {
			startTimer();
		} else {
			clearTimer();
		}

		return clearTimer;
	}, [autoPlay, isDragging, isTransitioning, startTimer, clearTimer]);

	return { pause, resume };
};
