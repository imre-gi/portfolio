import type { Decision } from "@/types";

/**
 * Decision-tree data for each case study.
 * Indexed by case study slug. Imported and merged into caseStudies at runtime
 * so existing case study type stays unchanged at the source-of-truth file.
 */
export const decisionsBySlug: Record<string, Decision[]> = {
  betika: [
    {
      id: "betika-stack",
      question: "Patch the legacy PHP frontend or rebuild end-to-end?",
      context:
        "Total page weight on first load was 6.8 MB on the legacy PHP frontend. On 2G/3G connections in Mozambique and DRC, that's a session-killer. Patching the existing stack meant faster delivery; rebuilding meant gambling six months on a full architecture migration.",
      paths: [
        {
          label: "Keep PHP, optimise asset pipeline and caching.",
          outcome:
            "Page weight would have stayed in the 4–5 MB range at best. Same server-rendered HTML, same per-page reload cost on a thin connection.",
          metric: "~5 MB est.",
          evidence: "Asset audit + Lighthouse on patched staging fork",
          chosen: false,
        },
        {
          label: "Rebuild as VueJS with SSR, backend in R, data layer over GraphQL + RPC.",
          outcome:
            "First-load page weight dropped to 1.76 MB. SSR kept the first paint server-rendered for slow connections; GraphQL + RPC made the per-interaction payload as small and as cacheable as possible. Six months to ship; pays back in retention.",
          metric: "1.76 MB",
          evidence: "Production measurement post-launch",
          chosen: true,
        },
      ],
      tension:
        "The engineering team had years invested in the PHP codebase. A full rewrite — plus an R backend and a fresh data layer — looked like over-engineering. The pitch had to be: this isn't a stack preference, it's an economic constraint. Every megabyte we ship costs our users money, and every chatty REST round-trip costs them more.",
      takeaway:
        "Performance work is a design material, not an optimisation pass. When the rebuild collapses both first-load weight and per-interaction payload, the rebuild is the design.",
    },
    {
      id: "betika-default",
      question: "Default home view: every sport, or one sport?",
      context:
        "NPS analysis showed 87% of users only ever bet on soccer. The home page was loading thousands of events across every vertical on every visit.",
      paths: [
        {
          label: "Keep the multi-sport listing, add filters.",
          outcome:
            "Prototype tested at 43% task completion. Users still scrolled past most events to find football. Data still loaded for sports nobody opened.",
          metric: "43% completion",
          evidence: "GV Sprint prototype test, n=5",
          chosen: false,
        },
        {
          label: "Default to soccer-only; everything else via Omnisearch.",
          outcome:
            "Same prototype, soccer-default version, tested at 91%. Users felt it was 'cleaner and faster, not restrictive.'",
          metric: "91% completion",
          evidence: "GV Sprint prototype test, n=5",
          chosen: true,
        },
      ],
      tension:
        "The risk was looking like we'd amputated half the product. The verbal framing in the Sprint readout mattered: not 'we removed sports', but 'we put them where you actually go to find them.'",
      takeaway:
        "Where your users actually live is a design constraint, not a roadmap consideration. A 87/13 split means the 13 deserves a different surface.",
    },
    {
      id: "betika-search",
      question: "How do users reach an event in a different sport?",
      context:
        "If soccer was the home, the navigation had to make every other vertical reachable in a single interaction — otherwise sport-switching becomes a four-tap roundtrip via the home page.",
      paths: [
        {
          label: "Hierarchical navigation: Sports → Tennis → ATP → Match.",
          outcome:
            "Recognisable pattern. Slow under load — every level was a fetch — and broke for users who didn't know the hierarchy.",
          metric: "47s mean",
          evidence: "Heuristic analysis baseline",
          chosen: false,
        },
        {
          label: "Omnisearch overlay across every sport.",
          outcome:
            "Single text input. Indexed events across all verticals. Users typed a team name and arrived in one interaction.",
          metric: "11s mean",
          evidence: "Prototype test, post-iteration",
          chosen: true,
        },
      ],
      takeaway:
        "Search is navigation when the catalogue is wide and shallow. Tree navigation is for taxonomies users already hold in their head — and bettors don't hold the ATP calendar in their head.",
    },
    {
      id: "betika-process",
      question: "How do we align a distributed team in time to ship?",
      context:
        "Stakeholders in Nairobi, London, remote contributors. A standard iterative design process would have spent months in alignment alone. The commercial pressure was acute.",
      paths: [
        {
          label: "Standard discovery → wireframes → reviews → revisions.",
          outcome:
            "Estimated 8-12 weeks to reach a validated design. High stakeholder cycle cost.",
          metric: "~10 weeks",
          evidence: "Prior project benchmark, same client",
          chosen: false,
        },
        {
          label: "GV Design Sprint — five days, all decisions co-located.",
          outcome:
            "One week. Stakeholders, designers, analysts, CTO in the same room. Validated prototype on day five.",
          metric: "5 days",
          evidence: "Sprint output documentation",
          chosen: true,
        },
      ],
      tension:
        "A Sprint asks senior people to clear a calendar week. The pitch was: you'll spend less time over the year if you spend a full week now.",
      takeaway:
        "Compress the calendar of decisions, not the quality of decisions. Sprint is a forcing function for forcing functions.",
    },
    {
      id: "betika-scroll",
      question: "Paginated event list or infinite scroll?",
      context:
        "Pagination would mean a fetch and a page reload per click. On the data-cost profile, every full reload costs the user money.",
      paths: [
        {
          label: "Paginate listings, classic web pattern.",
          outcome:
            "Cheaper to build. Three full-page reloads to browse 60 events. Tested as 'where did the matches go?' anxiety.",
          metric: "3 reloads",
          evidence: "Prototype test session notes",
          chosen: false,
        },
        {
          label: "Infinite scroll with placeholder reservations.",
          outcome:
            "Single fetch path, reuses the page. Users could browse the full list without thinking about cost.",
          metric: "1 reload",
          evidence: "Prototype test, post-iteration",
          chosen: true,
        },
      ],
      takeaway:
        "Infinite scroll is the right pattern when reload is expensive in money or time. The default-bad-pattern reputation comes from contexts where reload is free.",
    },
    {
      id: "betika-odds",
      question: "Should the odds-format setting persist?",
      context:
        "Odds preference was the most consistently surfaced complaint in support tickets — users had to reset between fractional, decimal and American every session.",
      paths: [
        {
          label: "Leave as session-only, document the limitation.",
          outcome:
            "Continued ticket volume. Repeat frustration. No code change but ongoing CX cost.",
          metric: "tickets ongoing",
          evidence: "Support data, 90-day baseline",
          chosen: false,
        },
        {
          label: "Persist to user preferences, single tap from sticky nav.",
          outcome:
            "Resolved 100% of repeat complaints, no observed migration cost.",
          metric: "100% resolved",
          evidence: "Post-launch ticket audit",
          chosen: true,
        },
      ],
      takeaway:
        "Some 'low-priority' bugs are persistent friction multiplied by every session. Solve them once, audit the support backlog quarterly to find them.",
    },
  ],

  "instacoins-signup": [
    {
      id: "ic-priority",
      question: "Where to focus the first 90 days?",
      context:
        "Joining as Head of UX. Conversion was bleeding, but tactical fixes without a research foundation would treat symptoms only. Both tracks couldn't run sequentially without losing six months.",
      paths: [
        {
          label: "Quick wins on the funnel, research as we go.",
          outcome:
            "Faster initial uplift. But every later finding would have been retrofitted onto pre-research decisions — debt accruing.",
          evidence: "Prior similar contexts, no research up front",
          chosen: false,
        },
        {
          label: "Build ResearchOps first, then act on evidence.",
          outcome:
            "90 days slower to first ship. 40+ studies over 18 months — every funnel decision rooted in evidence the team could defend.",
          metric: "40+ studies",
          evidence: "Programme output measurement",
          chosen: true,
        },
      ],
      tension:
        "Conversion was visibly bad. Leadership wanted action. The pitch: 'I will be the head of UX who fixes the system that fixed the conversion, not the head who fixed the conversion once.'",
      takeaway:
        "Senior UX is sometimes saying 'no faster shippable answer is also the right answer.' Hold the line if the evidence pipeline doesn't yet exist.",
    },
    {
      id: "ic-upload",
      question: "What's wrong with the document upload step?",
      context:
        "41% of users abandoned at this single screen. JTBD interviews revealed the abandonment was emotional, not procedural — peak anxiety was here.",
      paths: [
        {
          label: "Compress instructions, simplify copy.",
          outcome:
            "Surface fix. Treats the symptom (instruction confusion) without addressing the cause (no trust in what happens to the document).",
          chosen: false,
        },
        {
          label: "Format-specific visual guides + real-time validation + explicit confirmation state.",
          outcome:
            "Abandonment dropped from 41% to 14% — a 66% relative improvement. Trust signals at the moment of peak anxiety.",
          metric: "−66% abandon",
          evidence: "A/B test post-deploy, n>5,000",
          chosen: true,
        },
      ],
      takeaway:
        "The user's stated problem (instructions are confusing) and the actual problem (I don't trust this) often share a screen. Solve for the second.",
    },
    {
      id: "ic-review",
      question: "What does 'under review' actually communicate?",
      context:
        "23% of users who completed upload abandoned during the holding period. They got no progress, no estimate, no signal that anything was happening.",
      paths: [
        {
          label: "Generic 'we're processing' state, email when done.",
          outcome:
            "Status quo. Fast to ship; preserves abandonment.",
          chosen: false,
        },
        {
          label: "Honest time estimate + status milestones + email opt-in + plain-language copy.",
          outcome:
            "Holding-period abandonment dropped from 23% to 9%. Stakeholder reviews stopped asking 'why is conversion still leaking after upload?'",
          metric: "−61% abandon",
          evidence: "Funnel measurement post-deploy",
          chosen: true,
        },
      ],
      takeaway:
        "Transparency is a design material in regulated flows. Compliance is non-negotiable; the user's right to know what's happening is also non-negotiable.",
    },
    {
      id: "ic-tokens",
      question: "Per-product styling or unified semantic tokens?",
      context:
        "The portfolio had five products. Each shipped in a slightly different visual register — subliminal trust erosion at every touchpoint.",
      paths: [
        {
          label: "Per-product design files, shared brand sheet.",
          outcome:
            "Faster per-team. Inconsistency persists. WCAG had to be checked per component, per product, every release.",
          chosen: false,
        },
        {
          label: "Semantic tokens layer wired Figma → Storybook → Chromatic.",
          outcome:
            "Inconsistency reports dropped from 12 per sprint to under 2. WCAG enforced at token level — contrast, focus, touch target.",
          metric: "<2 / sprint",
          evidence: "Sprint review tracker, 6-month average",
          chosen: true,
        },
      ],
      takeaway:
        "A design system is policy made executable. If your accessibility rule isn't in a token, it's a memo people forget.",
    },
    {
      id: "ic-a11y",
      question: "How to address 34 WCAG 2.1 AA violations?",
      context:
        "Audit found violations across the entire signup flow, including form labelling failures that broke screen reader navigation completely.",
      paths: [
        {
          label: "Triage by severity, fix critical, defer the rest.",
          outcome:
            "Faster initial compliance metric. Long tail of mid-severity issues continues to fail real users.",
          chosen: false,
        },
        {
          label: "Resolve all 34, integrate fixes into the new design system layer.",
          outcome:
            "Screen reader task completion on signup went from 38% to 94%. Future regressions blocked at the token level.",
          metric: "38% → 94%",
          evidence: "Screen reader task completion test",
          chosen: true,
        },
      ],
      takeaway:
        "Accessibility is not a severity-triage problem. It's a contract. Either the contract holds for all users or it doesn't.",
    },
  ],

  "fred-uxr-platform": [
    {
      id: "fred-discovery",
      question: "Build the MVP first, or run discovery research first?",
      context:
        "Founder mode. The temptation to ship something is enormous. But fifteen years of watching teams build the wrong thing was the lesson the company existed to fix.",
      paths: [
        {
          label: "Build a thin MVP, learn from real usage.",
          outcome:
            "Faster to a working artefact. Risks building for the founder-as-power-user, not for the actual researcher who needs to convince a sceptical VP.",
          chosen: false,
        },
        {
          label: "JTBD interviews with three user types before any code.",
          outcome:
            "Surfaced the core insight: fragmentation is a TRUST problem, not a tooling problem. Reshaped the product thesis.",
          metric: "0 lines, 30 interviews",
          evidence: "Discovery research output",
          chosen: true,
        },
      ],
      tension:
        "Investors expect velocity. Discovery looks like delay. The defence is the work itself: every interview produced a finding that would have cost a quarter of build to discover post-launch.",
      takeaway:
        "If the product is research, the company has to do its own research with a straight face. Otherwise the value proposition is only words.",
    },
    {
      id: "fred-ai-role",
      question: "Is AI the product, or the accelerant?",
      context:
        "2024 — every research tool was racing to put 'AI-powered' on the home page. The temptation was to position AI as the differentiator.",
      paths: [
        {
          label: "AI as the product. Magic synthesis. Black box.",
          outcome:
            "Marketing wins. Researcher trust collapses on first unverifiable output. The exact failure mode the product exists to prevent.",
          chosen: false,
        },
        {
          label: "Traceability is the product. AI is the accelerant, with mandatory citation links.",
          outcome:
            "Researchers adopt the synthesis specifically because they can verify it. Stakeholders adopt the reports specifically because the recommendations are traceable.",
          metric: "highest-rated capability",
          evidence: "User satisfaction survey, post-launch",
          chosen: true,
        },
      ],
      takeaway:
        "If you're building the trust product, AI is a means. If you forget that, you've become a slot machine that researchers won't bet their reputation on.",
    },
    {
      id: "fred-cadence",
      question: "Roadmap-driven or continuous discovery?",
      context:
        "Founder time is finite. A roadmap gives shape. Continuous discovery gives feedback. Both at once is hard.",
      paths: [
        {
          label: "Quarterly roadmap, fixed milestones, occasional research.",
          outcome:
            "Predictable shipping rhythm. High risk of drifting from real user pain by mid-quarter.",
          chosen: false,
        },
        {
          label: "Bi-weekly moderated sessions, n=5, focused on one area. Findings feed the next sprint.",
          outcome:
            "Build stayed coupled to user pain across the entire first year. No 'pet feature' shipped on founder intuition alone.",
          metric: "26 cycles / year",
          evidence: "Discovery cadence log",
          chosen: true,
        },
      ],
      takeaway:
        "Roadmaps are inventory; discovery is feedback. A founder who only has inventory ships the wrong product on time.",
    },
    {
      id: "fred-build-vs-buy",
      question: "Integrate a third-party session-replay tool, or build User Sphere in-house?",
      context:
        "Session analysis is the densest data surface in the product. Build is expensive. Integrate looks fast — until you need to layer Fred's traceability on top of someone else's data model.",
      paths: [
        {
          label: "Integrate an existing replay vendor, layer Fred over it.",
          outcome:
            "Fast initial coverage. Traceability falls apart at the boundary between vendor data and Fred's insight model. The product thesis breaks.",
          chosen: false,
        },
        {
          label: "Build User Sphere natively, with the data model designed for citation.",
          outcome:
            "Slower, harder, more expensive. But every session moment cited from Fred resolves to a Fred-owned URL — the traceability promise holds end-to-end.",
          chosen: true,
        },
      ],
      tension:
        "Every integration argument is true individually. Composed, they corrode the value proposition. Saying no to all of them at once was the hardest call.",
      takeaway:
        "If your differentiator is end-to-end traceability, anything that breaks the chain is a non-option, however cheap it looks.",
    },
  ],
};
