import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { experiences } from "@/content/experience";
import { Badge } from "@/components/ui/badge";
import { PanelNav } from "@/components/layout/panel-nav";

export const metadata = {
  title: "Experience",
  description: "Career chronicle of Alex Vance, Principal Full-Stack Engineer & Systems Architect.",
};

export default function ExperiencePage() {
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
          <div>
            <Badge variant="blue">CAREER CHRONICLE</Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-black tracking-tight text-white leading-[1.08] pt-1 max-w-lg">
            Proven record of technical leadership.
          </h1>
        </div>

        {/* Impact Summary */}
        <div className="my-6 lg:my-auto space-y-4 text-sky-100/90 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg relative z-10">
          <p>
            Engineering leadership spanning distributed streaming infrastructure,
            multi-tenant architectures, and high-velocity team orchestration.
          </p>
          <div className="p-4 rounded-2xl bg-white/10 border border-white/15 shadow-[0_8px_24px_rgba(255,255,255,0.08)] space-y-2">
            <div className="text-[10px] font-mono text-sky-300 uppercase tracking-widest font-bold">
              IMPACT SUMMARY
            </div>
            <div className="text-xs sm:text-sm text-white/90 leading-relaxed">
              • 10M+ Daily distributed events handled with zero downtime<br />
              • 48% Latency reduction through edge caching & Rust proxies<br />
              • 8 Engineers mentored across App Router & systems design
            </div>
          </div>
        </div>

        {/* Action Link with white contrast shadow on blue */}
        <div className="pt-2 flex items-center gap-3 relative z-10">
          <Link
            href="/results"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-neutral-950 font-bold text-xs sm:text-sm tracking-wide shadow-on-blue hover:shadow-on-blue-hover transition-all hover:scale-105"
          >
            <span>See Shipped Results</span>
            <ArrowUpRight size={16} className="text-blue-600" />
          </Link>
        </div>
      </div>

      {/* =================================================================== */}
      {/* RIGHT HALF — EXACTLY 50% VIEWPORT WIDTH: WHITE CONTENT PANEL       */}
      {/* =================================================================== */}
      <div className="relative w-full h-full bg-white text-neutral-900 flex flex-col justify-between p-6 sm:p-8 lg:p-12 xl:p-16 overflow-hidden z-10">
        
        {/* Panel Navigation at top */}
        <div className="relative z-20 -translate-y-2.5 sm:-translate-y-3.5 lg:-translate-y-5">
          <PanelNav />
        </div>

        {/* Career Timeline Items */}
        <div className="my-auto py-4 sm:py-6 space-y-3.5 max-w-md lg:max-w-lg pl-4 sm:pl-6 lg:pl-24 xl:pl-32 translate-x-0 sm:translate-x-2 lg:translate-x-4 xl:translate-x-8 relative z-10">
          {experiences.slice(0, 2).map((exp) => (
            <div
              key={exp.id}
              className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200/90 shadow-on-white hover:shadow-on-white-hover space-y-2.5 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-semibold text-blue-600">
                    {exp.company} • {exp.location}
                  </div>
                </div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-white border border-neutral-200 text-neutral-600 self-start sm:self-auto">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-1 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {exp.achievements.slice(0, 2).map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-blue-600 font-bold select-none">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {exp.technologies.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-neutral-200 text-neutral-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 relative z-10">
          <span>Full references available upon request</span>
          <Link href="/contact" className="text-blue-600 font-bold hover:underline">
            Initiate Advisory Dialogue →
          </Link>
        </div>

      </div>

    </div>
  );
}
