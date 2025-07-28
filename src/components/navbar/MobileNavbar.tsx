import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../utils/constants/routes';
import { GitHubIcon, LinkedInIcon } from '../icons';
import type { NavbarProps } from './Navbar';

function MobileNavbar({ isOpen, setIsOpen }: NavbarProps) {
	const slideButtonStyles = clsx(
		'inline-flex w-full transform items-center py-2 pl-6 transition-transform duration-200 ease-in-out hover:translate-x-2'
	);
	const activeSlideButtonStyles = clsx(
		'flex w-full cursor-default items-center py-2 pl-8 text-white'
	);

	const iconStyles = clsx('h-8 w-8');
	return (
		<nav
			aria-label="Mobile Navigation Menu"
			className={`fixed top-0 right-0 z-40 h-screen w-[70%] transform overflow-y-auto bg-blue-950/90 duration-500 sm:w-[70%] md:w-[400px] lg:hidden ${!isOpen ? 'translate-x-full' : '-translate-x-0'}`}
		>
			<h1 className="font-inter flex pt-4 pl-6 text-4xl font-bold sm:text-5xl">
				{' '}
				<NavLink to="/" className={({ isActive }) => (isActive ? 'text-white' : '')}>
					Mark Oka
				</NavLink>
			</h1>

			<ul className="mt-6 flex flex-col gap-y-2 text-xl sm:mt-10">
				<li>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? activeSlideButtonStyles : slideButtonStyles
						}
					>
						Home
					</NavLink>
				</li>
				{ROUTES.map((route) => {
					return (
						<li key={route.name}>
							<NavLink
								to={route.route}
								className={({ isActive }) =>
									isActive ? activeSlideButtonStyles : slideButtonStyles
								}
							>
								{route.name}
							</NavLink>
						</li>
					);
				})}

				<li className="flex flex-row gap-x-2 pl-6">
					<a
						href="https://www.linkedin.com/in/mark-oka/"
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-sm transition-colors duration-300 ease-in-out hover:bg-blue-800"
					>
						<LinkedInIcon className={iconStyles} />
					</a>
					<a
						href="https://github.com/markoka101"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GitHubIcon className={iconStyles} />
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default MobileNavbar;
