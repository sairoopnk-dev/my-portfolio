"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/content/skills";
import { CheckCircle2 } from "lucide-react";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <Container size="lg">
        <SectionHeader
          eyebrow="TECHNICAL ARSENAL"
          title="Battle-tested technologies & production-grade frameworks."
          subtitle="Specializing in the modern TypeScript ecosystem, Next.js server components, distributed cloud primitives, and real-time inference."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {skillCategories.map((cat, idx) => (
            <Card
              key={idx}
              variant="dark"
              hoverEffect
              className="bg-[#071329]/90 border-white/10 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                    CLUSTER // 0{idx + 1}
                  </span>
                  <Badge variant="blue">{cat.skills.length} Techs</Badge>
                </div>

                <h3 className="text-xl font-black text-white tracking-tight mb-2">
                  {cat.title}
                </h3>
                <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-sky-400/20 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 size={15} className="text-sky-400 shrink-0" />
                        <span className="text-sm font-semibold text-neutral-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-400/20">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 text-[11px] font-mono text-neutral-500 text-right">
                PRODUCTION READY
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

