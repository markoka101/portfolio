import { type ReactNode } from 'react';

export interface CarouselItem {
	id: string | number;
	content: ReactNode;
	alt?: string;
	title?: string;
	ariaLabel?: string;
}

export interface CarouselProps {
	items: CarouselItem[];
	containerClassName?: string;
	trackClassName?: string;
	slideClassName?: string;
	slideActiveClassName?: string;
	indicatorContainerClassName?: string;
	indicatorClassName?: string;
	indicatorActiveClassName?: string;
	controlClassName?: string;
	PrevIcon?: ReactNode;
	NextIcon?: ReactNode;
	dragResistance?: number;
	autoPlay?: boolean;
	autoPlayInterval?: number;
	itemWidth?: number;
	gap?: number;
	showControls?: boolean;
	showIndicators?: boolean;
	pauseOnHover?: boolean;
	onSlideChange?: (index: number) => void;

	// Enhanced accessibility props
	ariaLabel?: string;
	ariaDescribedBy?: string;
	announceSlideChanges?: boolean;
	reduceMotion?: boolean;
	role?: 'region' | 'group';
}

export interface CarouselRef {
	goToSlide: (index: number) => void;
	goToNext: () => void;
	goToPrev: () => void;
	getCurrentIndex: () => number;
	pause: () => void;
	resume: () => void;
	focus: () => void;
}

export interface DragState {
	isDragging: boolean;
	startX: number;
	currentX: number;
}
