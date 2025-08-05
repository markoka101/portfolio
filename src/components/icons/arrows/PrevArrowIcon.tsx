import React from 'react';
import { twMerge } from 'tailwind-merge';

type IconProps = React.SVGProps<SVGSVGElement> & {
	strokeWidth?: number | string;
	className?: string;
};

const PrevArrowIcon: React.FC<IconProps> = ({ className = '', strokeWidth = 2, ...props }) => (
	<svg
		width="32"
		height="32"
		viewBox="0 0 32 32"
		fill="none"
		stroke="currentColor"
		strokeWidth={strokeWidth}
		xmlns="http://www.w3.org/2000/svg"
		strokeLinecap="round"
		strokeLinejoin="round"
		className={twMerge(`transition-transform duration-200 hover:-translate-x-1`, className)}
		{...props}
	>
		<polyline points="20 6 8 16 20 26" />
	</svg>
);

export default PrevArrowIcon;
