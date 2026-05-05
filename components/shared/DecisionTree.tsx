"use client";

import { useState } from "react";
import type { Decision, DecisionPath } from "@/types";
import type { Locale } from "@/lib/i18n";

interface DecisionTreeProps {
  decisions: Decision[];
  /** Optional caption above the tree, e.g. "Six decisions that shaped Betika" */
  caption?: string;
  /** Locale for UI labels — defaults to en */
  locale?: Locale;
}

/* --------------------------- UI label dictionary --------------------------- */
const ui = {
  en: {
    decisionsLabel: "Decisions",
    decision: "DECISION",
    of: "of",
    pathTakenWith: "● Path taken",
    pathProposed: "○ Path proposed",
    alternative: "○ Alternative",
    show: "Why this was hard / what I learned",
    hide: "Hide",
    tension: "Tension",
    takeaway: "Takeaway",
    source: "Source",
    altPrefix: "A.",
    takenPrefix: "B.",
  },
  it: {
    decisionsLabel: "Decisioni",
    decision: "DECISIONE",
    of: "di",
    pathTakenWith: "● Strada presa",
    pathProposed: "○ Strada proposta",
    alternative: "○ Alternativa",
    show: "Perché era difficile / cosa ho imparato",
    hide: "Nascondi",
    tension: "Tensione",
    takeaway: "Lezione",
    source: "Fonte",
    altPrefix: "A.",
    takenPrefix: "B.",
  },
} as const;

export default function DecisionTree({
  decisions,
  caption,
  locale = "en",
}: DecisionTreeProps) {
  if (!decisions.length) return null;
  const labels = ui[locale];
  return (
    <section aria-label={caption ?? labels.decisionsLabel} className="relative">
      {caption && <p className="t-mono mb-8 text-ink-2">{caption}</p>}
      <ol className="flex flex-col gap-0">
        {decisions.map((decision, i) => (
          <li key={decision.id} className="relative">
            <DecisionBlock
              decision={decision}
              index={i + 1}
              total={decisions.length}
              labels={labels}
              isLast={i === decisions.length - 1}
            />
          </li>
        ))}
      </ol>
    </section>
  );
}

interface DecisionBlockProps {
  decision: Decision;
  index: number;
  total: number;
  labels: (typeof ui)[Locale];
  isLast: boolean;
}

function DecisionBlock({
  decision,
  index,
  total,
  labels,
  isLast,
}: DecisionBlockProps) {
  const [expanded, setExpanded] = useState(false);
  const indexLabel = String(index).padStart(2, "0");
  const totalLabel = String(total).padStart(2, "0");
  const [alt, taken] = decision.paths;

  return (
    <article className="relative grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-4 py-12 md:py-16 border-t border-rule first:border-t-0">
      <header className="md:col-span-4 lg:col-span-3">
        <p className="dt-num mb-3">
          {labels.decision} {indexLabel}{" "}
          <span className="text-ink-3">{labels.of} {totalLabel}</span>
        </p>
        <h3 className="t-decision">{decision.question}</h3>
        <p className="t-meta mt-3 max-w-prose">{decision.context}</p>
      </header>

      <div className="md:col-span-8 lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 self-start">
        <PathCard path={alt} kind="alternative" labels={labels} />
        <PathCard path={taken} kind="taken" labels={labels} />
      </div>

      {(decision.tension || decision.takeaway) && (
        <div className="md:col-span-12 lg:col-start-4 lg:col-span-9">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="t-mono inline-flex items-center gap-2 text-ink-2 hover:text-ink transition-colors mt-2"
            aria-expanded={expanded}
            aria-controls={`${decision.id}-detail`}
          >
            <span className="font-mono">{expanded ? "−" : "+"}</span>
            {expanded ? labels.hide : labels.show}
          </button>
          {expanded && (
            <dl
              id={`${decision.id}-detail`}
              className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 border-t border-rule-soft pt-5"
            >
              {decision.tension && (
                <div>
                  <dt className="t-mono text-ink-2 mb-2">{labels.tension}</dt>
                  <dd className="t-body text-ink">{decision.tension}</dd>
                </div>
              )}
              {decision.takeaway && (
                <div>
                  <dt className="t-mono text-ink-2 mb-2">{labels.takeaway}</dt>
                  <dd className="t-body text-ink">{decision.takeaway}</dd>
                </div>
              )}
            </dl>
          )}
        </div>
      )}

      {!isLast && (
        <span
          aria-hidden
          className="absolute bottom-0 right-6 md:right-12 translate-y-1/2 dt-num"
        >
          ↓
        </span>
      )}
    </article>
  );
}

interface PathCardProps {
  path: DecisionPath;
  kind: "alternative" | "taken";
  labels: (typeof ui)[Locale];
}

function PathCard({ path, kind, labels }: PathCardProps) {
  const chosen = path.chosen;
  const pathLabel =
    kind === "taken"
      ? chosen
        ? labels.pathTakenWith
        : labels.pathProposed
      : chosen
      ? labels.pathTakenWith
      : labels.alternative;
  const prefix = kind === "taken" ? labels.takenPrefix : labels.altPrefix;
  return (
    <div className="dt-node relative" data-chosen={chosen ? "true" : "false"}>
      <div className="flex items-center justify-between mb-3">
        <span className="dt-path-label" data-chosen={chosen ? "true" : "false"}>
          {pathLabel}
        </span>
        {path.metric && (
          <span className="dt-badge" data-chosen={chosen ? "true" : "false"}>
            {path.metric}
          </span>
        )}
      </div>
      <p className="t-body" style={{ color: "inherit" }}>
        <span className="font-mono text-ink-3 mr-2">{prefix}</span>
        {path.label}
      </p>
      <p className="t-meta mt-3">{path.outcome}</p>
      {path.evidence && (
        <p className="t-mono-plain mt-3 text-ink-3">
          {labels.source}: {path.evidence}
        </p>
      )}
    </div>
  );
}
