'use client';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-wide">
          Junnaid.
        </h1>

        <nav className="hidden md:flex items-center gap-10 text-sm text-white/60">
          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#experience" className="hover:text-white transition">
            Experience
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}