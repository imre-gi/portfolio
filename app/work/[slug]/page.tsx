import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/data/caseStudies";
import MetricCallout from "@/components/work/MetricCallout";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} — Imre Guaglianone`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) notFound();

  const currentIndex = caseStudies.findIndex((cs) => cs.slug === slug);
  const prev = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const next = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <article>
      {/* Hero */}
      <div
        className="relative w-full flex flex-col justify-end min-h-[60vh] px-6 md:px-12 pb-16 pt-32 overflow-hidden"
        style={{ backgroundColor: study.heroColor }}
      >
        {study.heroImage && (
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
            className="opacity-30"
          />
        )}
        <div className="absolute inset-0 bg-[#0A0A0A]/40" />
        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <p className="text-xs tracking-[0.2em] uppercase text-white/60 font-[family-name:var(--font-sans)] mb-6">
            {study.category} · {study.year} · {study.duration}
          </p>
          <h1
            className="font-[family-name:var(--font-serif)] text-white leading-[0.95] mb-8"
            style={{ fontSize: "clamp(3rem, 8vw, 9rem)" }}
          >
            {study.title}
          </h1>
          <div className="flex flex-wrap gap-3 mb-6">
            {study.roles.map((role) => (
              <span
                key={role}
                className="text-xs tracking-[0.1em] uppercase border border-white/20 px-3 py-1 text-white/60 font-[family-name:var(--font-sans)]"
              >
                {role}
              </span>
            ))}
          </div>
          <p className="text-white/70 font-[family-name:var(--font-sans)] max-w-2xl leading-relaxed" style={{ fontSize: "1.05rem" }}>
            {study.summary}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 md:px-12 py-20">
        <div className="max-w-[1400px] mx-auto">

          {/* Metadata + Overview */}
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-16 mb-20 pb-20 border-b border-[#222222]">
            {/* Sidebar */}
            <aside className="space-y-8">
              <MetaBlock label="Client" value={study.client} />
              <MetaBlock label="Roles" value={study.roles.join(", ")} />
              <MetaBlock label="Team" value={study.team} />
              <MetaBlock label="Duration" value={study.duration} />
              <MetaBlock label="Year" value={String(study.year)} />
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-3">
                  Methods
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.methods.map((m) => (
                    <span key={m} className="text-xs border border-[#333333] px-2 py-1 text-[#888888] font-[family-name:var(--font-sans)]">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-3">
                  Tools
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tools.map((t) => (
                    <span key={t} className="text-xs border border-[#333333] px-2 py-1 text-[#888888] font-[family-name:var(--font-sans)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            {/* Overview text is the summary — already shown in hero */}
            <div>
              <SectionLabel>Deliverables</SectionLabel>
              <ul className="space-y-2">
                {study.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-[#F5F0E8]/80 font-[family-name:var(--font-sans)]" style={{ fontSize: "0.95rem" }}>
                    <span className="text-[#C8A96E]">—</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Challenge */}
          <Section label="The Challenge">
            <Prose>{study.challenge}</Prose>
          </Section>

          {/* Research */}
          <Section label="Research">
            <Prose>{study.research.description}</Prose>
            {study.research.findings.length > 0 && (
              <div className="mt-8">
                <p className="text-xs tracking-[0.15em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-4">
                  Key Findings
                </p>
                <ul className="space-y-3">
                  {study.research.findings.map((f, i) => (
                    <li key={i} className="flex gap-4 text-[#F5F0E8]/80 font-[family-name:var(--font-sans)]" style={{ fontSize: "0.95rem" }}>
                      <span className="text-[#C8A96E] shrink-0 font-[family-name:var(--font-serif)]">{String(i + 1).padStart(2, "0")}</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Section>

          {/* Design */}
          <Section label="Design Process">
            <Prose>{study.design.description}</Prose>
          </Section>

          {/* Testing (if exists) */}
          {study.testing && (
            <Section label="Testing & Validation">
              <Prose>{study.testing.approach}</Prose>
              {study.testing.findings.length > 0 && (
                <ul className="mt-6 space-y-3">
                  {study.testing.findings.map((f, i) => (
                    <li key={i} className="flex gap-3 text-[#F5F0E8]/80 font-[family-name:var(--font-sans)]" style={{ fontSize: "0.95rem" }}>
                      <span className="text-[#C8A96E]">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
              )}
            </Section>
          )}

          {/* Outcome */}
          <Section label="Outcome">
            <Prose>{study.outcome.description}</Prose>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
              {study.outcome.metrics.map((m, i) => (
                <MetricCallout key={i} value={m.value} label={m.label} index={i} />
              ))}
            </div>
          </Section>

          {/* Reflection */}
          <Section label="Reflection">
            <blockquote className="border-l-2 border-[#C8A96E] pl-8">
              <p className="font-[family-name:var(--font-serif)] italic text-[#F5F0E8]/80 leading-relaxed" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)" }}>
                {study.reflection}
              </p>
            </blockquote>
          </Section>

          {/* Gallery */}
          {study.galleryImages && study.galleryImages.length > 0 && (
            <div className="mb-20 pb-20 border-b border-[#222222]">
              <p className="text-xs tracking-[0.15em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-8">
                Gallery
              </p>
              <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollSnapType: "x mandatory" }}>
                {study.galleryImages.map((src, i) => (
                  <div
                    key={i}
                    className="relative shrink-0"
                    style={{
                      width: "clamp(280px, 45vw, 640px)",
                      aspectRatio: "4/3",
                      scrollSnapAlign: "start",
                    }}
                  >
                    <Image
                      src={src}
                      alt={`${study.title} gallery image ${i + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-sm"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prev / Next */}
          <div className="mt-24 pt-12 border-t border-[#222222] grid grid-cols-1 md:grid-cols-2 gap-8">
            {prev ? (
              <Link href={`/work/${prev.slug}`} className="group">
                <p className="text-xs tracking-[0.15em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-2">
                  ← Previous
                </p>
                <p className="font-[family-name:var(--font-serif)] text-[#F5F0E8] text-2xl group-hover:text-[#C8A96E] transition-colors">
                  {prev.title}
                </p>
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/work/${next.slug}`} className="group text-right ml-auto">
                <p className="text-xs tracking-[0.15em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-2">
                  Next →
                </p>
                <p className="font-[family-name:var(--font-serif)] text-[#F5F0E8] text-2xl group-hover:text-[#C8A96E] transition-colors">
                  {next.title}
                </p>
              </Link>
            ) : <div />}
          </div>

        </div>
      </div>
    </article>
  );
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs tracking-[0.15em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-1">
        {label}
      </p>
      <p className="text-[#F5F0E8] font-[family-name:var(--font-sans)] text-sm leading-relaxed">
        {value}
      </p>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs tracking-[0.15em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-6">
      {children}
    </p>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-20 pb-20 border-b border-[#222222]">
      <SectionLabel>{label}</SectionLabel>
      {children}
    </div>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#F5F0E8]/80 font-[family-name:var(--font-sans)] leading-relaxed max-w-3xl" style={{ fontSize: "1.05rem" }}>
      {children}
    </p>
  );
}
