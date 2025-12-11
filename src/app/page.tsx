import { Button } from "@/components/Button";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="relative h-[80vh] bg-[url('/images/ATP-bg.png')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-white/5 mix-blend-lighten"></div>
        <div className="animate-fade-in-up relative z-10 text-center text-white px-4">
          <h1 className="home-hero-text">All Time Performance</h1>
          <p className="mt-6 text-xl max-w-2xl mx-auto drop-shadow-md">
            Verified attempts. Rugged routes. Transparent scoring. A community
            built for performance.
          </p>
          <Link href="/routes">
            <Button variant="primary" className="mt-6">
              Discover Routes
            </Button>
          </Link>
        </div>
      </section>

      <div className="mb-16">
        {/* Core Pillars */}
        <section className="animate-fade-in-up delay-100 max-w-7xl p-12 mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
              Dynamic rankings evolve with participation and performance
              density.
            </p>
          </div>
          <div className="p-6 bg-stone-100 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Discoverability</h3>
            <p>Explore routes, leaderboards, and athlete rankings with ease.</p>
          </div>
        </section>

        {/* Featured Routes */}
        <section className="animate-fade-in-up delay-300 max-w-7xl mx-auto pb-12 px-12">
          <h2 className="text-3xl font-bold mb-8">Featured Routes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Route Card */}
            <div className=" bg-stone-800 text-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_761,q_75,w_1903/v1/clients/estespark/a2_1_7f97fe44-8798-4c28-95d0-96ebc428264f.jpg"
                alt="Alpine Ridge Trail"
                className="h-48 w-full object-cover"
              />
              <div className="flex flex-col gap-4 p-6">
                <h3 className="text-xl font-semibold">Alpine Ridge Trail</h3>
                <p className="text-gray-300">
                  A rugged climb with sweeping mountain views. Verified FKT
                  route.
                </p>
                <Button variant="secondary">View Leaderboard</Button>
              </div>
            </div>

            {/* Route Card */}
            <div className="bg-stone-800 text-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_761,q_75,w_1903/v1/clients/estespark/a2_1_7f97fe44-8798-4c28-95d0-96ebc428264f.jpg"
                alt="Forest Loop"
                className="h-48 w-full object-cover"
              />
              <div className="flex flex-col gap-4 p-6">
                <h3 className="text-xl font-semibold">Forest Loop</h3>
                <p className="text-gray-300">
                  Fast, technical trail through dense forest. Popular among
                  local athletes.
                </p>
                <Button variant="secondary">View Leaderboard</Button>
              </div>
            </div>

            {/* Route Card */}
            <div className="bg-stone-800 text-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_761,q_75,w_1903/v1/clients/estespark/a2_1_7f97fe44-8798-4c28-95d0-96ebc428264f.jpg"
                alt="Canyon Descent"
                className="h-48 w-full object-cover"
              />
              <div className="flex flex-col gap-4 p-6">
                <h3 className="text-xl font-semibold">Canyon Descent</h3>
                <p className="text-gray-300">
                  Steep descent with technical switchbacks. A true test of
                  control and speed.
                </p>
                <Button variant="secondary">View Leaderboard</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
