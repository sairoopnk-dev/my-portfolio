import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend & Interfaces",
    description: "Building ultra-responsive, zero-jank, accessible user experiences.",
    skills: [
      { name: "React 19 & Next.js", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Tailwind CSS v4", level: "Expert" },
      { name: "Design Systems", level: "Expert" },
      { name: "Framer Motion & CSS Animation", level: "Advanced" },
      { name: "Web Performance & Core Web Vitals", level: "Expert" },
    ],
  },
  {
    title: "Backend & Systems",
    description: "Scalable server architectures, streaming protocols, and APIs.",
    skills: [
      { name: "Node.js & Bun", level: "Expert" },
      { name: "PostgreSQL & Prisma", level: "Advanced" },
      { name: "REST & GraphQL APIs", level: "Expert" },
      { name: "Redis & Upstash", level: "Advanced" },
      { name: "Serverless & Edge Functions", level: "Expert" },
      { name: "Event-Driven Architecture", level: "Advanced" },
    ],
  },
  {
    title: "AI, Cloud & DevOps",
    description: "Modern deployment workflows, AI integration, and telemetry.",
    skills: [
      { name: "Vercel Platform & CI/CD", level: "Expert" },
      { name: "Vercel AI SDK & LLM Orchestration", level: "Advanced" },
      { name: "Docker & Containers", level: "Proficient" },
      { name: "Git & GitHub Actions", level: "Expert" },
      { name: "Observability & OpenTelemetry", level: "Advanced" },
      { name: "Vector Databases & RAG", level: "Advanced" },
    ],
  },
];

