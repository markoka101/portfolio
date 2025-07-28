import PropTypes from 'prop-types';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

function FadeInImage({ src = '', alt = '', className = '', ...props }) {
	const [loaded, setLoaded] = useState(false);

	return (
		<img
			src={src}
			alt={alt}
			loading="lazy"
			onLoad={() => setLoaded(true)}
			className={twMerge(
				`opacity-0 transition-opacity duration-700 ease-in ${loaded ? 'opacity-100' : ''}`,
				className
			)}
			{...props}
		/>
	);
}

FadeInImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired
};

export default FadeInImage;
