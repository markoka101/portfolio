import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

import About from "./components/About";
import NavbarComponent from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Person from "./components/Person";

export default function App() {
    return (
        <main className="text-gray-300 bg-gradient-to-tr from-stone-400 to-stone-300 bg-opacity-65 min-h-screen">
            <BrowserRouter>
                <Flowbite>
                    <NavbarComponent />
                    <Routes>
                        <Route path="*" element={<About />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="skills" element={<Skills />} />
                        <Route path="about-me" element={<Person />} />
                        <Route path="contact" element={<Contact />} />
                    </Routes>
                </Flowbite>
            </BrowserRouter>
        </main>
    );
}
