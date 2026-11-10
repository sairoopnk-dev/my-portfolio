import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "blue" | "outline" | "success" | "glass";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "default",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-white/10 text-white/90 border border-white/15 backdrop-blur-md",
    blue: "bg-sky-500/15 text-sky-300 border border-sky-400/30",
    outline: "bg-transparent text-white/80 border border-white/20",
    success: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
    glass: "bg-black/5 text-neutral-800 border border-black/10 backdrop-blur-md",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              variant === "blue"
                ? "bg-sky-400"
                : variant === "success"
                ? "bg-emerald-400"
                : "bg-white"
            )}
          />
          <span
            className={cn(
              "relative inline-flex rounded-full h-2 w-2",
              variant === "blue"
                ? "bg-sky-500"
                : variant === "success"
                ? "bg-emerald-500"
                : "bg-white"
            )}
          />
        </span>
      )}
      {children}
    </span>
  );
}
