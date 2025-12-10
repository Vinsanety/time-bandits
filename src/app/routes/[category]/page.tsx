import Link from "next/link";
import { routesByCategory } from "@/data/routesByCategory";
import { slugify } from "@/lib/utils";
import { iconMap } from "@/lib/iconMap";

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
    return <div className="text-center py-12">Category not found</div>;

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      {/* Category Hero */}
      <header className="animate-fade-in mb-10 text-center">
        <h1 className="flex items-center justify-center gap-4">
          {iconMap[categoryData.icon]} {categoryData.title}
        </h1>
        {categoryData.description && (
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            {categoryData.description}
          </p>
        )}
        <span className="block w-20 h-1 bg-linear-to-r from-blue-500 to-blue-300 mx-auto mt-4 rounded-full"></span>
      </header>

      {/* Routes Grid */}
      <ul className="animate-fade-in delay-100 grid gap-6 sm:grid-cols-2 mt-8">
        {categoryData.routes.map((route, idx) => (
          <Link
            key={idx}
            href={`/routes/${slugify(categoryData.title)}/${slugify(
              route.name
            )}`}
            className="font-semibold text-gray-800 hover:text-blue-700 transition-colors"
          >
            <li className="flex gap-4 bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md hover:bg-blue-50 transition-all">
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
    </section>
  );
}
