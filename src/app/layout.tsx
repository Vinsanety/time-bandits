import type { Metadata } from "next";
import "./globals.css";
import NavHeader from "@/components/NavHeader";

export const metadata: Metadata = {
  title: "Time Bandits",
  description: "All Time Performances",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <NavHeader />
        </header>
        <main className="py-16">{children}</main>
      </body>
    </html>
  );
}
