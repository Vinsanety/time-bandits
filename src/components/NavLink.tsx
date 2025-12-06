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
    "block w-fit px-3 py-2 rounded-md text-sm font-medium transition-colors";

  const styles = cn(
    base,
    isActive || variant === "active"
      ? "bg-blue-600 text-white"
      : "text-gray-700 hover:bg-gray-100 hover:text-blue-600",
    className
  );

  return (
    <Link href={href} className={styles} {...props}>
      {children}
    </Link>
  );
}
