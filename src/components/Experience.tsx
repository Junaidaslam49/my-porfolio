export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-sm text-purple-300 mb-12">
          Experience
        </p>

        <div className="space-y-8">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">
            <p className="text-white/40 mb-3">Frontend Developer</p>

            <h3 className="text-3xl font-semibold mb-5">
              Startup Product Development
            </h3>

            <p className="text-white/60 text-lg leading-relaxed max-w-3xl">
              Developed scalable frontend systems and production-ready applications for startups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}