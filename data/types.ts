export interface NavItem {
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}

export interface SiteProfile {
  name: string;
  firstName: string;
  title: string;
  specialization: string;
  location: string;
  headline: string;
  supportingLine: string;
  aboutParagraphs: string[];
  email: string;
  github: string;
  linkedin: string;
  siteUrl: string;
  resumePath: string;
  resumeLastUpdated: string;
  availability: {
    isAvailable: boolean;
    label: string;
  };
  currently: {
    location: string;
    focus: string;
    interests: string[];
  };
}

export interface ExperienceEntry {
  id: string;
  title: string;
  organization: string;
  dateRange: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface ProjectLinks {
  github?: string;
  demo?: string;
  caseStudy?: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  links: ProjectLinks;
  image?: {
    src: string;
    alt: string;
  };
  featured: boolean;
  caseStudy?: ProjectCaseStudy;
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  constraints: string[];
  responsibilities: string[];
  architecture: string;
  architectureDiagram?: {
    src: string;
    alt: string;
  };
  technicalApproach: string[];
  keyDecisions: { decision: string; rationale: string }[];
  challenges: { challenge: string; response: string }[];
  solution: string;
  testing: string[];
  observability: string[];
  security: string[];
  results: { label: string; value: string; illustrative?: boolean }[];
  lessonsLearned: string[];
  futureImprovements: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  graduation: string;
  description: string;
  coursework: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  dateEarned: string;
  credentialUrl?: string;
}
