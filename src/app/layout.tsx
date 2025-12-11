import type { Metadata } from "next";
import "./globals.css";
import HeaderNav from "@/components/HeaderNav";

export const metadata: Metadata = {
  title: "Time Bandits",
  description: "All Time Performance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeaderNav />
        <main className="pt-18">{children}</main>
      </body>
    </html>
  );
}
