export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'instagram' | 'email';
  label: string;
  url: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  avatarUrl: string;
  status: {
    availableForHire: boolean;
    text: string;
    subtext?: string;
  };
  stats: {
    label: string;
    value: string;
    indicatorActive?: boolean;
  }[];
  navItems: NavItem[];
  socialLinks: SocialLink[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  featured: boolean;
  category: 'Full-Stack' | 'Frontend' | 'AI / Systems' | 'Mobile & Cloud';
  technologies: string[];
  metrics?: string;
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  year: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  current: boolean;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
  }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}

