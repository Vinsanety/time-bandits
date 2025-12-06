import type { Metadata } from "next";
import "./globals.css";
import HeaderNav from "@/components/HeaderNav";

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
          <HeaderNav />
        </header>
        <main className="py-16">{children}</main>
      </body>
    </html>
  );
}
