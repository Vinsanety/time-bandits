"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink } from "@/components/NavLink";
import { TimerReset, Medal } from "lucide-react";

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
        <div className="text-2xl font-extrabold tracking-tight">
          <Link
            href="/"
            className="flex gap-2 items-center justify-center group relative py-2 text-blue-600 transition-all duration-400 focus-visible:outline-none focus-visible:bg-blue-100"
          >
            <Medal className="h-6 w-6 text-blue-600" />
            All Time Performance
            <span className=" absolute left-0 bottom-0 h-0.5 w-full bg-blue-600 transform origin-left transition-transform duration-400 ease-out scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"></span>
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
