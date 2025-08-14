import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgressBar";

// ...
<div className="min-h-screen">
  <ScrollProgress />
  <Header />
  {/* rest ... */}
</div>

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div className="container">
          <About />
          <Experience />
          <Projects />
          <Skills />
        </div>
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sudeepti Setti
      </footer>
    </div>
  );
}
