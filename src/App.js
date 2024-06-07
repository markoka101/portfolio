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
        <main className="text-gray-400 bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500">
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
