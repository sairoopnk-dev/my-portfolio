import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string;
  indicatorActive?: boolean;
}

export interface FocusCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
}

/**
 * Focus Card for left blue section (Section 2):
 * - Card 1: FULL-STACK / Frontend + Backend
 * - Card 2: AI-FOCUSED / Modern AI Applications
 */
export function FocusCard({
  title,
  subtitle,
  className,
  ...props
}: FocusCardProps) {
  return (
    <div
      className={cn(
        "bg-white text-neutral-950 rounded-2xl p-3.5 sm:p-4 shadow-on-blue min-w-[125px] sm:min-w-[145px] border border-white/80 transition-all duration-200 hover:scale-105 shadow-on-blue-hover",
        className
      )}
      {...props}
    >
      <div className="text-xs sm:text-[13px] font-black tracking-wider text-neutral-900 leading-tight uppercase">
        {title}
      </div>
      <div className="text-[10px] sm:text-[11px] font-semibold text-neutral-500 mt-1 leading-snug">
        {subtitle}
      </div>
    </div>
  );
}

/**
 * Floating Stat Card recreating the bottom-left widgets in Image 1
 */
export function StatCard({
  label,
  value,
  indicatorActive = true,
  className,
  ...props
}: StatCardProps) {
  return (
    <div
      className={cn(
        "bg-white text-neutral-950 rounded-2xl p-3.5 sm:p-4 shadow-on-blue min-w-[105px] sm:min-w-[125px] border border-white/80 transition-all duration-200 hover:scale-105 shadow-on-blue-hover",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between gap-2 mb-1.5 sm:mb-2">
        <span className="text-[10px] sm:text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
          {label}
        </span>
        <span
          className={cn(
            "w-5 h-3 rounded-full flex items-center px-0.5 transition-colors",
            indicatorActive ? "bg-sky-500 justify-end" : "bg-neutral-200 justify-start"
          )}
          aria-hidden="true"
        >
          <span className="w-2 h-2 rounded-full bg-white shadow-sm" />
        </span>
      </div>
      <div className="text-xl sm:text-2xl font-black tracking-tight text-neutral-900 leading-none">
        {value}
      </div>
    </div>
  );
}

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string;
  author: string;
  role: string;
  avatarSrc?: string;
}

/**
 * Floating Testimonial Card recreating the right-side widget in Image 1
 */
export function TestimonialCard({
  quote,
  author,
  role,
  avatarSrc,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-white text-neutral-900 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-on-white border border-neutral-100 max-w-[280px] sm:max-w-xs transition-all duration-200 hover:scale-[1.02] shadow-on-white-hover",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3 mb-3 sm:mb-4">
        {avatarSrc ? (
          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-sky-500/20 shrink-0">
            <Image
              src={avatarSrc}
              alt={author}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
            {author.charAt(0)}
          </div>
        )}
        <div className="min-w-0">
          <div className="font-bold text-sm leading-snug truncate">{author}</div>
          <div className="text-xs text-neutral-500 truncate">{role}</div>
        </div>
      </div>
      <p className="text-xs sm:text-sm font-medium leading-relaxed text-neutral-800">
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
}
