import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "betika",
    title: "Betika",
    client: "Shop and Deliver Limited",
    year: 2019,
    duration: "6 months",
    roles: ["Research Lead", "Design Sprint Facilitator", "UX Designer"],
    team: "UX Designer, UI Designer, Country Manager, CTO, Head of Frontend",
    tools: ["Figma", "Miro", "VueJS", "Google Analytics"],
    methods: [
      "Stakeholder Interviews",
      "Competitor Analysis",
      "Customer Personas",
      "Empathy Mapping",
      "NPS Analysis",
      "Lean Canvas",
      "HEART Framework",
      "Heuristic Analysis",
      "Design Sprint",
    ],
    deliverables: [
      "Redesigned web app",
      "New navigation system",
      "Omnisearch feature",
      "Performance-optimised frontend",
    ],
    category: "design",
    featured: true,
    heroColor: "#1A3A1A",
    heroImage: "/images/portfolio/pag-2-1.jpg",
    galleryImages: [
      "/images/portfolio/pag-8-1.jpg",
      "/images/portfolio/pag-9-1.jpg",
      "/images/portfolio/pag-10-1.jpg",
    ],
    summary:
      "Redesigned an iGaming platform to thrive in emerging African markets where 1GB of mobile data costs $15.82 — making a full betting experience accessible on any device, without the data bill.",
    challenge: `Betika.com operates across Kenya, Mozambique, Zambia, DRC, and Tanzania — markets where mobile data is a luxury. In Mozambique, 1GB costs $15.82 (Ksh 1,605.57). The product was losing its grip on these markets due to design decisions that made it expensive to use — the platform consumed massive amounts of data just to browse matches. Users were abandoning sessions before placing a bet. The business needed a platform that felt complete and trustworthy while being radically lean on data usage.`,
    research: {
      description: `Research combined stakeholder interviews across all seniority levels (GM, Director of Technology, Risk Manager, Operations, Product Owner), NPS analysis with word-cloud synthesis, competitor analysis (Odibets, 4M users), customer personas, empathy maps, and a HEART framework analysis. A Lean Canvas workshop mapped business hypotheses against user needs. Heatmaps and page speed analysis provided quantitative baseline data.`,
      findings: [
        "87% of customers are soccer-only bettors — other sports were loading data for almost no usage",
        "The app bundle was 6.8MB — catastrophic on slow connections",
        "Navigation buried key verticals, users couldn't find what they came for",
        "Thousands of match events loaded on the home page, most never viewed",
        "Customers were acutely data-cost sensitive but still wanted a full-featured experience",
      ],
    },
    design: {
      description: `A Design Sprint compressed the problem, ideation, and validation phases into one focused week. The key design decisions: replace the full multi-sport listing with a single-sport default view (soccer), implement infinite scroll to preserve the sense of abundance, add an Omnisearch that works across all sports verticals, and revamp the navigation to surface previously hidden verticals. On the engineering side, the codebase moved from Angular 4 to VueJS — collapsing the app bundle from 6.8MB to 1.76MB. Server-side Gzip and Brotli compression added another layer of performance gain.`,
    },
    testing: {
      approach:
        "Prototype testing with users in target markets. Validated that the single-sport filter didn't feel limiting — users preferred it. Omnisearch tested against the old multi-level navigation for time-to-event-found.",
      findings: [
        "Single-sport default accepted positively — users found it cleaner, not restrictive",
        "Omnisearch reduced time-to-event by significant margin over old navigation",
        "Infinite scroll eliminated the 'missing matches' anxiety from previous paginated view",
      ],
    },
    outcome: {
      description:
        "The redesign fundamentally changed the economics of using Betika on mobile. Users could now engage with the full platform on a fraction of their previous data spend.",
      metrics: [
        { value: "−69%", label: "Data consumed per session" },
        { value: "−46%", label: "App crash rate" },
        { value: "+22%", label: "Signup to first-bet activation" },
        { value: "6.8MB → 1.76MB", label: "App bundle size reduction" },
        { value: "−28%", label: "Checkout drop-off at step 3" },
        { value: "+16%", label: "Repeat bet rate" },
      ],
    },
    reflection:
      "This project taught me that the most powerful constraint is often economic, not technical. Designing for affordability is designing for dignity — when you reduce data consumption, you're not just improving a metric, you're removing a barrier that was pricing people out of the product entirely. The Design Sprint format was essential: it forced alignment across a team that spanned Nairobi, London, and remote — and it produced a validated solution in days, not months.",
  },
  {
    slug: "northern-gas-and-power",
    title: "Northern Gas & Power",
    client: "Northern Gas and Power",
    year: 2018,
    duration: "6 months",
    roles: ["UX Developer", "UX Researcher"],
    team: "UX team, Business stakeholders, Engineering",
    tools: ["Figma", "Miro", "HTML/CSS", "JavaScript"],
    methods: [
      "User Research",
      "Data Visualization Design",
      "Usability Testing",
      "Stakeholder Workshops",
    ],
    deliverables: [
      "ClearVue Alpha dashboard",
      "ClearVue Beta dashboard",
      "IoT data visualization widgets",
      "UX research report",
    ],
    category: "research",
    featured: true,
    heroColor: "#0F1F2E",
    heroImage: "/images/portfolio/pag-11-1.jpg",
    galleryImages: [
      "/images/portfolio/pag-15-1.jpg",
    ],
    summary:
      "Designed data visualization dashboards to help businesses understand and manage their smart utility consumption — making complex IoT sensor data readable, actionable, and beautiful.",
    challenge: `Northern Gas and Power was building ClearVue, a smart utility management platform for business clients. The challenge was translating dense, high-frequency IoT sensor data — gas, electricity, and water consumption across multiple meters and buildings — into dashboards that non-technical facility managers could understand and act on. The existing data presentation was raw and overwhelming. Users couldn't identify anomalies, track against targets, or make procurement decisions from the interface.`,
    research: {
      description:
        "Led qualitative and quantitative UX research to understand how facility managers actually make utility decisions. Conducted stakeholder interviews to identify the key decision triggers, and mapped the mental models users applied to consumption data.",
      findings: [
        "Facility managers think in cost and comparison, not raw kWh figures",
        "Anomaly detection was the highest-value use case — users needed to spot problems fast",
        "Multi-building comparison was essential for portfolio managers",
        "Billing cycle alignment was critical — data needed to map to invoice periods",
      ],
    },
    design: {
      description:
        "Designed comprehensive data visualization widgets purpose-built for IoT adoption. Prioritized at-a-glance readings for the top metrics users cared about, with drill-down capability. The ClearVue Alpha product focused on single-site consumption monitoring; Beta expanded to portfolio management across multiple locations.",
    },
    outcome: {
      description:
        "The ClearVue product enabled Northern Gas and Power to offer a differentiated smart utility service to business clients, with a dashboard that made IoT data genuinely usable.",
      metrics: [
        { value: "2", label: "Products designed (ClearVue Alpha + Beta)" },
        {
          value: "{PLACEHOLDER}",
          label: "Reduction in time to identify consumption anomalies",
        },
        {
          value: "{PLACEHOLDER}",
          label: "User satisfaction score post-launch",
        },
      ],
    },
    reflection:
      "IoT data design is fundamentally about translation — converting machine-language (timestamps, sensor readings, delta values) into human-language (is this normal? is this a problem? what should I do?). The real design challenge isn't the chart type — it's deciding what question each visualization is answering.",
  },
  {
    slug: "genesis-global",
    title: "Genesis Global",
    client: "Genesis Global",
    year: 2019,
    duration: "8 months",
    roles: ["UX Designer", "Workshop Facilitator"],
    team: "UX team, Data Engineering, Product Management",
    tools: ["Figma", "Miro", "Analytics platforms"],
    methods: [
      "Stakeholder Workshops",
      "User Behavior Analysis",
      "Information Architecture",
      "Ideation Sessions",
    ],
    deliverables: [
      "Tracking system architecture",
      "Real-time segmentation UI",
      "User behavior dashboard",
    ],
    category: "strategy",
    featured: false,
    heroColor: "#1A0A2E",
    summary:
      "Designed a real-time user tracking and behavioral segmentation system for one of the world's leading gaming platform providers — enabling data-driven personalisation at scale.",
    challenge: `Genesis Global, a B2B gaming platform powering multiple casino brands, needed to move beyond aggregate analytics. Their operators wanted real-time visibility into user behavior to personalise experiences, trigger interventions, and build dynamic audience segments. The challenge was designing both the data architecture and the interface for a system that didn't yet exist — building the taxonomy, the tracking events, and the dashboard to surface insights operators could act on.`,
    research: {
      description:
        "Facilitated stakeholder workshops with operator teams and data engineering to map existing tracking gaps, define high-value behavioral signals, and prioritise the segment taxonomy.",
      findings: [
        "Operators made personalisation decisions on day-old data — real-time capability was transformative",
        "Segment definitions varied wildly across teams — a unified taxonomy was critical before any UI work",
        "The most valuable signals were behavioral, not demographic",
        "Engineers needed clear event taxonomy before implementation could begin",
      ],
    },
    design: {
      description:
        "Designed the information architecture for a tracking system that could capture user behavior events, process them in real-time, and surface actionable segments. Created the UI for segment building and behavior dashboards.",
    },
    outcome: {
      description:
        "Delivered a tracking system architecture and UI enabling real-time behavioral segmentation. Conversion funnel redesign increased registrations +38% and First Time Deposits +51%.",
      metrics: [
        { value: "+38%", label: "Registration rate" },
        { value: "+51%", label: "First Time Deposits" },
        { value: "5→3", label: "Funnel steps reduced" },
      ],
    },
    reflection:
      "Data design is a political act as much as a design act. Defining what gets tracked, how it's labeled, and who can act on it shapes how an organisation thinks about its users. The taxonomy workshop was as important as any wireframe — getting engineering, product, and operators to agree on what a 'high-value user' meant was the real deliverable.",
  },
  {
    slug: "play-together",
    title: "Play Together",
    client: "Legolas Invest Limited",
    year: 2018,
    duration: "4 months",
    roles: ["Lead UX Designer", "Design Sprint Facilitator"],
    team: "3x UI Designer, 2x Trotting Analyst",
    tools: ["Figma", "Miro", "Principle"],
    methods: [
      "Competitor Analysis",
      "GV Design Sprint",
      "Prototype Testing",
      "Usability Testing",
      "MVP Testing",
    ],
    deliverables: [
      "Game concept",
      "Full UI design",
      "Social features specification",
      "Prototype",
      "Beta program",
    ],
    category: "design",
    featured: false,
    heroColor: "#1A0A0A",
    heroImage: "/images/portfolio/pag-28-1.jpg",
    summary:
      "Ideated and designed a social trotting pool betting game — bringing friends together around the thrill of the race with shared bets, group pools, and live social features.",
    challenge: `The iGaming market was crowded with identical sportsbooks. The brief was to create a genuinely differentiated betting product that used social mechanics to drive engagement and retention. Trotting (harness racing) was an underserved market with a passionate audience. The challenge: design a game format that made pool betting social, accessible to casual bettors, and compelling enough to share.`,
    research: {
      description:
        "Researched trotting betting behavior, social gaming mechanics, and conducted concept testing. Applied GV Design Sprint methodology. Validated ideas with Proof of Concept tested in a beta program with selected customers. Task completion rate improved from 43% to 91%.",
      findings: [
        "Social accountability increased bet commitment and return visits",
        "Group pools created shared stakes — users wanted to invite friends",
        "Casual bettors were intimidated by traditional odds formats",
        "Live race viewing was the peak engagement moment",
      ],
    },
    design: {
      description:
        "Designed a game format built around shared betting pools, social invitations, and live race viewing. Friend groups could create private pools, track each other's selections in real time, and celebrate wins together. Team creation flow: 6-step onboarding from username to team photo to invite friends.",
    },
    testing: {
      approach:
        "Built an MVP, tested with selected beta customers. Applied approval threshold of 90% completion rate.",
      findings: [
        "Task completion rate increased from 43% to 91% after design iterations",
        "Team creation flow validated — users completed it without guidance",
        "Social sharing behavior exceeded expectations in beta",
      ],
    },
    outcome: {
      description:
        "Delivered a complete product concept, UI design, and social feature specification ready for engineering.",
      metrics: [
        { value: "43%→91%", label: "Task completion rate" },
        { value: "6", label: "Team creation steps" },
        { value: "{PLACEHOLDER}", label: "Beta participation rate" },
      ],
    },
    reflection:
      "Designing games is different from designing tools — games require tension, anticipation, and release. The social layer wasn't a feature; it was the emotional core of the experience. Every design decision had to serve that social contract between players.",
  },
  {
    slug: "match-10",
    title: "Match 10",
    client: "Legolas Invest Limited",
    year: 2017,
    duration: "3 months",
    roles: ["Lead UX Designer", "Product Designer"],
    team: "Design team, Product, Engineering",
    tools: ["Figma", "Miro"],
    methods: ["Concept Ideation", "Prototype Testing", "User Research", "Competitive Analysis"],
    deliverables: ["Game concept", "Full UI design", "Bet flow specification"],
    category: "design",
    featured: false,
    heroColor: "#0A1628",
    heroImage: "/images/portfolio/pag-33-1.jpg",
    summary:
      "Designed a pool betting game centered on predicting soccer match outcomes — a simple, engaging format that made football betting accessible to a mass market.",
    challenge: `Legolas.bet needed a pool betting product that would attract casual football fans who found traditional sportsbooks intimidating. The challenge was designing a game format simple enough for first-time bettors while offering enough variability to drive repeat play.`,
    research: {
      description:
        "Researched existing football pool formats (Pools, Quinela, Super 6), analyzed player motivation, and conducted concept testing.",
      findings: [
        "Simplicity was the primary acquisition driver — complex products lost casual users immediately",
        "Fixed prize pools created excitement that variable odds couldn't replicate",
        "Social proof (how many others are betting) influenced participation strongly",
      ],
    },
    design: {
      description:
        "Designed a 10-match prediction format with a clean, fast entry flow. Users predict outcomes for 10 selected matches and compete for a pooled prize. The design prioritized speed-to-bet and clarity of the prize structure.",
    },
    outcome: {
      description:
        "Delivered a complete game design ready for engineering handoff.",
      metrics: [
        {
          value: "{PLACEHOLDER}",
          label: "Average time to complete a full entry",
        },
        { value: "{PLACEHOLDER}", label: "Return rate after first play" },
      ],
    },
    reflection:
      "Pool betting is one of the oldest forms of wagering for good reason — the shared prize structure creates a different emotional experience than betting against the house. Designing the format meant understanding that emotion and building the UI to amplify it.",
  },
  {
    slug: "sport-navigation-sticky",
    title: "Sport Navigation Sticky",
    client: "Legolas Invest Limited",
    year: 2019,
    duration: "2 weeks (1 sprint)",
    roles: ["Lead UX Designer"],
    team: "3x UI Designer, 2x Trotting Analyst",
    tools: ["Figma", "Principle"],
    methods: [
      "Usability Testing",
      "Heuristic Analysis",
      "Design Sprint",
      "Prototype Testing",
    ],
    deliverables: [
      "Navigation redesign",
      "Sticky navigation component",
      "Cross-sport browsing pattern",
    ],
    category: "design",
    featured: false,
    heroColor: "#1A0808",
    heroImage: "/images/portfolio/pag-42-1.jpg",
    summary:
      "Redesigned the in-product navigation for a sportsbook to let users search thousands of events and move fluidly between sports — all without losing their place in the product.",
    challenge: `The Tembeza sportsbook had a navigation problem: thousands of events across dozens of sports, with no clear path between them. Users who arrived for football struggled to discover other verticals. Users browsing live events lost their context when switching sports. The navigation was a barrier to engagement rather than an enabler.`,
    research: {
      description:
        "Conducted usability testing on the existing navigation, mapping where users got lost, what they were looking for, and how long it took them to find specific events.",
      findings: [
        "Users relied on memory of URL patterns rather than navigation",
        "Sport switching required returning to the home page — a dead end",
        "Event search was absent — users scrolled through lists manually",
        "Sticky patterns from other apps (YouTube, Twitter) had trained expectations the product wasn't meeting",
      ],
    },
    design: {
      description:
        "Designed a sticky navigation component that persists as users scroll through events, with a sport-switching mechanism that preserves context. Added cross-sport search that indexes events across all verticals. The navigation floats with the user — always accessible, never intrusive.",
    },
    testing: {
      approach:
        "Hi-Fi prototype tested against original navigation. Measured time-to-event and navigation confidence.",
      findings: [
        "Sticky nav immediately understood — no learning curve",
        "Sport switching time reduced dramatically",
        "Odds type selector resolved a long-standing complaint",
      ],
    },
    outcome: {
      description:
        "Navigation pattern shipped within the 2-week sprint and became the template for the product's navigation architecture.",
      metrics: [
        { value: "2 weeks", label: "Design to shipping" },
        {
          value: "{PLACEHOLDER}",
          label: "Reduction in time-to-event",
        },
        { value: "{PLACEHOLDER}", label: "Cross-sport navigation increase" },
      ],
    },
    reflection:
      "Navigation design is almost never about structure — it's about mental models and momentum. The sticky pattern succeeded because it matched how users had already been trained to expect navigation to work on other platforms. Meeting established mental models is often more valuable than innovating on them.",
  },
  {
    slug: "fred-uxr-platform",
    title: "Fred — AI-Native UXR Platform",
    client: "Fred (Founder project)",
    year: 2024,
    duration: "Ongoing",
    roles: ["Founder", "CEO", "Product Designer", "UX Lead"],
    team: "Solo founder → growing team",
    tools: ["Figma", "Next.js", "Tailwind CSS", "Supabase", "TypeScript"],
    methods: [
      "Card Sorting",
      "First Click Testing",
      "Tree Testing",
      "Unmoderated Usability Testing",
      "Surveys",
      "Preference Tests",
      "5-Second Tests",
      "Jobs-to-be-Done",
    ],
    deliverables: [
      "Full SaaS platform",
      "Research repository",
      "Insights layer",
      "User Sphere session analysis",
    ],
    category: "founding",
    featured: true,
    heroColor: "#080808",
    summary:
      "Founded and built Fred — an all-in-one AI-native UX research platform that integrates 10+ research methods into a single coherent workflow, with AI-assisted synthesis and structured insight delivery.",
    challenge: `UX research is fragmented. Teams run studies in one tool, store findings in another, synthesize in a third, and try to share outputs in a fourth. By the time insights reach decision-makers, context is lost, evidence is detached, and bias has amplified. I founded Fred to collapse this fragmentation — one platform where research is planned, conducted, synthesized, and shared without the context loss that happens at every handoff.`,
    research: {
      description:
        "Conducted extensive JTBD research with UX researchers, product managers, and research operations leads across startups and scale-ups. Mapped the research workflow end-to-end, identifying where time and context were lost.",
      findings: [
        "Researchers spend 40%+ of their time on logistics, not insights",
        "Findings lose context every time they move between tools",
        "Stakeholders don't trust research they can't trace to raw data",
        "AI-assisted synthesis was a high-demand capability — but only if it preserved traceability",
      ],
    },
    design: {
      description:
        "Designed the full product architecture integrating card sorting, first click, tree testing, unmoderated usability testing, surveys, preference tests, and 5-second tests into a single coherent workflow. Designed the reporting and insights layer — shaping how raw study data becomes synthesis, behavioral analysis, and client-ready outputs. Directed the development of 'User Sphere' for real-time and replay-based session analysis with gaze tracking simulation, session playback, and heatmap overlays.",
    },
    outcome: {
      description:
        "Fred is live as a SaaS platform, serving UX researchers, product teams, and research operations leads.",
      metrics: [
        { value: "10+", label: "Research methods integrated natively" },
        { value: "AI-powered", label: "Synthesis and insight generation" },
        { value: "1", label: "Platform replacing 4+ fragmented tools" },
      ],
    },
    reflection:
      "Building Fred as a solo founder taught me something I'd always advised clients: the hardest design problem isn't the interface — it's the product thesis. Every design decision is downstream of whether you've correctly identified the job your users are hiring the product to do. Fred is my proof-of-work on that thesis.",
  },
];

export const featuredCaseStudies = caseStudies.filter((cs) => cs.featured);
