"use client";
import { cn } from "@rallly/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function ResponsiveMenuItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <li>
      <Link
        className={cn(
          "flex h-9 min-w-0 grow items-center gap-x-2.5 rounded-md px-2.5 text-sm font-medium",
          pathname === href
            ? "text-foreground bg-gray-200"
            : "hover:text-foreground focus:text-foreground border-transparent text-gray-500 focus:bg-gray-200",
        )}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}

export function ResponsiveMenu({ children }: { children: React.ReactNode }) {
  return (
    <ul className="scrollbar-none -mx-3 flex gap-2.5 overflow-x-auto px-3">
      {children}
    </ul>
  );
}
