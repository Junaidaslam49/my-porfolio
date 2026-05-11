'use client';

import { motion } from 'framer-motion';
// import { ArrowRight, Linkedin } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Purple Glow */}
      <div className="absolute bottom-0 right-[10%]  bg-purple-600/20 blur-[140px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-[1400px] mx-auto text-left"
      >
        <p className="uppercase tracking-[0.3em] text-sm text-left text-purple-300 mb-8">
            About
        </p>
        
        <h1 className="text-6xl md:text-8xl font-semibold leading-[0.95] tracking-tight">
          Junaid&nbsp;
          <span className="bg-gradient-to-b from-violet-300 to-purple-500 bg-clip-text text-transparent">
            Aslam
          </span>
        </h1>

        {/* Subtitle */}
        <div className="flex flex-wrap items-center justify-start gap-3 mt-10 text-lg md:text-2xl text-white/80 font-medium">
          <span>Frontend Engineer</span>

          <span className="text-purple-400">×</span>

          <span className="text-violet-300">
            Startup Product Developer
          </span>
        </div>

        {/* Description */}
        <div className="mt-10 max-w-7xl mx-auto">
          <p className="text-white/45 text-lg md:text-2xl leading-relaxed">
          Experienced frontend developer building production-grade web applications, dashboards, admin panels, and modern digital experiences with scalable architecture, performance optimization, and premium user interfaces.
          </p>

          <p className="text-white/45 text-lg md:text-2xl leading-relaxed mt-3">
          Passionate about creating intuitive, responsive, and high-quality products for startups, businesses, and modern web platforms.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 max-w-3xl mx-auto">
          <div>
            <h3 className="text-4xl font-semibold bg-gradient-to-b from-violet-300 to-purple-500 bg-clip-text text-transparent">
              5+
            </h3>

            <p className="text-white/40 mt-2 text-sm md:text-base">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-semibold bg-gradient-to-b from-violet-300 to-purple-500 bg-clip-text text-transparent">
              20+
            </h3>

            <p className="text-white/40 mt-2 text-sm md:text-base">
              Projects Built
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-semibold bg-gradient-to-b from-violet-300 to-purple-500 bg-clip-text text-transparent">
              15+
            </h3>

            <p className="text-white/40 mt-2 text-sm md:text-base">
              Startup Products
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-semibold bg-gradient-to-b from-violet-300 to-purple-500 bg-clip-text text-transparent">
              100%
            </h3>

            <p className="text-white/40 mt-2 text-sm md:text-base">
              Responsive UI
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-5 mt-20">
          {/* Primary */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            className="group relative overflow-hidden rounded-2xl px-8 py-5 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-medium shadow-[0_0_60px_rgba(139,92,246,0.45)]"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative flex items-center gap-3">
              <span>View my work</span>

              {/* <ArrowRight size={18} /> */}
            </div>
          </motion.a>

          {/* Secondary */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:junaidaslam49@yahoo.com"
            className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-8 py-5 text-white/80 hover:bg-white/[0.06] transition"
          >
            Let's connect
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.linkedin.com/in/junaid-aslam-833897165/"
            target="_blank"
            className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-8 py-5 text-white/80 hover:bg-white/[0.06] transition flex items-center gap-3"
          >
            {/* <Linkedin size={18} /> */}

            LinkedIn
          </motion.a>
        </div>

        {/* Scroll */}
        <div className="mt-24 flex flex-col items-center">
          <span className="text-white/30 tracking-[0.3em] text-xs">
            SCROLL
          </span>

          <div className="w-px h-24 bg-gradient-to-b from-purple-500/60 to-transparent mt-5" />
        </div>
      </motion.div>
    </section>
  );
}
