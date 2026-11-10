"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/content/experience";
import { ArrowUpRight } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <Container size="lg">
        <SectionHeader
          eyebrow="CAREER TIMELINE"
          title="Track record of high-velocity technical leadership."
          subtitle="A chronicle of engineering leadership, scalable distributed system deliveries, and impact."
        />

        <div className="relative mt-12 sm:mt-16 pl-4 sm:pl-8 border-l border-sky-500/25 space-y-12 sm:space-y-16">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Pin */}
              <div className="absolute -left-[25px] sm:-left-[41px] top-1.5 w-5 h-5 rounded-full bg-[#071329] border-2 border-sky-400 flex items-center justify-center shadow-[0_0_12px_rgba(56,189,248,0.6)]">
                <div className="w-2 h-2 rounded-full bg-sky-300" />
              </div>

              {/* Experience Card */}
              <div className="rounded-3xl card-floating-dark p-6 sm:p-8 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <Badge variant="blue" dot>
                          Current Role
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 transition-colors"
                        >
                          <span>{exp.company}</span>
                          <ArrowUpRight size={13} />
                        </a>
                      ) : (
                        <span className="text-sm font-semibold text-sky-400">
                          {exp.company}
                        </span>
                      )}
                      <span className="text-neutral-500 text-xs">•</span>
                      <span className="text-xs text-neutral-400">{exp.location}</span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 shrink-0 self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                {/* Achievements Bullet List */}
                <ul className="space-y-2.5 text-sm text-neutral-300 leading-relaxed">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-sky-400 font-bold text-base leading-none select-none">
                        ›
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies used */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-neutral-400 bg-white/5 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
