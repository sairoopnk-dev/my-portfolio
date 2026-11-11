"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  quote: string;
}

const defaultTestimonials: TestimonialItem[] = [
  {
    id: "card-1",
    author: "Jordi Hernandez",
    role: "Performance",
    quote: "Personal coaching took my results to the next level",
  },
  {
    id: "card-2",
    author: "Jordi Hernandez",
    role: "Product Engineering",
    quote: "Obsessive attention to detail and exceptionally fast execution",
  },
  {
    id: "card-3",
    author: "Jordi Hernandez",
    role: "Systems Architecture",
    quote: "Clean architecture and modern stack built for scale",
  },
];

interface TestimonialCarouselProps {
  items?: TestimonialItem[];
  intervalMs?: number;
  className?: string;
}

/**
 * Polished rotating card carousel for the right white section.
 * - Displays 1 card at a time for 2000ms (reduced by 2s).
 * - Soft blue floating shadow matching the left blue section (#1d74e8 / #123e8c).
 * - Smooth hover scale and enhanced blue shadow with zero layout shift.
 * - Card smoothly slides/fades out to the left; next card enters from the right.
 * - Pauses on hover, resumes on leave.
 */
export function TestimonialCarousel({
  items = defaultTestimonials,
  intervalMs = 2000,
  className,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovered) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovered, intervalMs, items.length]);

  // Determine positional class for infinite circular transitions
  const getCardClasses = (idx: number) => {
    const total = items.length;
    const diff = (idx - currentIndex + total) % total;

    if (diff === 0) {
      // Active card: visible and centered, interactive with hover effects
      return "translate-x-0 opacity-100 z-10 transition-all duration-500 ease-out pointer-events-auto cursor-pointer";
    }
    if (diff === total - 1) {
      // Just-exited card: slides out to the left
      return "-translate-x-full opacity-0 z-0 transition-all duration-500 ease-out pointer-events-none";
    }
    // Waiting card: staged off-screen to the right without transition
    return "translate-x-full opacity-0 z-0 transition-none pointer-events-none";
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative box-content w-[285px] sm:w-[325px] h-[148px] sm:h-[158px] p-2.5 sm:p-3 -m-2.5 sm:-m-3 overflow-hidden select-none",
        className
      )}
      aria-label="Testimonial Carousel"
    >
      <div className="relative w-full h-full">
        {items.map((item, idx) => (
          <div
            key={item.id}
            className={cn(
              "absolute inset-0 w-full h-full bg-white text-neutral-900 rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-blue-100/70 flex flex-col justify-between",
              "shadow-[0_12px_32px_-4px_rgba(29,116,232,0.18),0_4px_12px_-2px_rgba(18,62,140,0.10)]",
              "hover:scale-[1.025] hover:shadow-[0_20px_42px_-4px_rgba(29,116,232,0.28),0_8px_18px_-2px_rgba(18,62,140,0.16)] hover:border-blue-200/90",
              "transition-all duration-300 ease-out",
              getCardClasses(idx)
            )}
          >
            {/* Header: Avatar, Info, and Indicator Dots */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-xs">
                  {item.author.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-xs sm:text-sm leading-snug truncate">
                    {item.author}
                  </div>
                  <div className="text-[11px] text-neutral-500 truncate">
                    {item.role}
                  </div>
                </div>
              </div>

              {/* Subtle Carousel Progress Dots */}
              <div className="flex items-center gap-1 shrink-0">
                {items.map((_, dotIdx) => (
                  <span
                    key={dotIdx}
                    className={cn(
                      "h-1 rounded-full transition-all duration-300",
                      dotIdx === currentIndex
                        ? "w-3.5 bg-blue-600"
                        : "w-1.5 bg-neutral-200"
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Quote */}
            <p className="text-xs sm:text-sm font-medium leading-relaxed text-neutral-800 line-clamp-2 mt-1">
              &ldquo;{item.quote}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
