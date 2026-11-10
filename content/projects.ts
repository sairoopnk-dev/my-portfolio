import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Apex Intelligence Engine",
    slug: "apex-intelligence-engine",
    tagline: "Autonomous Agent Orchestrator & Real-Time RAG Pipeline",
    description:
      "A distributed AI execution runtime connecting LLMs to production databases with streaming completions, speculative decoding, and sub-100ms vector lookups.",
    featured: true,
    category: "AI / Systems",
    technologies: ["Next.js 16", "TypeScript", "Python", "Vercel AI SDK", "Tailwind CSS"],
    metrics: "12M+ Daily Queries • 42ms p95 Latency",
    liveUrl: "https://example.com/apex",
    githubUrl: "https://github.com/example/apex-engine",
    image: "/images/projects/apex.jpg",
    year: "2026",
  },
  {
    id: "project-2",
    title: "PulseFlow Cloud",
    slug: "pulseflow-cloud",
    tagline: "Collaborative Real-Time Workspace & State Sync Platform",
    description:
      "Full-stack collaborative document and system canvas platform featuring CRDT conflict-free syncing, WebSockets at edge, and fluid zero-jank UI.",
    featured: true,
    category: "Full-Stack",
    technologies: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    metrics: "450k+ Active Users • Zero Data Loss",
    liveUrl: "https://example.com/pulseflow",
    githubUrl: "https://github.com/example/pulseflow",
    image: "/images/projects/pulseflow.jpg",
    year: "2025",
  },
  {
    id: "project-3",
    title: "OmniMetrics Telemetry",
    slug: "omnimetrics-telemetry",
    tagline: "High-Throughput Observability & Metric Dashboard",
    description:
      "Modern analytics platform processing over 50,000 metrics per second with real-time alerting, custom dashboards, and anomaly detection.",
    featured: true,
    category: "Frontend",
    technologies: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS", "ClickHouse"],
    metrics: "50k ops/sec • Instant Filter Rendering",
    liveUrl: "https://example.com/omnimetrics",
    githubUrl: "https://github.com/example/omnimetrics",
    image: "/images/projects/omnimetrics.jpg",
    year: "2025",
  },
  {
    id: "project-4",
    title: "HyperScale Edge Proxy",
    slug: "hyperscale-edge-proxy",
    tagline: "Global Dynamic Caching & API Gateway",
    description:
      "Distributed reverse proxy running on global edge nodes with automated SSL termination, intelligent stale-while-revalidate, and geo-routing.",
    featured: false,
    category: "Mobile & Cloud",
    technologies: ["Rust", "TypeScript", "Edge Runtime", "Docker"],
    metrics: "99.999% Reliability • Global Reach",
    liveUrl: "https://example.com/hyperscale",
    githubUrl: "https://github.com/example/hyperscale",
    image: "/images/projects/hyperscale.jpg",
    year: "2024",
  },
];

