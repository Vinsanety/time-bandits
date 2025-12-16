import { routesByCategory } from "@/data/routesByCategory";
import { slugify } from "@/lib/utils";
import { iconMap } from "@/lib/iconMap";
import { RouteOff, MapPin } from "lucide-react";

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
    return (
      <p className="flex items-center justify-center gap-2 py-12">
        <RouteOff />
        Route not found
      </p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Route Hero */}
      <div className="animate-fade-in-up delay-100 mb-10 text-center">
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
      </div>

      {/* Placeholder for route details */}
      <article className="animate-fade-in-up delay-300">
        <p>
          Add more detailed information about the route — stats, maps,
          difficulty levels, or performance notes.
        </p>
      </article>
    </div>
  );
}
