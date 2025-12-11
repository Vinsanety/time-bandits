"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink } from "@/components/NavLink";

export default function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const homeRoute = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10 || isOpen);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <header
      className={`fixed h-18 top-0 w-full z-50 transition-all duration-100 ${
        isScrolled || homeRoute ? "bg-gray-100 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="text-2xl font-extrabold bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent tracking-tight">
          <Link
            href="/"
            className="border-b-blue-600 focus-visible:border-b-2 focus-visible:outline-none"
          >
            All Time Performance
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/routes">Routes</NavLink>
          <NavLink href="/media">Media</NavLink>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md p-2"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
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
      <nav
        className={`md:hidden transition-all duration-300 ${
          isOpen
            ? "max-h-screen opacity-100 bg-gray-50 border-t border-gray-200 shadow-md"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <NavLink href="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink href="/routes" onClick={() => setIsOpen(false)}>
            Routes
          </NavLink>
          <NavLink href="/media" onClick={() => setIsOpen(false)}>
            Media
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
