import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Flowbite } from 'flowbite-react';

import About from './components/About.jsx';
import NavbarComponent from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Person from './components/Person.jsx';
import Testimonials from './components/Testimonials.jsx';

export default function App() {
	return (
		<main className="flex min-h-[100vh] flex-col bg-[url('../public/subtle-prism.svg')] text-gray-300">
			<BrowserRouter>
				<Flowbite>
					<NavbarComponent />
					<Routes>
						<Route path="/*" element={<About />} />
						<Route path="/testimonials" element={<Testimonials />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/about-me" element={<Person />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Flowbite>
			</BrowserRouter>
			<footer className="bottom-0 mt-auto w-[14rem] self-end bg-black bg-opacity-25 text-white">
				<a
					href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/ "
					className="float-right pr-2 text-xs"
				>
					Background by SVGBackgrounds.com
				</a>
			</footer>
		</main>
	);
}
