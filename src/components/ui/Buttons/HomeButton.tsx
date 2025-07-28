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
				`my-1 flex items-center justify-center rounded-xl border-2 border-transparent px-6 py-1 text-lg transition-all duration-200 ease-in focus:outline-1`,
				customStyle
			)}
		>
			{`${text}`}
		</NavLink>
	);
}
