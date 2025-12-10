"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ChevronRight } from "lucide-react";
import styles from "./Breadcrumbs.module.css";
import { deslugify } from "@/lib/utils";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="my-8">
      <ol className={styles.breadcrumbs}>
        <li className={styles.breadcrumbItem}>
          <Link href="/" className={styles.breadcrumbLink}>
            <Home className={styles.breadcrumbIcon} />
            <span>Home</span>
          </Link>
          {segments.length > 0 && (
            <ChevronRight className={styles.breadcrumbSeparator} />
          )}
        </li>

        {segments.map((segment, idx) => {
          const href = "/" + segments.slice(0, idx + 1).join("/");
          const isLast = idx === segments.length - 1;

          return (
            <li key={href} className={styles.breadcrumbItem}>
              {!isLast ? (
                <Link href={href} className={styles.breadcrumbLink}>
                  {deslugify(segment)}
                </Link>
              ) : (
                <span className={styles.breadcrumbActive}>
                  {deslugify(segment)}
                </span>
              )}
              {!isLast && (
                <ChevronRight className={styles.breadcrumbSeparator} />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
