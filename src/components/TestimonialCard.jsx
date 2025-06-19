import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

export default function TestimonialCard({
	name = '',
	profession = '',
	avatar = '',
	avatarAlt = '',
	review = '',
	customStyles = ''
}) {
	return (
		<figure
			id="testimonial-card"
			className={twMerge(
				'contianer bg-opacity flex h-full w-full flex-col items-center justify-center rounded-xl bg-black/70 px-4 py-10 text-white ring-4 ring-slate-100/75 md:py-16',
				`${customStyles}`
			)}
		>
			<svg
				className="mx-auto mb-3 h-10 w-10"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 18 14"
			>
				<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
			</svg>
			<p className="my-2 px-2 text-center font-semibold italic sm:text-xl md:px-10 md:text-2xl">
				{review}
			</p>
			<figcaption className="mx-auto mt-4 flex w-full flex-row items-center justify-center">
				<img src={avatar} alt={avatarAlt} className="mr-3 w-10 rounded-full" />
				<div className="flex items-center divide-x-2 divide-gray-300">
					<cite className="pr-3 font-medium text-white">{name}</cite>
					<cite className="pl-3 text-sm text-gray-100">{profession}</cite>
				</div>
			</figcaption>
		</figure>
	);
}

//validation
TestimonialCard.propTypes = {
	name: PropTypes.string.isRequired,
	profession: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	avatarAlt: PropTypes.string.isRequired,
	review: PropTypes.string.isRequired,
	customStyles: PropTypes.string.isRequired
};
