'use client';

import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 pt-4">
      <div className="mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-2xl">
          
          {/* glow background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.15),transparent_60%)]" />

          <div className="relative h-20 px-6 flex items-center justify-between">
            
            {/* Left Logo */}
            <motion.a
              href="/"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 group"
            >
              <div className="relative">
                
                {/* glow */}
                <div className="absolute inset-0 bg-purple-500 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-white font-semibold text-lg shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                  J
                </div>
              </div>

              <span className="text-white font-semibold text-lg tracking-tight">
                Junaid<span class="text-indigo-400">.</span>
              </span>
            </motion.a>

            {/* Center Nav */}
            <nav className="hidden md:flex items-center gap-10 text-[15px] text-white/60 font-medium">
              <a
                href="#about"
                className="hover:text-white transition duration-300"
              >
                About
              </a>

              <a
                href="#experience"
                className="hover:text-white transition duration-300"
              >
                Experience
              </a>

              <a
                href="#projects"
                className="hover:text-white transition duration-300"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="hover:text-white transition duration-300"
              >
                Contact
              </a>
            </nav>

            {/* Right Button */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:junaidaslam49yahoo.com"
              className="group relative overflow-hidden rounded-xl border border-purple-500/20 bg-[#0B0B12] px-5 py-3"
            >
              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-purple-500/10 blur-xl" />

              <div className="relative flex items-center gap-3">
                
                {/* green dot */}
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />

                <span className="text-sm text-white/90 font-medium">
                  Open to work
                </span>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  );
}
