export interface Skill {
  id: string;
  icon: string;
  title: string;
  description: string;
  category: 'SEO' | 'Marketing' | 'Development';
  colorTheme: 'sage' | 'pink' | 'blue' | 'yellow' | 'peach';
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
  colorTheme: 'sage' | 'pink' | 'blue' | 'peach';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  skillsCovered: string[];
  colorTheme: 'sage' | 'pink' | 'blue' | 'yellow' | 'peach';
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
