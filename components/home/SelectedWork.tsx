"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { caseStudies as enCaseStudies } from "@/data/caseStudies";
import { decisionsBySlug } from "@/data/decisions";
import type { CaseStudy } from "@/types";
import ChapterHeader from "@/components/shared/ChapterHeader";
import { getDict, type Locale } from "@/lib/i18n";

interface SelectedWorkProps {
  locale?: Locale;
  studies?: CaseStudy[];
}

export default function SelectedWork({ locale = "en", studies }: SelectedWorkProps) {
  const t = getDict(locale);
  const prefix = locale === "it" ? "/it" : "";
  const featured = (studies ?? enCaseStudies).filter((cs) => cs.featured);

  return (
    <section id="work" className="relative">
      <div className="container-wide py-20 md:py-28">
        <ChapterHeader
          number={locale === "it" ? "01" : "01"}
          title={t.home.chSelectedWork}
          lead={t.home.chSelectedWorkLead}
          link={{ href: `${prefix}/work`, label: t.home.chSelectedWorkAll }}
        />

        <ol className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-0">
          {featured.map((cs, i) => (
            <Row
              key={cs.slug}
              study={cs}
              index={i}
              total={featured.length}
              locale={locale}
              prefix={prefix}
              t={t}
            />
          ))}
        </ol>
      </div>
      <div className="rule" />
    </section>
  );
}

interface RowProps {
  study: CaseStudy;
  index: number;
  total: number;
  locale: Locale;
  prefix: string;
  t: ReturnType<typeof getDict>;
}

function Row({ study, index, total, prefix, t }: RowProps) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const decisionCount = decisionsBySlug[study.slug]?.length ?? 0;
  const indexLabel = String(index + 1).padStart(2, "0");

  // Pull the strongest metric to show as headline figure
  const headline = study.outcome.metrics[0];

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.2, 0.65, 0.3, 1] as [number, number, number, number],
      }}
      className="md:col-span-12 border-t border-rule"
    >
      <Link
        href={`${prefix}/work/${study.slug}`}
        className="group grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-2 py-8 md:py-10"
      >
        <div className="md:col-span-1 t-mono text-ink-2 self-start">
          {indexLabel} / {String(total).padStart(2, "0")}
        </div>

        <div className="md:col-span-5">
          <h3 className="t-h3 group-hover:text-accent transition-colors">
            {study.title}
          </h3>
          <p className="t-meta mt-2">
            {study.client} · {study.year} · {study.duration}
          </p>
        </div>

        <div className="md:col-span-3 self-start">
          <p className="t-meta text-ink-2 max-w-prose">
            {study.summary.length > 180
              ? study.summary.slice(0, 178) + "…"
              : study.summary}
          </p>
        </div>

        <div className="md:col-span-3 self-start flex md:justify-end items-baseline gap-3 text-right">
          <div>
            {decisionCount > 0 && (
              <p className="t-mono text-ink-2 mb-1">
                {decisionCount} {decisionCount === 1 ? "decision" : "decisions"}
              </p>
            )}
            {headline && (
              <p className="t-num t-h4 text-accent">
                {headline.value}
              </p>
            )}
            {headline && (
              <p className="t-meta text-ink-2">{headline.label}</p>
            )}
          </div>
        </div>
      </Link>
    </motion.li>
  );
}
