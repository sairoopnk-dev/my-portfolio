import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "electric" | "secondary" | "outline" | "ghost" | "circle";
  size?: "sm" | "md" | "lg" | "icon";
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variantStyles = {
      // Clean white pill from Image 1 with subtle blue glow
      primary:
        "bg-white text-neutral-950 font-bold rounded-full hover:bg-neutral-100 shadow-[0_10px_30px_-5px_rgba(29,116,232,0.45)] hover:shadow-[0_15px_35px_-5px_rgba(29,116,232,0.65)] hover:translate-y-[-1px]",
      // Electric cobalt blue from Image 2
      electric:
        "bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 text-white font-semibold rounded-full hover:from-blue-500 hover:to-sky-400 shadow-[0_10px_30px_-5px_rgba(29,116,232,0.5)] hover:translate-y-[-1px]",
      // Dark glass secondary
      secondary:
        "bg-white/10 text-white rounded-full hover:bg-white/20 border border-white/15 backdrop-blur-md",
      // Clean border outline
      outline:
        "border border-white/25 text-white rounded-full hover:bg-white/10 hover:border-white/40",
      // Ghost
      ghost:
        "text-neutral-300 rounded-full hover:text-white hover:bg-white/10",
      // Circular social icon button matching Image 1
      circle:
        "rounded-full bg-white/10 border border-white/20 text-white hover:bg-white hover:text-blue-950 hover:translate-y-[-2px] transition-all duration-200",
    };

    const sizeStyles = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-sm px-6 py-3 gap-2",
      lg: "text-sm sm:text-base px-7 py-3.5 gap-2.5",
      icon: "w-10 h-10 p-0",
    };

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      variant === "circle" ? "w-10 h-10 p-0" : sizeStyles[size],
      className
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClassName}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
