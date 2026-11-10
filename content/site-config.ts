import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Alex Vance",
  title: "Principal Full-Stack Engineer & Systems Architect",
  tagline: "Engineering High-Performance Web Applications & Intelligent Systems",
  bio: "Architecting resilient, scalable web platforms and AI-powered interfaces with obsessively refined aesthetics, ultra-low latency, and modern TypeScript.",
  location: "San Francisco, CA & Remote",
  email: "alex@alexvance.dev",
  avatarUrl: "/profile.png",
  status: {
    availableForHire: true,
    text: "Available for Q1/Q2 Advisory & Projects",
    subtext: "Ready to level up?",
  },
  stats: [
    {
      label: "Focus Level",
      value: "100%",
      indicatorActive: true,
    },
    {
      label: "Discipline",
      value: "200%",
      indicatorActive: true,
    },
    {
      label: "Uptime Delivered",
      value: "99.99%",
      indicatorActive: true,
    },
    {
      label: "Production Shipped",
      value: "35+",
      indicatorActive: true,
    },
  ],
  // EXACT REQUIRED ORDER: Home → About → Skills → Experience → Results → Contact
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Experience", href: "/experience" },
    { label: "Results", href: "/results" },
    { label: "Contact", href: "/contact" },
  ],
  socialLinks: [
    {
      platform: "github",
      label: "GitHub",
      url: "https://github.com",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      url: "https://linkedin.com",
    },
    {
      platform: "twitter",
      label: "X (Twitter)",
      url: "https://x.com",
    },
    {
      platform: "instagram",
      label: "Instagram",
      url: "https://instagram.com",
    },
    {
      platform: "email",
      label: "Email",
      url: "mailto:alex@alexvance.dev",
    },
  ],
};
