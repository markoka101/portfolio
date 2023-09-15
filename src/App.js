import React from "react";
  
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Person from "./components/Person";
import Resume from "./components/Resume";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-600 body-font">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Person />
        <Resume />
        <Contact />
    </main>
  );
}
