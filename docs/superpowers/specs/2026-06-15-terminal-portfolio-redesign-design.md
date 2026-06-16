# Terminal Portfolio Redesign — Design Spec

**Date:** 2026-06-15
**Owner:** Ajay Parhar
**Status:** Approved (pending spec review)

## Goal

Completely overhaul the UI and structure of the personal portfolio in a **terminal / code-editor aesthetic**, and update all content to match the latest resume and Naukri profile. No skill or project from either source may be dropped — the portfolio is the union of both.

## Constraints & Approach

- **Keep the existing stack:** React 18 + Vite + TypeScript + Tailwind CSS 3 + framer-motion + react-icons + lucide-react. No framework change, no rewrite.
- **Rebuild components in place**, replace the data layer, install distinctive fonts, recolor theme tokens, restructure sections.
- **Deploy path unchanged:** `gh-pages` (`npm run build` → `npm run deploy`).
- **Single source of truth:** consolidate to `src/data/portfolioData.ts`; delete the unused `src/data/portfolio.ts`.

## Visual System

### Aesthetic
Terminal / code editor. Near-black canvas, phosphor-green primary, amber secondary accent. Signature details: blinking cursor `▋`, `$`-prompt lines, monospace tags rendered as `[react]`, terminal "window chrome" wrappers, a very subtle scanline/grain overlay, and a hero type-in animation.

### Theme tokens — Dark (default)
| Token | Value |
|-------|-------|
| `--background` | `#0a0e0a` |
| `--background-secondary` | `#0f150f` |
| `--foreground` | `#cfe8cf` |
| `--foreground-secondary` | `#8fae8f` |
| `--primary` (green) | `#7fffa8` |
| `--primary-hover` | `#5fe089` |
| `--accent` (amber) | `#ffb86c` |
| `--dim` | `#5a6a5a` |
| `--border` | `#1c2a1c` |

### Theme tokens — Light ("paper terminal")
| Token | Value |
|-------|-------|
| `--background` | `#f4f1e8` |
| `--background-secondary` | `#e9e4d6` (cream surface) |
| `--foreground` | `#1c3a24` (ink green) |
| `--foreground-secondary` | `#4a6a52` |
| `--primary` | `#137a43` (darkened green for contrast) |
| `--accent` | `#b06a1f` (darkened amber) |
| `--border` | `#d6d0bd` |

Toggle reuses the existing `ThemeContext` (`light`/`dark`, persisted to `localStorage`, `darkMode: 'class'`). Accent green/amber are darkened in light mode to keep WCAG-AA contrast.

### Typography
- **Display / UI / headings / labels:** `JetBrains Mono` — the terminal voice.
- **Body / long paragraphs:** `IBM Plex Sans` — keeps multi-line copy legible.
- Loaded via Google Fonts `<link>` in `index.html` (or `@fontsource` if offline build is preferred). No generic defaults (Inter/Roboto/Arial).

### Motion
- Hero: staggered reveal + a brief "type-in" of the role line, blinking cursor.
- File-tree: smooth height expand/collapse on project open (framer-motion `AnimatePresence`).
- Hover micro-interactions on commands/links (underline sweep, prompt color shift).
- Recolor existing `AnimatedBackground` to a faint matrix/grid; keep it subtle.

## Page Structure (top → bottom)

1. **Navbar** — `~/ajay-parhar` prompt logo; section links styled as commands (`./about`, `./skills`, `./experience`, `./projects`, `./contact`); theme toggle; resume download. Mobile: collapsible menu (reuse existing pattern).
2. **Hero** — `whoami` block: role ("MERN Stack Developer"), animated cursor, tagline; **stats strip** (4+ yrs · 13+ projects · full-stack · open to remote); buttons `view --projects` / `contact --me`; resume download; profile photo optional in a terminal window frame.
3. **About** — `cat about.md` framing; updated bio (4+ years); photo in terminal-window chrome.
4. **Skills** — categorized blocks (see Content). Each skill = icon + mono label.
5. **Experience** — vertical timeline of 3 roles as expandable terminal log entries.
6. **Projects** — **file-tree explorer** grouped by tech; click a file to expand inline (description + tech tags + links).
7. **Education** — MCS & BCS.
8. **Languages** — English / Hindi / Marathi strip.
9. **Contact** — email, phone, GitHub, LinkedIn, portfolio, resume download.
10. **Footer** — `// built with react · © 2026` prompt line.

## Component Plan

Under `src/pages/Portfolio/components/`:

| Component | Status | Responsibility |
|-----------|--------|----------------|
| `TerminalWindow` | new (shared) | Window-chrome wrapper (traffic-light dots, title bar, body). Used by About, Experience, project detail. |
| `Navbar` | rewrite | Command-style nav, theme toggle, resume link. |
| `Hero` | rewrite | whoami block, stats, CTAs, type-in animation. |
| `About` | rewrite | `cat about.md`, bio, photo. |
| `Skills` | new | Categorized skill grid. |
| `Experience` | rewrite | Expandable timeline log entries. |
| `ProjectTree` | new (replaces `Projects`) | File-tree grouped by tech, expandable detail. |
| `Education` | new | Degrees list. |
| `Languages` | new | Language strip. |
| `Contact` | rewrite | Contact channels + resume. |
| `Footer` | rewrite | Prompt-line footer. |

Supporting: update `tailwind.config.js` tokens (add `accent`, `dim`, font families), recolor theme CSS variables (in `index.css` / wherever `--background` etc. are defined — to be located during implementation), update `AnimatedBackground`, add font links to `index.html`. Delete `Card.jsx`, `Accordion/` if unused after rewrite (verify first).

## Data Model — `src/data/portfolioData.ts`

Typed exports:

```ts
personalInfo: { name, role, title, location, email, phone, linkedin, github, portfolio, bio, image }
stats: { label, value }[]              // 4+ yrs, 13+ projects, full-stack, open to remote
skillCategories: { name, skills: { name, Icon }[] }[]
experience: { company, position, duration, location, responsibilities: string[], tech: string[] }[]
projectGroups: { category, label, projects: Project[] }[]
   Project: { name, description, tech: string[], github: string|null, live: string|null, image?: string }
education: { degree, institution, university, years }[]
languages: string[]
contactInfo: { icon, title, content, href }[]
```

## Content (authoritative)

### personalInfo
- name: **Ajay Ramdas Parhar**
- role: **MERN Stack Developer**
- location: **Pune, Maharashtra, India**
- email: parharajay001@gmail.com · phone: +91-7721908843
- linkedin: linkedin.com/in/ajay-parhar · github: github.com/parharajay001 · portfolio: parharajay001.github.io/portfolio
- bio: "Experienced and results-driven MERN Stack Developer with **4+ years** building scalable, high-performance web applications with MongoDB, Express.js, React.js, Node.js, and Next.js. Strong in TypeScript, clean architecture, payment-gateway and in-app-purchase integration, AWS (S3, EC2, Docker), and secure auth (JWT, OAuth, biometric). AI-assisted development workflows with Claude Code and OpenAI Codex."

### stats
4+ Years Experience · 13+ Projects · Full-Stack (MERN) · Open to Remote

### skillCategories
- **Frontend:** React.js, Next.js, Redux / Redux Toolkit, TypeScript, JavaScript (ES6+), HTML5, CSS3, SCSS, MUI (Material UI), TailwindCSS, Highcharts, Responsive Design
- **Backend:** Node.js, Express.js, RESTful APIs, Swagger, JWT, OAuth, Biometric Auth, In-App Purchases (iOS & Android), Payment Gateway Integration, AI Integrations
- **Databases:** MongoDB, Mongoose, PostgreSQL, PostGIS, MySQL
- **Cloud & DevOps:** AWS S3, AWS EC2, Docker, Git, GitHub, GitLab, Bitbucket, Webpack
- **AI Tools:** Claude Code, OpenAI Codex, AI-assisted development workflows
- **Testing:** Jest, Supertest, React Testing Library, Mocha
- **Tools:** VS Code, Postman, JIRA, Azure DevOps, Chrome DevTools, Vite
- **Methodologies:** Agile / Scrum, Performance Optimization, Clean Code Practices, Code Review

### experience
1. **MERN Stack Developer — SpiderWeb Technologies / Knovatek Inc.** · Canada (Remote) · Jun 2025 – Present
   - Develop and maintain scalable web apps with React.js, Next.js, Node.js, Express.js, MongoDB, TypeScript.
   - AI-assisted development workflows with Claude Code (feature dev, debugging, refactoring, docs).
   - Deploy/manage via AWS EC2, Docker, and AWS S3.
   - Build reusable frontend architectures with React.js, Redux Toolkit, MUI.
   - Optimize backend & DB performance with PostgreSQL, PostGIS, MongoDB.
   - Integrate secure payment gateways, third-party APIs, JWT/OAuth auth.
   - Debug/test/optimize with Jest, Supertest, Chrome DevTools.
   - tech: React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, PostGIS, TypeScript, Redux Toolkit, MUI, AWS EC2, AWS S3, Docker, Jest, Supertest
2. **MERN Stack Developer — Cisconic Pvt. Ltd.** · Hyderabad, Telangana, India (Remote) · Mar 2022 – Jun 2025
   - Delivered full-stack projects: RevolutioM, Patient Portal, Real Estate Platform, E-Commerce System.
   - Led end-to-end development of complex platforms; architected scalable frontend & backend.
   - Built secure RESTful APIs with Swagger docs; implemented JWT, OAuth, biometric auth.
   - Improved performance via SQL query optimization, backend refactoring, caching.
   - Integrated in-app purchases, payment gateways, third-party services.
   - Agile ceremonies; mentored juniors; code reviews; high code-quality standards.
   - tech: React, TypeScript, Redux, Node.js, Express.js, MongoDB, MySQL, MUI, Highcharts, Swagger, JWT, OAuth, Jest, Git, JIRA, Bitbucket, Agile
3. **Full Stack Web Developer (Intern) — Neeta Tech Tyre Pvt. Ltd.** · Pune, India (On-site) · Jan 2020 – Jul 2020
   - Developed the Doctor On Door Lifeline healthcare platform on the core team.
   - Built key frontend modules; integrated REST APIs with the UI.
   - Assisted in early-stage development, testing, debugging across the stack.
   - tech: JavaScript, HTML5, CSS3, REST APIs, Git

### projectGroups (by tech)

**full-stack/ (MERN)**
- **RevolutioM 2.0** — Enterprise revenue & trade-promotion planning BI platform (micro-frontend React) for client vendors and distributors. Interactive Highcharts dashboards, multi-dimensional filtering, drill-downs, trend forecasting, and automated reports for sales/profit/market-share analysis at country/state/city/territory level. *Tech: React, TypeScript, Redux, MUI, Highcharts, Micro-frontends, REST APIs, Jest.*
- **IVF Patient Management Portal** — Healthcare app for tracking IVF treatments with a color-coded treatment timeline, appointment scheduling, medication & drug monitoring, and billing. *Tech: React, Node.js, Express.js, MySQL, JWT, MUI, Redux, REST APIs.*
- **Vegetables E-Commerce Platform** — Full-stack fresh-produce store: dynamic catalog, attribute filters (organic/seasonal/freshness), cart/checkout, secure payment gateway, order & inventory management. *Tech: React, Node.js, Express.js, MongoDB, Payment Gateway, JWT, REST APIs.*
- **Real Estate Management Platform** — Centralized management of customers, properties, sites, towers, and flats with inquiry, booking, and transaction handling and real-time sync. *Tech: React, Node.js, Express.js, MySQL, Redux, MUI, REST APIs, JWT.*
- **Show Phase** — Event production & workforce management platform connecting organizers with crew; worked across the stack on scheduling, crew assignment, and production tracking plus backend services/APIs. *Tech: React, Node.js, Express.js, MongoDB, AWS, REST APIs.* *(draft description — verify)*
- **Doctor On Door Lifeline** — Healthcare platform (internship); built key frontend modules and integrated REST APIs for seamless data flow. *Tech: JavaScript, HTML5, CSS3, REST APIs.*

**frontend/ (React)**
- **CarChaser** — Multi-portal online car auction & marketplace platform with distinct buyer/seller/admin experiences: live auction listings, bidding flows, vehicle detail pages, dashboards. *Tech: React, Redux, TypeScript, REST APIs.* *(draft description — verify)*

**backend/ (Node / Express)**
- **CareChronicle** — Patient-controlled medical-records platform with HIPAA-conscious architecture and AI-enabled features. Led backend: secure RESTful APIs, role-based access so patients own and grant access to their records, AI-assisted clinical-data structuring. *Tech: Node.js, Express.js, MongoDB, AWS, JWT, AI integrations.* *(draft description — verify)*
- **Florus** — Scalable school grocery & subscription platform enabling recurring institutional orders; engineered backend subscription/billing logic, order management, and inventory APIs. *Tech: Node.js, Express.js, PostgreSQL/MongoDB, REST APIs.* *(draft description — verify)*

**other/ (Academic & early work)**
- **Online Quiz Portal** — Web quiz app for creating, taking, and scoring timed assessments with result tracking. *(draft description — verify)*
- **Avatar the Art Bender** — College creative-coding project exploring interactive visuals/animation. *(draft description — verify)*
- **Chemical Lab Inventory** — Lab inventory system tracking chemicals, stock levels, and usage for a college chemistry department. *(draft description — verify)*
- **Food Ordering System** — Food-ordering application (Geo Petr College, Karjat) for menu management, order placement, and billing. *Tech: Java, MySQL.* *(draft description — verify)*

### education
- **Master of Computer Science (MCS)** — MES Garware College of Commerce (Autonomous), Savitribai Phule Pune University · 2018–2020
- **Bachelor of Computer Science (BCS)** — Rayat Shikshan Sanstha's Dada Patil Mahavidyalaya, Savitribai Phule Pune University · 2014–2018

### languages
English · Hindi · Marathi

### contactInfo
Email parharajay001@gmail.com · Phone +91-7721908843 · GitHub github.com/parharajay001 · LinkedIn linkedin.com/in/ajay-parhar · Portfolio parharajay001.github.io/portfolio · Resume (download PDF)

## Verification

- `npm run build` passes clean (tsc + vite).
- `npm run dev` visual pass: dark + light themes, mobile + desktop breakpoints, file-tree expand/collapse, theme toggle persistence, resume download works.
- Confirm no console errors; confirm every skill and project above is present on the page.

## Open Items (to confirm during/after build)
- The 8 project descriptions marked **(draft — verify)** are inferred from the Naukri screenshot; Ajay to correct text/tech as needed.
- Location of theme CSS variables (`--background` etc.) to be found during implementation.
- Whether `Card.jsx` / `Accordion/` are safe to delete (verify no remaining imports).
