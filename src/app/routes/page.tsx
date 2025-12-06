"use client";

import { routesByCategory } from "@/data/routesByCategory";

export default function ListsPage() {
  return (
    <section>
      {/* Page Heading */}
      <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-900 tracking-tight">
        Routes by Category
      </h1>

      {/* Intro tagline */}
      <p className="mt-6 text-xl max-w-2xl mx-auto drop-shadow-md text-center text-gray-700">
        Top 10 routes <em>All Time Performance</em> by category
      </p>

      {/* Category Grid */}
      <div className="grid gap-10 md:grid-cols-2 mt-12">
        {routesByCategory.map((category) => (
          <div
            key={category.id}
            className="group bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 px-6 py-5 bg-gradient-to-r from-gray-50 to-gray-100 group-hover:from-blue-50 group-hover:to-blue-100 transition-colors">
              <span className="text-4xl">{category.icon}</span>
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                {category.title}
              </h2>
            </div>

            {/* Category Description */}
            {category.description && (
              <p className="px-6 py-3 text-gray-600 italic border-b border-gray-100">
                {category.description}
              </p>
            )}

            {/* Routes List */}
            <ul className="px-6 py-6 space-y-3">
              {category.routes.map((route, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 transform transition-transform hover:translate-x-1"
                >
                  <span className="text-blue-500 font-bold">•</span>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
                  >
                    {route.name}
                    {route.notes && (
                      <span className="text-sm text-gray-500 font-normal">
                        {" "}
                        — {route.notes}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
