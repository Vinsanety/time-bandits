import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge Tailwind class names safely (handles conflicts)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert string to URL-friendly slug
export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // replace spaces/symbols with "-"
    .replace(/(^-|-$)+/g, ""); // trim leading/trailing "-"
}

// Convert slug back into human-friendly label
export function deslugify(slug: string, labelMap: Record<string, string> = {}) {
  if (labelMap[slug]) return labelMap[slug];
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
