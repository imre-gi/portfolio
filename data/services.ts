export interface ServiceProcess {
  step: string;
  description: string;
}

export interface Service {
  index: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  whatIsIncluded: string[];
  whoItsFor: string;
  process: ServiceProcess[];
}

export const services: Service[] = [
  {
    index: "01",
    slug: "product-validation",
    title: "Product & idea validation",
    tagline:
      "Evidence-based validation to cut ambiguity early and move forward with confidence.",
    description:
      "Before you build, you need to know you're building the right thing. I design and run structured validation studies — from problem framing through prototype testing — that produce evidence you can act on and defend in front of stakeholders. Validation isn't a single test; it's a sequence of deliberately designed experiments that progressively reduce risk and sharpen the brief before a line of production code is written.",
    whatIsIncluded: [
      "Problem framing and assumption mapping workshop",
      "Hypothesis hierarchy and riskiest assumption identification",
      "Concept and prototype design for testing stimuli",
      "Moderated usability and desirability testing sessions",
      "Quantitative validation surveys where applicable",
      "Synthesis report with evidence-graded findings",
      "Go / no-go recommendation with supporting rationale",
      "Stakeholder-ready presentation of findings",
    ],
    whoItsFor:
      "Founders, product leads, and innovation teams who need to justify investment or course-correct before committing to a full build cycle. Particularly valuable when entering a new market, launching a new product line, or when internal conviction is high but external evidence is thin.",
    process: [
      {
        step: "Frame",
        description:
          "We align on the problem space, identify what is assumed versus known, and define what a successful validation looks like.",
      },
      {
        step: "Hypothesize",
        description:
          "I map your assumptions into a hierarchy, flag the riskiest ones, and design experiments that will challenge — not confirm — them.",
      },
      {
        step: "Build stimuli",
        description:
          "Prototypes, concept boards, or discussion guides are created to the minimum fidelity needed to generate reliable signal.",
      },
      {
        step: "Test",
        description:
          "Sessions are run with real participants who match your target user profile. I facilitate and observe; nothing is outsourced.",
      },
      {
        step: "Synthesise",
        description:
          "Raw data becomes structured findings, patterns, and evidence-graded insights — not a list of quotes.",
      },
      {
        step: "Report",
        description:
          "A clear, defensible output your team and stakeholders can act on, with explicit recommendations and their confidence levels.",
      },
    ],
  },
  {
    index: "02",
    slug: "user-research",
    title: "User research",
    tagline:
      "Qualitative and quantitative methods that surface real needs behind stated preferences.",
    description:
      "Qualitative and quantitative research that surfaces the needs, mental models, and behaviours behind what people say. I plan studies, recruit participants, facilitate sessions, and synthesise findings into decision-ready outputs. Good research doesn't just describe users — it tells you why they do what they do and what that means for your product or service.",
    whatIsIncluded: [
      "Research strategy and study design",
      "Screener design and participant recruitment",
      "Interview and usability session facilitation",
      "Diary studies and longitudinal observation",
      "Survey design and quantitative analysis",
      "Affinity mapping and thematic synthesis",
      "Persona and mental model development",
      "Research repository and insight documentation",
    ],
    whoItsFor:
      "Product teams, design teams, and organisations that need to move from internal assumptions to external evidence. Especially useful before major product bets, when entering new customer segments, or when existing metrics tell you something is wrong but not why.",
    process: [
      {
        step: "Scope",
        description:
          "We define the research questions, the decisions they need to inform, and the methods best suited to answer them within your constraints.",
      },
      {
        step: "Recruit",
        description:
          "Screeners are written to find participants who genuinely match your target profile — not whoever is easiest to reach.",
      },
      {
        step: "Conduct",
        description:
          "Sessions are run with rigour: structured enough to be comparable, flexible enough to follow what matters.",
      },
      {
        step: "Analyse",
        description:
          "Data is coded and synthesised using systematic methods. Patterns are identified across participants, not cherry-picked from outliers.",
      },
      {
        step: "Deliver",
        description:
          "Findings are presented in the format most useful for your team: workshop, written report, slide deck, or research repository entry.",
      },
    ],
  },
  {
    index: "03",
    slug: "ux-design",
    title: "User experience design",
    tagline:
      "End-to-end experience design rooted in systems thinking and behavioral insight.",
    description:
      "End-to-end experience design grounded in systems thinking and real user insight. From information architecture and interaction design through final specs — always traceable back to evidence, never decoration. Every design decision is a hypothesis about user behaviour; my job is to make those hypotheses explicit and test them before they become expensive to change.",
    whatIsIncluded: [
      "Information architecture and navigation design",
      "User flows and task flow mapping",
      "Wireframing and low-fidelity concept exploration",
      "Interactive prototype design",
      "High-fidelity UI design and component specification",
      "Design system contribution and documentation",
      "Usability testing integrated into design cycles",
      "Developer handoff and implementation support",
    ],
    whoItsFor:
      "Product teams building or redesigning digital products who need design that is grounded in user evidence, defensible to stakeholders, and precise enough for engineers to implement without ambiguity. Also useful for organisations where design and research have historically operated as separate tracks.",
    process: [
      {
        step: "Discover",
        description:
          "User research, stakeholder interviews, and audit of the existing experience to establish a factual baseline.",
      },
      {
        step: "Define",
        description:
          "Problem statements, design principles, and success criteria that keep the work focused and evaluable.",
      },
      {
        step: "Explore",
        description:
          "Multiple divergent directions explored at low fidelity before converging on an approach — avoiding premature commitment.",
      },
      {
        step: "Refine",
        description:
          "Iterative prototyping and testing cycles that tighten the design against real user behaviour.",
      },
      {
        step: "Specify",
        description:
          "Final designs documented with the detail engineers need — states, edge cases, interactions, and decision rationale.",
      },
    ],
  },
  {
    index: "04",
    slug: "service-design",
    title: "Service design",
    tagline:
      "Aligning people, processes, and touchpoints so the backstage supports the front.",
    description:
      "Mapping the full system: customer journeys, service blueprints, backstage processes, and the people who run them. I help organisations align what they promise at the front with what they can actually deliver behind the scenes. Most service failures happen not because the customer-facing design was wrong, but because it was designed without understanding what it would require of the organisation to sustain.",
    whatIsIncluded: [
      "Current-state customer journey mapping",
      "Service blueprint design (frontstage and backstage)",
      "Stakeholder and staff interviews",
      "Touchpoint audit and experience gap analysis",
      "Future-state journey and blueprint design",
      "Service concept prototyping and validation",
      "Implementation roadmap with prioritised initiatives",
      "Facilitated alignment workshops with cross-functional teams",
    ],
    whoItsFor:
      "Organisations redesigning customer-facing services, scaling operations, or experiencing a gap between the experience they intend to deliver and the one customers actually receive. Particularly effective in multi-channel environments — where digital, physical, and human touchpoints need to work as a coherent whole.",
    process: [
      {
        step: "Immerse",
        description:
          "Customer research, staff interviews, and observation of the service in action — both the front and the back.",
      },
      {
        step: "Map",
        description:
          "The current state is documented as a blueprint: every touchpoint, process step, actor, and supporting system made visible.",
      },
      {
        step: "Diagnose",
        description:
          "Friction points, misalignments, and gaps between intention and experience are identified with supporting evidence.",
      },
      {
        step: "Design",
        description:
          "Future-state blueprints and service concepts are developed and validated with both customers and staff.",
      },
      {
        step: "Plan",
        description:
          "A prioritised roadmap is built that is honest about what the organisation can actually implement and in what sequence.",
      },
    ],
  },
  {
    index: "05",
    slug: "process-optimisation",
    title: "Business process optimisation",
    tagline:
      "Mapping and rethinking internal workflows to reduce friction and surface value faster.",
    description:
      "Identifying friction, redundancy, and misalignment in internal workflows — then redesigning them so teams move faster and value reaches customers sooner. Particularly effective at the intersection of operations and product. Most process problems look like people problems until you map the system; the bottleneck is almost always structural, not motivational.",
    whatIsIncluded: [
      "Current-state process mapping and documentation",
      "Stakeholder and operator interviews",
      "Waste, delay, and duplication analysis",
      "Root cause identification and prioritisation",
      "Future-state process design and scenario modelling",
      "Change impact assessment",
      "Implementation support and transition planning",
      "Measurement framework for tracking improvement",
    ],
    whoItsFor:
      "Operations leaders, product managers, and founders dealing with processes that have grown organically and now create friction — either for customers, for internal teams, or both. Especially valuable when team size is growing and informal coordination is breaking down.",
    process: [
      {
        step: "Observe",
        description:
          "Processes are observed in practice, not just described in theory. Interviews and walkthroughs surface how work actually moves.",
      },
      {
        step: "Map",
        description:
          "Current-state flows are documented at a level of detail that makes handoffs, decisions, and dependencies visible.",
      },
      {
        step: "Analyse",
        description:
          "Delay, rework, and redundancy are quantified where possible. Root causes are separated from symptoms.",
      },
      {
        step: "Redesign",
        description:
          "Future-state processes are designed collaboratively with the people who run them — ownership matters for adoption.",
      },
      {
        step: "Implement",
        description:
          "Changes are introduced with a clear transition plan, and success metrics are defined before the work starts.",
      },
    ],
  },
  {
    index: "06",
    slug: "corporate-training",
    title: "Corporate training",
    tagline:
      "Hands-on programmes on user research and validation for product and business teams.",
    description:
      "Hands-on programmes on user research and product validation for product, design, and business teams. Built around real methods, not slide decks — participants leave with skills they can apply the next day. Training that doesn't change how people work is just a day out of the office. Every programme is designed around the actual problems your team is trying to solve, using your real projects as the learning material.",
    whatIsIncluded: [
      "Needs assessment and programme scoping",
      "Custom curriculum design for your team's context",
      "Half-day, full-day, and multi-session programme formats",
      "Live practice with real methods on real problems",
      "Facilitated sessions with reflection and coaching",
      "Reference materials and method templates",
      "Follow-up support for applying learning on live projects",
      "Measurement of learning transfer (optional)",
    ],
    whoItsFor:
      "Product teams, design teams, and business teams who need to build internal research and validation capability. Particularly effective for organisations that have historically relied on external agencies for insight work and want to bring that capability in-house.",
    process: [
      {
        step: "Assess",
        description:
          "We identify what the team currently knows, what gaps exist, and what capability they need to build to achieve their goals.",
      },
      {
        step: "Design",
        description:
          "A programme is built around your team's real work — not a generic curriculum delivered off the shelf.",
      },
      {
        step: "Deliver",
        description:
          "Sessions are practical: participants practise methods on real problems, not hypothetical scenarios.",
      },
      {
        step: "Apply",
        description:
          "Learning is reinforced through follow-up support as participants apply new skills on live projects.",
      },
      {
        step: "Measure",
        description:
          "Where required, we track whether learning has changed how the team works — not just what they can recite.",
      },
    ],
  },
  {
    index: "07",
    slug: "fractional-cxo",
    title: "Fractional CXO",
    tagline:
      "Senior customer experience leadership on a fractional basis — strategy through execution.",
    description:
      "Senior customer experience leadership without the full-time hire. I embed with your leadership team to shape CX strategy, build research capability, define standards, and drive initiatives from planning through execution. Most organisations at the growth stage need someone who can operate at board level on customer experience strategy and at team level on execution — the fractional model means you get both without the overhead of a full-time executive hire.",
    whatIsIncluded: [
      "CX strategy development and alignment with business goals",
      "Research capability assessment and build plan",
      "Hiring, onboarding, and mentoring of in-house researchers and designers",
      "CX standards and governance framework design",
      "Voice-of-customer programme design and implementation",
      "Cross-functional alignment workshops",
      "Board-level reporting and stakeholder communication",
      "Ongoing advisory as the organisation evolves",
    ],
    whoItsFor:
      "Scale-ups and established businesses that need senior CX leadership but are not yet at the scale — or not in the right moment — to justify a full-time executive hire. Also valuable for organisations undergoing transformation who need an experienced hand to lead from within while permanent capability is built.",
    process: [
      {
        step: "Diagnose",
        description:
          "A structured assessment of your current CX maturity, capability, processes, and gaps — with supporting evidence.",
      },
      {
        step: "Align",
        description:
          "CX strategy is developed in relation to business goals, not as a parallel track. Leadership alignment comes first.",
      },
      {
        step: "Build",
        description:
          "Capability, standards, and processes are built incrementally — with the team, not delivered as a handover document.",
      },
      {
        step: "Lead",
        description:
          "Ongoing embedded leadership: present in the right forums, visible to the right stakeholders, driving the right decisions.",
      },
      {
        step: "Transition",
        description:
          "A clear plan for internalising what has been built — so the organisation is not dependent on the fractional arrangement indefinitely.",
      },
    ],
  },
];
