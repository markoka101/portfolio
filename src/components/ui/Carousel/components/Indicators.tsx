import React from 'react';
import { twMerge } from 'tailwind-merge';

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
	const baseIndicator = twMerge('carousel-indicator', indicatorClassName);
	const activeIndicator = twMerge('carousel-indicator--active', activeIndicatorClassName);

	return (
		<div
			className={twMerge('carousel-indicators', containerClassName)}
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
