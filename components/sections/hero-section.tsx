"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StatCard, TestimonialCard } from "@/components/ui/stat-card";
import { PanelNav } from "@/components/layout/panel-nav";
import { InstagramIcon, LinkedinIcon, GithubIcon } from "@/components/ui/social-icons";

export function HeroSection() {
  return (
    <div className="relative w-full h-full min-h-[100svh] lg:h-[100svh] grid grid-cols-1 lg:grid-cols-2 overflow-hidden m-0 p-0">
      
      {/* =================================================================== */}
      {/* LEFT HALF — EXACTLY 50% VIEWPORT WIDTH: BLUE CONTENT AREA          */}
      {/* =================================================================== */}
      <div className="relative w-full h-full bg-hero-blue-mesh flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-16 overflow-hidden z-10">
        
        {/* Ambient Lighting Glows & Concentric Rings matching Image 1 */}
        <div
          className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-sky-400/25 blur-[130px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/3 left-1/4 w-[520px] h-[520px] rounded-full bg-blue-600/35 blur-[140px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Geometric Concentric Rings from Image 1 */}
        <svg
          className="absolute -top-16 -left-16 w-[620px] h-[620px] pointer-events-none opacity-20"
          viewBox="0 0 600 600"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="280" cy="280" r="270" stroke="white" strokeWidth="1" strokeDasharray="6 8" />
          <circle cx="280" cy="280" r="210" stroke="white" strokeWidth="1.5" />
          <circle cx="280" cy="280" r="150" stroke="white" strokeWidth="1" strokeDasharray="4 6" />
        </svg>

        {/* TOP LEFT: Outlined Eyebrow Capsule (No unwanted circular logo) */}
        <div className="relative z-10 pt-1">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider text-white/90 bg-white/10 border border-white/25 backdrop-blur-md shadow-on-blue">
            Alex Vance — Systems Architect
          </span>
        </div>

        {/* MIDDLE LEFT: Dominant Headline matching Image 1 scale */}
        <div className="my-6 sm:my-8 lg:my-auto max-w-lg space-y-4 sm:space-y-5 pr-2 lg:pr-6 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4.15rem] font-black tracking-tight text-white leading-[1.04]">
            Building <br />
            digital experiences <br />
            that move people.
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-sky-100/80 font-medium leading-relaxed max-w-md">
            Architecting high-scale distributed backends and obsessively
            crafted web applications with modern TypeScript.
          </p>

          {/* Primary CTA Button: Clean glowing white pill with Section 2 white contrast shadow */}
          <div className="pt-2 relative inline-flex">
            <div
              className="absolute -inset-4 bg-white/15 rounded-full blur-xl pointer-events-none"
              aria-hidden="true"
            />
            <Link
              href="/results"
              className="relative inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-white text-neutral-950 font-bold text-xs sm:text-sm tracking-wide shadow-on-blue hover:shadow-on-blue-hover hover:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Start Your Upgrade</span>
              <ArrowUpRight size={17} className="text-blue-600" />
            </Link>
          </div>
        </div>

        {/* BOTTOM LEFT: Floating Stat Cards matching Image 1 with white shadow on blue */}
        <div className="pt-4 flex items-center gap-3 sm:gap-4 relative z-30 animate-float-slow">
          <StatCard
            label="Focus Level"
            value="100%"
            indicatorActive={true}
          />
          <StatCard
            label="Discipline"
            value="200%"
            indicatorActive={true}
          />
        </div>
      </div>

      {/* =================================================================== */}
      {/* RIGHT HALF — EXACTLY 50% VIEWPORT WIDTH: WHITE CONTENT PANEL       */}
      {/* =================================================================== */}
      <div className="relative w-full h-full bg-white text-neutral-900 flex flex-col justify-between p-6 sm:p-8 lg:p-12 xl:p-16 overflow-hidden z-10">
        
        {/* TOP: Right-Side Panel Navigation (Home → About → Skills → Experience → Results → Contact) */}
        <div className="relative z-20">
          <PanelNav />
        </div>

        {/* MIDDLE: Editorial Greeting & Priorities (Offset to the right to clear profile photo) */}
        <div className="my-auto py-4 sm:py-6 space-y-3 sm:space-y-4 max-w-md lg:max-w-lg pl-2 sm:pl-6 lg:pl-16 xl:pl-24 relative z-10">
          <div className="inline-flex items-center px-3 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-200 shadow-[0_2px_8px_rgba(18,62,140,0.12)]">
            Hello
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-black text-neutral-900 leading-snug">
            Good morning, Alex. <br />
            You have{" "}
            <span className="text-blue-600 font-extrabold underline decoration-blue-300 underline-offset-4">
              3 priorities
            </span>{" "}
            today, including 1 deep work session at 8 AM. Ready to level up?
          </h2>

          <p className="text-xs sm:text-sm font-semibold text-neutral-500 tracking-wide">
            Clarity, Discipline, Measurable growth.
          </p>
        </div>

        {/* BOTTOM RIGHT: Floating Testimonial Quote Card matching Image 1 with blue shadow on white */}
        <div className="pt-2 flex justify-end relative z-30 animate-float-delayed">
          <TestimonialCard
            author="Jordi Hernandez"
            role="Performance"
            quote="Personal coaching took my results to the next level"
          />
        </div>
      </div>

      {/* =================================================================== */}
      {/* CENTERPIECE: PROFILE PHOTO GROUNDED AT BOTTOM & HORIZONTALLY CENTERED*/}
      {/* Matches Image 2: torso grounded at bottom, head cleanly integrated */}
      {/* =================================================================== */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center justify-end">
        <div className="relative h-[72vh] sm:h-[78vh] md:h-[82vh] lg:h-[86vh] xl:h-[90vh] max-h-[92vh] aspect-[1447/1087] flex items-end justify-center">
          <Image
            src="/profile.png"
            alt="Alex Vance"
            width={1447}
            height={1087}
            priority
            className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_50px_rgba(4,9,20,0.65)]"
            sizes="(max-width: 768px) 340px, (max-width: 1280px) 540px, 680px"
          />

          {/* Circular Social Outline Buttons matching Image 2 sitting on shirt near bottom */}
          <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 pointer-events-auto z-30">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle-btn shadow-on-blue"
              aria-label="Instagram"
            >
              <InstagramIcon size={14} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle-btn shadow-on-blue"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={14} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-circle-btn shadow-on-blue"
              aria-label="GitHub"
            >
              <GithubIcon size={14} />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
