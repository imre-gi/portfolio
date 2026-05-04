import Link from "next/link";
import type { Metadata } from "next";
import { caseStudies } from "@/data/caseStudies";
import { decisionsBySlug } from "@/data/decisions";
import ChapterHeader from "@/components/shared/ChapterHeader";

export const metadata: Metadata = {
  title: "Work — fifteen years of decisions",
  description:
    "An index of engagements across research, design, strategy and founding. Each entry is a decision tree.",
};

export default function WorkIndex() {
  const sorted = [...caseStudies].sort((a, b) => b.year - a.year);

  return (
    <article className="pb-24">
      <div className="container-wide pt-12 md:pt-16">
        <ChapterHeader
          number="INDEX · WORK"
          title="Fifteen years of decisions."
          lead="A chronological index of engagements. Each entry is a decision tree, not a presentation deck — between four and six junctions per project, with the path taken and the alternative side by side."
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
                  href={`/work/${cs.slug}`}
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
                          {count} decisions on file
                        </p>
                      ) : (
                        <p className="t-mono text-ink-3">
                          decisions to be filed
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
