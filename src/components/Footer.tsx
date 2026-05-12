'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative w-full py-6 px-6 overflow-hidden border-t border-white/10 bg-black">
      {/* Purple Glow */}
      <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] bg-purple-600/20 blur-[140px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto flex items-center justify-between"
      >
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          {/* glow */}
          <div className="absolute inset-0 bg-purple-500 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-white font-semibold text-lg shadow-[0_0_30px_rgba(139,92,246,0.5)]">
            J
          </div>
          <span className="text-sm text-white/80 font-medium">
            Junaid Aslam.
          </span>
        </div>

        {/* Center - Text */}
        <p className="text-xs text-white/50 text-center">
          © 2026 - Built with Next.js & Tailwind CSS
        </p>

        {/* Right - Icons */}
        <div className="flex items-center gap-4 text-white/60">
          {/* GitHub */}
          <a href="#" className="hover:text-white transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .5C5.7.5.7 5.6.7 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 2.1 3.4 2.1.5 0 .9-.1 1.2-.2.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.3a11.4 11.4 0 0 1 6.2 0C17 5.6 18 5.9 18 5.9c.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.5-2.8 5.5-5.5 5.8.4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.3 12C23.3 5.6 18.3.5 12 .5z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="#" className="hover:text-white transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-1 1.7-2.1 3.6-2.1 3.8 0 4.5 2.5 4.5 5.7v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM3.5 20.4h3.6V9H3.5v11.4z" />
            </svg>
          </a>
        </div>
      </motion.div>
    </footer>
  );
}