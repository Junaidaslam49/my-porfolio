'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-purple-300 mb-8">
              Contact
            </p>

            <h2 className="text-5xl font-semibold leading-tight mb-8">
              Let’s build
              <br />
              something amazing.
            </h2>

            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              Available for frontend engineering, startup collaborations, and freelance projects.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none"
              />

              <textarea
                placeholder="Message"
                rows={6}
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 outline-none resize-none"
              />

              <button className="w-full bg-white text-black py-4 rounded-2xl font-medium hover:scale-[1.02] transition">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}