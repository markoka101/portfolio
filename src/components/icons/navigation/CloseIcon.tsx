const CloseIcon = ({ className = '', strokeWidth = '2', ...props }) => {
	return (
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
			className={className}
			{...props}
		>
			<line x1="2" y1="2" x2="30" y2="30" />
			<line x1="2" y1="30" x2="30" y2="2" />
		</svg>
	);
};

export default CloseIcon;
