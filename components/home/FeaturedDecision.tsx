"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { decisionsBySlug } from "@/data/decisions";
import DecisionTree from "@/components/shared/DecisionTree";
import ChapterHeader from "@/components/shared/ChapterHeader";
import { getDict, type Locale } from "@/lib/i18n";

interface FeaturedDecisionProps {
  locale?: Locale;
  /** Slug of the case study to draw the showcase decision from */
  slug?: string;
  /** Index of the decision within that case study to feature */
  decisionIndex?: number;
}

export default function FeaturedDecision({
  locale = "en",
  slug = "betika",
  decisionIndex = 0,
}: FeaturedDecisionProps) {
  const t = getDict(locale);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const all = decisionsBySlug[slug] ?? [];
  const decision = all[decisionIndex];
  const prefix = locale === "it" ? "/it" : "";

  if (!decision) return null;

  return (
    <section id="decision" className="relative">
      <div className="container-wide py-20 md:py-28">
        <ChapterHeader
          number={locale === "it" ? "OPENING — UN ESEMPIO" : "OPENING — A SAMPLE"}
          title={
            locale === "it"
              ? "Una decisione presa, un'alternativa scartata."
              : "One decision taken, one alternative rejected."
          }
          lead={
            locale === "it"
              ? `Da Betika (2019). Cinque mercati africani, costo medio dei dati: 15,82 $/GB. La piattaforma stava emorragiando utenti perché era cara da usare. Ecco una delle sei decisioni che hanno definito quel progetto.`
              : `From Betika (2019). Five African markets, mean data cost: $15.82/GB. The platform was bleeding users because it was expensive to use. Here is one of the six decisions that defined that engagement.`
          }
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            ease: [0.2, 0.65, 0.3, 1] as [number, number, number, number],
          }}
        >
          <DecisionTree
            decisions={[decision]}
            ofLabel={locale === "it" ? "di" : "of"}
          />
        </motion.div>

        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-rule">
          <p className="t-meta text-ink-2 max-w-xl">
            {locale === "it"
              ? "Ogni case study sotto è strutturato così: 4-6 decisioni, due rami per nodo, evidenza dichiarata."
              : "Every case study below is structured this way: 4-6 decisions, two branches per node, evidence stated."}
          </p>
          <Link href={`${prefix}/work/${slug}`} className="arrow-link">
            {locale === "it"
              ? "Leggi tutte le decisioni di Betika"
              : "See every Betika decision"}
          </Link>
        </div>
      </div>

      <div className="rule" />
    </section>
  );
}
