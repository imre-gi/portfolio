import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import { decisionsBySlug } from "@/data/decisions";
import DecisionTree from "@/components/shared/DecisionTree";
import ChapterHeader from "@/components/shared/ChapterHeader";
import PullQuote from "@/components/shared/PullQuote";

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
    title: study.title,
    description: study.summary,
  };
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) return notFound();

  const decisions = decisionsBySlug[slug] ?? [];
  const sortedAll = [...caseStudies].sort((a, b) => b.year - a.year);
  const idx = sortedAll.findIndex((cs) => cs.slug === slug);
  const prev = idx > 0 ? sortedAll[idx - 1] : null;
  const next = idx >= 0 && idx < sortedAll.length - 1 ? sortedAll[idx + 1] : null;

  return (
    <article className="pb-24">
      {/* Masthead */}
      <header className="container-wide pt-10 md:pt-12 pb-10 md:pb-14">
        <div className="flex items-center justify-between mb-12">
          <Link href="/work" className="arrow-link rotate-180">
            <span className="rotate-180 inline-block">Back to index</span>
          </Link>
          <p className="t-mono text-ink-2 t-num">{study.year}</p>
        </div>

        <p className="t-mono mb-3">CASE FILE · {study.slug.toUpperCase()}</p>
        <h1 className="t-display max-w-[18ch] mb-8">{study.title}</h1>
        <p className="t-lead max-w-3xl text-ink">{study.summary}</p>
      </header>

      <div className="rule" />

      {/* Project metadata */}
      <section className="container-wide py-10 md:py-14">
        <dl className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-6">
          <Field span={3} label="CLIENT">
            {study.client}
          </Field>
          <Field span={2} label="DURATION">
            {study.duration}
          </Field>
          <Field span={2} label="ROLE">
            {study.roles[0]}
          </Field>
          <Field span={5} label="DELIVERABLES">
            {study.deliverables.slice(0, 3).join(" · ")}
          </Field>

          <Field span={6} label="METHODS">
            {study.methods.join(" · ")}
          </Field>
          <Field span={6} label="TOOLS">
            {study.tools.join(" · ")}
          </Field>
        </dl>
      </section>

      <div className="rule" />

      {/* Brief */}
      <section className="container-wide py-16 md:py-20">
        <ChapterHeader number="ABSTRACT" title="The brief" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6">
          <div className="md:col-start-4 md:col-span-9">
            {study.challenge.split(/\n\n/).map((para, i) => (
              <p key={i} className="t-body mb-5 max-w-prose">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* The decision tree — the centerpiece */}
      {decisions.length > 0 ? (
        <section className="container-wide py-16 md:py-20">
          <ChapterHeader
            number={`${decisions.length} DECISIONS`}
            title="The decisions that shaped this engagement."
            lead="Each junction shows the alternative considered and the path taken — with the evidence that decided the call."
          />
          <DecisionTree decisions={decisions} />
        </section>
      ) : (
        <section className="container-wide py-16 md:py-20">
          <ChapterHeader
            number="DECISIONS"
            title="Decisions to be filed."
            lead="The structured decision record for this engagement is being compiled. In the meantime, the outcomes below summarise what shipped."
          />
        </section>
      )}

      <div className="rule" />

      {/* Outcomes */}
      <section className="container-wide py-16 md:py-20">
        <ChapterHeader number="FINDINGS" title="What it produced." />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-10">
          <div className="md:col-span-5">
            <p className="t-body max-w-prose">{study.outcome.description}</p>
          </div>
          <dl className="md:col-span-7 grid grid-cols-2 gap-x-6 gap-y-8">
            {study.outcome.metrics.map((m) => (
              <div key={m.label} className="border-t border-ink pt-3 relative tick-corner">
                <dt className="t-mono mb-2">METRIC</dt>
                <dd className="t-num t-h2 text-accent">{m.value}</dd>
                <dd className="t-meta text-ink-2 mt-1">{m.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="rule" />

      {/* Reflection */}
      <section className="container-wide py-16 md:py-20">
        <ChapterHeader number="LIMITATIONS · REFLECTION" title="What I take with me." />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6">
          <div className="md:col-start-4 md:col-span-9">
            <PullQuote attribution="Imre Guaglianone" role={study.year.toString()}>
              {study.reflection}
            </PullQuote>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* Prev / Next */}
      <nav className="container-wide py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {prev && (
          <Link
            href={`/work/${prev.slug}`}
            className="group block border border-rule p-6 hover:border-accent transition-colors"
          >
            <p className="t-mono text-ink-2 mb-2">← PREVIOUS · {prev.year}</p>
            <p className="t-h4 group-hover:text-accent transition-colors">
              {prev.title}
            </p>
          </Link>
        )}
        {next && (
          <Link
            href={`/work/${next.slug}`}
            className={`group block border border-rule p-6 hover:border-accent transition-colors ${
              prev ? "" : "md:col-start-2"
            }`}
          >
            <p className="t-mono text-ink-2 mb-2 text-right">NEXT · {next.year} →</p>
            <p className="t-h4 text-right group-hover:text-accent transition-colors">
              {next.title}
            </p>
          </Link>
        )}
      </nav>
    </article>
  );
}

function Field({
  label,
  children,
  span = 3,
}: {
  label: string;
  children: React.ReactNode;
  span?: 2 | 3 | 4 | 5 | 6;
}) {
  const spanClass: Record<number, string> = {
    2: "md:col-span-2",
    3: "md:col-span-3",
    4: "md:col-span-4",
    5: "md:col-span-5",
    6: "md:col-span-6",
  };
  return (
    <div className={`${spanClass[span]} col-span-2`}>
      <dt className="t-mono mb-2">{label}</dt>
      <dd className="t-meta text-ink">{children}</dd>
    </div>
  );
}
