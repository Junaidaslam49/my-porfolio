'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16"
        >
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-purple-300 mb-8">
              About
            </p>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl leading-tight font-semibold mb-8">
              Building high-quality frontend experiences with modern technologies.
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-6">
              I specialize in React, Next.js, TypeScript, and scalable frontend architecture.
            </p>

            <p className="text-white/60 text-lg leading-relaxed">
              Experienced in startup environments delivering production-ready applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}