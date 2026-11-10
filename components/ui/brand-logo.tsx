import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  size?: number;
}

/**
 * Recreates the exact brand emblem seen in the top-left of Image 1
 */
export function BrandLogo({ className, size = 32 }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-full",
        className
      )}
      aria-label="Alex Vance Portfolio Home"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-200 group-hover:scale-105"
      >
        {/* Outer curved brackets emblem matching Image 1 */}
        <path
          d="M10 6C5.58 6 2 9.58 2 14V22C2 26.42 5.58 30 10 30C13 30 15 28 15 28V24C15 24 13.5 25 11 25C8.24 25 6 22.76 6 20V16C6 13.24 8.24 11 11 11C13.5 11 15 12 15 12V8C15 8 13 6 10 6Z"
          fill="currentColor"
        />
        <path
          d="M26 6C30.42 6 34 9.58 34 14V22C34 26.42 30.42 30 26 30C23 30 21 28 21 28V24C21 24 22.5 25 25 25C27.76 25 30 22.76 30 20V16C30 13.24 27.76 11 25 11C22.5 11 21 12 21 12V8C21 8 23 6 26 6Z"
          fill="currentColor"
        />
        {/* Center dot / aperture */}
        <circle cx="18" cy="18" r="3.5" fill="currentColor" />
      </svg>
    </Link>
  );
}

