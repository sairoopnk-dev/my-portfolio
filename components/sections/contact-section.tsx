"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site-config";
import { Mail, MapPin, CheckCircle, Send, Clock, Sparkles } from "lucide-react";

export function ContactSection() {
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
    // Simulate lightweight client submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <Container size="lg">
        {/* Outer Pill-Rounded Contact Box matching Hero Frame */}
        <div className="relative rounded-[2rem] sm:rounded-[3rem] outer-frame-gradient p-[1.5px] shadow-[0_25px_80px_-20px_rgba(7,19,41,0.9)]">
          <div className="rounded-[calc(2rem-1.5px)] sm:rounded-[calc(3rem-1.5px)] bg-hero-blue-mesh p-6 sm:p-12 lg:p-16 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-sky-300 bg-sky-500/15 border border-sky-400/30">
                <Sparkles size={14} />
                <span>LET&apos;S COLLABORATE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.08]">
                Ready to engineer your next breakthrough?
              </h2>

              <p className="text-sm sm:text-base text-sky-100/80 leading-relaxed max-w-lg">
                Available for principal advisory, greenfield system builds, and high-impact engineering leadership. Let&apos;s build software that moves people.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3 text-neutral-300 text-sm">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sky-300 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 font-mono">DIRECT INBOX</div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-white font-bold hover:text-sky-300 transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-neutral-300 text-sm">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sky-300 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 font-mono">LOCATION</div>
                    <div className="text-white font-bold">{siteConfig.location}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-neutral-300 text-sm">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sky-300 shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 font-mono">RESPONSE TIME</div>
                    <div className="text-white font-bold">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Card (Floating White Card) */}
            <div className="lg:col-span-6">
              <div className="card-floating-light rounded-[1.75rem] sm:rounded-[2.5rem] p-6 sm:p-10 shadow-2xl">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-neutral-900">
                      Message Received!
                    </h3>
                    <p className="text-sm text-neutral-600 max-w-xs mx-auto">
                      Thank you for reaching out, Alex. I will review your message and reply within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", message: "" });
                      }}
                      className="mt-4 text-xs font-bold text-blue-600 hover:underline uppercase tracking-wider"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label
                        htmlFor="name"
                        className="text-xs font-bold uppercase tracking-wider text-neutral-700"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="email"
                        className="text-xs font-bold uppercase tracking-wider text-neutral-700"
                      >
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="message"
                        className="text-xs font-bold uppercase tracking-wider text-neutral-700"
                      >
                        Project Details / Inquiry
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell me about your product vision, timeline, and goals..."
                        className="w-full px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="electric"
                      disabled={isSubmitting}
                      className="w-full justify-center text-sm py-4 mt-2 font-bold"
                    >
                      {isSubmitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <span>Send Message</span>
                          <Send size={15} />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
