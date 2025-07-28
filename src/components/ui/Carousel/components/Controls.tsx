import React, { type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ControlsProps {
	onPrev: () => void;
	onNext: () => void;
	className?: string;
	disabled?: boolean;
	ariaLabel?: {
		prev: string;
		next: string;
	};
	PrevIcon?: ReactNode;
	NextIcon?: ReactNode;
}

export const Controls: React.FC<ControlsProps> = ({
	onPrev,
	onNext,
	disabled = false,
	ariaLabel = { prev: 'Previous slide', next: 'Next slide' },
	className = '',
	PrevIcon,
	NextIcon
}) => {
	const DefaultPrev = (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path
				d="M15 18l-6-6 6-6"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
	const DefaultNext = (
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path
				d="m15 18 6-6-6-6"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);

	return (
		<>
			<button
				onClick={onPrev}
				disabled={disabled}
				aria-label={ariaLabel.prev}
				type="button"
				className={twMerge('carousel-control carousel-control--prev', className)}
			>
				{PrevIcon ?? DefaultPrev}
			</button>

			<button
				onClick={onNext}
				disabled={disabled}
				aria-label={ariaLabel.next}
				type="button"
				className={twMerge('carousel-control carousel-control--next', className)}
			>
				{NextIcon ?? DefaultNext}
			</button>
		</>
	);
};
