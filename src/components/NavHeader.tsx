"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-100 text-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">
          <Link href="/">All Time Performances</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link href="/" className="hover:text-amber-400">
            Home
          </Link>
          <Link href="/routes" className="hover:text-amber-400">
            Routes
          </Link>
          <Link href="/blog" className="hover:text-amber-400">
            Blog
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-200 px-4 p-4 space-y-4">
          <Link
            href="/"
            className="block hover:text-amber-400"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/routes"
            className="block hover:text-amber-400"
            onClick={() => setIsOpen(false)}
          >
            Routes
          </Link>
          <Link
            href="/blog"
            className="block hover:text-amber-400"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
        </nav>
      )}
    </header>
  );
}
