export interface Skill {
  id: string;
  icon: string;
  title: string;
  description: string;
  category: 'SEO' | 'Marketing' | 'Development';
  colorTheme?: 'blush' | 'powder' | 'cream' | 'grey' | 'white';
  tags: string[];
}

export interface Project {
  id: string;
  type: 'restaurant' | 'seo';
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  seoWork: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  cardTheme: 'blush' | 'powder';
  imageAlt?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  skillsCovered: string[];
  cardTheme?: 'blush' | 'powder' | 'cream' | 'white';
}

export interface TimelineItem {
  id: string;
  yearOrBadge?: string;
  title: string;
  institution?: string;
  description: string;
  highlights?: string[];
}

export interface QuickFact {
  label: string;
  sub: string;
  badge?: string;
}
