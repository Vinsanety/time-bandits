"use client";

import Link from "next/link";
import { routesByCategory } from "@/data/routesByCategory";
import { slugify } from "@/lib/utils";
import { iconMap } from "@/lib/iconMap";

export default function RoutesPage() {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      {/* Page Heading */}
      <h1 className="animate-fade-in-up text-center">Routes by Category</h1>
      {/* Intro tagline */}
      <p className="mt-6 text-xl max-w-2xl mx-auto text-center text-gray-600 relative animate-fade-in-up delay-100">
        Top 10 routes <em>All Time Performance</em> by category
        <span className="block w-24 h-1 bg-linear-to-r from-blue-500 to-blue-300 mx-auto mt-3 rounded-full"></span>
      </p>

      {/* Category Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-12">
        {routesByCategory.map((category, idx) => (
          <div
            key={category.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Card */}
            <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl">
              {/* Category Header */}
              <Link
                href={`/routes/${slugify(category.title)}`}
                className="flex items-center gap-3 px-4 py-3 bg-linear-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 transition-all group rounded-t-xl border-b border-gray-200
                           focus-visible:outline-none focus-visible:bg-blue-50 focus-visible:underline focus-visible:decoration-blue-400 focus-visible:decoration-2 focus-visible:animate-pulse
                           active:scale-[.98] active:shadow-sm"
              >
                <span>{iconMap[category.icon]}</span>
                <h2 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent tracking-tight group-hover:underline decoration-blue-400">
                  {category.title}
                </h2>
                <span className="ml-auto text-sm text-gray-500">
                  {category.routes.length} routes
                </span>
              </Link>

              {/* Category Description */}
              {category.description && (
                <p className="px-6 py-3 text-gray-600 italic border-b border-gray-100">
                  {category.description}
                </p>
              )}

              {/* Routes List */}
              <ul className="px-6 py-6 space-y-4 bg-white rounded-b-xl">
                {category.routes.map((route, idx) => (
                  <li key={idx}>
                    <Link
                      href={`/routes/${slugify(category.title)}/${slugify(
                        route.name
                      )}`}
                      className="card-list-item_link"
                    >
                      {/* Number badge */}
                      <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 text-sm font-medium">
                        {idx + 1}
                      </span>

                      {/* Route content */}
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-800">
                          {route.name}
                        </span>
                        {route.notes && (
                          <p className="text-sm text-gray-500 mt-1">
                            {route.notes}
                          </p>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
