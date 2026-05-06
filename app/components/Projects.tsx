'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Onrekord.io',
    desc: 'NFT minting platform built from scratch.',
  },
  {
    title: 'onRekord Marketplace',
    desc: 'Marketplace for NFT trading and management.',
  },
  {
    title: 'Charmissa',
    desc: 'Agile workflow product with optimized frontend.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-sm text-purple-300 mb-12">
          Projects
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 hover:border-purple-400/30 hover:bg-white/[0.05] transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:justify-between gap-8">
                <div>
                  <h3 className="text-3xl font-semibold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="text-purple-300 text-sm">
                  0{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}