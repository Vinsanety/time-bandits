import Link from "next/link";
import { cn } from "@/lib/utils";

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: LinkButtonProps) {
  const base =
    "inline-flex items-center justify-center w-fit font-semibold rounded-md transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[.97]";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300",
    outline:
      "border border-gray-300 text-gray-900 hover:bg-gray-50 active:bg-gray-100",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
