import { Navigate, Route, Routes } from 'react-router-dom';

import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact.js';
import Person from './pages/Person/Person';
import Projects from './pages/Projects/Projects.js';
import Skills from './pages/Skills/Skills.js';
import Testimonials from './pages/Testimonials/Testimonials.js';

export default function App() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<main className="flex min-h-[100vh] flex-col overflow-x-hidden overflow-y-auto text-gray-300">
			<Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
			{isOpen && (
				<button
					type="button"
					className="fixed inset-0 z-30 cursor-pointer lg:hidden"
					aria-label="Close menu overlay"
					onClick={() => setIsOpen(false)}
					style={{ outline: 'none', border: 'none', padding: 0, margin: 0 }}
				/>
			)}
			<Routes>
				<Route path="/" element={<About />} />
				<Route path="/testimonials" element={<Testimonials />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/about-me" element={<Person />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</main>
	);
}
