import { Flowbite } from 'flowbite-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavbarComponent from './components/Navbar.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Person from './pages/Person.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Testimonials from './pages/Testimonials.jsx';

export default function App() {
	//bg-[url('./assets/subtle-prism.svg')]
	return (
		<main className="flex min-h-[100vh] flex-col  text-gray-300 overflow-auto">
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
		</main>
	);
}
