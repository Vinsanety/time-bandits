export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-[url('https://ralphdeal.s3.amazonaws.com/wp-content/uploads/2024/03/Grand_Teton_revised_blog-32.jpg')] bg-cover bg-center flex items-center justify-center ">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold tracking-wide drop-shadow-lg">
            All Time Performances
          </h1>
          <p className="mt-6 text-xl max-w-2xl mx-auto drop-shadow-md">
            Verified attempts. Rugged routes. Transparent scoring. A community
            built for performance.
          </p>

          {/* CTA Button */}
          <button className="mt-8 px-6 py-3 bg-green-700 hover:bg-green-800 rounded-lg font-semibold shadow-lg transition">
            Discover Routes
          </button>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="p-6 bg-stone-100 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Verified Attempts</h3>
          <p>
            Every performance is authenticated for fairness and credibility.
          </p>
        </div>
        <div className="p-6 bg-stone-100 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Standardized Routes</h3>
          <p>Curated definitions ensure consistency across all athletes.</p>
        </div>
        <div className="p-6 bg-stone-100 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Transparent Scoring</h3>
          <p>
            Dynamic rankings evolve with participation and performance density.
          </p>
        </div>
        <div className="p-6 bg-stone-100 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Discoverability</h3>
          <p>Explore routes, leaderboards, and athlete rankings with ease.</p>
        </div>
      </section>

      {/* Featured Routes */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-green-900 mb-8">
          Featured Routes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Route Card */}
          <div className="bg-stone-800 text-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_761,q_75,w_1903/v1/clients/estespark/a2_1_7f97fe44-8798-4c28-95d0-96ebc428264f.jpg"
              alt="Alpine Ridge Trail"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Alpine Ridge Trail</h3>
              <p className="mt-2 text-gray-300">
                A rugged climb with sweeping mountain views. Verified FKT route.
              </p>
              <button className="mt-4 px-4 py-2 bg-red-700 hover:bg-red-600 rounded-md font-medium">
                View Leaderboard
              </button>
            </div>
          </div>

          {/* Route Card */}
          <div className="bg-stone-800 text-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_761,q_75,w_1903/v1/clients/estespark/a2_1_7f97fe44-8798-4c28-95d0-96ebc428264f.jpg"
              alt="Forest Loop"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Forest Loop</h3>
              <p className="mt-2 text-gray-300">
                Fast, technical trail through dense forest. Popular among local
                athletes.
              </p>
              <button className="mt-4 px-4 py-2 bg-red-700 hover:bg-red-600 rounded-md font-medium">
                View Leaderboard
              </button>
            </div>
          </div>

          {/* Route Card */}
          <div className="bg-stone-800 text-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_761,q_75,w_1903/v1/clients/estespark/a2_1_7f97fe44-8798-4c28-95d0-96ebc428264f.jpg"
              alt="Canyon Descent"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Canyon Descent</h3>
              <p className="mt-2 text-gray-300">
                Steep descent with technical switchbacks. A true test of control
                and speed.
              </p>
              <button className="mt-4 px-4 py-2 bg-red-700 hover:bg-red-600 rounded-md font-medium">
                View Leaderboard
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
