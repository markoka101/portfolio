import HomeButton from './HomeButton';

export default function About() {
	const btnCustomStyle = 'bg-gray-800 hover:border-slate-400 hover:text-white text-gray-400';
	const contactCustomStyle = 'bg-green-600 hover:border-slate-300 text-white';
	return (
		<section id="about" className="animate-fadeIn flex justify-center">
			<article className="container mx-auto mb-12 mt-12 flex min-h-[65vh] w-11/12 flex-col items-center rounded-xl border-4 bg-black bg-opacity-50 px-10 py-10 sm:mt-28 md:mt-28 md:flex-row lg:mt-28">
				<header className="mb-10 flex flex-1 flex-col items-center p-3 text-center md:mb-0 md:w-full md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
					<h1 className="title-font mb-2 text-3xl font-medium text-white">
						Mark Oka
						<p className="mt-1 text-lg font-medium text-white">Software Engineer</p>
					</h1>
					<p className="mb-6 text-left leading-relaxed text-gray-200">
						I am a software engineer living in Brooklyn, NY. I am a lifelong learner that always
						keeps up to date with current tech and practices. I love what I do and am always
						interested in hearing about new opportunities. If you might be interested in
						collaborating, or hiring me for an independent project, please feel free to contact me.
					</p>
					<nav className="flex flex-col justify-center md:flex-row lg:flex-row">
						<HomeButton text="Contact Me" route="/contact" customStyle={contactCustomStyle} />
						<HomeButton text="Work and Projects" route="/projects" customStyle={btnCustomStyle} />
						<HomeButton text="About Me" route="/about-me" customStyle={btnCustomStyle} />
						<a
							href="./mark-oka-resume.pdf"
							target="_blank"
							rel="noreferrer"
							className="my-1 inline-flex justify-center rounded-xl border-2 border-transparent bg-gray-800 px-6 py-2 text-lg text-gray-400 transition-all duration-200 ease-in hover:border-slate-400 hover:text-white focus:outline-none md:my-0.5 md:mr-2 lg:my-0.5 lg:mr-2"
						>
							Resume
						</a>
					</nav>
				</header>
				<aside className="my-1 hidden p-5 lg:block lg:max-w-sm">
					<img
						className="float-right rounded-md border-2 border-gray-900"
						alt="me"
						src="./portrait.jpeg"
					/>
				</aside>
			</article>
		</section>
	);
}
