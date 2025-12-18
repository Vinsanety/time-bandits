import Link from "next/link";
import { routesByCategory } from "@/data/routesByCategory";
import { slugify } from "@/lib/utils";
import { iconMap } from "@/lib/iconMap";
import { CircleOff } from "lucide-react";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const categoryData = routesByCategory.find(
    (c) => slugify(c.title) === category
  );

  if (!categoryData)
    return (
      <p className="flex items-center justify-center gap-2 py-12">
        <CircleOff />
        Category not found
      </p>
    );

  return (
    <div className="max-w-3xl mx-auto">
      {/* Category Hero */}
      <header className="animate-fade-in-up mb-10 text-center">
        <h1 className="flex items-center justify-center gap-4">
          {iconMap[categoryData.icon]} {categoryData.title}
        </h1>
        {categoryData.description && (
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            {categoryData.description}
          </p>
        )}
        <span className="underline"></span>
      </header>

      {/* Routes Grid */}
      <ul className="animate-fade-in-up delay-100 grid gap-6 sm:grid-cols-2 mt-8">
        {categoryData.routes.map((route, idx) => (
          <Link
            key={idx}
            href={`/routes/${slugify(categoryData.title)}/${slugify(
              route.name
            )}`}
            className="card-list-item_link"
          >
            <li className="flex gap-4">
              {/* Number badge */}
              <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 text-sm font-medium">
                {idx + 1}
              </span>

              {/* Route content */}
              <div className="flex flex-col">
                {route.name}
                {route.notes && (
                  <p className="text-sm text-gray-500 mt-1">{route.notes}</p>
                )}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
