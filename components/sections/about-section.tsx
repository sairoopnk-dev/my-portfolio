"use client";

import React from "react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { Sparkles, Terminal, Cpu, Zap } from "lucide-react";

export function AboutSection() {
  const pillars = [
    {
      icon: <Terminal className="text-sky-400" size={24} />,
      title: "Systems & Architecture",
      description:
        "Designing scalable distributed systems and clean API boundaries that maintain sub-50ms latency under peak loads.",
    },
    {
      icon: <Cpu className="text-blue-400" size={24} />,
      title: "AI Integration & Agents",
      description:
        "Building resilient RAG pipelines, speculative inference workflows, and deterministic agent orchestration on modern clouds.",
    },
    {
      icon: <Zap className="text-sky-300" size={24} />,
      title: "Frontend Craftsmanship",
      description:
        "Crafting fluid, accessible web interfaces where obsessive visual art direction meets zero-runtime layout shift.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <Container size="lg">
        <SectionHeader
          eyebrow="ABOUT ME"
          title="Bridging distributed systems rigor with an obsessively refined visual eye."
          subtitle="Over 6+ years shipping high-impact web products, scaling infrastructure to millions of requests, and turning complex product visions into elegant digital reality."
        />

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {pillars.map((pillar, idx) => (
            <Card
              key={idx}
              variant="dark"
              hoverEffect
              className="bg-[#071329]/90 border-white/10 p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600/20 group-hover:border-sky-400/30 transition-all duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center text-xs font-semibold text-sky-400 gap-1.5">
                <Sparkles size={14} />
                <span>Production Proven</span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

