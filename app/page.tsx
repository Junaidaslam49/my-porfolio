'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Onrekord.io',
    description:
      'NFT minting platform where I developed the complete frontend from scratch using React, TypeScript, and Ant Design.',
    link: 'https://nft.onrekord.io/',
  },
  {
    title: 'onRekord Marketplace',
    description:
      'Marketplace for buying and selling NFTs with optimized UI flows and scalable frontend architecture.',
    link: 'https://go-marketplace.onrekord.io/',
  },
  {
    title: 'Charmissa',
    description:
      'Agile workflow platform with optimized frontend performance and modern dashboard experience.',
    link: 'https://charmissa.app/',
  },
  {
    title: 'Snapcover',
    description:
      'Modern product-focused web application with clean UX and responsive frontend implementation.',
    link: 'https://snapcover.io/',
  },
];

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'SCSS',
  'Ant Design',
  'Vue.js',
  'Responsive Design',
  'Performance Optimization',
  'Figma',
  'Git',
];

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* Hero */}
      <section className="min-h-screen flex items-center border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-6">
              Frontend Developer
            </p>

            <h1 className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight mb-8">
              Building clean,
              <br />
              scalable & modern
              <br />
              digital experiences.
            </h1>

            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mb-10">
              I’m Junnaid Aslam, a frontend developer focused on creating
              high-quality web applications with strong UI systems,
              performance optimization, and scalable frontend architecture.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Junaidaslam49"
                target="_blank"
                className="border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-32 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-16"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-6">
                About
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl leading-tight mb-8 font-semibold">
                Startup-focused frontend engineer with real production
                experience.
              </h2>

              <p className="text-white/60 text-lg leading-relaxed mb-6">
                I specialize in building scalable frontend systems, responsive
                interfaces, and modern user experiences using React, Next.js,
                TypeScript, and modern UI technologies.
              </p>

              <p className="text-white/60 text-lg leading-relaxed">
                I’ve worked on NFT platforms, marketplaces, dashboards, and
                startup products where performance, UX, and execution speed were
                critical.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-32 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-10">
              Skills
            </p>

            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="border border-white/10 px-5 py-3 rounded-full text-white/70 hover:bg-white hover:text-black transition-all duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-32 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-12">
              Selected Projects
            </p>

            <div className="space-y-8">
              {projects.map((project, index) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="block border border-white/10 rounded-3xl p-8 hover:border-white/30 hover:bg-white/[0.03] transition-all duration-500"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                        {project.title}
                      </h3>

                      <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
                        {project.description}
                      </p>
                    </div>

                    <div className="text-white/40 text-sm">
                      0{index + 1}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-32 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-12">
              Experience
            </p>

            <div className="space-y-12">
              <div className="border-l border-white/10 pl-8">
                <p className="text-white/40 mb-2">Frontend Developer</p>
                <h3 className="text-2xl font-semibold mb-4">
                  Startup & Product Development
                </h3>
                <p className="text-white/60 text-lg leading-relaxed max-w-3xl">
                  Built production-ready interfaces for startups including NFT
                  platforms, marketplaces, dashboards, and scalable web
                  applications with a strong focus on UI quality and frontend
                  performance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-8">
              Contact
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
              Let’s build
              <br />
              something exceptional.
            </h2>

            <p className="text-white/60 text-lg mb-10 max-w-2xl leading-relaxed">
              Available for frontend engineering opportunities, startup
              collaborations, and freelance product development.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:your@email.com"
                className="bg-white text-black px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>

              <a
                href="https://github.com/Junaidaslam49"
                target="_blank"
                className="border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}