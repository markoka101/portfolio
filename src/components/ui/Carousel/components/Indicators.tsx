import React from 'react';
import { twMerge } from 'tailwind-merge';
import styles from '../Carousel.module.css';

interface IndicatorsProps {
	totalItems: number;
	currentIndex: number;
	containerClassName?: string;
	indicatorClassName?: string;
	activeIndicatorClassName?: string;
	onIndicatorClick: (index: number) => void;
	disabled?: boolean;
	ariaLabel?: (index: number) => string;
}

export const Indicators: React.FC<IndicatorsProps> = ({
	totalItems,
	currentIndex,
	containerClassName = '',
	indicatorClassName = '',
	activeIndicatorClassName = '',
	onIndicatorClick,
	disabled = false,
	ariaLabel = (index) => `Go to slide ${index + 1}`
}) => {
	const baseIndicator = twMerge(styles.carouselIndicator, indicatorClassName);
	const activeIndicator = twMerge(styles.carouselIndicatorActive, activeIndicatorClassName);

	return (
		<div
			className={twMerge(styles.carouselIndicators, containerClassName)}
			role="tablist"
			aria-label="Carousel pagination"
		>
			{Array.from({ length: totalItems }, (_, index) => (
				<button
					key={index}
					type="button"
					role="tab"
					aria-controls={`slide-${index}`}
					aria-selected={currentIndex === index}
					aria-label={ariaLabel(index)}
					disabled={disabled}
					tabIndex={currentIndex === index ? 0 : -1}
					className={twMerge(baseIndicator, currentIndex === index && activeIndicator)}
					onClick={() => onIndicatorClick(index)}
				/>
			))}
		</div>
	);
};
