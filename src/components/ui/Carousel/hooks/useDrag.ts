import { useCallback, useEffect, useRef, useState } from 'react';

export interface UseDragProps {
	currentIndex: number;
	totalItems: number;
	extendedLength: number;
	itemWidth: number;
	gap: number;
	onSlideChange: (extendedIndex: number) => void;
	updateTransform: (extendedIndex: number, offset: number) => void;
	isTransitioning: boolean;
	resistance?: number;
}

interface DragState {
	isDragging: boolean;
	startX: number;
	currentX: number;
}

export const useDrag = ({
	currentIndex,
	totalItems,
	extendedLength,
	itemWidth,
	gap,
	onSlideChange,
	updateTransform,
	isTransitioning,
	resistance = 1
}: UseDragProps) => {
	const [dragState, setDragState] = useState<DragState>({
		isDragging: false,
		startX: 0,
		currentX: 0
	});

	const frameRef = useRef<number | null>(null);

	const handleStart = useCallback(
		(clientX: number) => {
			if (isTransitioning) return;
			setDragState({ isDragging: true, startX: clientX, currentX: clientX });
		},
		[isTransitioning]
	);

	const handleMove = useCallback(
		(clientX: number) => {
			if (!dragState.isDragging) return;

			const delta = clientX - dragState.startX;
			const offset = delta * resistance;

			if (frameRef.current) {
				cancelAnimationFrame(frameRef.current);
			}

			setDragState((prev) => ({ ...prev, currentX: clientX }));

			frameRef.current = requestAnimationFrame(() => {
				updateTransform(currentIndex, offset);
			});
		},
		[dragState.isDragging, dragState.startX, currentIndex, updateTransform, resistance]
	);

	const handleEnd = useCallback(() => {
		if (!dragState.isDragging) return;

		if (frameRef.current) {
			cancelAnimationFrame(frameRef.current);
		}

		const totalDelta = dragState.currentX - dragState.startX;
		const slidesMoved = Math.round(totalDelta / (itemWidth + gap));
		let targetIndex = currentIndex - slidesMoved;

		targetIndex = Math.max(0, Math.min(extendedLength - 1, targetIndex));

		updateTransform(targetIndex, 0);
		onSlideChange(targetIndex);

		setDragState({ isDragging: false, startX: 0, currentX: 0 });
	}, [dragState, currentIndex, extendedLength, itemWidth, gap, updateTransform, onSlideChange]);

	// Global mouse listeners
	useEffect(() => {
		if (!dragState.isDragging) return;

		const onMove = (e: MouseEvent) => handleMove(e.clientX);
		const onUp = () => handleEnd();

		document.addEventListener('mousemove', onMove);
		document.addEventListener('mouseup', onUp);

		return () => {
			document.removeEventListener('mousemove', onMove);
			document.removeEventListener('mouseup', onUp);
		};
	}, [dragState.isDragging, handleMove, handleEnd]);

	// Cleanup
	useEffect(() => {
		return () => {
			if (frameRef.current) {
				cancelAnimationFrame(frameRef.current);
			}
		};
	}, []);

	return {
		isDragging: dragState.isDragging,
		onMouseDown: (e: React.MouseEvent) => {
			e.preventDefault();
			handleStart(e.clientX);
		},
		onTouchStart: (e: React.TouchEvent) => {
			handleStart(e.touches[0].clientX);
		},
		onTouchMove: (e: React.TouchEvent) => {
			handleMove(e.touches[0].clientX);
		},
		onTouchEnd: handleEnd
	};
};
