"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site-config";
import { cn } from "@/lib/utils";

interface PanelNavProps {
  className?: string;
}

/**
 * Reusable Right-Side Panel Navigation
 * Appears inside the white card on EVERY page in exact order:
 * Home → About → Skills → Experience → Results → Contact
 */
export function PanelNav({ className }: PanelNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "w-full flex items-center justify-between sm:justify-end gap-2 sm:gap-4 md:gap-6 pb-4 sm:pb-6 border-b border-neutral-100 flex-wrap shrink-0",
        className
      )}
      aria-label="Panel Navigation"
    >
      <div className="flex items-center gap-1.5 sm:gap-3 md:gap-5 flex-wrap">
        {siteConfig.navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-xs sm:text-[13px] tracking-wide transition-all duration-150 px-2.5 py-1 rounded-full",
                isActive
                  ? "bg-blue-600 text-white font-bold shadow-[0_4px_14px_rgba(18,62,140,0.3)]"
                  : "text-neutral-600 font-semibold hover:text-blue-600 hover:bg-neutral-100/70"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

