import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "dark" | "light" | "glass";
  hoverEffect?: boolean;
}

export function Card({
  className,
  variant = "dark",
  hoverEffect = false,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    dark: "bg-[#12131a]/80 text-white border border-white/10 backdrop-blur-xl shadow-xl",
    light: "bg-white text-neutral-900 border border-neutral-100 shadow-2xl",
    glass: "bg-white/10 text-white border border-white/15 backdrop-blur-md",
  };

  return (
    <div
      className={cn(
        "rounded-3xl p-6 transition-all duration-300",
        variantStyles[variant],
        hoverEffect && "hover:translate-y-[-4px] hover:shadow-2xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col space-y-1.5 mb-4", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-xl font-bold tracking-tight text-inherit",
        className
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm opacity-70 leading-relaxed", className)}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("pt-0", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center pt-4 border-t border-current/10", className)}
      {...props}
    />
  );
}

