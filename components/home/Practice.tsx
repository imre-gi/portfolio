"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ChapterHeader from "@/components/shared/ChapterHeader";
import type { Locale } from "@/lib/i18n";

interface PracticeProps {
  locale?: Locale;
}

const principles = {
  en: [
    {
      head: "Decisions before pixels.",
      body:
        "What I deliver is judgement made visible. The wireframe is a record of which decision won and why — never the decision itself.",
    },
    {
      head: "Evidence before opinion.",
      body:
        "Every claim I sign cites its source. If I can't trace a recommendation back to data, an interview, or a structured argument, I won't make it.",
    },
    {
      head: "Constraint before craft.",
      body:
        "The hardest design problems are economic, regulatory, or political. The craft serves the constraint — the constraint defines what 'good' even means.",
    },
    {
      head: "Limitations stated.",
      body:
        "I tell stakeholders what I don't know, what didn't survive testing, and what the next study would need to confirm. That's not weakness; it's the price of being trusted twice.",
    },
  ],
  it: [
    {
      head: "Prima le decisioni, poi i pixel.",
      body:
        "Quello che consegno è il giudizio reso visibile. Il wireframe è il verbale della decisione vincente — non la decisione stessa.",
    },
    {
      head: "Prima l'evidenza, poi l'opinione.",
      body:
        "Ogni affermazione che firmo cita la sua fonte. Se non posso tracciare una raccomandazione fino a un dato, un'intervista o un argomento strutturato, non la formulo.",
    },
    {
      head: "Prima il vincolo, poi la cura artigianale.",
      body:
        "I problemi di design più duri sono economici, regolatori, politici. La cura serve il vincolo — il vincolo definisce cosa significa 'buono'.",
    },
    {
      head: "Limiti dichiarati.",
      body:
        "Dico agli stakeholder cosa non so, cosa non ha superato il test, e cosa servirebbe per confermarlo. Non è debolezza: è il prezzo di essere creduti due volte.",
    },
  ],
};

export default function Practice({ locale = "en" }: PracticeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const list = principles[locale];

  return (
    <section className="relative">
      <div className="container-wide py-20 md:py-28">
        <ChapterHeader
          number="02"
          title={locale === "it" ? "Pratica" : "Practice"}
          lead={
            locale === "it"
              ? "Quattro principi non negoziabili. Ognuno spiega cosa rifiuto di saltare e perché."
              : "Four non-negotiables. Each one says what I refuse to skip and why."
          }
        />
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-10">
          {list.map((p, i) => (
            <motion.article
              key={p.head}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: i * 0.06,
                ease: [0.2, 0.65, 0.3, 1] as [number, number, number, number],
              }}
              className="md:col-span-6 lg:col-span-3 border-t border-ink pt-5 relative tick-corner"
            >
              <p className="t-mono mb-4">PRINCIPLE {String(i + 1).padStart(2, "0")}</p>
              <h3 className="t-h4 mb-3">{p.head}</h3>
              <p className="t-body text-ink-2">{p.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
      <div className="rule" />
    </section>
  );
}
