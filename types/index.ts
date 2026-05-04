export interface Metric {
  value: string;
  label: string;
}

/**
 * A single branch on a decision node.
 * `chosen=true` is the path Imre actually took.
 * The other branch records what the alternative was, with — when known —
 * what evidence or testing said it would have produced.
 */
export interface DecisionPath {
  label: string;
  /** One sentence: what taking this path actually produced (or would have). */
  outcome: string;
  /** Quantified outcome badge, e.g. "43% completion", "6.8 MB bundle". */
  metric?: string;
  /** Optional source of the evidence: "validated A/B", "n=5 prototype", "competitive benchmark". */
  evidence?: string;
  chosen: boolean;
}

/**
 * One decision node in a project's decision tree.
 * Each project has ~4-6 of these — they are the project, structurally.
 */
export interface Decision {
  id: string;
  /** The question being decided, framed as a question. */
  question: string;
  /** Short context: why this decision mattered. 1-2 sentences. */
  context: string;
  /** Two branches. Convention: alternative first, chosen second (so chosen reads last/right). */
  paths: [DecisionPath, DecisionPath];
  /** Optional: what made this decision difficult — political, technical, ethical. */
  tension?: string;
  /** Optional: what Imre learned that he'd reuse. */
  takeaway?: string;
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
  /**
   * The decision tree — the centerpiece of the case study.
   * Empty array allowed during migration; pages should render a
   * "decisions coming soon" fallback when empty.
   */
  decisions?: Decision[];
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

export interface Recommendation {
  /** Verbatim quote */
  quote: string;
  /** Recommender's full name */
  author: string;
  /** Role and company at the time of the recommendation */
  role: string;
  /** Optional context (where you worked together, year, etc.) */
  context?: string;
  /** Whether the recommender details are confirmed by Imre */
  verified?: boolean;
}

export interface Talk {
  title: string;
  event: string;
  year: number;
  type: "talk" | "podcast" | "workshop" | "panel" | "mentoring";
  location?: string;
  url?: string;
  description?: string;
}

export interface WritingEntry {
  slug: string;
  title: string;
  date: string;
  readingTime?: string;
  excerpt: string;
  /** Set to false for placeholder entries before real content lands */
  published: boolean;
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
