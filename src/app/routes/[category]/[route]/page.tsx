import { routesByCategory } from "@/data/routesByCategory";
import { slugify } from "@/lib/utils";

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
    <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      {/* Route Hero */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent tracking-tight">
          {routeData.name}
        </h1>
        {routeData.notes && (
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            {routeData.notes}
          </p>
        )}
        <span className="block w-20 h-1 bg-linear-to-r from-blue-500 to-blue-300 mx-auto mt-4 rounded-full"></span>
      </header>

      {/* Meta Info */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <span className="text-3xl">{categoryData.icon}</span>
        <span className="text-gray-600">{categoryData.title}</span>
      </div>

      {/* Placeholder for route details */}
      <article className="prose prose-blue mx-auto">
        <p>
          Add more detailed information about the route — stats, maps,
          difficulty levels, or performance notes.
        </p>
      </article>
    </section>
  );
}
