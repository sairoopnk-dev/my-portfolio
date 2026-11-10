import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Layers } from "lucide-react";
import { skillCategories } from "@/content/skills";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Badge } from "@/components/ui/badge";
import { PanelNav } from "@/components/layout/panel-nav";

export const metadata = {
  title: "Skills",
  description: "Technical stack and competencies of Alex Vance, Principal Full-Stack Engineer.",
};

export default function SkillsPage() {
  return (
    <div className="relative w-full h-full min-h-[100svh] lg:h-[100svh] grid grid-cols-1 lg:grid-cols-2 overflow-hidden m-0 p-0">
      
      {/* =================================================================== */}
      {/* LEFT HALF — EXACTLY 50% VIEWPORT WIDTH: BLUE CONTENT AREA          */}
      {/* =================================================================== */}
      <div className="relative w-full h-full bg-hero-blue-mesh flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-16 overflow-hidden z-10">
        
        {/* Ambient Glows */}
        <div
          className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-sky-400/25 blur-[130px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/35 blur-[140px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Top Header */}
        <div className="space-y-3 sm:space-y-4 relative z-10">
          <div className="flex items-center gap-3">
            <BrandLogo className="text-white" size={40} />
            <Badge variant="blue">TECHNICAL ARSENAL</Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-black tracking-tight text-white leading-[1.08] pt-1 max-w-lg">
            Modern TypeScript, cloud scale, & AI runtimes.
          </h1>
        </div>

        {/* Philosophy */}
        <div className="my-6 lg:my-auto space-y-4 text-sky-100/90 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg relative z-10">
          <p>
            Specializing in tools that eliminate friction and maximize performance:
            React 19 Server Components, Edge computing, sub-50ms caching,
            and typed backend microservices.
          </p>
          <p className="text-xs text-sky-200/80 font-mono">
            {"// FOCUS: TYPE SAFETY • EDGE DEPLOYMENTS • REAL-TIME PROTOCOLS"}
          </p>
        </div>

        {/* Action Link */}
        <div className="pt-2 flex items-center gap-3 relative z-10">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-neutral-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:bg-neutral-100 transition-all hover:scale-105"
          >
            <span>View Experience</span>
            <ArrowUpRight size={16} className="text-blue-600" />
          </Link>
        </div>
      </div>

      {/* =================================================================== */}
      {/* RIGHT HALF — EXACTLY 50% VIEWPORT WIDTH: WHITE CONTENT PANEL       */}
      {/* =================================================================== */}
      <div className="relative w-full h-full bg-white text-neutral-900 flex flex-col justify-between p-6 sm:p-8 lg:p-12 xl:p-16 overflow-hidden z-10">
        
        {/* Panel Navigation at top */}
        <div className="relative z-20">
          <PanelNav />
        </div>

        {/* Skills Grid */}
        <div className="my-auto py-4 sm:py-6 space-y-3.5 max-w-lg relative z-10">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xs sm:text-sm font-bold text-neutral-900 tracking-tight flex items-center gap-2">
                  <Layers size={15} className="text-blue-600" />
                  <span>{cat.title}</span>
                </h3>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                  CLUSTER 0{idx + 1}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {cat.skills.slice(0, 4).map((skill) => (
                  <div
                    key={skill.name}
                    className="p-2 sm:p-2.5 rounded-xl bg-white border border-neutral-200/80 flex items-center justify-between gap-1 shadow-xs"
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                      <span className="text-xs font-semibold text-neutral-800 truncate">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[9px] font-mono text-neutral-400 shrink-0">
                      {skill.level.slice(0, 3)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 relative z-10">
          <span>Battle-tested production stacks</span>
          <Link href="/results" className="text-blue-600 font-bold hover:underline">
            See Applied Results →
          </Link>
        </div>

      </div>

    </div>
  );
}
