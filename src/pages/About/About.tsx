import clsx from 'clsx';
import { Helmet } from 'react-helmet-async';
import portrait from '../../assets/portrait.jpeg';
import { GitHubIcon, LinkedInIcon } from '../../components/icons';
import { HomeButton } from '../../components/ui/Buttons';
import { FadeInImage } from '../../components/ui/FadeInImage';

function About() {
	const btnCustomStyle = 'bg-gray-800 h-full w-full hover:text-white text-gray-300 ease-out z-30';
	const btnGradientAnimation = clsx(
		'overflow-hidden transition-all duration-200',
		'before:absolute before:inset-0 before:z-10 before:w-0 before:rounded-xl before:opacity-0',
		'before:bg-[radial-gradient(circle_at_center,theme(colors.fuchsia.400),theme(colors.pink.300),theme(colors.cyan.400))]',
		'hover:before:animate-hue-cycle hover:before:w-full hover:before:opacity-100',
		'before:transition-all before:duration-300 before:ease-in-out'
	);
	const btnWrapperBackgroundLayer = clsx('z-20 after:absolute after:inset-1 after:rounded-xl');
	const btnWrapper = clsx(
		'group relative flex items-center justify-center rounded-xl bg-transparent p-[0.1rem]',
		btnGradientAnimation,
		btnWrapperBackgroundLayer
	);
	const iconSize = 'h-10 w-10';
	const contactCustomStyle = 'bg-green-600 text-white h-full ease-out z-30 w-full';
	return (
		<>
			<Helmet>
				<title>Home | Mark Oka</title>
				<meta
					name="description"
					content="Learn more about Mark Oka, a software engineer with a diverse background, based in Brooklyn, New York."
				/>
				<meta property="og:title" content="Home | Mark Oka" />
				<meta
					property="og:description"
					content="Discover Mark Oka's background, interests, and professional journey."
				/>
			</Helmet>
			<section id="about" className="animate-fadeIn flex justify-center">
				<article className="container mx-auto mt-12 mb-12 flex min-h-[65vh] w-11/12 flex-col items-center rounded-xl border-4 bg-black/70 px-10 py-10 sm:mt-28 md:mt-28 md:flex-row lg:mt-28">
					<header className="mb-10 flex flex-1 flex-col items-center px-1 py-3 text-center sm:p-3 md:mb-0 md:w-full md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
						<h1 className="title-font mb-2 text-3xl font-medium text-white md:mb-4 md:text-5xl">
							Mark Oka
							<p className="mt-1 text-lg font-medium text-white">
								Software Engineer / Developer{' '}
							</p>
						</h1>
						<p className="mb-6 text-left leading-relaxed text-gray-200">
							I am a software engineer living in Brooklyn, NY. I am a lifelong learner
							that always keeps up to date with current tech and practices. I love
							what I do and am always interested in hearing about new opportunities.
							If you might be interested in collaborating, or hiring me for an
							independent project, please feel free to contact me.
						</p>
						<nav className="flex w-full flex-col">
							<ul className="flex flex-col gap-y-4 py-1 sm:gap-y-2 md:-ml-1 md:flex-row md:gap-x-2 lg:flex-row">
								<li className={btnWrapper}>
									<HomeButton
										text="Contact Me"
										route="/contact"
										customStyle={contactCustomStyle}
									/>
								</li>
								<li className={btnWrapper}>
									<HomeButton
										text="Work and Projects"
										route="/projects"
										customStyle={btnCustomStyle}
									/>
								</li>
								<li className={btnWrapper}>
									<HomeButton
										text="About Me"
										route="/about-me"
										customStyle={btnCustomStyle}
									/>
								</li>
								<li className={btnWrapper}>
									<a
										href="./mark-oka-resume-2025.pdf"
										target="_blank"
										rel="noreferrer"
										className="z-30 my-1 inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-800 px-6 py-1 text-lg text-gray-300 ease-out hover:text-white focus:outline-1 md:my-0.5"
									>
										Resume
									</a>
								</li>
							</ul>
							<div className="mt-6 flex flex-row items-center gap-x-4 sm:gap-x-2 md:mt-4">
								<a
									href="https://www.linkedin.com/in/mark-oka/"
									target="_blank"
									rel="noopener noreferrer"
									className="rounded-sm transition-colors duration-300 ease-in-out hover:bg-blue-800 hover:text-white"
								>
									<LinkedInIcon className={iconSize} />
								</a>
								<a
									href="https://www.github.com/markoka101"
									target="_blank"
									rel="noopener noreferrer"
									className="rounded-sm transition-colors duration-300 ease-in-out hover:text-white"
								>
									<GitHubIcon className={iconSize} />
								</a>
							</div>
						</nav>
					</header>
					<aside className="my-1 hidden p-5 2xl:flex 2xl:lg:max-w-sm">
						<FadeInImage
							className="float-right rounded-md border-2 border-gray-900 duration-200"
							alt="Picture of Mark Oka (Me!)"
							src={portrait}
						/>
					</aside>
				</article>
			</section>
		</>
	);
}

export default About;
