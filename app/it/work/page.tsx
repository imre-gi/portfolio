import Link from "next/link";
import type { Metadata } from "next";
import { caseStudies } from "@/data/it/caseStudies";
import { decisionsBySlug } from "@/data/it/decisions";
import ChapterHeader from "@/components/shared/ChapterHeader";

export const metadata: Metadata = {
  title: "Lavori — quindici anni di decisioni",
  description:
    "Indice degli incarichi: ricerca, design, strategia, fondazione. Ogni voce è un albero di decisioni.",
};

export default function WorkIndexIT() {
  const sorted = [...caseStudies].sort((a, b) => b.year - a.year);

  return (
    <article className="pb-24">
      <div className="container-wide pt-12 md:pt-16">
        <ChapterHeader
          number="INDICE · LAVORI"
          title="Quindici anni di decisioni."
          lead="Indice cronologico degli incarichi. Ogni voce è un albero di decisioni — dalle quattro alle sei diramazioni per progetto, con la strada presa e l'alternativa fianco a fianco."
          as="h1"
        />
      </div>

      <div className="container-wide">
        <ol className="border-t border-ink">
          {sorted.map((cs, i) => {
            const count = decisionsBySlug[cs.slug]?.length ?? 0;
            const headlineMetric = cs.outcome.metrics[0];
            const indexLabel = String(i + 1).padStart(2, "0");

            return (
              <li key={cs.slug} className="border-b border-rule">
                <Link
                  href={`/it/work/${cs.slug}`}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-3 py-7 md:py-8"
                >
                  <span className="md:col-span-1 t-mono">{indexLabel}</span>
                  <span className="md:col-span-1 t-mono text-ink-2 t-num">
                    {cs.year}
                  </span>

                  <div className="md:col-span-4">
                    <h3 className="t-h3 group-hover:text-accent transition-colors">
                      {cs.title}
                    </h3>
                    <p className="t-meta mt-1">
                      {cs.client} · {cs.duration}
                    </p>
                  </div>

                  <div className="md:col-span-3">
                    <p className="t-meta text-ink-2 max-w-prose">
                      {cs.summary.length > 160
                        ? cs.summary.slice(0, 158) + "…"
                        : cs.summary}
                    </p>
                  </div>

                  <div className="md:col-span-3 md:text-right flex md:justify-end items-baseline gap-3">
                    <div>
                      {count > 0 ? (
                        <p className="t-mono text-ink-2">
                          {count} decisioni in archivio
                        </p>
                      ) : (
                        <p className="t-mono text-ink-3">
                          decisioni da archiviare
                        </p>
                      )}
                      {headlineMetric && (
                        <p className="t-num t-h4 text-accent mt-1">
                          {headlineMetric.value}
                        </p>
                      )}
                      {headlineMetric && (
                        <p className="t-meta text-ink-2">
                          {headlineMetric.label}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </article>
  );
}
