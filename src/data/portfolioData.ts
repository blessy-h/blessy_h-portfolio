import { Skill, Project, Certification, TimelineItem, QuickFact } from '../types';

export const portfolioInfo = {
  name: "Blessy",
  surname: "H",
  fullName: "Blessy H",
  tagline: "SEO & Digital Marketing Fresher",
  eyebrow: "DIGITAL MARKETING · SEO · WEB",
  intro: "A curious fresher with a background in English and technology, excited to create meaningful digital experiences and help brands grow online through clean SEO practices, technical understanding, and creative digital marketing.",
  portraitUrl: "/assets/mia-portrait.png",
  trophyUrl: "/assets/trophy-100.png",
  aboutHeading: "A little about",
  aboutSub: "Communication meets technology, with a genuine dedication to search visibility and digital growth.",
  aboutParagraphs: [
    "I completed my B.A. in English in 2024, cultivating strong analytical reading, precision copywriting, and audience communication skills. To expand into the tech sphere, I trained in Python Full Stack Development, mastering the structural building blocks of the web.",
    "Combining language sensitivity with technical website architecture naturally led me to Digital Marketing and Search Engine Optimization (SEO). I love exploring keyword intent, improving on-page signals, ensuring clean technical crawlability, and helping local and online businesses get found by the people who need them.",
    "I am currently looking for an entry-level SEO or Digital Marketing role where I can contribute enthusiasm, a fresh perspective, and a strong work ethic to a forward-thinking team."
  ],
  quickFacts: [
    { label: "2024", sub: "B.A. English", badge: "Degree" },
    { label: "SEO", sub: "Career Focus", badge: "Specialization" },
    { label: "Tech", sub: "Python & Web", badge: "Foundation" },
    { label: "Curious", sub: "Always Learning", badge: "Mindset" }
  ] as QuickFact[],
  email: "blessyh07@gmail.com",
  location: "Kanyakumari, Tamil Nadu, India",
  portfolioUrl: "https://blessy-h.github.io/blessy_h-portfolio/",
  gfcUrl: "https://blessy-h.github.io/GFC/",
  socials: [
    { name: "LinkedIn", label: "LinkedIn ↗", url: "https://www.linkedin.com/" },
    { name: "GitHub", label: "GitHub ↗", url: "https://github.com/blessy-h" }
  ]
};

export const skillsData: Skill[] = [
  {
    id: "seo",
    icon: "⌕",
    title: "Search Engine Optimization (SEO)",
    description: "Holistic understanding of search engines, crawling, indexing, search intent, and ranking signals for organic growth.",
    category: "SEO",
    colorTheme: "sage",
    tags: ["Search Visibility", "SERP", "Organic Traffic", "Ranking Factors"]
  },
  {
    id: "keyword-research",
    icon: "✦",
    title: "Keyword Research",
    description: "Identifying high-relevance search terms, search volume, competitor keyword gaps, user search intent, and long-tail opportunities.",
    category: "SEO",
    colorTheme: "pink",
    tags: ["Search Intent", "Long-Tail Keywords", "Competitor Analysis", "Search Volume"]
  },
  {
    id: "on-page-seo",
    icon: "✍",
    title: "On-Page SEO",
    description: "Optimizing title tags, meta descriptions, header hierarchy (H1-H6), URL structure, image alt text, and keyword placement.",
    category: "SEO",
    colorTheme: "blue",
    tags: ["Title Tags", "Meta Descriptions", "Content Structuring", "Image Alt Text"]
  },
  {
    id: "technical-seo",
    icon: "⚙",
    title: "Technical SEO",
    description: "Ensuring search engine bots can easily crawl and index content through clean XML sitemaps, robots.txt, canonicals, and speed checks.",
    category: "SEO",
    colorTheme: "peach",
    tags: ["XML Sitemaps", "Robots.txt", "Canonical Tags", "Crawlability", "Clean URLs"]
  },
  {
    id: "digital-marketing",
    icon: "✿",
    title: "Digital Marketing",
    description: "Digital content fundamentals, audience engagement, conversion funnels, brand visibility, and organic social marketing basics.",
    category: "Marketing",
    colorTheme: "yellow",
    tags: ["Audience Growth", "Brand Visibility", "Content Strategy", "Digital Channels"]
  },
  {
    id: "html",
    icon: "⟨/⟩",
    title: "HTML",
    description: "Semantic HTML5 markup ensuring accessible, well-structured pages that search engine crawlers can seamlessly parse and index.",
    category: "Development",
    colorTheme: "peach",
    tags: ["HTML5", "Semantic Tags", "Document Hierarchy", "Accessibility"]
  },
  {
    id: "css",
    icon: "❖",
    title: "CSS",
    description: "Styling responsive, mobile-first layouts with Flexbox, CSS Grid, media queries, smooth animations, and clean visual aesthetics.",
    category: "Development",
    colorTheme: "blue",
    tags: ["CSS3", "Responsive Design", "Flexbox & Grid", "Mobile Optimization"]
  },
  {
    id: "javascript",
    icon: "⚡",
    title: "JavaScript",
    description: "Foundational interactive scripting, DOM manipulation, event listeners, dynamic UI behaviors, and client-side logic.",
    category: "Development",
    colorTheme: "yellow",
    tags: ["ES6+", "DOM Manipulation", "Event Listeners", "Interactive UI"]
  },
  {
    id: "python",
    icon: "🐍",
    title: "Python",
    description: "Python Full Stack foundations covering data structures, backend logic, script automation, and analytical problem-solving.",
    category: "Development",
    colorTheme: "sage",
    tags: ["Full Stack Basics", "Data Structures", "Automation", "Logic"]
  }
];

export const projectsData: Project[] = [
  {
    id: "gfc",
    type: "restaurant",
    badge: "LIVE CLIENT CONCEPT · LOCAL BUSINESS SEO",
    title: "GFC Restaurant Website",
    subtitle: "GRAND FESTIVE CAFE · UDAYAR VILAI",
    description: "A complete website concept designed for Grand Festive Cafe in Udayar Vilai, Kanyakumari. Built to showcase the cafe atmosphere, dynamic menu items, operating hours, and physical location to boost local customer visits.",
    seoWork: [
      "Local SEO targeting dining and cafe searches in Udayar Vilai & Kanyakumari",
      "Semantic HTML5 hierarchy ensuring clear headings and machine readability",
      "Optimized menu & service sections with schema-ready structured data",
      "Fast mobile loading speeds and responsive layout for on-the-go diners",
      "Clear call-to-action buttons for directions, calls, and menu exploration"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Local SEO", "Mobile-First Design"],
    liveUrl: "https://blessy-h.github.io/GFC/",
    githubUrl: "https://github.com/blessy-h/GFC",
    colorTheme: "sage"
  },
  {
    id: "seo-practice",
    type: "seo",
    badge: "SEO AUDIT & TECHNICAL STRATEGY",
    title: "SEO Practice & Site Optimization",
    subtitle: "DATA-DRIVEN VISIBILITY & CRAWL HEALTH",
    description: "A hands-on technical SEO project focused on end-to-end search engine optimization principles, keyword discovery, site crawlability, indexation rules, and performance audits.",
    seoWork: [
      "Targeted keyword discovery and user search intent mapping",
      "Crafted descriptive XML sitemaps and strict robots.txt directives",
      "On-page meta tags, OpenGraph sharing tags, and clean URL slugs",
      "Heading tag hierarchy (H1-H3) optimization and internal link anchors",
      "Image optimization with descriptive alt text for search visibility"
    ],
    technologies: ["Technical SEO", "Keyword Research", "On-Page SEO", "Sitemap Architecture", "Robots.txt"],
    liveUrl: "https://blessy-h.github.io/blessy_h-portfolio/",
    githubUrl: "https://github.com/blessy-h/blessy_h-portfolio",
    colorTheme: "blue"
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-seo",
    title: "Digital Marketing & SEO Training",
    issuer: "Digital Marketing Institute / Training Program",
    year: "Completed",
    description: "Comprehensive training in modern digital marketing practices, with an intensive focus on Search Engine Optimization.",
    skillsCovered: ["Keyword Research", "On-Page SEO", "Off-Page Link Building", "Technical Auditing", "Analytics"],
    colorTheme: "sage"
  },
  {
    id: "cert-python",
    title: "Python Full Stack Development",
    issuer: "Technology Training Center",
    year: "Completed",
    description: "Hands-on curriculum bridging frontend web technologies (HTML, CSS, JavaScript) and backend Python architectures.",
    skillsCovered: ["Python Fundamentals", "Web Development", "Database Basics", "Full Stack Architecture"],
    colorTheme: "pink"
  },
  {
    id: "cert-degree",
    title: "B.A. in English",
    issuer: "Undergraduate Degree Program",
    year: "2024",
    description: "Graduated with strong foundations in literary analysis, persuasive communication, and precision written English—essential for authoritative SEO content.",
    skillsCovered: ["Copywriting", "Audience Empathy", "Analytical Communication", "Research Skills"],
    colorTheme: "blue"
  }
];

export const timelineData: TimelineItem[] = [
  {
    id: "ba-degree",
    yearOrBadge: "2024",
    title: "B.A. in English",
    institution: "Undergraduate Degree",
    description: "Graduated with honors in English, cultivating high-level communication, creative writing, and research capabilities.",
    highlights: ["Deep understanding of language and persuasive copywriting", "Research methodologies applicable to audience and keyword analysis"]
  },
  {
    id: "python-training",
    yearOrBadge: "COMPLETED",
    title: "Python Full Stack Development",
    institution: "Professional Development",
    description: "Completed intensive technical training in Python full-stack software and website development.",
    highlights: ["Hands-on HTML5, CSS3, JavaScript coding", "Understanding backend server logic, API concepts, and database structures"]
  },
  {
    id: "digital-marketing-training",
    yearOrBadge: "COMPLETED",
    title: "Digital Marketing & SEO Specialization",
    institution: "Career Focus",
    description: "Specialized training focused on organic search rankings, keyword intent, technical crawlability, and digital brand visibility.",
    highlights: ["Keyword research workflows and on-page optimization", "Sitemap, robots.txt, clean URLs, and technical SEO hygiene"]
  }
];
