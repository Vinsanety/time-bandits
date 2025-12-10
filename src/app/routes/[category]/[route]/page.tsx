import { routesByCategory } from "@/data/routesByCategory";
import { slugify } from "@/lib/utils";
import { iconMap } from "@/lib/iconMap";
import { MapPin } from "lucide-react";

export default async function RoutePage({
  params,
}: {
  params: Promise<{ category: string; route: string }>;
}) {
  const { category, route } = await params;

  const categoryData = routesByCategory.find(
    (c) => slugify(c.title) === category
  );
  const routeData = categoryData?.routes.find((r) => slugify(r.name) === route);

  if (!categoryData || !routeData) {
    return <div className="text-center py-12">Route not found</div>;
  }

  return (
    <section className="animate-fade-in px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      {/* Route Hero */}
      <header className="mb-10 text-center">
        <h1>{routeData.name}</h1>
        {routeData.notes && (
          <p className="flex items-center justify-center gap-2">
            <MapPin />
            {routeData.notes}
          </p>
        )}
        <div className="flex items-center justify-center gap-6 mb-8">
          <p className="flex gap-2">
            {iconMap[categoryData.icon]}
            {categoryData.title}
          </p>
        </div>
        {/* Underline */}
        <span className="block w-20 h-1 bg-linear-to-r from-blue-500 to-blue-300 mx-auto mt-4 rounded-full"></span>
      </header>

      {/* Placeholder for route details */}
      <article className="animate-fade-in delay-100 prose prose-blue mx-auto">
        <p>
          Add more detailed information about the route — stats, maps,
          difficulty levels, or performance notes.
        </p>
      </article>
    </section>
  );
}
