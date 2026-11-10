import React from "react";
import Link from "next/link";
import { ArrowUpRight, Terminal, Cpu, Zap, Sparkles } from "lucide-react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Badge } from "@/components/ui/badge";
import { PanelNav } from "@/components/layout/panel-nav";

export const metadata = {
  title: "About",
  description: "Learn more about Alex Vance, Principal Full-Stack Engineer & Systems Architect.",
};

export default function AboutPage() {
  const pillars = [
    {
      icon: <Terminal className="text-blue-600" size={18} />,
      title: "Systems & Architecture",
      description: "Distributed backends & low-latency streaming infrastructure.",
    },
    {
      icon: <Cpu className="text-blue-600" size={18} />,
      title: "AI Integration & Agents",
      description: "Deterministic agent runtimes & speculative RAG pipelines.",
    },
    {
      icon: <Zap className="text-blue-600" size={18} />,
      title: "Frontend Craftsmanship",
      description: "Obsessively refined, zero-jank UI with React 19 & Next.js.",
    },
  ];

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
            <Badge variant="blue">ENGINEERING PHILOSOPHY</Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-black tracking-tight text-white leading-[1.08] pt-1 max-w-lg">
            Bridging distributed systems rigor with refined design.
          </h1>
        </div>

        {/* Story Summary */}
        <div className="my-6 lg:my-auto space-y-4 text-sky-100/90 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg relative z-10">
          <p>
            Principal Full-Stack Engineer and Systems Architect with 6+ years shipping
            mission-critical web products, scaling infrastructure to millions of requests,
            and translating complex technical visions into fluid digital reality.
          </p>
          <p>
            Focused on architectural simplicity, zero-runtime layout shift, and resilient
            TypeScript systems that scale effortlessly.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="pt-2 flex items-center gap-3 flex-wrap relative z-10">
          <Link
            href="/results"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-neutral-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:bg-neutral-100 transition-all hover:scale-105"
          >
            <span>Explore Results</span>
            <ArrowUpRight size={16} className="text-blue-600" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 text-white font-semibold text-xs sm:text-sm border border-white/20 hover:bg-white/20 transition-all"
          >
            <span>Get in Touch</span>
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

        {/* 3 Pillars of Specialization */}
        <div className="my-auto py-4 sm:py-6 space-y-3.5 max-w-lg relative z-10">
          <div className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">
            Core Specializations
          </div>
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 hover:border-blue-300 hover:bg-blue-50/40 transition-all duration-200"
            >
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="p-1.5 rounded-lg bg-blue-100/70 text-blue-600">
                  {pillar.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-neutral-900 tracking-tight">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pl-9">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats Footer */}
        <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-500 relative z-10">
          <span className="flex items-center gap-1.5 text-blue-600">
            <Sparkles size={14} />
            <span>35+ Production Shipments</span>
          </span>
          <span>San Francisco & Remote</span>
        </div>

      </div>

    </div>
  );
}
