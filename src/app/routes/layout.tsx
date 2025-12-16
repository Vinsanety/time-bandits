export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full container mx-auto px-8">{children}</section>
  );
}
