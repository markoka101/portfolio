import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

export default function HomeButton({ text, route = ' ', customStyle = ' ' }) {
	const navigate = useNavigate();
	return (
		<button
			onClick={() => navigate(route)}
			className={twMerge(
				`lg:mr-2) my-1 inline-flex justify-center rounded-xl border-2 border-transparent px-6 py-2 text-lg transition-all duration-200 ease-in focus:outline-none md:my-0.5 md:mr-2 lg:my-0.5`,
				customStyle
			)}
		>
			{`${text}`}
		</button>
	);
}

//validation
HomeButton.propTypes = {
	text: PropTypes.string.isRequired,
	route: PropTypes.string.isRequired,
	customStyle: PropTypes.string.isRequired
};
