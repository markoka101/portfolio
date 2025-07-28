import { GitHubIcon, LinkedInIcon } from '../icons';

function Footer() {
	return (
		<footer className="absolute bottom-0 flex w-full">
			<nav className="mb-2 flex w-full flex-row justify-end gap-x-2 pr-5">
				<a
					href="https://www.linkedin.com/in/mark-oka/"
					target="_blank"
					rel="noopener noreferrer"
					className="rounded-sm transition-colors duration-300 ease-in-out hover:bg-blue-800"
				>
					<LinkedInIcon className="h-12 w-12" />
				</a>
				<a href="https://github.com/markoka101" target="_blank" rel="noopener noreferrer">
					<GitHubIcon className="h-12 w-12" />
				</a>
			</nav>
		</footer>
	);
}

export default Footer;
