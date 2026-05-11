'use client';

// import { Code2, Database, Layers3, Server, Cloud } from 'lucide-react';

const skillGroups = [
  {
    title: 'Frontend',
    // icon: <Code2 size={18} />,
    color:
      'from-cyan-500/10 to-cyan-500/5 border-cyan-500/20 text-cyan-300',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Redux Toolkit',
      'Tailwind CSS',
      'SCSS',
      'Material UI',
      'Ant Design',
      'Responsive Design',
      'SSR / CSR',
      'Framer Motion',
    ],
  },
  {
    title: 'Backend & APIs',
    // icon: <Server size={18} />,
    color:
      'from-violet-500/10 to-violet-500/5 border-violet-500/20 text-violet-300',
    skills: [
      'REST APIs',
      'GraphQL',
      'API Integration',
      'Node.js',
      'Express.js',
      'Laravel',
      'Authentication',
      'WebSocket',
      'Firebase',
      'Socket.IO',
    ],
  },
  {
    title: 'State Management',
    // icon: <Layers3 size={18} />,
    color:
      'from-purple-500/10 to-pink-500/5 border-purple-500/20 text-purple-300',
    skills: [
      'Redux',
      'Redux Toolkit',
      'Context API',
      'Zustand',
      'React Query',
      'Global State',
      'Scalable Architecture',
      'Reusable Components',
    ],
  },
  {
    title: 'Databases & CMS',
    // icon: <Database size={18} />,
    color:
      'from-red-500/10 to-red-500/5 border-red-500/20 text-red-300',
    skills: [
      'MongoDB',
      'MySQL',
      'Firebase',
      'Strapi',
      'Sanity',
      'Headless CMS',
      'Dynamic Data Handling',
    ],
  },
  {
    title: 'Deployment & Tools',
    // icon: <Cloud size={18} />,
    color:
      'from-emerald-500/10 to-emerald-500/5 border-emerald-500/20 text-emerald-300',
    skills: [
      'Git',
      'GitHub',
      'Vercel',
      'Netlify',
      'CI/CD',
      'Performance Optimization',
      'SEO',
      'Figma',
      'Agile Workflow',
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-40 px-6 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/10 blur-[160px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="mb-20">
          <p className="uppercase tracking-[0.3em] text-sm text-purple-300 mb-6">
            Technical Skills
          </p>

          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">
            Modern frontend{' '}
            <span className="bg-gradient-to-b from-violet-300 to-purple-500 bg-clip-text text-transparent">
              expertise
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className={`rounded-[32px] border bg-gradient-to-br ${group.color} backdrop-blur-2xl p-8 hover:scale-[1.01] transition-all duration-500`}
            >
              {/* Top */}
              <div className="flex items-center gap-3 mb-8">
                {/* <div>{group.icon}</div> */}

                <h3 className="text-2xl font-semibold">
                  {group.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-xl border border-white/10 bg-white/[0.04] text-sm text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}