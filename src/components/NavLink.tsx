"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "active";
}

export function NavLink({
  href,
  children,
  className,
  variant,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const base =
    "group relative block w-fit px-3 py-2 text-md transition-all duration-200 hover:text-blue-600 focus-visible:outline-none focus-visible:bg-blue-100 focus-visible:border-blue-600";

  const styles = cn(base, className);

  return (
    <Link href={href} className={styles} {...props}>
      {children}
      {/* underline element */}
      <span
        className={cn(
          "absolute left-0 bottom-0 h-0.5 w-full bg-blue-600 transform origin-left transition-transform duration-300 ease-out",
          isActive || variant === "active"
            ? "scale-x-100"
            : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100"
        )}
      />
    </Link>
  );
}
