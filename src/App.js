import React from "react";
  
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Person from "./components/Person";

export default function App() {
  return (
    <main className="text-gray-400 bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Person />
        <Contact />
    </main>
  );
}
