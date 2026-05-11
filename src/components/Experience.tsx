'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'OnRekord',
    badge: 'Startup',
    period: '2024 — Present',
    points: [
      'Built and scaled modern NFT platforms, dashboards, and marketplace interfaces.',
      'Developed premium frontend systems with responsive and pixel-perfect UI implementation.',
      'Collaborated closely with founders, designers, and backend teams in agile environments.',
      'Optimized application performance, animations, and overall user experience.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'PrimeHRMS',
    badge: 'Enterprise',
    period: '2023 — 2024',
    points: [
      'Contributed to enterprise HRMS systems including payroll, attendance, and admin panels.',
      'Built reusable frontend components and scalable UI architecture.',
      'Improved usability and responsiveness across multiple management dashboards.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Freelance & Startup Projects',
    badge: 'Remote',
    period: '2022 — Present',
    points: [
      'Delivered production-grade frontend solutions for startups and modern web platforms.',
      'Transformed Figma designs into scalable and high-quality user interfaces.',
      'Built responsive websites, crypto platforms, dashboards, and admin systems.',
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-40 px-6 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-purple-600/10 blur-[160px]" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-24">
          <p className="uppercase tracking-[0.3em] text-sm text-purple-300 mb-6 flex items-center gap-4">
            <span className="w-12 h-px bg-purple-400" />
            Experience
          </p>

          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
            Where I've{' '}
            <span className="bg-gradient-to-b from-violet-300 to-purple-500 bg-clip-text text-transparent">
              worked
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/80 via-white/20 to-transparent" />

          <div className="space-y-14">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="relative pl-20"
              >
                {/* Dot */}
                <div className="absolute left-0 top-10">
                  <div className="w-9 h-9 rounded-full border border-purple-400/40 bg-black flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.6)]">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-b from-violet-300 to-purple-500" />
                  </div>
                </div>

                {/* Card */}
                <div className="rounded-[34px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] backdrop-blur-2xl p-10 hover:border-purple-500/20 transition-all duration-500">
                  {/* Top */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <h3 className="text-3xl font-semibold">
                          {item.role}
                        </h3>

                        <span className="px-4 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm">
                          {item.badge}
                        </span>
                      </div>

                      <p className="text-purple-200 text-xl">
                        {item.company}
                      </p>
                    </div>

                    <p className="text-white/30 tracking-wide">
                      {item.period}
                    </p>
                  </div>

                  {/* Points */}
                  <div className="mt-10 space-y-5">
                    {item.points.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 text-white/60 text-lg leading-relaxed"
                      >
                        <span className="text-purple-400 mt-[2px]">
                          ›
                        </span>

                        <p>{point}</p>
                      </div>
                    ))}
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