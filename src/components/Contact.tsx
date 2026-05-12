'use client';

// import {
//   LinkedinIcon,
//   GithubIcon,
//   Mail,
//   Globe,
//   Send,
// } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-40 px-6 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-purple-600/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-purple-300 mb-8 flex items-center gap-4">
              <span className="w-12 h-px bg-purple-400" />
              Contact
            </p>

            <h2 className="text-6xl md:text-7xl font-semibold leading-[0.95] tracking-tight">
              Let&apos;s build
              <br />

              <span className="bg-gradient-to-b from-violet-300 to-purple-500 bg-clip-text text-transparent">
                something great
              </span>
            </h2>

            <p className="text-white/55 text-xl leading-relaxed max-w-2xl mt-10">
              Open to frontend engineering roles, startup collaborations,
              freelance projects, and building modern high-performance web
              products.
            </p>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-5 mt-16">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                className="rounded-[24px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 hover:border-purple-500/30 transition-all duration-500"
              >
                <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/[0.05] flex items-center justify-center text-sm font-semibold text-white/70">
                  in
                </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      LinkedIn
                    </h3>

                    <p className="text-white/40 text-sm mt-1">
                      /junaidaslam49
                    </p>
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Junaidaslam49"
                target="_blank"
                className="rounded-[24px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 hover:border-purple-500/30 transition-all duration-500"
              >
                <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/[0.05] flex items-center justify-center text-sm font-semibold text-white/70">
                  GH
                </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      GitHub
                    </h3>

                    <p className="text-white/40 text-sm mt-1">
                      /Junaidaslam49
                    </p>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:junaidaslam49@yahoo.com"
                className="rounded-[24px] border border-purple-500/20 bg-purple-500/[0.06] backdrop-blur-2xl p-6 hover:border-purple-500/40 transition-all duration-500"
              >
                <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/[0.05] flex items-center justify-center text-sm font-semibold text-white/70">
                  @
                </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Email
                    </h3>

                    <p className="text-white/40 text-sm mt-1">
                      junaidaslam49@yahoo.com
                    </p>
                  </div>
                </div>
              </a>

              {/* Portfolio */}
              <a
                href="/"
                className="rounded-[24px] border border-cyan-500/20 bg-cyan-500/[0.05] backdrop-blur-2xl p-6 hover:border-cyan-500/40 transition-all duration-500"
              >
                <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/[0.05] flex items-center justify-center text-sm font-semibold text-white/70">
                  WWW
                </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Portfolio
                    </h3>

                    <p className="text-white/40 text-sm mt-1">
                      junaidaslam.vercel.app
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.02] backdrop-blur-2xl p-10">
            <h3 className="text-3xl font-semibold mb-3">
              Send a message
            </h3>

            <p className="text-white/45 mb-10 text-lg">
              Fill in your details and let&apos;s connect.
            </p>

            {/* Form */}
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="text-white/50 text-sm block mb-3">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full h-16 rounded-2xl border border-white/10 bg-black/30 px-5 outline-none text-white placeholder:text-white/20 focus:border-purple-500/40 transition"
                />
              </div>

              <div>
                <label className="text-white/50 text-sm block mb-3">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full h-16 rounded-2xl border border-white/10 bg-black/30 px-5 outline-none text-white placeholder:text-white/20 focus:border-purple-500/40 transition"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="text-white/50 text-sm block mb-3">
                Message
              </label>

              <textarea
                rows={7}
                placeholder="What would you like to talk about?"
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-5 outline-none resize-none text-white placeholder:text-white/20 focus:border-purple-500/40 transition"
              />
            </div>

            {/* Button */}
            <button className="group relative w-full overflow-hidden rounded-2xl py-5 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold text-lg shadow-[0_0_60px_rgba(139,92,246,0.45)]">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative flex items-center justify-center gap-3">
            <span>Continue to Send</span>
            </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}