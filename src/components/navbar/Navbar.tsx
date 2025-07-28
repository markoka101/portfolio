import React from 'react';
import { CloseIcon, MenuIcon } from '../icons';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

export type NavbarProps = Readonly<{
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>;
export default function Navbar({ isOpen, setIsOpen }: NavbarProps) {
	return (
		<nav>
			<DesktopNavbar />
			<MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
			{!isOpen ? (
				<button
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Open mobile menu"
					className="animate-menu-icon-fadeIn fixed top-4 right-4 z-50 cursor-pointer rounded bg-black/20 lg:hidden"
				>
					<MenuIcon />
				</button>
			) : (
				<button
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Close Mobile Menu"
					className="fixed top-8 right-4 z-50 cursor-pointer lg:hidden"
				>
					<CloseIcon className="animate-menu-icon-fadeIn h-4" strokeWidth="5" />
				</button>
			)}
		</nav>
	);
}
