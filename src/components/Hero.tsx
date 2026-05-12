'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-32 px-6">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.3em] text-sm text-purple-300 mb-8">
            Frontend Developer
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight mb-8">
            Crafting modern
            <br />
            digital experiences
            <br />
            for startups.
          </h1>

          <p className="text-lg text-white/60 leading-relaxed max-w-xl mb-10">
            Frontend engineer focused on scalable UI systems,
            performance optimization, and premium product experiences.
          </p>

          <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-block px-7 py-4 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold text-lg shadow-[0_0_60px_rgba(139,92,246,0.45)] font-medium hover:scale-105 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-block px-7 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition"
          >
            Contact Me
          </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-purple-500/20 blur-[80px] rounded-full" />

          <div className="relative rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden">
            <img
              src="/jd.jpg"
              alt="profile"
              className="rounded-[28px] w-full h-[550px] object-cover object-[center_26%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}