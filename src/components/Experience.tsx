'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Lead Front End Developer',
    company: 'OnRekord',
    period: '2023 — Present',
    points: [
      'Leading frontend development for NFT platforms, dashboards, admin panels, marketplaces, and modern web applications.',
      'Collaborating with backend developers and designers to deliver seamless, responsive, and high-performance user experiences.',
      'Implemented scalable frontend architecture, performance optimization, and modern UI systems across multiple production products.',
      'Integrated APIs and developed scalable state management systems for complex application workflows.',
      'Built reusable frontend components and optimized data handling for improved maintainability and performance.',
      'Successfully delivered and launched multiple client projects resulting in improved engagement and positive product feedback.',
    ],
  },
  {
    role: 'Front End Developer',
    company: 'Lokr',
    period: '2021 — 2023',
    points: [
      'Developed responsive admin panels, dashboards, and user-friendly web applications using modern frontend technologies.',
      'Collaborated closely with design teams to transform Figma designs into pixel-perfect and production-ready interfaces.',
      'Integrated APIs and implemented scalable state management solutions across multiple frontend applications.',
      'Improved application performance, responsiveness, and SEO implementation across multiple web platforms.',
      'Built reusable UI components and scalable frontend patterns focused on high-quality user experience.',
    ],
  },
  {
    role: 'Front End Developer',
    company: 'Mission',
    period: '2019 — 2021',
    points: [
      'Developed responsive websites and interactive user interfaces for large-scale web projects.',
      'Worked with international teams to implement frontend features and improve website usability and performance.',
      'Collaborated with cross-functional teams to maintain design consistency across multiple platforms and devices.',
      'Maintained and optimized existing applications following modern frontend standards and best practices.',
    ],
  },
  // {
  //   role: 'Junior Software Engineer',
  //   company: 'PAAYSAY LTD',
  //   period: '2018 — 2019',
  //   points: [
  //     'Developed responsive frontend features and contributed to modern framework integration in production systems.',
  //     'Built secure payment-related user flows for UK-based financial service platforms.',
  //     'Collaborated with senior engineers on API development and backend integration using Laravel.',
  //     'Focused on performance, usability, and scalable frontend implementation across payment applications.',
  //   ],
  // },
  // {
  //   role: 'Frontend Developer',
  //   company: 'H3 Solutions',
  //   period: '2015 — 2018',
  //   points: [
  //     'Started as an intern and progressed into development and technical support leadership roles.',
  //     'Built portfolio websites, marketing assets, banners, and responsive business web platforms.',
  //     'Led a 6-member team while managing client communication and project delivery workflows.',
  //     'Collaborated across teams to deliver user-focused digital solutions with modern UI implementation.',
  //   ],
  // },
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

                        {/* <span className="px-4 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-sm">
                          {item.badge}
                        </span> */}
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