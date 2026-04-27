export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        {/* Hero */}
        <h1 className="text-4xl font-bold mb-4">
          Junnaid Aslam
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Frontend Developer building fast, scalable, and clean web apps.
        </p>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium">Onrekord</h3>
              <p className="text-gray-400">
                NFT minting platform built with React, TypeScript, Ant Design.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">Marketplace</h3>
              <p className="text-gray-400">
                NFT marketplace for buying and selling digital assets.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-400">
            Email: your@email.com
          </p>
        </section>

      </div>
    </main>
  );
}
