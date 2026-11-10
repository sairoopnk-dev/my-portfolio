import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-3 mb-10 sm:mb-14",
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <Badge variant="blue" className="mb-2">
          {eyebrow}
        </Badge>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
