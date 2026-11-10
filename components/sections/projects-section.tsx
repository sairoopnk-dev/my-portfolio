"use client";

import React, { useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/ui/social-icons";
import { projects } from "@/content/projects";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "AI / Systems", "Full-Stack", "Frontend"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <Container size="lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <SectionHeader
            eyebrow="SELECTED RESULTS"
            title="Production systems engineered for scale, reliability, and speed."
            subtitle="Explore key architectures delivered across enterprise platforms and distributed AI runtimes."
            className="mb-0"
          />

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-white text-neutral-950 shadow-[0_4px_16px_rgba(29,116,232,0.4)]"
                    : "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* High-Impact Project Showcase Cards */}
        <div className="space-y-8 sm:space-y-12">
          {filteredProjects.map((project: Project, idx: number) => (
            <div
              key={project.id}
              className="relative rounded-[2rem] sm:rounded-[2.75rem] outer-frame-gradient p-[1.5px] group shadow-[0_20px_60px_-15px_rgba(4,9,20,0.8)]"
            >
              <div className="rounded-[calc(2rem-1.5px)] sm:rounded-[calc(2.75rem-1.5px)] bg-[#071329] p-6 sm:p-10 lg:p-12 overflow-hidden flex flex-col lg:flex-row items-stretch justify-between gap-8 sm:gap-12">
                
                {/* Left Description & Metadata */}
                <div className="flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge variant="blue">{project.category}</Badge>
                      {project.metrics && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                          <Sparkles size={12} />
                          {project.metrics}
                        </span>
                      )}
                      <span className="text-xs font-mono text-neutral-500">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm font-semibold text-sky-400">
                      {project.tagline}
                    </p>

                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-[11px] font-mono font-medium text-neutral-300 bg-white/5 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-neutral-100 hover:scale-105 transition-all shadow-md"
                      >
                        <span>Live Product</span>
                        <ArrowUpRight size={14} className="text-blue-600" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 text-white font-semibold text-xs border border-white/15 hover:bg-white/20 transition-all"
                      >
                        <GithubIcon size={14} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Visual Architecture Box (Editorial style) */}
                <div className="w-full lg:w-[42%] min-h-[220px] sm:min-h-[280px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0c234b] via-[#10346c] to-[#071329] border border-sky-400/20 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
                  <div
                    className="absolute -right-10 -bottom-10 w-60 h-60 bg-sky-400/15 rounded-full blur-3xl pointer-events-none"
                    aria-hidden="true"
                  />
                  
                  <div className="flex items-center justify-between text-xs font-mono text-sky-300 z-10">
                    <span>ARCHITECTURE_SPEC // 0{idx + 1}</span>
                    <span className="px-2 py-0.5 rounded bg-sky-400/20 text-sky-200">ACTIVE</span>
                  </div>

                  <div className="my-auto py-6 z-10">
                    <div className="text-3xl sm:text-4xl font-black text-white/90 tracking-tight mb-2">
                      {project.metrics?.split("•")[0] || "Production Scaled"}
                    </div>
                    <div className="text-xs text-sky-200/70 font-mono uppercase tracking-widest">
                      Verified Benchmark Metric
                    </div>
                  </div>

                  <div className="z-10 flex items-center justify-between pt-4 border-t border-white/10 text-xs text-neutral-400">
                    <span>Target Latency: &lt;50ms</span>
                    <span>Uptime: 99.99%</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
