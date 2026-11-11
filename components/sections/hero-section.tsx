"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FocusCard } from "@/components/ui/stat-card";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
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
            Sairoop NK — Full Stack Developer
          </span>
        </div>

        {/* MIDDLE LEFT: Dominant Headline matching Image 1 scale */}
        <div className="my-6 sm:my-8 lg:my-auto max-w-lg space-y-4 sm:space-y-5 pr-2 lg:pr-6 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4.15rem] font-black tracking-tight text-white leading-[1.04]">
            Turning ideas into <br />
            fast, modern web <br />
            experiences.
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-sky-100/80 font-medium leading-relaxed max-w-md">
            Full-stack developer focused on building modern, responsive web applications with clean interfaces, practical engineering, and emerging AI technologies.
          </p>

          {/* Primary CTA Button: View My Projects */}
          <div className="pt-2 relative inline-flex">
            <div
              className="absolute -inset-4 bg-white/15 rounded-full blur-xl pointer-events-none"
              aria-hidden="true"
            />
            <Link
              href="/results"
              className="relative inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-white text-neutral-950 font-bold text-xs sm:text-sm tracking-wide shadow-on-blue hover:shadow-on-blue-hover hover:bg-neutral-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>View My Projects</span>
              <ArrowUpRight size={17} className="text-blue-600" />
            </Link>
          </div>
        </div>

        {/* BOTTOM LEFT: Floating Focus Cards with white shadow on blue */}
        <div className="pt-4 flex items-center gap-3 sm:gap-4 relative z-30 animate-float-slow">
          <FocusCard
            title="FULL-STACK"
            subtitle="Frontend + Backend"
          />
          <FocusCard
            title="AI-FOCUSED"
            subtitle="Modern AI Applications"
          />
        </div>
      </div>

      {/* =================================================================== */}
      {/* RIGHT HALF — EXACTLY 50% VIEWPORT WIDTH: WHITE CONTENT PANEL       */}
      {/* =================================================================== */}
      <div className="relative w-full h-full bg-white text-neutral-900 flex flex-col justify-between p-6 sm:p-8 lg:p-12 xl:p-16 overflow-hidden z-10">
        
        {/* TOP: Right-Side Panel Navigation (Home → About → Skills → Experience → Results → Contact) */}
        <div className="relative z-20 -translate-y-2.5 sm:-translate-y-3.5 lg:-translate-y-5">
          <PanelNav />
        </div>

        {/* MIDDLE: Editorial What I Do & Stack (Shifted slightly further right within the white half) */}
        <div className="my-auto py-4 sm:py-6 space-y-4 sm:space-y-5 max-w-md lg:max-w-lg pl-4 sm:pl-6 lg:pl-24 xl:pl-32 translate-x-0 sm:translate-x-2 lg:translate-x-4 xl:translate-x-8 relative z-10">
          {/* Top Label */}
          <div className="inline-flex items-center px-3 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-200 shadow-[0_2px_8px_rgba(18,62,140,0.12)]">
            WHAT I DO
          </div>

          {/* Currently Building Block */}
          <div className="space-y-2">
            <div className="text-[11px] font-mono font-bold tracking-wider uppercase text-neutral-400">
              CURRENTLY BUILDING
            </div>
            <div className="space-y-1 sm:space-y-1.5">
              <div className="text-xl sm:text-2xl lg:text-[1.7rem] font-black text-neutral-900 leading-tight tracking-tight">
                Full-stack web applications
              </div>
              <div className="text-xl sm:text-2xl lg:text-[1.7rem] font-black text-neutral-900 leading-tight tracking-tight">
                AI-powered products
              </div>
              <div className="text-xl sm:text-2xl lg:text-[1.7rem] font-black text-neutral-900 leading-tight tracking-tight">
                Interactive user experiences
              </div>
            </div>
          </div>

          {/* Technology Stack Pills */}
          <div className="space-y-2 pt-1 sm:pt-2">
            <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400">
              STACK
            </div>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-semibold text-neutral-700 bg-neutral-100/90 border border-neutral-200/80 shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM RIGHT: Rotating Testimonial Card Carousel */}
        <div className="pt-2 flex justify-end relative z-30">
          <TestimonialCarousel />
        </div>
      </div>

      {/* =================================================================== */}
      {/* CENTERPIECE: PROFILE PHOTO GROUNDED AT BOTTOM & HORIZONTALLY CENTERED*/}
      {/* Matches Image 2: torso grounded at bottom, head cleanly integrated */}
      {/* =================================================================== */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center justify-end">
        <div className="relative h-[72vh] sm:h-[78vh] md:h-[82vh] lg:h-[86vh] xl:h-[90vh] max-h-[92vh] aspect-[1446/1088] flex items-end justify-center">
          <Image
            src="/profile4.png"
            alt="Sairoop NK"
            width={1446}
            height={1088}
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
