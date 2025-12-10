import Breadcrumbs from "@/components/Breadcrumbs";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="container mx-auto px-4">
      <Breadcrumbs />
      {children}
    </section>
  );
}
