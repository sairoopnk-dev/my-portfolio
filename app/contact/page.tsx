"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, CheckCircle, Send, Clock, Sparkles } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PanelNav } from "@/components/layout/panel-nav";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

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
            <Badge variant="blue">INITIATE DIALOGUE</Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-black tracking-tight text-white leading-[1.08] pt-1 max-w-lg">
            Ready to engineer your next breakthrough?
          </h1>
        </div>

        {/* Channels Information */}
        <div className="my-6 lg:my-auto space-y-4 max-w-lg relative z-10">
          <p className="text-sky-100/90 text-xs sm:text-sm md:text-base leading-relaxed">
            Available for principal advisory, greenfield system builds, and high-impact
            technical architecture. Let&apos;s build software that moves people.
          </p>

          <div className="space-y-3 pt-3 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sky-300 shrink-0">
                <Mail size={16} />
              </div>
              <div>
                <div className="text-[10px] text-sky-200/70 font-mono">DIRECT INBOX</div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm font-bold text-white hover:text-sky-300 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sky-300 shrink-0">
                <MapPin size={16} />
              </div>
              <div>
                <div className="text-[10px] text-sky-200/70 font-mono">LOCATION</div>
                <div className="text-sm font-bold text-white">{siteConfig.location}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sky-300 shrink-0">
                <Clock size={16} />
              </div>
              <div>
                <div className="text-[10px] text-sky-200/70 font-mono">GUARANTEED RESPONSE</div>
                <div className="text-sm font-bold text-white">Within 24 hours</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="pt-2 text-xs text-sky-200/80 font-mono flex items-center gap-2 relative z-10">
          <Sparkles size={14} className="text-sky-400" />
          <span>Available for Q1/Q2 Engagements</span>
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

        {/* Form Container with blue shadow on white */}
        <div className="my-auto py-4 sm:py-6 max-w-md lg:max-w-lg pl-4 sm:pl-6 lg:pl-24 xl:pl-32 translate-x-0 sm:translate-x-2 lg:translate-x-4 xl:translate-x-8 relative z-10">
          <div className="py-3 sm:py-5 px-5 sm:px-7 rounded-3xl bg-neutral-50/90 border border-neutral-200/90 shadow-on-white w-full">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-black text-neutral-900">
                Transmission Received!
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-xs mx-auto">
                Thank you for reaching out. I will review your requirements and respond within 24 hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: "", email: "", message: "" });
                }}
                className="mt-3 text-xs font-bold text-blue-600 hover:underline uppercase tracking-wider"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="text-[11px] font-bold uppercase tracking-wider text-neutral-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Alex Morgan"
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-[11px] font-bold uppercase tracking-wider text-neutral-700"
                >
                  Work Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="alex@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="text-[11px] font-bold uppercase tracking-wider text-neutral-700"
                >
                  Project Scope & Vision
                </label>
                <textarea
                  id="message"
                  required
                  rows={2}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Briefly describe your product goals, tech stack, or timeline..."
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="electric"
                disabled={isSubmitting}
                className="w-full justify-center text-sm py-3.5 mt-1 font-bold shadow-[0_8px_22px_rgba(18,62,140,0.3)] hover:shadow-[0_12px_28px_rgba(18,62,140,0.45)]"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <span className="flex items-center gap-2">
                    <span>Send Inquiry</span>
                    <Send size={14} />
                  </span>
                )}
              </Button>
            </form>
          )}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 relative z-10">
          <span>Direct: {siteConfig.email}</span>
          <Link href="/" className="text-blue-600 font-bold hover:underline">
            Return to Home →
          </Link>
        </div>

      </div>

    </div>
  );
}
