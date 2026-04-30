import Link from "next/link";

export const metadata = {
  title: "Services — Imre Guaglianone",
  description:
    "Product validation, user research, service design, UX design, business process optimisation, corporate training, and fractional CXO.",
};

const services = [
  {
    index: "01",
    title: "Product & idea validation",
    description:
      "Before you build, you need to know you're building the right thing. I design and run structured validation studies — from problem framing through prototype testing — that produce evidence you can act on and defend in front of stakeholders.",
  },
  {
    index: "02",
    title: "User research",
    description:
      "Qualitative and quantitative research that surfaces the needs, mental models, and behaviours behind what people say. I plan studies, recruit participants, facilitate sessions, and synthesise findings into decision-ready outputs.",
  },
  {
    index: "03",
    title: "User experience design",
    description:
      "End-to-end experience design grounded in systems thinking and real user insight. From information architecture and interaction design through final specs — always traceable back to evidence, never decoration.",
  },
  {
    index: "04",
    title: "Service design",
    description:
      "Mapping the full system: customer journeys, service blueprints, backstage processes, and the people who run them. I help organisations align what they promise at the front with what they can actually deliver behind the scenes.",
  },
  {
    index: "05",
    title: "Business process optimisation",
    description:
      "Identifying friction, redundancy, and misalignment in internal workflows — then redesigning them so teams move faster and value reaches customers sooner. Particularly effective at the intersection of operations and product.",
  },
  {
    index: "06",
    title: "Corporate training",
    description:
      "Hands-on programmes on user research and product validation for product, design, and business teams. Built around real methods, not slide decks — participants leave with skills they can apply the next day.",
  },
  {
    index: "07",
    title: "Fractional CXO",
    description:
      "Senior customer experience leadership without the full-time hire. I embed with your leadership team to shape CX strategy, build research capability, define standards, and drive initiatives from planning through execution.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">

        {/* Page heading */}
        <div className="mb-24">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-6">
            Services
          </p>
          <h1
            className="font-[family-name:var(--font-serif)] text-[#F5F0E8] leading-[1.0] mb-12"
            style={{ fontSize: "clamp(3rem, 7vw, 8rem)" }}
          >
            How I can<br />
            <span className="text-[#C8A96E]">help</span> you.
          </h1>
        </div>

        {/* Service list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-32">
          {services.map((service) => (
            <div
              key={service.index}
              className="group py-10 border-b border-[#1A1A1A] md:odd:pr-16 md:even:pl-16 md:odd:border-r md:odd:border-r-[#1A1A1A]"
            >
              <span className="font-[family-name:var(--font-serif)] text-[#333333] text-sm leading-none mb-4 block">
                {service.index}
              </span>
              <h2
                className="font-[family-name:var(--font-serif)] text-[#F5F0E8] mb-4 leading-snug"
                style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
              >
                {service.title}
              </h2>
              <p
                className="text-[#888888] font-[family-name:var(--font-sans)] leading-relaxed"
                style={{ fontSize: "0.9rem" }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-[#222222] pt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-4">
              Ready to work together?
            </p>
            <p
              className="font-[family-name:var(--font-serif)] text-[#F5F0E8] leading-snug max-w-lg"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Every engagement starts with a conversation — no pitch, no proposal until I understand your situation.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-[#333333] px-6 py-4 text-xs tracking-[0.15em] uppercase text-[#F5F0E8] hover:border-[#C8A96E] hover:text-[#C8A96E] transition-colors font-[family-name:var(--font-sans)] shrink-0"
          >
            Get in touch
            <span>→</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
