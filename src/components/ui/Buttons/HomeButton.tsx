import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export type buttonProps = Readonly<{
	text: string;
	route: string;
	customStyle: string;
}>;
export default function HomeButton({ text = ' ', route = ' ', customStyle = ' ' }) {
	return (
		<NavLink
			to={route}
			className={twMerge(
				`my-1 flex items-center justify-center rounded-xl px-6 py-1 text-lg focus:outline-1`,
				customStyle
			)}
		>
			{`${text}`}
		</NavLink>
	);
}
