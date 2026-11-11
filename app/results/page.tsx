"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/social-icons";
import { projects } from "@/content/projects";
import { Badge } from "@/components/ui/badge";
import { PanelNav } from "@/components/layout/panel-nav";

export default function ResultsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "AI / Systems", "Full-Stack"];

  const filteredProjects =
    activeCategory === "All"
      ? projects.slice(0, 2)
      : projects.filter((p) => p.category === activeCategory).slice(0, 2);

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
            <Badge variant="blue">VERIFIED DELIVERABLES</Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-black tracking-tight text-white leading-[1.08] pt-1 max-w-lg">
            Engineered for scale, speed, & reliability.
          </h1>
        </div>

        {/* Filter Overview */}
        <div className="my-6 lg:my-auto space-y-4 max-w-lg relative z-10">
          <p className="text-sky-100/90 text-xs sm:text-sm md:text-base leading-relaxed">
            Architectures delivered across distributed AI engines, real-time sync platforms,
            and sub-50ms observability systems.
          </p>

          {/* Filter Pills with Section 2 white contrast shadow on active */}
          <div className="flex flex-wrap gap-2 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all ${
                  activeCategory === cat
                    ? "bg-white text-neutral-950 shadow-on-blue scale-105"
                    : "bg-white/10 text-neutral-300 hover:text-white border border-white/15"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Action Link with white contrast shadow on blue */}
        <div className="pt-2 flex items-center gap-3 relative z-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-neutral-950 font-bold text-xs sm:text-sm tracking-wide shadow-on-blue hover:shadow-on-blue-hover transition-all hover:scale-105"
          >
            <span>Request Technical Brief</span>
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

        {/* Project Cards with blue contrast shadow on white */}
        <div className="my-auto py-4 sm:py-6 space-y-3.5 max-w-md lg:max-w-lg pl-4 sm:pl-6 lg:pl-24 xl:pl-32 translate-x-0 sm:translate-x-2 lg:translate-x-4 xl:translate-x-8 relative z-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200/90 shadow-on-white hover:shadow-on-white-hover hover:border-blue-300 transition-all duration-200 space-y-2.5"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                      {project.category}
                    </span>
                    {project.metrics && (
                      <span className="text-[10px] font-semibold text-emerald-600 flex items-center gap-1">
                        <Sparkles size={11} />
                        {project.metrics}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">
                    {project.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-neutral-400">
                  {project.year}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center justify-between pt-1">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-neutral-200 text-neutral-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline"
                    >
                      <span>Live</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-600 hover:text-neutral-900"
                    >
                      <GithubIcon size={13} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 relative z-10">
          <span>Latency Target: &lt;50ms p95</span>
          <Link href="/contact" className="text-blue-600 font-bold hover:underline">
            Inquire About Engineering →
          </Link>
        </div>

      </div>

    </div>
  );
}
