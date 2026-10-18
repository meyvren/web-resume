import { ITimelineItem, ISkillGroup, IValue, ISocial } from "@/types";
import { Briefcase, Code2, Heart, Zap } from "lucide-react";


export const petTimelineData: ITimelineItem[] = [
  {
    id: 1,
    category: 'Pet',
    title: 'Freelance CRM',
    subtitle: ['Next.js 16', 'TypeScript', 'Prisma ORM', 'SQLite', 'Auth.js', 'Tailwind CSS 4', 'Radix UI', 'shadcn/ui', 'Recharts', 'Framer Motion', 'Gemini API', 'exchangerate-api.com'],
    description: 'A production CRM for freelancers to manage projects, income, subscriptions, budgets, and AI-assisted financial analysis.',
    highlights: [
      'Secure per-user data isolation and a protected read-only demo workspace',
      'Project and financial analytics with persistent AI conversations',
      'AI timeout handling, retries, burst limits, and daily rate limits',
      'Secure password recovery, automated tests, and a GitHub Actions quality gate',
    ],
    outcome: 'Deployed on a Linux VPS with PM2 and Nginx, backed by verified SQLite backups and a public read-only demo.',
    code: 'https://github.com/meyvren/freelance-crm',
    link: 'https://crm.mkfox.tech/',
    linkLabel: 'Demo',
    img:'/petImg/crm.webp',
    preview: { fit: 'contain', layout: 'wide', position: 'center' },
    featured: true,
    isInProgress: false,
  },
  {
    id: 2,
    category: 'Pet',
    title: 'Lite-shop',
    subtitle: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui', 'Framer Motion', 'Zustand + persist middleware', 'DummyJSON API', 'use-debounce'],
    description: 'A lightweight storefront with simulated purchases, persistent cart state, search, filtering, and product data from DummyJSON.',
    highlights: [
      'Responsive shopping flow built with React 19 and Next.js 16',
      'Persistent client-side cart state with Zustand',
    ],
    outcome: 'Completed and available as a live, publicly accessible project.',
    code: 'https://github.com/meyvren/shop',
    link: 'https://shop.mkfox.tech/',
    img:'/petImg/shop.webp',
    preview: { fit: 'contain', layout: 'wide', position: 'top' },
    linkLabel: 'Live',
    isInProgress: false,
  },
  {
    id: 3,
    category: 'Pet',
    title: 'Seller cars',
    subtitle: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Playwright', 'Resend'],
    description: 'A responsive catalogue for browsing used cars from South Korea using data sourced from ENCAR.',
    highlights: [
      'Searchable vehicle presentation built with Next.js and TypeScript',
      'Automated browser coverage with Playwright',
    ],
    outcome: 'Completed and deployed at a public project URL.',
    code: 'https://github.com/meyvren/sellercars',
    link: 'https://sellercars.mkfox.tech/',
    linkLabel: 'Live',
    img:'/petImg/million-cars.webp',
    isInProgress: false,
  }
];

export const workTimelineData: ITimelineItem[] = [
  {
    id: 1,
    category: 'Work',
    date: 'Jun 2023 - Present',
    title: 'Freelance',
    subtitle: 'FullStack Developer',
    description: 'Development from a simple website to a small CRM system',
    img:'/',
    link:'/',
  },
];

export const headerTitleBtns = [
  { id: 'Pet', label: 'Projects' },
  { id: 'Work', label: 'Work' },
];

export const socials: ISocial[] = [
  { id: 1, name: "GitHub", url: "https://github.com/meyvren", icon: "🐙" },
  { id: 2, name: "Email", url: "mailto:kasionma@gmail.com", icon: "📧" },
  { id: 3, name: "Telegram", url: "https://t.me/meyvren", icon: "✈️" },
];

export const skills: ISkillGroup[] = [
  { category: "Frontend", technologies: ["React 19", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", technologies: ["Server Actions", "Route Handlers", "Auth.js", "Prisma", "Node.js"] },
  { category: "Data & integrations", technologies: ["SQLite", "REST APIs", "Gemini", "Nodemailer"] },
  { category: "Testing & delivery", technologies: ["Vitest", "GitHub Actions", "PM2", "Nginx", "Linux VPS"] },
];

export const values: IValue[] = [
  { icon: <Zap className="w-6 h-6" />, title: "Speed", desc: "Optimized code, fast loading, SSR/SSG where it matters." },
  { icon: <Code2 className="w-6 h-6" />, title: "Clean Code", desc: "TypeScript, typing, reusable components, SOLID principles." },
  { icon: <Heart className="w-6 h-6" />, title: "Passion", desc: "Every project is personal. Animations, UX, attention to detail." },
  { icon: <Briefcase className="w-6 h-6" />, title: "Reliability", desc: "Deadlines are law. Communication is transparent, results are predictable." },
];
