'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import BackgroundEffects from './components/BackgroundEffects';


export default function Home() {
  return (
    <main className="bg-[#050505] text-white overflow-hidden relative">
      <BackgroundEffects />

      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Experience />

      <Contact />
    </main>
  );
}