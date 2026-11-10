import { ExperienceItem } from "@/types";

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Lead Full-Stack Systems Engineer",
    company: "Nexus Distributed Systems",
    companyUrl: "https://nexus.dev",
    location: "San Francisco, CA (Remote)",
    period: "2024 — Present",
    current: true,
    achievements: [
      "Architected real-time streaming infrastructure handling 10M+ events per day with zero downtime.",
      "Engineered high-throughput TypeScript micro-services that decreased API latency by 48%.",
      "Mentored a team of 8 engineers and championed modern Next.js App Router and performance best practices.",
    ],
    technologies: ["Next.js 16", "TypeScript", "React 19", "Tailwind CSS", "Redis", "Kafka"],
  },
  {
    id: "exp-2",
    role: "Senior Frontend Engineer",
    company: "Hyperion Labs",
    companyUrl: "https://hyperion.io",
    location: "Remote",
    period: "2022 — 2024",
    current: false,
    achievements: [
      "Built and scaled enterprise design systems and visual component libraries used across 5 core products.",
      "Optimized Core Web Vitals across consumer web applications, boosting Lighthouse scores from 64 to 99.",
      "Led end-to-end migration of legacy SPAs to modern server-rendered architectures.",
    ],
    technologies: ["React", "TypeScript", "Next.js", "GraphQL", "Tailwind CSS"],
  },
  {
    id: "exp-3",
    role: "Software Engineer",
    company: "Vanguard Digital",
    companyUrl: "https://vanguard.tech",
    location: "Remote",
    period: "2020 — 2022",
    current: false,
    achievements: [
      "Developed high-traffic full-stack client portals and internal analytics dashboards.",
      "Automated CI/CD deployment pipelines on Vercel and AWS, cutting deploy times by 65%.",
    ],
    technologies: ["TypeScript", "Node.js", "React", "PostgreSQL", "Docker"],
  },
];

