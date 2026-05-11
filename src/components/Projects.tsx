'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Onrekord.io',
    desc: 'Scalable NFT minting platform crafted with a modern and seamless user experience.',
  },
  {
    title: 'onRekord Marketplace',
    desc: 'Modern NFT marketplace enabling smooth digital asset trading and management.',
  },
  {
    title: 'Snapcover (Crypto Extension)',
    desc: 'Web3 browser extension designed for secure and intuitive crypto interactions.',
  },
  {
    title: 'Lokr.io',
    desc: 'Interactive motion-based website built with high-performance frontend architecture.',
  },
  {
    title: 'Vault',
    desc: 'Pixel-perfect NFT creation platform transformed from Figma into production-ready UI.',
  },
  {
    title: 'Minter',
    desc: 'Modern NFT minting interface developed with responsive and pixel-perfect design.',
  },
  {
    title: 'Swapper',
    desc: 'Crypto swapping platform focused on smooth transactions and user management.',
  },
  {
    title: 'Launcher',
    desc: 'Responsive launcher interface developed from Figma using modern UI systems.',
  },
  {
    title: 'Charmissa',
    desc: 'Optimized agile workflow platform built for scalable team collaboration.',
  },
  {
    title: 'PrimeHRMS',
    desc: 'Enterprise HRMS platform featuring payroll, attendance, and management dashboards.',
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
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 hover:border-purple-400/30 hover:bg-white/[0.05] transition-all duration-500"
              >
                <div className="flex flex-col justify-between h-full gap-8">
                  <div>
                    <div className="flex items-start justify-between gap-6 mb-4">
                      <h3 className="text-3xl font-semibold">
                        {project.title}
                      </h3>

                      <div className="text-purple-300 text-sm shrink-0">
                        0{index + 1}
                      </div>
                    </div>

                    <p className="text-white/60 text-lg leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}