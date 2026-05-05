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

  "genesis-global": [
    {
      id: "gg-foundation",
      question: "Patch the funnel first, or fix the tracking foundation first?",
      context:
        "Conversion was visibly underperforming and a CRO audit was on the brief. But operators were making decisions on data that was 24-48h old, with no shared definition of 'high-value user'. Patching the funnel without a foundation meant every later optimisation would be measured against an unreliable baseline.",
      paths: [
        {
          label: "Run the CRO audit, ship funnel patches, fix tracking later.",
          outcome:
            "Faster initial conversion uplift on the flagship brand. Each subsequent decision still made on stale, inconsistent data — the same dependence on engineering for ad-hoc queries.",
          evidence: "Same pattern observed in three prior CRO audits at peer platforms",
          chosen: false,
        },
        {
          label: "Establish the behavioural and user-tracking foundation first; let funnel design follow.",
          outcome:
            "Slower to first uplift. Once the foundation existed, every subsequent funnel decision was measurable in the session window, not the next day. The funnel halving became defensible because the measurement was trusted.",
          evidence: "Foundation rolled out to all 14 brands; marketing decisions later run on it",
          chosen: true,
        },
      ],
      tension:
        "The commercial pressure was on the funnel. Asking to delay funnel work to design a taxonomy looked like a designer overstepping. The defence was simple: there is no useful before/after for an A/B test you cannot trust, on data that arrives the day after the campaign ends.",
      takeaway:
        "Tracking is the substrate of every later decision. Skip the substrate and you spend the rest of the engagement arguing about whether the numbers are real.",
    },
    {
      id: "gg-taxonomy",
      question: "Let each operator define their own segments, or impose one taxonomy across 14 brands?",
      context:
        "Three operators came to the taxonomy workshop with three incompatible definitions of 'high-value user'. Letting each keep their own would preserve autonomy. Imposing one would surface a political fight before any UI was designed.",
      paths: [
        {
          label: "Per-operator segment definitions, mapped on read.",
          outcome:
            "Faster to consensus in the room. Every subsequent cross-brand analysis would have required a translation layer — and produced the kind of 'whose number is right?' meeting that kills evidence-led decisions.",
          chosen: false,
        },
        {
          label: "One canonical event taxonomy and segment hierarchy across all 14 brands.",
          outcome:
            "Three days of harder workshop. Output: an information-architecture document defining object-action event names, attribute schema and segment hierarchy. Every brand queried the same way; cross-brand campaign decisions became possible for the first time.",
          metric: "14 / 14 brands",
          evidence: "Post-rollout taxonomy adoption audit",
          chosen: true,
        },
      ],
      tension:
        "Operators experience a shared taxonomy as a loss of control until they need to compare brands or run a multi-brand campaign — at which point it becomes the only thing that lets them ship.",
      takeaway:
        "Data design is a political act. Get the political fight out of the way at the taxonomy stage, in a room with engineering present, or pay for it forever in mismatched dashboards.",
    },
    {
      id: "gg-self-service",
      question: "Operators raise tickets for segments, or build segments themselves?",
      context:
        "Every personalisation request was an engineering ticket. That was the bottleneck. The question was whether to scale the engineering team or to hand operators a tool that turned the bottleneck into a UI problem.",
      paths: [
        {
          label: "Keep engineering as the segment author; add SLAs and a request form.",
          outcome:
            "Cleaner queue. Same fundamental latency between an operator noticing a signal and acting on it — measured in days, not minutes.",
          chosen: false,
        },
        {
          label: "Self-service segment builder UI with drag-and-drop conditions and live segment-size preview.",
          outcome:
            "Operators built their own segments and shipped retention experiments inside a session. Engineering moved from per-request work to maintaining the tool.",
          metric: "real-time",
          evidence: "Post-launch operator usage logs",
          chosen: true,
        },
      ],
      takeaway:
        "When the same expert task is queued every day, the answer is rarely a bigger queue. It is a tool that turns the task into a job a non-expert can do safely.",
    },
    {
      id: "gg-funnel-shape",
      question: "Optimise inside the existing 5-step registration, or restructure the whole ad-to-activation flow?",
      context:
        "A standard CRO engagement would tune copy and microcopy inside the existing steps. The task analysis showed something larger: the entire path from web ad to first deposit had duplicated jobs scattered across screens — fields collected twice, friction added for legacy reasons, payment selection inflicted on users without context.",
      paths: [
        {
          label: "A/B-test inside each step. Optimise headlines, button copy, validation timing.",
          outcome:
            "Local uplift, ceiling around +10-15% on each individual step. Doesn't address the duplicated jobs across steps.",
          metric: "+10-15% per step est.",
          evidence: "Industry benchmarks for headline/CTA testing",
          chosen: false,
        },
        {
          label: "Restructure the full ad-to-activation flow: collapse duplicate jobs, redesign payment selection, drop steps that exist for legacy reasons not regulatory ones.",
          outcome:
            "Steps from ad to activation cut by roughly half. Registration sub-funnel collapsed from 5 to 3. Payment screen redesigned with recognisable brand logos and a regional 'recommended' indicator. Compound effect: +38% registrations, +51% FTD.",
          metric: "−~50% steps",
          evidence: "A/B test before full rollout, replicated across all 14 brands",
          chosen: true,
        },
      ],
      tension:
        "The brief asked for a CRO audit. Restructuring required convincing each operator that legacy steps were not load-bearing. The funnel analysis — annotated step by step — was the artifact that won the argument.",
      takeaway:
        "Shortening a flow is rarely about cutting steps. It is about finding the duplicate jobs hiding inside the steps and merging them. Task analysis is the tool that makes that visible.",
    },
    {
      id: "gg-rollout",
      question: "Ship to the flagship brand and measure, or roll out to all 14 brands at once?",
      context:
        "A flagship-first rollout is the safe play and lets you compare uplift cleanly. But Genesis was a B2B platform with shared infrastructure: a one-brand version would mean maintaining two implementations, with operator-specific divergence accumulating from day one.",
      paths: [
        {
          label: "Roll out to the top brand, measure for a quarter, then negotiate per-brand adoption.",
          outcome:
            "Cleaner causal attribution on the flagship. Every other brand's marketing team continues making decisions on stale, inconsistent data through that quarter — and asks for bespoke variants later.",
          chosen: false,
        },
        {
          label: "Replicate the redesign and the unified taxonomy across all 14 brands in a single rollout.",
          outcome:
            "Marketing got, for the first time, a way to compare campaigns across brands and decide future spend on a shared evidence base. No fork, no operator-specific dashboard logic to maintain.",
          metric: "14 / 14",
          evidence: "Rollout audit + post-rollout campaign decisions briefed off the unified data",
          chosen: true,
        },
      ],
      takeaway:
        "On a multi-brand B2B platform, the value of a redesign is not the per-brand uplift; it is the cross-brand comparability it unlocks. That value is forfeited the moment you keep two implementations alive.",
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

  "match-10": [
    {
      id: "m10-frame",
      question: "Build a football pool, or build a sport-agnostic format?",
      context:
        "Legolas was trotting-first. A football product was needed to grow, but every prior new vertical had landed badly: trotting fans saw it as dilution, football fans saw a trotting-flavoured product they had no reason to use. The brief read 'football pool'. The hard reframing was: build the format, not the sport.",
      paths: [
        {
          label: "Ship a focused football pool. Treat trotting as a separate product.",
          outcome:
            "Faster to market for football. Cross-sell stays a marketing mechanic — coupons, banners, pop-ups. Trotting fans never become football pool players because the football pool reads as a different product.",
          chosen: false,
        },
        {
          label: "Design Match 10 as sport-agnostic — same UI, same flow, same prize structure, any sport in the calendar.",
          outcome:
            "Slower to market by a few weeks. The product becomes a bridge in both directions: trotting fans try the football card without leaving a familiar format; football fans land on Legolas without trotting being the first thing they have to learn.",
          chosen: true,
        },
      ],
      tension:
        "A polymorphic format is harder to design than a sport-specific one — every UI decision has to survive a sport with different event units, different outcomes, different rhythms. Most of the design discipline went into not letting football-specific assumptions leak into the format.",
      takeaway:
        "Cross-sell is rarely solved by a marketing mechanic. It is solved by a product whose architecture makes the cross-sell native — same game, different events.",
    },
    {
      id: "m10-format",
      question: "Modernise football pools as football pools, or extract the format invariant?",
      context:
        "Vernons Pools, Super 6, Quinela had decades of product-market fit, all built around football. The risk of borrowing the format was inheriting the football frame. The opportunity was to extract what made the format work — fixed prize, prediction simplicity, social transparency — and discard the sport assumption.",
      paths: [
        {
          label: "Keep the football frame: 'predict 10 matches, win the pool'.",
          outcome:
            "Recognisable to football fans. Trotting fans treat it as a foreign product. Format invariant trapped inside a sport-specific surface.",
          chosen: false,
        },
        {
          label: "Extract the invariant: 'predict 10 events, win the pool'. Same game across sports.",
          outcome:
            "Both communities recognise the game. The invariant is the value; the sport is configuration. Same UI, same prize tiers, same share card — different events.",
          chosen: true,
        },
      ],
      takeaway:
        "When borrowing a long-lived format, the work is figuring out which parts are essential and which parts are historical accident. The historical accidents are usually where the borrowing falls down.",
    },
    {
      id: "m10-social-spine",
      question: "Prize-led acquisition, or social-visibility-led acquisition?",
      context:
        "Pool betting has historically been sold on the prize. Footy-tipping research surfaced a different driver: in pubs, the engagement was the visible scoreboard with everyone's name, not the prize at the end of the season. The question was whether to make the prize or the visibility the centre of the design.",
      paths: [
        {
          label: "Lead with the jackpot. Big prize, big banner, prize-pool growth as primary visual.",
          outcome:
            "Spike on jackpot weeks, drop on every other week. Acquisition tied to a number that has to keep climbing.",
          chosen: false,
        },
        {
          label: "Lead with the leaderboard. The shared scoreboard is the surface; the prize is informed by it but not the headline.",
          outcome:
            "Returning visits become about checking how friends did, every week. Acquisition tied to social pull, not prize size. First social leaderboard in pool betting at Legolas.bet.",
          chosen: true,
        },
      ],
      tension:
        "Marketing teams reach for prize numbers because they convert in the short term. The defence: the same prize number does not return next week unless the social loop kept users coming back. The leaderboard is the loop.",
      takeaway:
        "If a long-lived format teaches you something about why it survived, take that lesson seriously. Pub pool betting survived on visibility, not the cheque at the end.",
    },
    {
      id: "m10-time-budget",
      question: "Optimise UI density, or hard-cap entry time at 90 seconds?",
      context:
        "Casual bettors abandon if entry takes more than ~90 seconds. The question was whether to optimise for information density (show everything) or for time-to-completion (show only what's needed to pick).",
      paths: [
        {
          label: "Show form data, recent results, expert commentary inline on each event card.",
          outcome:
            "Engaged users love it; casual bettors abandon. The audience the format was built for is the one it loses.",
          chosen: false,
        },
        {
          label: "Strip the entry to a swipe-per-event flow with no odds, no probability, no inline analysis. Information surfaces post-entry on the leaderboard.",
          outcome:
            "Validated 90-second completion in testing. Format reads as a game, not a research exercise. Engaged users who want depth find it on the leaderboard, not in the entry flow.",
          metric: "<90s entry",
          evidence: "Prototype testing time-on-task measurement",
          chosen: true,
        },
      ],
      takeaway:
        "Time budget is a design constraint stronger than information completeness. If the user has 90 seconds, design for 90 seconds and put the depth where they look later.",
    },
    {
      id: "m10-no-odds",
      question: "Display odds in a sportsbook product, or refuse to?",
      context:
        "Every sportsbook in the market displays odds. The reflex is to assume users want them. The audience research said the opposite: casual bettors found odds intimidating, and the polymorphism (same UI across sports) only worked if odds — which look very different in trotting versus football — did not need a place on the surface.",
      paths: [
        {
          label: "Show odds. Match the sportsbook conventions users see elsewhere.",
          outcome:
            "Casual bettors hesitate at the moment of pick. Polymorphism breaks: trotting odds look different, footballers expect different odds formats, the same UI cannot host both cleanly.",
          chosen: false,
        },
        {
          label: "No odds anywhere in the entry flow. Fixed prize tiers replace probability as the value signal.",
          outcome:
            "Casual bettors pick without hesitation. Polymorphism holds: the same UI works for any sport because no sport-specific odds layer is needed. The simplicity becomes the differentiator.",
          chosen: true,
        },
      ],
      takeaway:
        "Conventions in a category are usually load-bearing — but not always. When the audience pain point is the convention itself, dropping it is the design.",
    },
  ],

  "play-together": [
    {
      id: "pt-shape",
      question: "Solo bettor with social trim, or team-vs-team competition at the core?",
      context:
        "The brief asked for 'social mechanics'. Most attempts at social betting bolt a chat window onto a single-player flow. The trotting analysts pushed the harder framing: the bet itself should be a team artifact, with one team competing against another team's pool.",
      paths: [
        {
          label: "Single-player pool bets with social sharing on top.",
          outcome:
            "Faster to ship. Social engagement remains a sidecar — share rates plateau because the game itself is private. The 'community' never really forms.",
          chosen: false,
        },
        {
          label: "Teams as first-class entities; teams compete against teams.",
          outcome:
            "Onboarding got longer (6 steps to seal team identity before invite). The bet became a shared artifact: friends returning to check how their team did, not just how they did. Win celebration share rate landed at 3.2× the pre-launch prediction.",
          metric: "3.2× share rate",
          evidence: "Beta cohort measurement vs forecast",
          chosen: true,
        },
      ],
      tension:
        "Defining the team-vs-team architecture meant rejecting a faster, more conventional product in week one. The trotting analysts were the deciding voice — they understood that the sport is already social in the paddock, and the digital product should mirror that, not flatten it.",
      takeaway:
        "Social mechanics that produce a community come from the architecture, not from a feature list. If the bet is private, no amount of share buttons will fix it.",
    },
    {
      id: "pt-experts",
      question: "Generic chat between team-mates, or domain experts inside the loop?",
      context:
        "Pool betting between casual and experienced players reproduces the worst of group dynamics: louder voices push impulsive bets, novices feel pressured to commit. We needed a guardrail that did not feel like a guardrail.",
      paths: [
        {
          label: "Free-form team chat plus a responsible-gaming disclaimer at sign-up.",
          outcome:
            "Compliant, conventional, and ineffective at the moment that matters. Pressure to commit lives inside the chat, not at the disclaimer.",
          chosen: false,
        },
        {
          label: "Insert named, senior trotting analysts as in-product experts. Any team can ask one before placing the pool bet.",
          outcome:
            "The act of asking the expert slows the moment of commitment. Casual bettors learn the format with adult supervision; pressure between team-mates is moderated by a third voice. Responsible gaming becomes a design surface, not a footer link.",
          chosen: true,
        },
      ],
      tension:
        "Adding humans into a digital game looks like operational overhead. The defence: in this category, the cost of impulsive bets is paid by users, regulators, and brand reputation. A small expert capacity is dramatically cheaper than the alternative.",
      takeaway:
        "When peer-pressure dynamics threaten user welfare, the right answer is rarely a stricter disclaimer. It is a third party in the room whose presence changes how the room behaves.",
    },
    {
      id: "pt-trust",
      question: "Treat responsible gaming as compliance overlay, or as the spine of the social design?",
      context:
        "Every iGaming product ships responsible-gaming features because regulators require them. The question is whether they are an overlay, separate from the experience, or whether they shape the experience.",
      paths: [
        {
          label: "Standard responsible-gaming controls (deposit limits, self-exclusion, links to support) as a settings sub-menu.",
          outcome:
            "Box ticked for compliance. The actual moment of impulsive risk — the team chat seconds before a pool closes — has no design intervention.",
          chosen: false,
        },
        {
          label: "Build the experts into the social architecture; design the team flow to make 'ask the expert' an obvious next action before commit.",
          outcome:
            "Responsible gaming is now the mechanic, not the footnote. The product reads as a coached community rather than a peer-pressure machine.",
          chosen: true,
        },
      ],
      takeaway:
        "Compliance done at the surface gets you past the regulator. Compliance done at the architecture gets you a product users keep using without harm.",
    },
    {
      id: "pt-onboarding",
      question: "One-tap join, or a six-step team-creation onboarding before the invite?",
      context:
        "Conventional growth advice: minimise steps to invite. The problem with that advice in social products: invites without commitment produce pools nobody returns to.",
      paths: [
        {
          label: "Minimum-friction invite — one tap to start a pool, fill in details later.",
          outcome:
            "Higher invite send rate. Lower invite acceptance and lower return because the inviter has not built a team identity yet.",
          chosen: false,
        },
        {
          label: "Six-step onboarding before invite: username, team name, photo, sport, picks, invite.",
          outcome:
            "Each step builds investment before the invite. By the time a user reaches the invite screen they have a team identity to recruit into. Validated in beta at 88% completion without guidance.",
          metric: "88% solo completion",
          evidence: "Beta cohort measurement",
          chosen: true,
        },
      ],
      takeaway:
        "Friction is bad in transactional flows and useful in commitment flows. Invites work when the inviter has something to invite into.",
    },
  ],

  "sport-navigation-sticky": [
    {
      id: "snav-frame",
      question: "A navigation problem, or a findability problem?",
      context:
        "The brief was 'fix the navigation'. Flow and behaviour analysis told a different story: users were not lost in the navigation tree; they were lost inside long, undifferentiated event lists where the events that mattered to them sat below the fold.",
      paths: [
        {
          label: "Restructure the IA — re-organise the sport hierarchy and category labels.",
          outcome:
            "Hours of work, modest uplift. The IA was already roughly right; the real problem was that finding the relevant event inside a sport took 47 seconds of scrolling.",
          chosen: false,
        },
        {
          label: "Reframe as findability: keep the structure, attack the time-to-event with a sticky shell, omnisearch, and a per-user ranking.",
          outcome:
            "Sport switching dropped to ~8s mean. Time-to-event under 15s. Reframing the brief was the highest-leverage decision of the engagement.",
          metric: "−83% switch time",
          evidence: "Maze prototype testing",
          chosen: true,
        },
      ],
      tension:
        "Reframing a brief is a political move. The argument was data-backed: the analysis showed that the IA was not the bottleneck and the sticky-plus-search pattern was already a learned expectation from YouTube, Twitter and competing sportsbooks.",
      takeaway:
        "When a navigation brief lands, check whether the actual user problem is hierarchy or scroll. The answers come from different toolkits.",
    },
    {
      id: "snav-pattern",
      question: "Invent a novel navigation pattern, or meet established expectations?",
      context:
        "Awwwards-bait would have been a signature interaction — a custom radial nav, an unusual gesture. The category constraint pulled the other way: bettors arrive with a specific task and zero patience for novelty.",
      paths: [
        {
          label: "Design a distinctive navigation interaction.",
          outcome:
            "Recognition value for the brand. Cost paid by every user on every session: a small but persistent learning tax.",
          chosen: false,
        },
        {
          label: "Sticky nav, persistent search, single-tap odds toggle — the patterns YouTube, Twitter and bet365 have already taught users.",
          outcome:
            "Zero learning curve. All test participants understood the pattern immediately. Time saved compounds across every session.",
          metric: "0 learning curve",
          evidence: "Prototype test, n=5, identical task scenarios",
          chosen: true,
        },
      ],
      takeaway:
        "Novelty in navigation is paid for in user time, every session. Spend novelty on what the product offers, not on how it gets out of the way.",
    },
    {
      id: "snav-ml-layer",
      question: "Static menu for everyone, or per-user adaptive ranking?",
      context:
        "The structural fix solved most of the time-to-event problem. The remaining tail was that the same menu had to serve a casual football-only bettor and a multi-sport heavy user. A static menu can only optimise for the average — and the average user, in a long-tail catalogue, does not exist.",
      paths: [
        {
          label: "Ship the structural fix. Same menu for everyone.",
          outcome:
            "Big improvement over baseline. Findability still tied to the global menu; users with non-mainstream interests stay slightly disadvantaged.",
          chosen: false,
        },
        {
          label: "Add a machine-learning ranking layer over the menu and event lists — per-user, based on actual play habits.",
          outcome:
            "Findability becomes a per-user property. The menu each user already knows now puts what they care about higher than what they don't. Shipped in the follow-up cycle, sitting on top of the same component.",
          metric: "per-user ranking",
          evidence: "Production rollout, post-sprint",
          chosen: true,
        },
      ],
      takeaway:
        "Personalisation in a long-tail catalogue is not a luxury; it is the only way the average user gets a menu shaped for them. The cost of running the model is paid back at every session.",
    },
    {
      id: "snav-ml-affordance",
      question: "Make the ML ranking visible, or keep it silent?",
      context:
        "The temptation with ML features is to show them off — 'recommended for you', 'based on your habits', a sparkle icon. The honest question: does the user benefit from knowing the menu is adapted, or do they benefit from a menu that simply works?",
      paths: [
        {
          label: "Surface the adaptation: badges, 'based on your habits' label, settings to inspect.",
          outcome:
            "Transparency theatre. New affordance to learn; users start second-guessing the menu they already know how to use.",
          chosen: false,
        },
        {
          label: "Silent ranking. No badge, no tag, no settings. The menu just gets better at putting what each user wants on top.",
          outcome:
            "Findability improves without any new pattern to teach. Users do not have to manage the model; they just navigate.",
          chosen: true,
        },
      ],
      tension:
        "Silent personalisation crosses an ethical line if it changes content (e.g. odds, prices). Here it only changes order — the same events at the same odds, just better-ranked. The ethical case held; the affordance was unnecessary cognitive load.",
      takeaway:
        "Personalisation that ranks is different from personalisation that filters. Ranking can stay invisible; filtering must be disclosed.",
    },
    {
      id: "snav-odds",
      question: "Session-only odds preference, or persisted to the user?",
      context:
        "Odds-format reset every session was the most consistently reported usability complaint. Two-week sprint, no backend changes — but the preference was a single bit of state.",
      paths: [
        {
          label: "Leave session-only, scope it out for a later release.",
          outcome:
            "Continued ticket volume. Same frustration every session.",
          chosen: false,
        },
        {
          label: "Persist to user preferences, single-tap toggle in the sticky nav.",
          outcome:
            "100% of test participants noted the change as an improvement, unprompted. Resolved the most consistently reported usability complaint in the product.",
          metric: "100% noticed",
          evidence: "Prototype test, post-task feedback",
          chosen: true,
        },
      ],
      takeaway:
        "When a 'small' bug is felt every session, it is not a small bug. Solving it once retires a permanent line item from the support backlog.",
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
