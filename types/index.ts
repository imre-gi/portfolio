export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  year: number;
  duration: string;
  roles: string[];
  team: string;
  tools: string[];
  methods: string[];
  deliverables: string[];
  category: string;
  featured: boolean;
  heroColor: string;
  heroImage?: string;
  galleryImages?: string[];
  summary: string;
  challenge: string;
  research: {
    description: string;
    findings: string[];
  };
  design: {
    description: string;
  };
  testing?: {
    approach: string;
    findings: string[];
  };
  outcome: {
    description: string;
    metrics: Metric[];
  };
  reflection: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  industry: string;
  description: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: number;
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
}

export interface Language {
  language: string;
  level: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  phone: string;
  philosophy: string;
  tagline: string;
  bio: string;
  skills: {
    research: string[];
    design: string[];
    strategy: string[];
    tools: string[];
    frameworks: string[];
  };
  education: Education[];
  certifications: Certification[];
  languages: Language[];
}
