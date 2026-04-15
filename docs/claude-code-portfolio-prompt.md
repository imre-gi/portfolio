# Claude Code Master Prompt — UX Designer Portfolio & CV Website

> **Usage:** Feed this prompt to Claude Code along with your CV/resume file(s) and any portfolio documentation (PDFs, case study docs, project briefs, screenshots). Claude Code will analyze all provided materials and build the full site.

---

## System Instructions

You are building a portfolio website for a UX Designer, Researcher, and Solo-Founder. Before writing ANY code, you must:

1. **Analyze all provided documentation** — CV, resume, case study documents, project briefs, PDFs, images. Extract every usable detail: job titles, dates, companies, project names, methodologies used, tools, outcomes, metrics, testimonials, education, certifications, skills, and personal narrative.
2. **Build a structured content model** from the extracted data before touching code.
3. **Generate rich case studies** from the raw portfolio materials — don't just list projects, narratively reconstruct them with the structure defined below.

---

## Tech Stack

- **Framework:** Next.js 15+ (App Router, `app/` directory)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 + CSS variables for theming
- **UI Components:** Shadcn/ui + magicUI for accessible primitives (modals, accordions, etc.) but custom-built components for all major sections
- **Animations:** Framer Motion
- **Fonts:** Load via `next/font/google` — choose distinctive, non-generic pairings (NO Inter, Roboto, Arial, system fonts)
- **Images:** `next/image` with proper optimization
- **Deployment-ready:** Static export compatible (`output: 'export'` in next.config)
- **Content:** MDX for case studies (using `@next/mdx` or `contentlayer`) so the owner can edit without touching component code

---

## Design Direction

### Aesthetic Identity: "Editorial Precision meets Swiss Rationalism"

Think: a design monograph published by Lars Müller — not a tech startup template.

- **Typography-first:** A refined serif or sharp geometric display face for headings, paired with a humanist sans for body. Type IS the design. Massive type moments. Considered line-heights. Optical kerning.
- **Grid system:** A visible, intentional grid — asymmetric columns, generous margins, content that breathes. The grid should feel designed, not defaulted.
- **Color palette:** Restrained. Two colors maximum plus neutrals. One accent used surgically — never decoratively. Dark mode as default with a light toggle, or a sophisticated neutral palette.
- **Whitespace as material:** Whitespace is not empty — it's structural. Use it aggressively.
- **Motion philosophy:** Subtle, purposeful. Page transitions, scroll-triggered reveals, parallax on case study hero images. Nothing bounces, nothing wobbles. Easing curves should feel physical.
- **Micro-details that signal craft:** Custom cursor on desktop. Smooth scroll. Hover states that reward exploration. A loading state that isn't generic. Page transition animations between routes.

### What to AVOID

- Purple/blue gradient hero sections
- Generic card grids with rounded corners and shadows
- "Hi, I'm [Name] 👋" hero patterns
- Stock illustration aesthetics
- Bento grid layouts (overused)
- Any design that could be confused with a Framer/Webflow template

---

## Site Architecture

```
/                       → Home (hero + selected work + about teaser + contact CTA)
/about                  → Full bio, philosophy, skills, tools, timeline, CV download
/work                   → Case study index (filterable by type: UX Research, Product Design, Strategy)
/work/[slug]            → Individual case study (deep-dive)
/blog                   → Writing/thoughts index (optional, scaffold only)
/contact                → Contact form or CTA section
```

---

## Page Specifications

### Home (`/`)

1. **Hero Section**
   - Name displayed as large-scale typography (not a heading — a typographic moment)
   - Role descriptor: e.g., "UX Designer · Researcher · Founder"
   - A single compelling sentence — the person's design philosophy or thesis, extracted from their CV/bio
   - Subtle animated element (a line drawing, a morphing shape, or kinetic typography)
   - NO hero image unless it's exceptional and custom

2. **Selected Work**
   - 3–4 featured case studies
   - Each shows: project title, client/company, one-line descriptor, role, a single hero image
   - Layout: NOT a card grid. Use an editorial layout — alternating full-width and split compositions, staggered positions, varied image sizes
   - Hover interaction: image reveals, color shifts, or scale transforms

3. **About Teaser**
   - A short pull-quote or philosophy statement
   - "Learn more" link to `/about`
   - Optional: a small, considered portrait photo

4. **Contact CTA**
   - Minimal. Email link + LinkedIn. No form on home page.
   - Typographically bold — make the email address itself a design element.

### About (`/about`)

1. **Professional Narrative**
   - Written in first person, extracted and refined from CV materials
   - NOT a bullet list of skills — a story about why they do this work
   - Section on design philosophy / research approach

2. **Experience Timeline**
   - A vertical or horizontal timeline built from CV data
   - Each entry: role, company, dates, 1–2 sentence description
   - Visually distinctive — not a generic vertical line with dots

3. **Skills & Methods**
   - Organized by category: Research Methods, Design Tools, Strategy & Leadership
   - Display as a structured typographic layout, NOT tags/pills/badges
   - Include proficiency context where possible

4. **Education & Certifications**
   - Clean, minimal display

5. **CV Download**
   - A styled download button linking to a PDF version

### Work Index (`/work`)

1. **Filter/Navigation**
   - Filter by category (Research, Design, Strategy, Founding)
   - Smooth animated transitions when filtering

2. **Project Grid**
   - Each project card: hero image, title, client, year, tags
   - Use `next/image` with blur placeholders
   - Mix of landscape and portrait aspect ratios for visual rhythm
   - Hover states with meaningful interaction

### Case Study Page (`/work/[slug]`)

**This is the most important page. Structure every case study with this framework:**

```
┌─────────────────────────────────────────────┐
│  HERO                                        │
│  Full-bleed image or color block             │
│  Project title (large type)                  │
│  Client · Year · Duration                    │
│  Role(s)                                     │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  METADATA SIDEBAR          OVERVIEW          │
│  Client:                   2-3 paragraph     │
│  Timeline:                 project summary   │
│  Role:                     and context        │
│  Team:                                       │
│  Tools:                                      │
│  Methods:                                    │
│  Deliverables:                               │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  THE CHALLENGE                               │
│  What problem existed? What was the business │
│  context? What constraints were in play?     │
│  Include any relevant metrics or KPIs.       │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  RESEARCH & DISCOVERY                        │
│  What research was conducted?                │
│  Methods used (interviews, surveys, etc.)    │
│  Key findings and insights                   │
│  Include: participant counts, synthesis       │
│  methods, insight frameworks used            │
│  → Embed images: affinity maps, journey      │
│    maps, personas, research walls            │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  DESIGN PROCESS                              │
│  How did insights become solutions?          │
│  Information architecture decisions          │
│  Wireframes → High-fidelity evolution        │
│  Design system contributions                 │
│  → Embed images: wireframes, flows,          │
│    iterations, before/after comparisons      │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  TESTING & VALIDATION                        │
│  Usability testing approach                  │
│  Key findings from testing                   │
│  Iterations based on feedback               │
│  A/B test results if applicable             │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  OUTCOME & IMPACT                            │
│  Quantitative results (metrics, KPIs)        │
│  Qualitative impact                          │
│  Business outcomes                           │
│  What shipped? What changed?                 │
│  → Large, bold metric callouts               │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  REFLECTION                                  │
│  What was learned?                           │
│  What would be done differently?             │
│  How did this shape future practice?         │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  NEXT / PREV CASE STUDY NAVIGATION           │
└─────────────────────────────────────────────┘
```

**Case Study Generation Rules:**

- If the provided documentation has sparse detail on a project, infer reasonable UX process steps from the context (industry, role, deliverables mentioned) and mark inferred content with `{PLACEHOLDER: describe your...}` comments so the owner can fill in specifics.
- Always generate the FULL structure — never skip sections. If data is missing for a section, create the section with placeholder guidance.
- Extract and calculate metrics wherever possible. If a CV says "redesigned checkout flow," generate a metric callout block with `{PLACEHOLDER: e.g., "32% increase in conversion"}`.
- Every case study must feel like a complete narrative — beginning, middle, end.

### Contact (`/contact`)

- Large typography with email address
- Links to LinkedIn, Dribbble/Behance, GitHub if relevant
- Optional: a simple contact form (use a form service like Formspree or just `mailto:`)
- A closing statement or philosophy line

---

## Component Architecture

```
components/
├── layout/
│   ├── Header.tsx          → Fixed/sticky nav, minimal, logo + links
│   ├── Footer.tsx          → Colophon style: credits, links, copyright
│   ├── PageTransition.tsx  → Framer Motion AnimatePresence wrapper
│   └── GridOverlay.tsx     → Dev-mode grid visualization toggle
├── home/
│   ├── Hero.tsx
│   ├── SelectedWork.tsx
│   ├── AboutTeaser.tsx
│   └── ContactCTA.tsx
├── work/
│   ├── CaseStudyCard.tsx
│   ├── CaseStudyHero.tsx
│   ├── CaseStudySection.tsx   → Reusable section with title + content
│   ├── MetricCallout.tsx      → Big number + label for impact stats
│   ├── ImageGallery.tsx       → Lightbox-enabled image grid
│   ├── ProcessStep.tsx        → For showing methodology steps
│   └── ProjectNav.tsx         → Next/Prev case study
├── about/
│   ├── Timeline.tsx
│   ├── SkillsGrid.tsx
│   └── Philosophy.tsx
├── shared/
│   ├── SectionHeading.tsx
│   ├── AnimatedText.tsx    → Scroll-triggered text reveals
│   ├── CustomCursor.tsx    → Desktop-only custom cursor
│   ├── ScrollProgress.tsx  → Reading progress indicator
│   └── ThemeToggle.tsx     → Dark/light mode switch
```

---

## Content Data Model

Create a `/content` or `/data` directory with typed content:

```typescript
// types/content.ts

interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  year: number;
  duration: string;
  roles: string[];
  team?: string;
  tools: string[];
  methods: string[];
  deliverables: string[];
  category: "research" | "design" | "strategy" | "founding";
  featured: boolean;
  heroImage: string;
  summary: string;
  challenge: string;
  research: {
    description: string;
    findings: string[];
    images?: string[];
  };
  design: {
    description: string;
    iterations?: string;
    images?: string[];
  };
  testing?: {
    approach: string;
    findings: string[];
  };
  outcome: {
    description: string;
    metrics: Array<{ value: string; label: string }>;
  };
  reflection: string;
}

interface Experience {
  role: string;
  company: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  highlights?: string[];
}

interface Profile {
  name: string;
  title: string;
  philosophy: string;
  bio: string;
  email: string;
  linkedin?: string;
  portfolio?: string;
  location: string;
  skills: {
    research: string[];
    design: string[];
    strategy: string[];
    tools: string[];
  };
  education: Array<{
    degree: string;
    institution: string;
    year: number;
  }>;
  certifications?: string[];
}
```

---

## Performance & Quality Requirements

- **Lighthouse score:** Target 95+ on all metrics
- **Core Web Vitals:** Optimize LCP, CLS, FID
- **Accessibility:** WCAG 2.1 AA minimum. Semantic HTML. ARIA labels. Keyboard navigation. Skip links. Focus management on route changes.
- **SEO:** Proper `<title>`, meta descriptions, Open Graph tags, structured data (JSON-LD for Person + Portfolio)
- **Responsive:** Mobile-first. Breakpoints at 640, 768, 1024, 1280, 1536. Case studies must be fully readable on mobile.
- **Image optimization:** All images through `next/image`. WebP/AVIF. Blur placeholders. Lazy loading below fold.

---

## Documentation Analysis Instructions

When you receive the user's files, follow this process:

### Step 1 — Inventory

List every document provided and its type (CV, case study, project brief, screenshots, etc.)

### Step 2 — Extract

For each document, extract into the data model above. Create a `content-extraction.md` file summarizing what was found and what's missing.

### Step 3 — Generate Case Studies

For each project found in the portfolio materials:

- Map available information to the case study structure
- Fill gaps with reasonable UX process inferences based on the role and industry
- Mark all inferred content clearly with `{PLACEHOLDER}` tags
- Generate compelling section titles and narrative transitions

### Step 4 — Build

Implement the full Next.js site with all extracted and generated content.

### Step 5 — Review Checklist

Before delivering, verify:

- [ ] All CV data accurately represented
- [ ] All case studies follow the full structure
- [ ] Placeholder tags are clearly marked for missing data
- [ ] Mobile responsive on all pages
- [ ] Page transitions work
- [ ] Dark/light theme works
- [ ] All links functional
- [ ] Images optimized
- [ ] Accessibility basics in place
- [ ] SEO meta tags on all pages

---

## How to Use This Prompt

```bash
# In your terminal with Claude Code:

# 1. Create project directory
mkdir portfolio && cd portfolio

# 2. Place your documents in a /docs folder
#    - Your CV/Resume (PDF or DOCX)
#    - Case study documents
#    - Project screenshots
#    - Any portfolio exports

# 3. Run Claude Code with this prompt + your docs
claude

# 4. Paste this prompt and reference your docs:
#    "Use the master prompt in claude-code-portfolio-prompt.md
#     to build my portfolio site. My documents are in /docs."
```

---

_This prompt is designed to be reusable. Update the design direction section to match your personal brand, then let Claude Code handle the rest._
