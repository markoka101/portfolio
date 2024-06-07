import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Person from "./components/Person";

export default function App() {
    return (
        <main className="text-gray-400 bg-stone-400 bg-opacity-75 min-h-screen">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="*" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="about-me" element={<Person />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}
