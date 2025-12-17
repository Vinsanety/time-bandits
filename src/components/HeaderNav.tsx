"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink } from "@/components/NavLink";
import { Medal, ChevronDown, FolderOpen } from "lucide-react";
import { routesByCategory } from "@/data/routesByCategory";
import { slugify } from "@/lib/utils";
import { iconMap } from "@/lib/iconMap";

export default function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
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
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-600 transform origin-left transition-transform duration-400 ease-out scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"></span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <NavLink href="/">Home</NavLink>

          {/* Desktop Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            onFocus={() => setIsDropdownOpen(true)}
            onBlur={(e) => {
              const related = e.relatedTarget as HTMLElement | null;
              if (
                !related ||
                (dropdownRef.current && !dropdownRef.current.contains(related))
              ) {
                setIsDropdownOpen(false);
              }
            }}
          >
            <button
              className="group flex items-center gap-1 px-3 py-2 text-md font-medium hover:text-blue-600 focus-visible:outline-none focus-visible:bg-blue-100 focus-visible:border-blue-600"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              onClick={() => setIsDropdownOpen((v) => !v)}
            >
              Routes
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                } group-hover:rotate-180 group-focus-visible:rotate-180`}
              />
            </button>

            {/* Desktop Dropdown Items */}
            <div
              className={`absolute left-0 w-56 rounded-md bg-white shadow-lg border border-gray-200 
                transition-opacity duration-200
                ${
                  isDropdownOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
            >
              <ul className="py-2">
                <li>
                  <NavLink
                    href="/routes"
                    className="flex items-center gap-2 font-semibold"
                  >
                    <FolderOpen /> All Categories
                  </NavLink>
                </li>

                {routesByCategory.map((category) => (
                  <li key={category.id}>
                    <NavLink
                      href={`/routes/${slugify(category.title)}`}
                      className="flex items-center gap-2"
                    >
                      {iconMap[category.icon]}
                      {category.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <NavLink href="/media">Media</NavLink>
        </nav>

        {/* Mobile Hamburger Icon */}
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

          {/* Mobile Dropdown */}
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer px-3 py-2 text-md font-medium hover:text-blue-600">
              <span className="flex items-center gap-2">
                Routes
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-open:rotate-180" />
              </span>
            </summary>

            {/* Mobile Dropdown content */}
            <div className="ml-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ease-in-out group-open:max-h-96 group-open:opacity-100 max-h-0 opacity-0">
              <NavLink
                href="/routes"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 font-semibold"
              >
                <FolderOpen />
                All Categories
              </NavLink>

              {routesByCategory.map((category) => (
                <NavLink
                  key={category.id}
                  href={`/routes/${slugify(category.title)}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2"
                >
                  {iconMap[category.icon]}
                  {category.title}
                </NavLink>
              ))}
            </div>
          </details>

          <NavLink href="/media" onClick={() => setIsOpen(false)}>
            Media
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
