import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

import About from "./components/About";
import NavbarComponent from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Person from "./components/Person";
//bg-gradient-to-tr from-stone-300 to-stone-200 bg-opacity-80
export default function App() {
    return (
        <main className="text-gray-300 bg-[url('../public/subtle-prism.svg')] bg-fixed min-h-screen flex flex-col relative">
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
            <footer className="bg-black bg-opacity-30 text-white  mt-auto bottom-0">
                <a href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/">
                    Background by SVGBackgrounds.com
                </a>
            </footer>
        </main>
    );
}
