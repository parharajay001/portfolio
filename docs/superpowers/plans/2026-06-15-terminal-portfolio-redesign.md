# Terminal Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio in a terminal / code-editor aesthetic with light+dark themes, and update all content (skills, experience, 13 projects, education, languages) to match the resume + Naukri profile.

**Architecture:** Keep the existing React 18 + Vite + TypeScript + Tailwind 3 + framer-motion stack. Recolor theme tokens in `index.css`, extend `tailwind.config.js`, add JetBrains Mono + IBM Plex Sans fonts, consolidate all content into a single typed `portfolioData.ts`, and rebuild each section component. Projects render as an expandable file-tree grouped by tech.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS 3, framer-motion, react-icons, lucide-react.

**Note on testing:** This repo has no test framework, and the work is visual. "Verification" steps run `npm run build` (must pass clean) and a visual `npm run dev` check, instead of unit tests. Do not add a test harness — out of scope. Branch `terminal-portfolio-redesign` is already checked out. Commit messages must NOT include a Co-Authored-By trailer.

---

## File Structure

| File | Responsibility |
|------|----------------|
| `index.html` | Add Google Fonts links (JetBrains Mono, IBM Plex Sans). |
| `tailwind.config.js` | Add `accent`/`dim` colors + `fontFamily` (mono, sans). |
| `src/index.css` | Recolor `:root`/`.light`/`.dark` tokens; base typography; terminal utility classes. |
| `src/data/portfolioData.ts` | Single source of truth: all typed content. |
| `src/data/portfolio.ts` | **Delete** (unused). |
| `src/components/AnimatedBackground.tsx` + `.css` | Recolor to faint matrix grid (drop photo backgrounds). |
| `src/pages/Portfolio/components/TerminalWindow.tsx` | New shared window-chrome wrapper. |
| `src/pages/Portfolio/components/Navbar.tsx` | Rewrite: command-style nav + theme toggle + resume. |
| `src/pages/Portfolio/components/Hero.tsx` | Rewrite: whoami block, stats, CTAs. |
| `src/pages/Portfolio/components/About.tsx` | Rewrite: `cat about.md`, bio, photo. |
| `src/pages/Portfolio/components/Skills.tsx` | New: categorized skill grid. |
| `src/pages/Portfolio/components/Experience.tsx` | Rewrite: expandable timeline. |
| `src/pages/Portfolio/components/ProjectTree.tsx` | New (replaces `Projects.tsx`): file-tree by tech. |
| `src/pages/Portfolio/components/Education.tsx` | New. |
| `src/pages/Portfolio/components/Languages.tsx` | New. |
| `src/pages/Portfolio/components/Contact.tsx` | Rewrite. |
| `src/pages/Portfolio/components/Footer.tsx` | Rewrite. |
| `src/pages/Portfolio/Portfolio.tsx` | Wire up new sections + section list. |
| `src/pages/Portfolio/components/Projects.tsx`, `Card/Card.jsx`, `Accordion/` | **Delete** after confirming no imports remain. |

---

## Task 1: Theme foundation — fonts, Tailwind tokens, CSS variables

**Files:**
- Modify: `index.html`
- Modify: `tailwind.config.js`
- Modify: `src/index.css`

- [ ] **Step 1: Add font links to `index.html`**

In `<head>` (before the closing `</head>`), add:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
```

- [ ] **Step 2: Extend `tailwind.config.js`**

Replace the `theme.extend` block so it reads:

```js
theme: {
  extend: {
    colors: {
      background: {
        DEFAULT: 'rgb(var(--background) / <alpha-value>)',
        secondary: 'rgb(var(--background-secondary) / <alpha-value>)',
      },
      foreground: {
        DEFAULT: 'rgb(var(--foreground) / <alpha-value>)',
        secondary: 'rgb(var(--foreground-secondary) / <alpha-value>)',
      },
      primary: {
        DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
        hover: 'rgb(var(--primary-hover) / <alpha-value>)',
      },
      accent: 'rgb(var(--accent) / <alpha-value>)',
      dim: 'rgb(var(--dim) / <alpha-value>)',
      border: 'rgb(var(--border) / <alpha-value>)',
    },
    fontFamily: {
      mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
      sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
  },
},
```

- [ ] **Step 3: Recolor theme tokens in `src/index.css`**

Replace the `:root` and `.dark` blocks (lines 5–23) with:

```css
:root,
.dark {
  --background: 10 14 10;
  --background-secondary: 15 21 15;
  --foreground: 207 232 207;
  --foreground-secondary: 143 174 143;
  --primary: 127 255 168;
  --primary-hover: 95 224 137;
  --accent: 255 184 108;
  --dim: 90 106 90;
  --border: 28 42 28;
}

.light {
  --background: 244 241 232;
  --background-secondary: 233 228 214;
  --foreground: 28 58 36;
  --foreground-secondary: 74 106 82;
  --primary: 19 122 67;
  --primary-hover: 14 97 53;
  --accent: 176 106 31;
  --dim: 106 122 106;
  --border: 214 208 189;
}
```

- [ ] **Step 4: Update base typography + add terminal utilities in `src/index.css`**

Change the `body` `font-family` (line 35) from `system-ui, sans-serif;` to:

```css
  font-family: '"IBM Plex Sans"', ui-sans-serif, system-ui, sans-serif;
```

Then append to the end of the file:

```css
/* Terminal utilities */
.font-mono { font-family: '"JetBrains Mono"', ui-monospace, Consolas, monospace; }

.terminal-cursor::after {
  content: '▋';
  color: rgb(var(--primary));
  animation: blink 1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }

.prompt::before {
  content: '$ ';
  color: rgb(var(--primary));
}

.section-title {
  font-family: '"JetBrains Mono"', monospace;
  color: rgb(var(--foreground));
}
```

- [ ] **Step 5: Verify build passes**

Run: `npm run build`
Expected: completes with no TypeScript or Vite errors.

- [ ] **Step 6: Commit**

```bash
git add index.html tailwind.config.js src/index.css
git commit -m "feat: terminal theme foundation (fonts, tokens, light/dark)"
```

---

## Task 2: Data layer — full typed content in `portfolioData.ts`

**Files:**
- Modify (full replace): `src/data/portfolioData.ts`
- Delete: `src/data/portfolio.ts`

- [ ] **Step 1: Replace `src/data/portfolioData.ts` entirely**

```ts
import { Github, Mail, Phone, Linkedin, Globe, FileText } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ProfilePic, Project_1, Patient_Portal, E_Com } from '../assets/images';
import { Resume } from '../assets/pdfs';
import {
  FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaGitlab, FaBitbucket,
  FaJira, FaChartArea, FaNodeJs, FaDocker, FaAws,
} from 'react-icons/fa';
import {
  SiRedux, SiTypescript, SiJavascript, SiMui, SiTailwindcss, SiJest,
  SiPostman, SiVite, SiMongodb, SiExpress, SiMysql, SiPostgresql,
  SiSwagger, SiNextdotjs, SiSass, SiOpenai, SiWebpack,
} from 'react-icons/si';
import { TbBrandVscode, TbApi, TbBrandAzure } from 'react-icons/tb';
import { BsKanban, BsFingerprint, BsShieldLock } from 'react-icons/bs';
import { RiRobot2Line } from 'react-icons/ri';
import { MdPayment } from 'react-icons/md';
import type { IconType } from 'react-icons';

export interface Skill {
  name: string;
  Icon: IconType;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
  tech: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string | null;
  live: string | null;
  image?: string;
  draft?: boolean;
}

export interface ProjectGroup {
  category: string; // dir name e.g. "full-stack"
  label: string; // human label
  projects: Project[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  university: string;
  years: string;
}

export interface ContactItem {
  icon: LucideIcon;
  title: string;
  content: string;
  href: string;
}

export const personalInfo = {
  name: 'Ajay Ramdas Parhar',
  role: 'Senior MERN Stack Developer',
  title: 'MERN Stack Developer | React | Next.js | Node.js | TypeScript | AWS | Docker',
  location: 'Pune, Maharashtra, India',
  email: 'parharajay001@gmail.com',
  phone: '+91-7721908843',
  linkedin: 'https://www.linkedin.com/in/ajay-parhar',
  github: 'https://github.com/parharajay001',
  portfolio: 'https://parharajay001.github.io/portfolio',
  resume: Resume,
  bio: `Experienced and results-driven Senior MERN Stack Developer with 4+ years building scalable, high-performance web applications using MongoDB, Express.js, React.js, Node.js, and Next.js. Strong in TypeScript, clean architecture, payment-gateway and in-app-purchase integration, AWS (S3, EC2, Docker), and secure authentication (JWT, OAuth, biometric). Adept at AI-assisted development workflows with Claude Code and OpenAI Codex.`,
  image: ProfilePic,
};

export const stats = [
  { label: 'Years Experience', value: '4+' },
  { label: 'Projects', value: '13+' },
  { label: 'Stack', value: 'Full-Stack MERN' },
  { label: 'Availability', value: 'Open to Remote' },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React.js', Icon: FaReact },
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'Redux Toolkit', Icon: SiRedux },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'JavaScript (ES6+)', Icon: SiJavascript },
      { name: 'HTML5', Icon: FaHtml5 },
      { name: 'CSS3', Icon: FaCss3Alt },
      { name: 'SCSS', Icon: SiSass },
      { name: 'Material UI', Icon: SiMui },
      { name: 'TailwindCSS', Icon: SiTailwindcss },
      { name: 'Highcharts', Icon: FaChartArea },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', Icon: FaNodeJs },
      { name: 'Express.js', Icon: SiExpress },
      { name: 'RESTful APIs', Icon: TbApi },
      { name: 'Swagger', Icon: SiSwagger },
      { name: 'JWT Auth', Icon: BsShieldLock },
      { name: 'OAuth', Icon: BsShieldLock },
      { name: 'Biometric Auth', Icon: BsFingerprint },
      { name: 'Payment Gateways', Icon: MdPayment },
      { name: 'In-App Purchases', Icon: MdPayment },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'MongoDB', Icon: SiMongodb },
      { name: 'Mongoose', Icon: SiMongodb },
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'PostGIS', Icon: SiPostgresql },
      { name: 'MySQL', Icon: SiMysql },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'AWS S3', Icon: FaAws },
      { name: 'AWS EC2', Icon: FaAws },
      { name: 'Docker', Icon: FaDocker },
      { name: 'Git', Icon: FaGitAlt },
      { name: 'GitHub', Icon: FaGithub },
      { name: 'GitLab', Icon: FaGitlab },
      { name: 'Bitbucket', Icon: FaBitbucket },
      { name: 'Webpack', Icon: SiWebpack },
    ],
  },
  {
    name: 'AI Tools',
    skills: [
      { name: 'Claude Code', Icon: RiRobot2Line },
      { name: 'OpenAI Codex', Icon: SiOpenai },
      { name: 'AI-Assisted Workflows', Icon: RiRobot2Line },
    ],
  },
  {
    name: 'Testing',
    skills: [
      { name: 'Jest', Icon: SiJest },
      { name: 'Supertest', Icon: TbApi },
      { name: 'React Testing Library', Icon: FaReact },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'VS Code', Icon: TbBrandVscode },
      { name: 'Postman', Icon: SiPostman },
      { name: 'JIRA', Icon: FaJira },
      { name: 'Azure DevOps', Icon: TbBrandAzure },
      { name: 'Vite', Icon: SiVite },
    ],
  },
  {
    name: 'Methodologies',
    skills: [
      { name: 'Agile / Scrum', Icon: BsKanban },
      { name: 'Performance Optimization', Icon: FaChartArea },
      { name: 'Clean Code', Icon: TbApi },
      { name: 'Code Review', Icon: FaGithub },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: 'SpiderWeb Technologies / Knovatek Inc.',
    position: 'MERN Stack Developer',
    duration: 'Jun 2025 - Present',
    location: 'Canada (Remote)',
    responsibilities: [
      'Develop and maintain scalable web applications using React.js, Next.js, Node.js, Express.js, MongoDB, and TypeScript.',
      'Use AI-assisted development workflows with Claude Code for feature development, debugging, refactoring, and documentation.',
      'Deploy and manage applications using AWS EC2, Docker containers, and AWS S3.',
      'Build reusable frontend architectures with React.js, Redux Toolkit, and MUI.',
      'Optimize backend and database performance using PostgreSQL, PostGIS, and MongoDB.',
      'Integrate secure payment gateways, third-party APIs, and JWT/OAuth authentication.',
      'Debug, test, and optimize using Jest, Supertest, and Chrome DevTools.',
    ],
    tech: ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'PostGIS', 'TypeScript', 'Redux Toolkit', 'MUI', 'AWS EC2', 'AWS S3', 'Docker', 'Jest', 'Supertest'],
  },
  {
    company: 'Cisconic Pvt. Ltd.',
    position: 'MERN Stack Developer',
    duration: 'Mar 2022 - Jun 2025',
    location: 'Hyderabad, India (Remote)',
    responsibilities: [
      'Delivered full-stack projects including RevolutioM, Patient Portal, Real Estate Platform, and E-Commerce System.',
      'Led end-to-end development of complex web platforms, architecting scalable frontend and backend solutions.',
      'Built secure RESTful APIs with Swagger documentation and implemented JWT, OAuth, and biometric authentication.',
      'Improved application performance through SQL query optimization, backend refactoring, and caching.',
      'Integrated in-app purchases, payment gateway modules, and third-party services.',
      'Participated in Agile ceremonies; mentored junior developers and conducted code reviews.',
    ],
    tech: ['React', 'TypeScript', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'MUI', 'Highcharts', 'Swagger', 'JWT', 'OAuth', 'Jest', 'Git', 'JIRA', 'Bitbucket', 'Agile'],
  },
  {
    company: 'Neeta Tech Tyre Pvt. Ltd.',
    position: 'Full Stack Web Developer (Intern)',
    duration: 'Jan 2020 - Jul 2020',
    location: 'Pune, India (On-site)',
    responsibilities: [
      'Developed the Doctor On Door Lifeline healthcare platform as part of the core development team.',
      'Built key frontend modules and integrated REST APIs with the user interface.',
      'Assisted in early-stage application development, testing, and debugging across the full stack.',
    ],
    tech: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Git'],
  },
];

export const projectGroups: ProjectGroup[] = [
  {
    category: 'full-stack',
    label: 'Full-Stack (MERN)',
    projects: [
      {
        name: 'RevolutioM 2.0',
        description:
          'Enterprise revenue & trade-promotion planning BI platform (micro-frontend React) for client vendors and distributors. Built interactive Highcharts dashboards, multi-dimensional filtering, drill-downs, trend forecasting, and automated reports for sales, profit, and market-share analysis at country/state/city/territory level.',
        tech: ['React', 'TypeScript', 'Redux', 'MUI', 'Highcharts', 'Micro-frontends', 'REST APIs', 'Jest'],
        github: null,
        live: null,
        image: Project_1,
      },
      {
        name: 'IVF Patient Management Portal',
        description:
          'Healthcare application for tracking IVF treatments with a color-coded treatment timeline, appointment scheduling, real-time medication and drug monitoring, and billing management for patients and providers.',
        tech: ['React', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'MUI', 'Redux', 'REST APIs'],
        github: null,
        live: null,
        image: Patient_Portal,
      },
      {
        name: 'Vegetables E-Commerce Platform',
        description:
          'Full-stack fresh-produce store with a dynamic catalog, attribute filters (organic/seasonal/freshness), cart and checkout, secure payment-gateway integration, and order and inventory management.',
        tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Payment Gateway', 'JWT', 'REST APIs'],
        github: null,
        live: null,
        image: E_Com,
      },
      {
        name: 'Real Estate Management Platform',
        description:
          'Centralized management of customers, properties, sites, towers, and flats with inquiry, booking, and transaction handling plus real-time data synchronization.',
        tech: ['React', 'Node.js', 'Express.js', 'MySQL', 'Redux', 'MUI', 'REST APIs', 'JWT'],
        github: null,
        live: null,
      },
      {
        name: 'Show Phase',
        description:
          'Event production & workforce management platform connecting organizers with crew. Worked across the stack on scheduling, crew assignment, and production tracking, plus backend services and APIs.',
        tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'AWS', 'REST APIs'],
        github: null,
        live: null,
        draft: true,
      },
      {
        name: 'Doctor On Door Lifeline',
        description:
          'Healthcare platform built during internship; developed key frontend modules and integrated REST APIs for seamless data flow.',
        tech: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs'],
        github: null,
        live: null,
      },
    ],
  },
  {
    category: 'frontend',
    label: 'Frontend (React)',
    projects: [
      {
        name: 'CarChaser',
        description:
          'Multi-portal online car auction & marketplace platform with distinct buyer, seller, and admin experiences: live auction listings, bidding flows, vehicle detail pages, and dashboards.',
        tech: ['React', 'Redux', 'TypeScript', 'REST APIs'],
        github: null,
        live: null,
        draft: true,
      },
    ],
  },
  {
    category: 'backend',
    label: 'Backend (Node / Express)',
    projects: [
      {
        name: 'CareChronicle',
        description:
          'Patient-controlled medical-records platform with a HIPAA-conscious architecture and AI-enabled features. Led backend development: secure RESTful APIs, role-based access so patients own and grant access to their records, and AI-assisted clinical-data structuring.',
        tech: ['Node.js', 'Express.js', 'MongoDB', 'AWS', 'JWT', 'AI Integrations'],
        github: null,
        live: null,
        draft: true,
      },
      {
        name: 'Florus',
        description:
          'Scalable school grocery & subscription platform enabling recurring institutional orders. Engineered backend subscription/billing logic, order management, and inventory APIs.',
        tech: ['Node.js', 'Express.js', 'PostgreSQL', 'REST APIs'],
        github: null,
        live: null,
        draft: true,
      },
    ],
  },
  {
    category: 'other',
    label: 'Academic & Early Work',
    projects: [
      {
        name: 'Online Quiz Portal',
        description: 'Web quiz application for creating, taking, and scoring timed assessments with result tracking.',
        tech: ['JavaScript', 'HTML5', 'CSS3'],
        github: null,
        live: null,
        draft: true,
      },
      {
        name: 'Avatar the Art Bender',
        description: 'College creative-coding project exploring interactive visuals and animation.',
        tech: ['JavaScript', 'HTML5', 'CSS3'],
        github: null,
        live: null,
        draft: true,
      },
      {
        name: 'Chemical Lab Inventory',
        description: 'Lab inventory system tracking chemicals, stock levels, and usage records for a college chemistry department.',
        tech: ['PHP', 'MySQL'],
        github: null,
        live: null,
        draft: true,
      },
      {
        name: 'Food Ordering System',
        description: 'Food-ordering application (Geo Petr College, Karjat) for menu management, order placement, and billing.',
        tech: ['Java', 'MySQL'],
        github: null,
        live: null,
        draft: true,
      },
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Master of Computer Science (MCS)',
    institution: 'MES Garware College of Commerce (Autonomous)',
    university: 'Savitribai Phule Pune University',
    years: '2018 - 2020',
  },
  {
    degree: 'Bachelor of Computer Science (BCS)',
    institution: "Rayat Shikshan Sanstha's Dada Patil Mahavidyalaya",
    university: 'Savitribai Phule Pune University',
    years: '2014 - 2018',
  },
];

export const languages = ['English', 'Hindi', 'Marathi'];

export const contactInfo: ContactItem[] = [
  { icon: Mail, title: 'Email', content: 'parharajay001@gmail.com', href: 'mailto:parharajay001@gmail.com' },
  { icon: Phone, title: 'Phone', content: '+91-7721908843', href: 'tel:+917721908843' },
  { icon: Github, title: 'GitHub', content: 'github.com/parharajay001', href: 'https://github.com/parharajay001' },
  { icon: Linkedin, title: 'LinkedIn', content: 'linkedin.com/in/ajay-parhar', href: 'https://www.linkedin.com/in/ajay-parhar' },
  { icon: Globe, title: 'Portfolio', content: 'parharajay001.github.io/portfolio', href: 'https://parharajay001.github.io/portfolio' },
  { icon: FileText, title: 'Resume', content: 'Download PDF', href: Resume },
];
```

- [ ] **Step 2: Verify all `react-icons` imports exist**

Run: `node -e "const fa=require('react-icons/fa'); const si=require('react-icons/si'); const tb=require('react-icons/tb'); const bs=require('react-icons/bs'); const ri=require('react-icons/ri'); const md=require('react-icons/md'); ['FaGitlab'].forEach(k=>{if(!fa[k])throw k}); ['SiPostgresql','SiSwagger','SiNextdotjs','SiSass','SiOpenai','SiWebpack'].forEach(k=>{if(!si[k])throw k}); ['TbApi','TbBrandAzure','TbBrandVscode'].forEach(k=>{if(!tb[k])throw k}); ['BsFingerprint','BsShieldLock','BsKanban'].forEach(k=>{if(!bs[k])throw k}); ['RiRobot2Line'].forEach(k=>{if(!ri[k])throw k}); ['MdPayment'].forEach(k=>{if(!md[k])throw k}); console.log('all icons OK')"`
Expected: `all icons OK`. If any throws, substitute a present icon from the same pack (e.g., `SiSass` ↔ `SiScss` not present → keep `SiSass`; `TbApi` missing → use `TbApiApp`).

- [ ] **Step 3: Delete unused data file**

```bash
git rm src/data/portfolio.ts
```

- [ ] **Step 4: Verify build passes**

Run: `npm run build`
Expected: passes clean (no missing-export or missing-icon errors). Note: components still import the old shapes — if build fails only inside section components, that's expected and fixed in later tasks; the data file itself must compile. To check the data file in isolation: `npx tsc --noEmit src/data/portfolioData.ts` may report cross-file issues — rely on the full `npm run build` after Task 12 for the final gate, but confirm no errors originate in `portfolioData.ts`.

- [ ] **Step 5: Commit**

```bash
git add src/data/portfolioData.ts
git commit -m "feat: consolidate full resume + Naukri content into portfolioData"
```

---

## Task 3: Shared `TerminalWindow` component + recolor `AnimatedBackground`

**Files:**
- Create: `src/pages/Portfolio/components/TerminalWindow.tsx`
- Modify: `src/components/AnimatedBackground.tsx`
- Modify: `src/components/AnimatedBackground.css`

- [ ] **Step 1: Create `TerminalWindow.tsx`**

```tsx
import type { ReactNode } from 'react';

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const TerminalWindow = ({ title = 'bash', children, className = '' }: TerminalWindowProps) => {
  return (
    <div className={`rounded-lg border border-border bg-background-secondary/70 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/40 ${className}`}>
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-background/40">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-dim">{title}</span>
      </div>
      <div className="p-5 md:p-6 font-mono text-sm">{children}</div>
    </div>
  );
};
```

- [ ] **Step 2: Replace `AnimatedBackground.tsx`**

```tsx
import './AnimatedBackground.css';

export const AnimatedBackground = () => {
  return (
    <div className="animated-background" aria-hidden="true">
      <div className="grid-overlay" />
      <div className="scanlines" />
    </div>
  );
};
```

- [ ] **Step 3: Replace `AnimatedBackground.css`**

```css
.animated-background {
  position: fixed;
  inset: 0;
  z-index: -1;
  background-color: rgb(var(--background));
  overflow: hidden;
}

.grid-overlay {
  position: absolute;
  inset: -50%;
  background-image:
    linear-gradient(rgb(var(--primary) / 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgb(var(--primary) / 0.05) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 75%);
  animation: drift 40s linear infinite;
}

@keyframes drift {
  from { transform: translateY(0); }
  to { transform: translateY(44px); }
}

.scanlines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    transparent 0,
    transparent 2px,
    rgb(0 0 0 / 0.02) 3px
  );
  pointer-events: none;
}
```

- [ ] **Step 4: Verify build passes**

Run: `npm run build`
Expected: `AnimatedBackground` and `TerminalWindow` compile (section components may still error — those are fixed later).

- [ ] **Step 5: Commit**

```bash
git add src/pages/Portfolio/components/TerminalWindow.tsx src/components/AnimatedBackground.tsx src/components/AnimatedBackground.css
git commit -m "feat: add TerminalWindow + matrix-grid AnimatedBackground"
```

---

## Task 4: Navbar — command-style nav, theme toggle, resume

**Files:**
- Modify (full replace): `src/pages/Portfolio/components/Navbar.tsx`

- [ ] **Step 1: Read the current Navbar to preserve its props interface**

Run: `cat src/pages/Portfolio/components/Navbar.tsx`
Confirm the prop names used by `Portfolio.tsx` (`activeSection`, `scrollToSection`, `isMenuOpen`, `setIsMenuOpen`). Keep the same prop signature.

- [ ] **Step 2: Replace `Navbar.tsx`**

```tsx
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { useTheme } from '../../../context/ThemeContext';
import { personalInfo } from '../../../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];

export const Navbar = ({ activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md font-mono">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <button onClick={() => scrollToSection('hero')} className="text-primary text-sm font-bold">
          ~/ajay-parhar<span className="terminal-cursor" />
        </button>

        <div className="hidden md:flex items-center gap-5 text-sm">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => scrollToSection(s)}
              className={`transition-colors hover:text-primary ${activeSection === s ? 'text-primary' : 'text-foreground-secondary'}`}
            >
              ./{s}
            </button>
          ))}
          <a
            href={personalInfo.resume}
            download
            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-primary text-primary hover:bg-primary hover:text-background transition-colors"
          >
            <Download size={14} /> resume
          </a>
          <button onClick={toggleTheme} aria-label="Toggle theme" className="text-foreground-secondary hover:text-primary">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="text-foreground-secondary hover:text-primary">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu" className="text-foreground">
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 px-4 py-3 flex flex-col gap-3 text-sm">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => scrollToSection(s)}
              className={`text-left transition-colors hover:text-primary ${activeSection === s ? 'text-primary' : 'text-foreground-secondary'}`}
            >
              ./{s}
            </button>
          ))}
          <a href={personalInfo.resume} download className="flex items-center gap-1.5 text-primary">
            <Download size={14} /> download resume.pdf
          </a>
        </div>
      )}
    </nav>
  );
};
```

- [ ] **Step 3: Verify build passes**

Run: `npm run build`
Expected: Navbar compiles.

- [ ] **Step 4: Commit**

```bash
git add src/pages/Portfolio/components/Navbar.tsx
git commit -m "feat: terminal-style navbar with theme toggle and resume download"
```

---

## Task 5: Hero — whoami block, stats, CTAs

**Files:**
- Modify (full replace): `src/pages/Portfolio/components/Hero.tsx`

- [ ] **Step 1: Replace `Hero.tsx`**

```tsx
import { ChevronDown, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo, stats } from '../../../data/portfolioData';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

export const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16 relative">
      <motion.div
        className="max-w-3xl w-full mx-auto relative z-10 font-mono"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary text-sm prompt">whoami</p>

        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-foreground leading-tight">
          {personalInfo.role}
          <span className="terminal-cursor" />
        </h1>

        <p className="mt-3 text-accent text-sm md:text-base">{personalInfo.title}</p>

        <p className="mt-6 font-sans text-foreground-secondary text-base md:text-lg leading-relaxed">
          {personalInfo.bio}
        </p>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-md border border-border bg-background-secondary/60 px-3 py-3">
              <div className="text-primary text-lg font-bold">{s.value}</div>
              <div className="text-dim text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-5 py-2.5 rounded bg-primary text-background font-semibold hover:bg-primary-hover transition-colors prompt-btn"
          >
            view --projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2.5 rounded border border-primary text-primary font-semibold hover:bg-primary hover:text-background transition-colors"
          >
            contact --me
          </button>
          <a
            href={personalInfo.resume}
            download
            className="px-5 py-2.5 rounded border border-border text-foreground-secondary font-semibold hover:border-primary hover:text-primary transition-colors flex items-center gap-2 justify-center"
          >
            <Download size={16} /> resume.pdf
          </a>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <ChevronDown className="text-primary" size={28} />
      </motion.div>
    </section>
  );
};
```

- [ ] **Step 2: Verify build passes**

Run: `npm run build`
Expected: Hero compiles.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Portfolio/components/Hero.tsx
git commit -m "feat: terminal hero with whoami block and stats"
```

---

## Task 6: About — `cat about.md`, bio, photo

**Files:**
- Modify (full replace): `src/pages/Portfolio/components/About.tsx`

- [ ] **Step 1: Replace `About.tsx`**

```tsx
import { motion } from 'framer-motion';
import { personalInfo } from '../../../data/portfolioData';
import { TerminalWindow } from './TerminalWindow';

export const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="section-title text-2xl md:text-3xl font-bold mb-8 prompt"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          cat about.md
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TerminalWindow title="about.md">
            <div className="grid md:grid-cols-[160px_1fr] gap-6 items-start">
              <img
                src={personalInfo.image}
                alt={personalInfo.name}
                className="w-32 h-32 rounded-md border border-border object-cover mx-auto md:mx-0"
              />
              <div className="font-sans text-foreground-secondary leading-relaxed space-y-4">
                <p>
                  <span className="font-mono text-primary">const</span>{' '}
                  <span className="font-mono text-foreground">developer</span>{' '}
                  <span className="font-mono text-dim">=</span> "{personalInfo.name}";
                </p>
                <p>{personalInfo.bio}</p>
                <p className="font-mono text-sm text-dim">📍 {personalInfo.location}</p>
              </div>
            </div>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
};
```

- [ ] **Step 2: Verify build passes**

Run: `npm run build`
Expected: About compiles.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Portfolio/components/About.tsx
git commit -m "feat: terminal about section"
```

---

## Task 7: Skills — categorized grid

**Files:**
- Create: `src/pages/Portfolio/components/Skills.tsx`

- [ ] **Step 1: Create `Skills.tsx`**

```tsx
import { motion } from 'framer-motion';
import { skillCategories } from '../../../data/portfolioData';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="section-title text-2xl md:text-3xl font-bold mb-10 prompt"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ls skills/
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              className="rounded-lg border border-border bg-background-secondary/50 p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h3 className="font-mono text-accent text-sm mb-4">
                <span className="text-dim">▾</span> {cat.name}/
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(({ name, Icon }) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1.5 rounded border border-border text-foreground-secondary hover:border-primary hover:text-primary transition-colors"
                  >
                    <Icon className="text-primary" size={14} />
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 2: Verify build passes**

Run: `npm run build`
Expected: Skills compiles.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Portfolio/components/Skills.tsx
git commit -m "feat: categorized skills section"
```

---

## Task 8: Experience — expandable timeline

**Files:**
- Modify (full replace): `src/pages/Portfolio/components/Experience.tsx`

- [ ] **Step 1: Replace `Experience.tsx`**

```tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { experience } from '../../../data/portfolioData';

export const Experience = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="section-title text-2xl md:text-3xl font-bold mb-10 prompt"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          git log --experience
        </motion.h2>

        <div className="space-y-4">
          {experience.map((exp, i) => {
            const isOpen = open === i;
            return (
              <div key={exp.company} className="rounded-lg border border-border bg-background-secondary/50 overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start gap-3 p-5 text-left"
                >
                  <ChevronRight
                    size={18}
                    className={`text-primary mt-1 shrink-0 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                  />
                  <div className="flex-1">
                    <div className="font-mono text-foreground font-bold">{exp.position}</div>
                    <div className="font-mono text-primary text-sm">{exp.company}</div>
                    <div className="font-mono text-dim text-xs mt-1">
                      {exp.duration} · {exp.location}
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pl-12">
                        <ul className="space-y-2 font-sans text-foreground-secondary text-sm">
                          {exp.responsibilities.map((r, j) => (
                            <li key={j} className="flex gap-2">
                              <span className="text-primary font-mono">›</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.tech.map((t) => (
                            <span key={t} className="font-mono text-xs px-2 py-1 rounded bg-background border border-border text-dim">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 2: Verify build passes**

Run: `npm run build`
Expected: Experience compiles.

- [ ] **Step 3: Commit**

```bash
git add src/pages/Portfolio/components/Experience.tsx
git commit -m "feat: expandable terminal experience timeline"
```

---

## Task 9: ProjectTree — file-tree grouped by tech

**Files:**
- Create: `src/pages/Portfolio/components/ProjectTree.tsx`
- Delete: `src/pages/Portfolio/components/Projects.tsx`

- [ ] **Step 1: Create `ProjectTree.tsx`**

```tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projectGroups } from '../../../data/portfolioData';

export const ProjectTree = () => {
  // key format: "groupIndex-projectIndex"
  const [openKey, setOpenKey] = useState<string | null>('0-0');

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="section-title text-2xl md:text-3xl font-bold mb-10 prompt"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          tree ~/projects
        </motion.h2>

        <div className="rounded-lg border border-border bg-background-secondary/50 p-5 font-mono text-sm">
          {projectGroups.map((group, gi) => (
            <div key={group.category} className="mb-4 last:mb-0">
              <div className="text-accent font-bold">
                <span className="text-dim">▾</span> {group.category}/
                <span className="text-dim font-normal"> # {group.label} ({group.projects.length})</span>
              </div>

              <div className="mt-1 border-l border-border ml-2 pl-4">
                {group.projects.map((p, pi) => {
                  const key = `${gi}-${pi}`;
                  const isOpen = openKey === key;
                  const isLast = pi === group.projects.length - 1;
                  return (
                    <div key={p.name} className="py-0.5">
                      <button
                        onClick={() => setOpenKey(isOpen ? null : key)}
                        className="w-full text-left flex items-center gap-2 group"
                      >
                        <span className="text-dim">{isLast ? '└─' : '├─'}</span>
                        <span className={`${isOpen ? 'text-primary' : 'text-foreground'} group-hover:text-primary transition-colors`}>
                          {p.name}.md
                        </span>
                        {p.draft && <span className="text-dim text-xs">(draft)</span>}
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-6 mt-2 mb-3 rounded-md border border-border bg-background p-4">
                              <p className="font-sans text-foreground-secondary leading-relaxed">{p.description}</p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {p.tech.map((t) => (
                                  <span key={t} className="text-xs px-2 py-1 rounded border border-border text-primary">
                                    [{t}]
                                  </span>
                                ))}
                              </div>
                              {(p.github || p.live) && (
                                <div className="mt-3 flex gap-4 text-xs">
                                  {p.github && (
                                    <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-foreground-secondary hover:text-primary">
                                      <Github size={14} /> source
                                    </a>
                                  )}
                                  {p.live && (
                                    <a href={p.live} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-foreground-secondary hover:text-primary">
                                      <ExternalLink size={14} /> live
                                    </a>
                                  )}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 2: Delete the old Projects component**

```bash
git rm src/pages/Portfolio/components/Projects.tsx
```

- [ ] **Step 3: Verify build passes**

Run: `npm run build`
Expected: ProjectTree compiles. (If build errors about `Projects` import in `Portfolio.tsx`, that's fixed in Task 12.)

- [ ] **Step 4: Commit**

```bash
git add src/pages/Portfolio/components/ProjectTree.tsx
git commit -m "feat: file-tree project explorer grouped by tech"
```

---

## Task 10: Education + Languages sections

**Files:**
- Create: `src/pages/Portfolio/components/Education.tsx`
- Create: `src/pages/Portfolio/components/Languages.tsx`

- [ ] **Step 1: Create `Education.tsx`**

```tsx
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../../../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="section-title text-2xl md:text-3xl font-bold mb-10 prompt"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          cat education.log
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5">
          {education.map((e) => (
            <div key={e.degree} className="rounded-lg border border-border bg-background-secondary/50 p-5">
              <GraduationCap className="text-primary mb-3" size={22} />
              <div className="font-mono text-foreground font-bold">{e.degree}</div>
              <div className="font-sans text-foreground-secondary text-sm mt-1">{e.institution}</div>
              <div className="font-sans text-dim text-sm">{e.university}</div>
              <div className="font-mono text-accent text-xs mt-2">{e.years}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 2: Create `Languages.tsx`**

```tsx
import { motion } from 'framer-motion';
import { languages } from '../../../data/portfolioData';

export const Languages = () => {
  return (
    <section id="languages" className="pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-lg border border-border bg-background-secondary/50 p-5 font-mono text-sm flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-dim prompt">echo $LANGUAGES</span>
          <span className="text-dim">→</span>
          {languages.map((l, i) => (
            <span key={l} className="text-primary">
              {l}
              {i < languages.length - 1 && <span className="text-dim"> ·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 3: Verify build passes**

Run: `npm run build`
Expected: both compile.

- [ ] **Step 4: Commit**

```bash
git add src/pages/Portfolio/components/Education.tsx src/pages/Portfolio/components/Languages.tsx
git commit -m "feat: education and languages sections"
```

---

## Task 11: Contact + Footer

**Files:**
- Modify (full replace): `src/pages/Portfolio/components/Contact.tsx`
- Modify (full replace): `src/pages/Portfolio/components/Footer.tsx`

- [ ] **Step 1: Replace `Contact.tsx`**

```tsx
import { motion } from 'framer-motion';
import { contactInfo } from '../../../data/portfolioData';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="section-title text-2xl md:text-3xl font-bold mb-4 prompt"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ./contact --me
        </motion.h2>
        <p className="font-sans text-foreground-secondary mb-8">
          Open to remote opportunities. Reach out through any channel below.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {contactInfo.map(({ icon: Icon, title, content, href }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              download={title === 'Resume' ? true : undefined}
              className="flex items-center gap-3 rounded-lg border border-border bg-background-secondary/50 p-4 hover:border-primary transition-colors group"
            >
              <Icon className="text-primary shrink-0" size={20} />
              <div className="min-w-0">
                <div className="font-mono text-xs text-dim">{title}</div>
                <div className="font-mono text-sm text-foreground group-hover:text-primary transition-colors truncate">
                  {content}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
```

- [ ] **Step 2: Replace `Footer.tsx`**

```tsx
import { personalInfo } from '../../../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="border-t border-border py-6 px-4">
      <div className="max-w-5xl mx-auto font-mono text-xs text-dim flex flex-col sm:flex-row justify-between gap-2">
        <span>// built with react + vite · © {new Date().getFullYear()} {personalInfo.name}</span>
        <span className="text-primary">$ exit 0</span>
      </div>
    </footer>
  );
};
```

- [ ] **Step 3: Verify build passes**

Run: `npm run build`
Expected: both compile.

- [ ] **Step 4: Commit**

```bash
git add src/pages/Portfolio/components/Contact.tsx src/pages/Portfolio/components/Footer.tsx
git commit -m "feat: terminal contact and footer"
```

---

## Task 12: Wire up Portfolio + cleanup + final verification

**Files:**
- Modify: `src/pages/Portfolio/Portfolio.tsx`
- Delete (if unused): `src/pages/Portfolio/components/Card/Card.jsx`, `src/pages/Portfolio/components/Accordion/`

- [ ] **Step 1: Replace `Portfolio.tsx`**

Note: the original has a duplicated scroll `useEffect` — collapse to one and add the new sections.

```tsx
import { useEffect, useState } from 'react';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Languages } from './components/Languages';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ProjectTree } from './components/ProjectTree';
import { AnimatedBackground } from '../../components/AnimatedBackground';

const SECTIONS = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = SECTIONS.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-transparent transition-colors duration-200">
      <AnimatedBackground />
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Experience />
      <ProjectTree />
      <Education />
      <Languages />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
```

- [ ] **Step 2: Check for stray imports of deleted/old components**

Run: `grep -rn "Projects'\|Card\|Accordion\|data/portfolio'" src --include=*.tsx --include=*.ts`
Expected: no references to `./components/Projects`, `Card`, `Accordion`, or `../../../data/portfolio` outside of `ProjectTree`/comments. If `Card.jsx` / `Accordion/` have no importers, delete them:

```bash
git rm src/pages/Portfolio/components/Card/Card.jsx
git rm -r src/pages/Portfolio/components/Accordion
```

(If grep shows an importer, leave that file and note it.)

- [ ] **Step 3: Final build**

Run: `npm run build`
Expected: PASS — clean tsc + vite build, zero errors.

- [ ] **Step 4: Visual verification**

Run: `npm run dev`, open the served URL, and confirm:
- Dark theme renders terminal aesthetic; toggle switches to light "paper terminal" and persists on reload.
- Hero shows role, blinking cursor, stats strip, working resume download.
- Skills shows all 8 categories with every skill from the spec.
- Experience entries expand/collapse; dates/titles match (Cisconic = MERN Stack Developer, Mar 2022–Jun 2025).
- Projects file-tree shows all 13 projects under full-stack/frontend/backend/other; clicking expands details.
- Education (2 degrees), Languages strip, and all Contact links + resume render.
- Mobile breakpoint: navbar menu opens, layout stacks cleanly.
- No console errors.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: wire up redesigned portfolio sections and remove dead components"
```

---

## Self-Review Notes

- **Spec coverage:** personalInfo/bio (Task 2/5/6), stats (2/5), all 8 skill categories incl. Next.js/PostgreSQL/PostGIS/OAuth/Biometric/Swagger/Supertest/AWS EC2/Claude Code/Codex/GitLab/Azure (2/7), 3 experience roles with corrected Cisconic title+date (2/8), all 13 projects grouped by tech (2/9), education (2/10), languages (2/10), contact + resume download (2/4/5/11), theme tokens + fonts + light/dark toggle (1), terminal aesthetic details — cursor/prompt/window chrome/grid/scanlines (1/3), file-tree projects (9). All spec sections map to a task.
- **Placeholders:** none — every step has complete code or an exact command.
- **Type consistency:** `projectGroups` (category/label/projects), `Project.draft`, `skillCategories` (name/skills), `ExperienceItem`, `ContactItem.href`, `personalInfo.resume` are defined in Task 2 and consumed with the same names in Tasks 4–11.
- **Known risk:** react-icons name availability is gated by Task 2 Step 2; PostGIS/Biometric/etc. reuse existing pack icons intentionally (no perfect brand icon exists).
```
