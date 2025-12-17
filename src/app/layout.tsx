import type { Metadata } from "next";
import "./globals.css";
import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";

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
      <body className="flex flex-col min-h-screen">
        <NavHeader />
        <main className="grow pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
