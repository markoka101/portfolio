import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../utils/constants/routes';
function DesktopNavbar() {
	const linkStyles = 'nav-underline text-white px-3 py-1 ';
	const activeStyles = 'nav-underline text-white  px-3 py-1 ';

	const logoStyles =
		'text-2xl font-semibold text-slate-200/90 transition-colors duration-300 ease-in-out hover:text-white';
	const activeLogoStyles = 'text-2xl font-semibold text-white';

	return (
		<nav className="hidden h-[3.25rem] w-screen items-center justify-between bg-blue-950/85 px-8 lg:flex">
			<h1>
				<NavLink
					to={'/'}
					className={({ isActive }) => (isActive ? activeLogoStyles : logoStyles)}
				>
					Mark Oka
				</NavLink>
			</h1>
			<ul className="flex flex-row items-center gap-x-1 text-lg">
				{ROUTES.map((route) => {
					return (
						<li key={route.name}>
							<NavLink
								to={route.route}
								className={({ isActive }) => (isActive ? activeStyles : linkStyles)}
							>
								{route.name}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default DesktopNavbar;
