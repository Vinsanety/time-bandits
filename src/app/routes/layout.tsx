export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex items-center justify-center container mx-auto px-4">
      {children}
    </section>
  );
}
