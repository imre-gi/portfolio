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
    tools: ["Figma", "Miro", "VueJS (SSR)", "R", "GraphQL", "RPC", "Google Analytics", "Hotjar"],
    methods: [
      "Stakeholder Interviews",
      "Competitor Analysis",
      "Customer Personas",
      "Empathy Mapping",
      "NPS Analysis",
      "Lean Canvas",
      "HEART Framework",
      "Heuristic Analysis",
      "GV Design Sprint",
    ],
    deliverables: [
      "Redesigned web app",
      "Omnisearch feature",
      "New navigation system",
      "Performance-optimised frontend (PHP → VueJS SSR; backend in R; data layer over GraphQL + RPC)",
      "Design Sprint documentation and validation report",
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
      "Redesigned an iGaming platform to thrive in emerging African markets where 1GB of mobile data costs $15.82 — making a full betting experience accessible on any device, on any connection.",
    challenge: `Betika.com operates across Kenya, Mozambique, Zambia, DRC, and Tanzania — markets where mobile data is not a background utility but a deliberate, rationed expense. In Mozambique, 1GB costs $15.82 (approximately Ksh 1,605.57). In DRC, connectivity is even more constrained.

The platform was haemorrhaging users not because the product was bad, but because it was expensive to use. A single session on the existing web app could consume a material fraction of a user's weekly data budget. Users were abandoning sessions before placing a bet — not from lack of intent, but because continuing to browse was too costly.

At the same time, the business operated in a highly competitive market. Odibets had grown to 4 million users by offering a leaner product. Betika's differentiation couldn't be price — it had to be experience. The brief was to redesign the platform to be radically lean on data consumption while preserving the full-featured feel that had built Betika's brand.

This was a constraint-driven design problem at scale: the constraint was economic, the users were real people making trade-offs, and the solution had to work on low-end Android devices over 2G connections.`,
    research: {
      description: `Research began with a full stakeholder interview circuit across all seniority levels — General Manager, Director of Technology, Risk Manager, Operations Lead, and Product Owner. Each interview surfaced a different facet of the problem: commercial pressure, technical debt, operational pain, and user behaviour. The findings were synthesised into a Lean Canvas that mapped business hypotheses against user needs.

NPS data was analysed using word-cloud synthesis to identify the most emotionally charged friction points. The analysis revealed patterns the support data hadn't captured — users weren't complaining about missing features; they were expressing frustration about the cost of using the product.

Competitor analysis focused on Odibets (4M users) as the benchmark for a data-light alternative. Heatmap analysis and page speed profiling established quantitative baselines: page weight, time-to-interactive, and session data consumption per key flow. These numbers became the performance contract for the redesign.`,
      findings: [
        "87% of customers bet on soccer only — other sports were consuming load time and data for near-zero engagement",
        "Total page weight on first load was 6.8 MB on the legacy PHP frontend — catastrophic on slow 3G/2G connections, causing high bounce before content load",
        "Navigation buried key verticals; users arrived for football and couldn't find their way anywhere else",
        "Thousands of match events loaded on the home page on every visit, most never viewed or interacted with",
        "Users were acutely data-cost sensitive but still expected a complete, trustworthy betting experience",
        "NPS word-cloud surfaced 'slow', 'expensive' and 'freezing' as the top negative sentiment clusters",
      ],
    },
    design: {
      description: `The solution was designed through a GV Design Sprint — a structured five-phase process that compressed stakeholder alignment, ideation, and prototype testing into one focused week. The Sprint format was chosen deliberately: Betika's team was distributed across Nairobi, London, and remote contributors, and a standard iterative process would have taken months to reach consensus.

Key design decisions from the Sprint: replace the full multi-sport listing with a single-sport default view (soccer — the sport 87% of users are actually there for); implement Omnisearch across all sports verticals so users can reach any event in two interactions instead of five; introduce infinite scroll to eliminate full-page reloads; and revamp navigation to surface previously buried verticals.

On the engineering side, the legacy PHP frontend was rebuilt as VueJS with server-side rendering, paired with a new backend in R and a GraphQL + RPC data layer engineered for the cheapest, fastest possible payload. Total page weight on first load collapsed from 6.8 MB to 1.76 MB. Server-side Gzip and Brotli compression added further reduction. This was a joint design-engineering decision: the performance gain was only achievable because the design was rebuilt from components, not retrofitted onto the existing codebase.`,
    },
    testing: {
      approach:
        "Prototype testing used the GV Sprint validation protocol: five users per round, structured task scenarios, and a pass/fail threshold of 80% task completion to proceed to build. Two rounds of prototype testing were conducted — the first identified navigation confidence gaps that led to a second iteration of the Omnisearch input affordance.",
      findings: [
        "Single-sport default accepted positively across all test participants — cleaner and faster, not restrictive",
        "Omnisearch reduced mean time-to-event from 47 seconds to 11 seconds versus old multi-level navigation",
        "Infinite scroll eliminated the 'missing matches' anxiety created by the previous paginated view",
        "Task completion rate improved from 43% to 91% after design iteration, clearing the 80% build threshold",
      ],
    },
    outcome: {
      description:
        "The redesign fundamentally changed the economics of using Betika on mobile. Users could now engage with the full platform on a fraction of their previous data spend. Business metrics followed the user behaviour improvements directly.",
      metrics: [
        { value: "-69%", label: "Data consumed per session" },
        { value: "-46%", label: "App crash rate" },
        { value: "+22%", label: "Signup-to-first-bet activation" },
        { value: "6.8 → 1.76 MB", label: "Page weight on first load" },
        { value: "-28%", label: "Checkout drop-off at step 3" },
        { value: "+16%", label: "Repeat bet rate" },
      ],
    },
    reflection:
      "This project made concrete something I'd theorised about for years: the most powerful design constraint is often economic, not technical. Designing for affordability is designing for dignity — when you reduce data consumption, you're not just improving a KPI, you're removing a barrier that was pricing people out of the product entirely. The GV Design Sprint proved its value in a distributed, multi-stakeholder context — producing a validated, build-ready solution in days, not the months a conventional process would have required.",
  },

  {
    slug: "instacoins-signup",
    title: "Instacoins Signup Overhaul",
    client: "Instacoins Group",
    year: 2022,
    duration: "18 months",
    roles: ["Head of User Experience", "Research Lead", "Design System Lead"],
    team: "2x Product Designer, 2x Frontend Engineer, Compliance Officer, Head of Product, CTO",
    tools: [
      "Figma",
      "Storybook",
      "Chromatic",
      "Maze",
      "Hotjar",
      "Mixpanel",
      "Miro",
    ],
    methods: [
      "Jobs-to-be-Done",
      "Funnel Analysis",
      "Moderated Usability Testing",
      "Unmoderated Research",
      "Tree Testing",
      "Cognitive Walkthrough",
      "A/B Testing",
      "WCAG 2.1 AA Audit",
      "ResearchOps",
    ],
    deliverables: [
      "Redesigned signup and KYC flow",
      "Design System (Figma + Storybook + Chromatic pipeline)",
      "ResearchOps programme (40+ studies)",
      "WCAG 2.1 AA compliance audit and remediation",
      "Conversion analytics framework",
    ],
    category: "research",
    featured: true,
    heroColor: "#0A1628",
    summary:
      "Led the overhaul of a regulated crypto signup and KYC funnel — using a 40+ study research programme, a new Design System, and a compliance-first design approach to deliver +38% registrations and KYC completion under 4 days for 90% of users.",
    challenge: `Instacoins Group is a regulated cryptocurrency exchange operating across the EU. Buying crypto for the first time is not just a UX challenge — it is a compliance challenge. Every new user must pass identity verification (KYC) before they can transact. The friction inherent in that process was collapsing the funnel.

The registration drop-off rate was severe: more than half of users who started the signup flow did not complete KYC. The reasons were varied — confusing document upload instructions, opaque processing status, unexpected delays, and a flow that felt untrusted at exactly the moments users needed reassurance.

Compounding the problem: regulatory requirements are non-negotiable. We couldn't remove KYC steps. We couldn't reduce what we collected. The entire design challenge was to make a mandatory, high-friction compliance process feel as smooth, transparent, and trustworthy as possible — without cutting corners that regulators would notice.

I joined as Head of User Experience with a mandate to fix conversion, build a research capability from scratch, and establish the design infrastructure — system, tooling, governance — that a regulated fintech at growth stage required.`,
    research: {
      description: `The first 90 days were entirely research. I established a ResearchOps programme that would eventually produce over 40 usability studies across the product portfolio — the most important of which were seven moderated sessions that mapped the signup-to-KYC journey in granular detail.

JTBD interviews with completed and abandoned users uncovered the emotional timeline of crypto signup: peak anxiety was not at the registration form — it was at the document upload step. Users didn't know what would happen to their documents. They didn't know how long the process would take. They didn't know what 'under review' meant or whether anything was moving.

Funnel analysis in Mixpanel established the precise drop-off topology: the largest single drop point was the document upload screen (41% abandonment), followed by the 'account under review' holding state (23% abandonment over the following 48 hours — users simply gave up waiting).

A cognitive walkthrough with the compliance officer produced a plain-language mapping of every required step and the reason behind it — this became the foundation for the new copy architecture and the progress transparency pattern.`,
      findings: [
        "41% of funnel abandonment occurred at the document upload screen — instruction clarity and trust signals were the primary causes",
        "23% of users who completed document upload abandoned during the 'under review' holding period — no progress visibility, no expectation setting",
        "Users with crypto experience dropped off less — but accounted for only 18% of acquisition; the funnel had to work for first-timers",
        "WCAG 2.1 AA audit identified 34 accessibility violations in the signup flow, including form labelling failures that broke screen reader navigation at every input field",
        "The design system had no semantic token layer — UI inconsistency across the 5-product portfolio was creating subliminal trust erosion at each product touchpoint",
      ],
    },
    design: {
      description: `The redesign operated on three parallel tracks.

Track 1 — Funnel redesign: Restructured the signup flow with progressive disclosure, collecting only what was needed at each stage. Added a persistent progress indicator with plain-language stage names. Redesigned the document upload experience with format-specific visual guides, real-time format validation, and an explicit confirmation state. Introduced an 'under review' screen with honest time estimates, email notification opt-in, and a status tracker that updated at each processing milestone.

Track 2 — Design System: Built a component library in Figma with a full semantic token architecture (colour, typography, spacing, border, elevation), connected to Storybook via a Figma to Storybook to Chromatic pipeline. This eliminated visual inconsistency across the portfolio and reduced frontend implementation time for new features. WCAG 2.1 AA was enforced at token level — contrast ratios, focus states, and touch targets were system-level constraints, not per-component decisions.

Track 3 — ResearchOps infrastructure: Established participant recruitment pipelines, standardised study templates for moderated and unmoderated research in Maze, a findings repository in Notion, and a bi-weekly research readout ritual connecting findings to roadmap decisions. This infrastructure meant the team could run 40+ studies over the 18-month engagement without research becoming a bottleneck.`,
    },
    testing: {
      approach:
        "Each major iteration of the signup flow was tested with 5 moderated participants before shipping, followed by an unmoderated Maze study (n=50+) to validate at volume. A/B testing via Mixpanel tracked conversion rate changes for each shipped version against the previous baseline.",
      findings: [
        "Document upload redesign reduced abandonment at that step from 41% to 14% — a 66% relative improvement",
        "Progress transparency pattern reduced 'under review' abandonment from 23% to 9% over the equivalent holding period",
        "WCAG remediation resolved all 34 identified violations; screen reader task completion on the signup flow improved from 38% to 94%",
        "Design System adoption reduced frontend inconsistency reports from 12 per sprint to under 2",
      ],
    },
    outcome: {
      description:
        "The combination of funnel redesign, trust-building copy, progress transparency, and accessibility remediation compounded into a significant registration uplift and a dramatically faster KYC completion rate — both directly impacting revenue and regulatory reporting.",
      metrics: [
        { value: "+38%", label: "Year-on-year registrations" },
        { value: "90%", label: "KYC completed in under 4 days" },
        { value: "-66%", label: "Document upload abandonment" },
        { value: "40+", label: "Usability studies conducted" },
        { value: "34 to 0", label: "WCAG 2.1 AA violations in signup" },
      ],
    },
    reflection:
      "Regulated product design is humbling because you can't design your way around the rules — you have to design trust into the rules themselves. The most valuable insight from this project was that compliance friction and user experience friction are not the same thing: you can have high compliance and low friction, but only if you treat transparency as a design material. The research programme was the foundation everything else was built on — without the 40+ studies, the funnel fixes would have been intuition-led guesswork.",
  },

  {
    slug: "genesis-global",
    title: "Genesis Global",
    client: "Genesis Global",
    year: 2019,
    duration: "8 months",
    roles: ["UX Designer", "Workshop Facilitator", "CRO Strategist"],
    team: "UX team, Data Engineering, Product Management, Operator Representatives",
    tools: ["Figma", "Miro", "Google Analytics", "Optimizely", "Segment"],
    methods: [
      "Stakeholder Workshops",
      "User Behavior Analysis",
      "Funnel Analysis",
      "Information Architecture",
      "Event Taxonomy Design",
      "CRO",
      "A/B Testing",
    ],
    deliverables: [
      "Real-time behavioral tracking architecture",
      "Event taxonomy and segment definitions",
      "Real-time segmentation UI",
      "User behavior dashboard",
      "CRO funnel redesign (registration and FTD)",
    ],
    category: "strategy",
    featured: false,
    heroColor: "#1A0A2E",
    summary:
      "Designed a real-time user tracking and behavioural segmentation system for one of the world's leading gaming platform providers — and redesigned the registration funnel to deliver +38% registrations and +51% First Time Deposits.",
    challenge: `Genesis Global is a B2B gaming platform powering dozens of white-label casino brands across Europe. Their operators had a problem that was invisible to them: they were making personalisation and intervention decisions on data that was a day old. By the time a high-value user showed signs of churn, the window for re-engagement had already passed.

The platform had aggregate analytics, but no real-time behavioural visibility and no operator-accessible segmentation tool. Every personalisation request went through the engineering team as a custom query. The design challenge was twofold: design the tracking system itself — the event taxonomy, the segment definitions, the data architecture — and then design the interface through which operators could build and act on segments without engineering support.

Concurrently, a separate brief asked for a CRO audit of the registration and first-deposit funnel across the platform's top three operator brands. The two workstreams informed each other: the funnel analysis revealed where tracking was blind, and the tracking design revealed where funnel interventions could be applied in real time.`,
    research: {
      description: `Facilitated a three-day stakeholder workshop series with operator teams, product managers, and data engineers. The first session mapped the existing analytics landscape — what was being tracked, what operators were actually using, and where the gaps were. The second focused on the decision triggers operators needed to act on. The third was a taxonomy workshop — co-designing the event naming conventions, segment hierarchies, and attribute schema with data engineering present. Getting this layer right before any UI work began was critical: the wrong taxonomy would produce a UI that could not be queried consistently.

Funnel analysis on the registration and FTD flows used session recordings and funnel reports to map the exact drop-off topology across operator brands.`,
      findings: [
        "Operators were making personalisation decisions on 24 to 48 hour old data — real-time capability was transformative for retention use cases",
        "Segment definitions varied significantly across operator teams — three operators had three incompatible definitions of 'high-value user'",
        "The most actionable signals were behavioural (session depth, return frequency, event clustering) not demographic",
        "Registration funnel had 5 steps where 3 would achieve the same regulatory requirement — the extra two were legacy architecture, not compliance",
        "FTD drop-off was concentrated at the payment method selection screen — users encountering unfamiliar method names without explanatory context",
      ],
    },
    design: {
      description: `The tracking system design was delivered as an information architecture document and UI specification — the IA document defined the event taxonomy (object-action naming convention), attribute schema, and segment hierarchy. The UI specification covered the segment builder interface (drag-and-drop condition blocks, real-time preview of segment size) and the behaviour dashboard (time-series charts, cohort comparison, event frequency heatmaps).

The CRO funnel redesign reduced the registration flow from 5 steps to 3 by consolidating form fields that had been split across steps for no regulatory reason. The payment method selection screen was redesigned with recognisable brand logos, short descriptor copy, and a 'recommended' indicator based on regional prevalence. Both changes were A/B tested before full rollout.`,
    },
    outcome: {
      description:
        "The real-time segmentation system gave operators their first capability to act on user signals within the session window. The CRO funnel redesign delivered measurable uplift on both registration rate and first-deposit conversion.",
      metrics: [
        { value: "+38%", label: "Registration rate" },
        { value: "+51%", label: "First Time Deposits" },
        { value: "5 to 3", label: "Registration funnel steps" },
        { value: "Real-time", label: "Segment availability (was 24-48h lag)" },
      ],
    },
    reflection:
      "Data design is a political act as much as a design act. Defining what gets tracked, how it gets labelled, and who can act on it shapes how an organisation thinks about its users for years. The taxonomy workshop was as important as any wireframe — getting engineering, product, and operators to agree on what a 'high-value user' meant was the real deliverable of the first phase. Everything downstream was implementation.",
  },

  {
    slug: "play-together",
    title: "Play Together",
    client: "Legolas Invest Limited",
    year: 2018,
    duration: "4 months",
    roles: [
      "Lead UX Designer",
      "Design Sprint Facilitator",
      "Product Designer",
    ],
    team: "3x UI Designer, 2x Trotting Analyst, Head of Product",
    tools: ["Figma", "Miro", "Principle", "InVision"],
    methods: [
      "Competitor Analysis",
      "GV Design Sprint",
      "Prototype Testing",
      "Usability Testing",
      "Beta MVP Testing",
      "Jobs-to-be-Done",
    ],
    deliverables: [
      "Game concept and product specification",
      "Full UI design across all game states",
      "Social features specification",
      "Prototype",
      "Beta programme design and results report",
    ],
    category: "design",
    featured: false,
    heroColor: "#1A0A0A",
    heroImage: "/images/portfolio/pag-28-1.jpg",
    summary:
      "Ideated and designed a social trotting pool betting game from concept to validated beta — bringing friends together around the thrill of the race with shared bets, group pools, and live social features.",
    challenge: `The iGaming market in 2018 was crowded with identical sportsbooks competing on odds and promotions, not experience. Legolas.bet wanted a genuinely differentiated product — something a user could not find at a competitor. The brief was open: create a new betting game format that used social mechanics to drive engagement and retention.

Trotting (harness racing) was an unusual choice of sport, but a deliberate one. It had a passionate core audience and almost no digital product attention — a clear white space. Pool betting was the game format: the shared-prize structure creates a fundamentally different emotional experience from betting against the house, and social mechanics amplify that shared stake.

The design challenge was making pool betting on trotting accessible to casual bettors — people who had never watched a harness race — while delivering the depth that would retain experienced trotting fans.`,
    research: {
      description: `Research combined JTBD interviews with existing trotting bettors and non-bettor social gaming users (the target expansion audience), a competitive analysis of social gaming products outside the betting vertical (including Kahoot, Words With Friends, and fantasy sports platforms), and a focused analysis of pool betting formats globally — Pools, Quinela, Supertoto, and Super 6.

The GV Design Sprint was the primary design method. Day 1 mapped the problem space with trotting analysts in the room — their domain knowledge was critical for understanding the race calendar, event format, and the betting decisions a player actually faces. Day 2 was ideation, Day 3 storyboarding, Day 4 prototyping, Day 5 testing with five recruited participants.`,
      findings: [
        "Social accountability created a return loop that individual betting didn't — users came back to check how friends were doing, not just to bet",
        "Group pools generated shared emotional stake — the bet became a social artefact, not a private transaction",
        "Casual bettors were intimidated by traditional odds formats; fixed-prize pool structures removed the need to understand odds entirely",
        "Live race viewing was the peak engagement moment — the product had to be built around that emotional climax",
        "The team creation flow needed to be completable without explanation — any friction in the invite step would kill social virality",
      ],
    },
    design: {
      description: `Designed a game format built around shared betting pools, social invitations, and live race viewing. Friend groups create private pools, nominate team names and avatars, make selections, and then watch the race together with a live social commentary layer.

The team creation flow was designed as a 6-step onboarding: username, team name, team photo, sport/race selection, pick selections, invite friends. Each step builds investment before the invite — by the time a user reaches the invite screen, they have already committed to their team identity and want others to join their specific pool.

The race viewing screen was the centrepiece of the UI: real-time position indicators for each team's selected horse, a shared commentary feed, and a celebration state explicitly engineered for screenshotting and sharing.`,
    },
    testing: {
      approach:
        "Built a functional MVP deployed to a controlled beta cohort of selected customers. Each participant was given a structured task list covering team creation, race selection, inviting friends, and watching a live race. The approval threshold was 90% task completion rate — below that, the design would iterate before wider rollout.",
      findings: [
        "Task completion rate increased from 43% (first prototype) to 91% (post-iteration) — clearing the 90% threshold",
        "Team creation flow was completed without guidance by 88% of beta participants",
        "Social sharing in beta exceeded pre-study predictions — the win celebration screen generated 3.2x the expected share rate",
        "Invite step had the highest drop rate in v1; redesigning it as a contact-list picker resolved the friction",
      ],
    },
    outcome: {
      description:
        "Play Together delivered a validated game concept, full UI specification, and beta results report ready for engineering scale-up — the first genuinely differentiated social betting product in the Legolas.bet portfolio.",
      metrics: [
        { value: "43% to 91%", label: "Task completion rate" },
        { value: "3.2x", label: "Win celebration share rate vs. prediction" },
        { value: "6", label: "Team creation steps — all validated in beta" },
      ],
    },
    reflection:
      "Designing games is different from designing tools — games require tension, anticipation, and release. The social layer in Play Together wasn't a feature added to a betting product; it was the emotional core that made the product worth using. Every design decision had to serve the social contract between players: the shared stake, the shared viewing, the shared celebration. When I got that architecture right in the GV Sprint, the individual screen designs almost wrote themselves.",
  },

  {
    slug: "match-10",
    title: "Match 10",
    client: "Legolas Invest Limited",
    year: 2017,
    duration: "3 months",
    roles: ["Lead UX Designer", "Product Designer"],
    team: "Design team, Product, Engineering, Football Analyst",
    tools: ["Figma", "Miro", "InVision"],
    methods: [
      "Concept Ideation",
      "Competitive Analysis",
      "Prototype Testing",
      "Usability Testing",
      "User Research",
    ],
    deliverables: [
      "Game concept and format specification",
      "Full UI design",
      "Bet entry flow",
      "Prize structure specification",
    ],
    category: "design",
    featured: false,
    heroColor: "#0A1628",
    heroImage: "/images/portfolio/pag-33-1.jpg",
    summary:
      "Designed a 10-match football prediction pool game — taking a format as old as the Victorian football pools and rebuilding it for a mobile-first audience that expects simplicity, speed, and social proof.",
    challenge: `Legolas.bet's pool betting vertical needed a football product. Football was the dominant betting sport in every target market — but pool betting on football had largely died out in digital form, displaced by sportsbooks offering real-time odds. The opportunity was in the casual bettor segment: people who followed football but found sportsbook odds intimidating.

The challenge was designing a game format simple enough to attract first-time pool bettors while offering enough week-to-week variability and prize excitement to drive repeat play. The reference products — Vernons Pools, Quinela, Super 6 — all had decades of product-market fit but were designed for desktop-first, older audiences. The task was to extract the core emotional appeal and rebuild it for a mobile-native, social-media-fluent user.`,
    research: {
      description: `Competitive analysis covered three generations of football pool products: the Victorian model (Vernons, Littlewoods), the modern digital format (Super 6, Sky Sports), and the fantasy sports adjacency (FPL, Draft Kings). Each offered different lessons about what makes football pool betting compelling.

The critical insight came from studying 'footy tipping' — the informal Australian pub tradition of tipping match results on a sheet posted on the wall with everyone's name visible. The emotional appeal was not the prize; it was the social visibility. Everyone could see how everyone else was doing. This insight directly shaped the Match 10 design.`,
      findings: [
        "Simplicity was the primary acquisition driver — pool bettors who found odds intimidating responded immediately to fixed-outcome prediction formats",
        "Fixed prize pools created a shared excitement that variable odds could not replicate",
        "Social proof (how many others are participating, live leaderboard) influenced repeat participation strongly",
        "Footy tipping research revealed that visibility of others' picks was more engaging than the prize — social transparency drove return visits",
        "Speed-to-completion was critical: if picking 10 matches took more than 90 seconds, casual bettors abandoned the entry",
      ],
    },
    design: {
      description: `Designed a 10-match prediction format built around three principles: simplicity, speed, and social transparency.

The entry flow was designed for 90-second completion: swipe left/right for home/away/draw on each match card, progressive reveal of prize pool as entries accumulate, and a confirmation screen that doubles as a share card. The share card was designed before the entry flow — the social sharing moment was the acquisition mechanic, and the design had to make it as frictionless as possible.

Prize structure design was collaborative with the football analyst and commercial team: tiered prizes for 10/9/8 correct predictions, with the jackpot structure explained in plain language at the entry confirmation step. The design explicitly avoided displaying odds or probabilities — the simplicity of the format was its differentiator.

A live leaderboard was included as a post-entry engagement surface — directly implementing the footy tipping social transparency insight.`,
    },
    outcome: {
      description:
        "Match 10 delivered a complete, engineering-ready game specification that became one of the foundation pool betting products in the Legolas.bet portfolio — and the social transparency pattern it established was later applied to Play Together.",
      metrics: [
        {
          value: "Under 90s",
          label: "Target time-to-complete entry (validated in testing)",
        },
        { value: "10 matches", label: "3 outcomes each — zero learning curve" },
        {
          value: "1st",
          label: "Social leaderboard in pool betting at Legolas.bet",
        },
      ],
    },
    reflection:
      "The footy tipping research was the turning point. I'd been thinking about pool betting as a prize mechanic, not a social visibility mechanic. Once I understood that the pub wall with everyone's names was the product, the design became obvious: make the entry fast and make the leaderboard social. Pool betting is one of the oldest forms of wagering for good reason — and understanding that reason, not just the format, was what made this design work.",
  },

  {
    slug: "sport-navigation-sticky",
    title: "Sport Navigation Sticky",
    client: "Legolas Invest Limited",
    year: 2018,
    duration: "2 weeks (1 sprint)",
    roles: ["Lead UX Designer"],
    team: "3x UI Designer, Frontend Lead, Product Owner",
    tools: ["Figma", "Principle", "Maze"],
    methods: [
      "Usability Testing",
      "Heuristic Analysis",
      "Design Sprint",
      "Prototype Testing",
      "Competitive Benchmarking",
    ],
    deliverables: [
      "Sticky navigation component",
      "Cross-sport browsing pattern",
      "Odds type selector",
      "Navigation redesign documentation",
    ],
    category: "design",
    featured: false,
    heroColor: "#1A0808",
    heroImage: "/images/portfolio/pag-42-1.jpg",
    summary:
      "Redesigned the in-product navigation for the Legolas.bet sportsbook — solving a fundamental problem: thousands of events across dozens of sports, and users who couldn't move between them without losing their context.",
    challenge: `The Legolas.bet sportsbook had grown from a focused pool betting product to a full multi-sport sportsbook within a single year — three verticals (Pool Betting, Sportsbook, Casino) launched from scratch. That velocity had left the navigation architecture unresolved. The product had thousands of events but no coherent path between them.

Users who arrived for football had no clear route to live events. Users browsing live events lost their context the moment they tried to switch sports. Event search was absent entirely — users were manually scrolling lists to find specific matches. The navigation was a friction layer actively limiting engagement depth and cross-sport discovery.

A single two-week sprint was allocated to design, test, and ship a navigation solution. The constraint was the opportunity: with a clear scope and a hard deadline, the solution had to be focused and immediately implementable.`,
    research: {
      description: `Conducted structured usability testing on the existing navigation with five participants, each given identical task scenarios: find a specific live event, switch from football to tennis, locate the casino, find the odds format setting. Mapped where users hesitated, where they backtracked, and where they gave up.

Competitive benchmarking covered five sportsbooks with high user ratings (William Hill, bet365, Betway, Unibet, FanDuel) with specific focus on navigation patterns, scroll behaviour, and cross-vertical access. The benchmarking surfaced two patterns that had become user expectations through high exposure: sticky navigation and persistent search.`,
      findings: [
        "Users relied on memory of URL patterns rather than navigation — the information architecture was not being internalised",
        "Sport switching required returning to the home page, then re-navigating — a 4-6 tap round trip for a single context change",
        "Event search was absent — users scrolled through event lists manually, average 47-second time-to-event",
        "Odds type preferences had to be reset every session — a known, frequently reported frustration",
        "Sticky navigation patterns from YouTube, Twitter, and competing sportsbooks had established user expectations the product was not meeting",
      ],
    },
    design: {
      description: `Designed a sticky navigation component that persists as the user scrolls through event listings — sport tabs, live indicator, and search always accessible at the top of the viewport.

The sport-switching mechanism preserves context: switching from Football to Tennis returns the user to the same depth within the new sport, not a top-level home page. Cross-sport search indexes events across all verticals with real-time results — users can type a team name or league and arrive in one interaction.

An odds type selector was added to the persistent nav — a single tap to toggle between fractional, decimal, and American odds, persisted to user preferences. This resolved the most consistently reported usability complaint in the product.

The component was designed to be implementable within the two-week window — no new API calls, no backend changes required.`,
    },
    testing: {
      approach:
        "Hi-Fi prototype tested in Maze against the original navigation using identical task scenarios. Measured task completion rate, time-on-task, and navigation confidence (self-reported post-task scale).",
      findings: [
        "Sticky nav understood immediately by all test participants — no observable learning curve",
        "Sport switching time reduced from 47 seconds mean to 8 seconds mean — 83% reduction",
        "Cross-sport search resolved the time-to-event problem — all participants found target events in under 15 seconds",
        "Odds type selector noted as an improvement by 100% of participants, unprompted",
      ],
    },
    outcome: {
      description:
        "Navigation pattern designed, tested, and shipped within the 2-week sprint. It became the template for the product's navigation architecture across subsequent versions of the Legolas.bet platform.",
      metrics: [
        { value: "2 weeks", label: "Design-to-ship cycle" },
        { value: "-83%", label: "Sport switching time" },
        {
          value: "Under 15s",
          label: "Time-to-event via search (was 47s scrolling)",
        },
      ],
    },
    reflection:
      "Navigation design is almost never about structure — it's about mental models and momentum. The sticky pattern worked because it matched expectations users had built through high-frequency exposure to other digital products. Meeting established mental models is often more valuable than innovating on them — especially in a product category where users arrive with a specific task and very little patience for novelty in the navigation.",
  },

  {
    slug: "fred-uxr-platform",
    title: "Fred — AI-Native UXR Platform",
    client: "Fred (Founder project)",
    year: 2024,
    duration: "Ongoing",
    roles: ["Founder", "CEO", "Product Designer", "UX Lead"],
    team: "Solo founder to growing team",
    tools: [
      "Figma",
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "TypeScript",
      "OpenAI API",
    ],
    methods: [
      "Jobs-to-be-Done",
      "Card Sorting",
      "First Click Testing",
      "Tree Testing",
      "Unmoderated Usability Testing",
      "Surveys",
      "Preference Tests",
      "5-Second Tests",
      "Continuous Discovery",
    ],
    deliverables: [
      "Full SaaS platform (web app)",
      "10+ integrated research methods",
      "AI-powered synthesis and insight layer",
      "User Sphere — session analysis with heatmaps and replay",
      "Research repository and tagging system",
      "Participant recruitment and management system",
    ],
    category: "founding",
    featured: true,
    heroColor: "#080808",
    heroImage: "/images/portfolio/fred-dashboard.webp",
    summary:
      "Founded and built Fred — an all-in-one AI-native UX research platform that integrates 10+ research methods into a single coherent workflow, with AI-assisted synthesis and structured, traceable insight delivery.",
    challenge: `UX research is fragmented by design — or rather, by the accident of how the tooling market evolved. Teams run studies in one tool, store findings in another, synthesise in a third, and share outputs in a fourth. Each handoff loses context. Evidence detaches from conclusions. By the time insights reach decision-makers, the traceability is gone and the findings are contested.

I spent 15 years watching this fragmentation cause the same problem across every organisation I worked with: research that was trusted by the researchers who conducted it and distrusted by the stakeholders who received it — because the distance between raw data and insight recommendation was invisible.

I founded Fred to collapse that distance. One platform where research is planned, conducted, synthesised, and shared — and where every insight is traceable to the session data that produced it. The AI layer is not the product; it is the accelerant that makes synthesis fast enough to keep pace with product delivery cycles.

The hardest part of founding Fred was not building the platform — it was resisting the temptation to build the product I wished existed at my previous jobs, rather than the product UX researchers, product managers, and research operations leads actually needed. The JTBD research that preceded the first line of code was the most important work I did.`,
    research: {
      description: `Before writing a line of code, I conducted an extensive JTBD research programme with three distinct user groups: UX researchers (the primary users), product managers (the primary consumers of research outputs), and research operations leads (the people responsible for scaling research capability in their organisations).

The interviews mapped the research workflow end-to-end across organisations of different sizes and maturity levels. The key insight — the one that shaped the product thesis — was that the fragmentation was not just a tooling problem; it was a trust problem. Stakeholders did not trust research they couldn't interrogate. Researchers did not trust that their work would survive the journey from finding to recommendation intact.

I ran continuous discovery interviews throughout the first year of building — every two weeks, five users, focused on one specific part of the product. This rhythm kept the build tightly coupled to actual user pain and prevented the common founder failure mode of building features that are technically impressive but do not address the core job.`,
      findings: [
        "Researchers spend 40%+ of their working time on logistics (recruiting, scheduling, note-taking, synthesis formatting) — not on generating insights",
        "Insights lose evidential weight every time they are copied from one tool to another — the journey from raw session data to stakeholder deck destroys traceability",
        "Stakeholders distrust research they cannot trace to its source — 'where does this come from?' is the question that kills research credibility in sprint reviews",
        "AI-assisted synthesis had high demand — but only if the AI output was verifiable against raw data; researchers would not use synthesis they couldn't check",
        "Research operations leads needed a system that could scale study throughput without scaling team headcount proportionally",
      ],
    },
    design: {
      description: `Fred's product architecture was designed around a single principle: every insight must be traceable to its source evidence, and that traceability must be visible to non-researchers.

The platform integrates card sorting, first click testing, tree testing, unmoderated usability testing, surveys, preference tests, and 5-second tests — not as isolated tools but as components of a unified study-to-insight workflow. A study started in any method produces raw data that feeds directly into the insights layer, with AI-assisted synthesis that surfaces patterns, clusters observations, and drafts finding statements — always with citation links to the specific session moments that generated them.

User Sphere, the session analysis product within Fred, provides real-time and replay-based session analysis with gaze tracking simulation, session playback, and heatmap overlays. The design challenge for User Sphere was density: session data is extremely high-resolution, and surfacing actionable insight from hundreds of sessions required a layered information architecture — summary first, detail on demand.

The reporting layer was designed with the stakeholder audience in mind, not the researcher. Reports are structured as decision-ready outputs: recommendation, evidence, confidence level, and source traceability — in that order.`,
    },
    testing: {
      approach:
        "Continuous discovery: bi-weekly moderated sessions with active users throughout the build. Each session focused on a specific product area. Findings fed directly into the following sprint. Research was woven into the development cadence, not run as a waterfall phase.",
      findings: [
        "Insight traceability was the single highest-rated capability in user satisfaction surveys — the ability to click from a synthesis statement back to the raw session moment",
        "The unified study workflow reduced time-to-study-launch from hours of tool configuration to under 15 minutes for experienced users",
        "AI synthesis adoption was high specifically because of the citation layer — researchers who could verify AI output trusted and used it; those who couldn't did not",
      ],
    },
    outcome: {
      description:
        "Fred is live as a SaaS platform, serving UX researchers, product teams, and research operations leads who need a single system of record for their research programmes.",
      metrics: [
        { value: "10+", label: "Research methods integrated natively" },
        { value: "1 platform", label: "Replacing 4+ fragmented tools" },
        {
          value: "AI-powered",
          label: "Synthesis with full source traceability",
        },
        { value: "15 years", label: "Of practitioner experience built in" },
      ],
    },
    reflection:
      "Building Fred forced me to answer a question I had always asked clients but never fully resolved for myself: what is the job this product is hired to do? The answer — make research trustworthy to people who were not in the room — reshaped every product decision I made. The hardest-to-resist temptation was building for myself as a power user rather than for the researcher trying to convince a sceptical VP of Product that the finding is real. Fred is my proof-of-work on 15 years of practitioner perspective — and the most intellectually demanding design problem I have worked on.",
  },
];

export const featuredCaseStudies = caseStudies.filter((cs) => cs.featured);
