import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/data/it/caseStudies";
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
  return { title: study.title, description: study.summary };
}

export default async function CaseStudyIT({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) return notFound();

  const decisions = decisionsBySlug[slug] ?? [];
  const sortedAll = [...caseStudies].sort((a, b) => b.year - a.year);
  const idx = sortedAll.findIndex((cs) => cs.slug === slug);
  const prev = idx > 0 ? sortedAll[idx - 1] : null;
  const next = idx < sortedAll.length - 1 ? sortedAll[idx + 1] : null;

  return (
    <article className="pb-24">
      <header className="container-wide pt-10 md:pt-12 pb-10 md:pb-14">
        <div className="flex items-center justify-between mb-12">
          <Link href="/it/work" className="arrow-link rotate-180">
            <span className="rotate-180 inline-block">Torna all&apos;indice</span>
          </Link>
          <p className="t-mono text-ink-2 t-num">{study.year}</p>
        </div>

        <p className="t-mono mb-3">FASCICOLO · {study.slug.toUpperCase()}</p>
        <h1 className="t-display max-w-[18ch] mb-8">{study.title}</h1>
        <p className="t-lead max-w-3xl text-ink">{study.summary}</p>
      </header>

      <div className="rule" />

      <section className="container-wide py-10 md:py-14">
        <dl className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-6">
          <Field span={3} label="CLIENTE">{study.client}</Field>
          <Field span={2} label="DURATA">{study.duration}</Field>
          <Field span={2} label="RUOLO">{study.roles[0]}</Field>
          <Field span={5} label="DELIVERABLE">
            {study.deliverables.slice(0, 3).join(" · ")}
          </Field>
          <Field span={6} label="METODI">{study.methods.join(" · ")}</Field>
          <Field span={6} label="STRUMENTI">{study.tools.join(" · ")}</Field>
        </dl>
      </section>

      <div className="rule" />

      <section className="container-wide py-16 md:py-20">
        <ChapterHeader number="ABSTRACT" title="Il brief" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6">
          <div className="md:col-start-4 md:col-span-9">
            {study.challenge.split(/\n\n/).map((para, i) => (
              <p key={i} className="t-body mb-5 max-w-prose">{para}</p>
            ))}
          </div>
        </div>
      </section>

      <div className="rule" />

      {decisions.length > 0 ? (
        <section className="container-wide py-16 md:py-20">
          <ChapterHeader
            number={`${decisions.length} DECISIONI`}
            title="Le decisioni che hanno definito l'incarico."
            lead="Ogni nodo mostra l'alternativa considerata e la strada presa, con l'evidenza che ha deciso il bivio."
          />
          <DecisionTree decisions={decisions} ofLabel="di" />
        </section>
      ) : (
        <section className="container-wide py-16 md:py-20">
          <ChapterHeader
            number="DECISIONI"
            title="Decisioni da archiviare."
            lead="Il record strutturato delle decisioni di questo progetto è in fase di compilazione. Nel frattempo, gli esiti qui sotto riassumono cosa è stato spedito."
          />
        </section>
      )}

      <div className="rule" />

      <section className="container-wide py-16 md:py-20">
        <ChapterHeader number="ESITI" title="Cosa ha prodotto." />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-10">
          <div className="md:col-span-5">
            <p className="t-body max-w-prose">{study.outcome.description}</p>
          </div>
          <dl className="md:col-span-7 grid grid-cols-2 gap-x-6 gap-y-8">
            {study.outcome.metrics.map((m) => (
              <div key={m.label} className="border-t border-ink pt-3 relative tick-corner">
                <dt className="t-mono mb-2">METRICA</dt>
                <dd className="t-num t-h2 text-accent">{m.value}</dd>
                <dd className="t-meta text-ink-2 mt-1">{m.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="rule" />

      <section className="container-wide py-16 md:py-20">
        <ChapterHeader number="LIMITI · RIFLESSIONE" title="Cosa porto via." />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6">
          <div className="md:col-start-4 md:col-span-9">
            <PullQuote attribution="Imre Guaglianone" role={study.year.toString()}>
              {study.reflection}
            </PullQuote>
          </div>
        </div>
      </section>

      <div className="rule" />

      <nav className="container-wide py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {prev && (
          <Link
            href={`/it/work/${prev.slug}`}
            className="group block border border-rule p-6 hover:border-accent transition-colors"
          >
            <p className="t-mono text-ink-2 mb-2">← PRECEDENTE · {prev.year}</p>
            <p className="t-h4 group-hover:text-accent transition-colors">{prev.title}</p>
          </Link>
        )}
        {next && (
          <Link
            href={`/it/work/${next.slug}`}
            className={`group block border border-rule p-6 hover:border-accent transition-colors ${
              prev ? "" : "md:col-start-2"
            }`}
          >
            <p className="t-mono text-ink-2 mb-2 text-right">SUCCESSIVO · {next.year} →</p>
            <p className="t-h4 text-right group-hover:text-accent transition-colors">{next.title}</p>
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
