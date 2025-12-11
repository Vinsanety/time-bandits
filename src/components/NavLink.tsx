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
    "block w-fit px-3 py-2 text-md font-medium transition-all duration-200 hover:border-blue-600 hover:text-blue-600 focus-visible:bg-blue-100 focus-visible:outline-none focus-visible:border-blue-600";

  const styles = cn(
    base,
    isActive || variant === "active"
      ? "border-b-2 border-blue-600"
      : "border-b-2 border-transparent text-gray-700",
    className
  );

  return (
    <Link href={href} className={styles} {...props}>
      {children}
    </Link>
  );
}
