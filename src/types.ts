export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  category: 'Software' | 'AI & Data' | 'Cloud & DevOps' | 'Teams';
  features: string[];
  deliverables: string[];
  technologies: string[];
  metricHighlight: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: 'FinTech' | 'HealthTech' | 'Telecom' | 'Retail' | 'SaaS' | 'Energy';
  heroMetric: string;
  heroMetricLabel: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  image: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  solutions: string[];
  impactMetric: string;
  activeClients: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  company: string;
  companyLogoText: string;
  rating: number;
  country: string;
  projectType: string;
}

export interface HubLocation {
  city: string;
  country: string;
  region: string;
  address: string;
  engineers: number;
  timeZone: string;
  isHQ?: boolean;
}

export interface JobOpening {
  id: string;
  title: string;
  department: 'Engineering & AI' | 'Cloud & DevOps' | 'Design & UX' | 'Quality Engineering';
  location: string;
  workplaceType: 'Chennai (On-site / Hybrid)' | 'Chennai HQ';
  employmentType: 'Full-Time' | 'Contract-to-Hire';
  experience: string;
  salaryRange: string;
  skills: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface JobApplication {
  fullName: string;
  email: string;
  phone: string;
  positionId: string;
  positionTitle: string;
  experienceYears: string;
  linkedInOrGithub: string;
  portfolioUrl?: string;
  coverNote?: string;
  resumeFileName?: string;
}
