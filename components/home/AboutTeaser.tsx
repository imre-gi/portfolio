"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ChapterHeader from "@/components/shared/ChapterHeader";
import { profile as enProfile } from "@/data/profile";
import { profile as itProfile } from "@/data/it/profile";
import { getDict, type Locale } from "@/lib/i18n";

interface AboutTeaserProps {
  locale?: Locale;
}

export default function AboutTeaser({ locale = "en" }: AboutTeaserProps) {
  const t = getDict(locale);
  const p = locale === "it" ? itProfile : enProfile;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefix = locale === "it" ? "/it" : "";

  // First two paragraphs of the bio
  const paragraphs = p.bio.split(/\n\n/).slice(0, 2);

  return (
    <section id="about" className="relative">
      <div className="container-wide py-20 md:py-28">
        <ChapterHeader
          number="03"
          title={t.home.chAbout}
          lead={t.home.chAboutLead}
          link={{ href: `${prefix}/about`, label: t.home.chAboutCta }}
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-8">
          {/* Photo placeholder — drafting outline until Imre supplies the headshot */}
          <motion.figure
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 1] as [number, number, number, number] }}
            className="md:col-span-4 relative aspect-4/5 border border-ink"
          >
            <div className="absolute inset-3 border border-rule flex items-center justify-center">
              <p className="t-mono text-center text-ink-2 px-6 max-w-[18ch]">
                {locale === "it"
                  ? "Ritratto in arrivo · headshot · 2026"
                  : "Portrait pending · headshot · 2026"}
              </p>
            </div>
            <span className="tick-corner absolute inset-0 pointer-events-none" />
            <figcaption className="t-figure-caption mt-3 absolute -bottom-7 left-0">
              FIG. 01 — IMRE GUAGLIANONE, BOLOGNA
            </figcaption>
          </motion.figure>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.08,
              ease: [0.2, 0.65, 0.3, 1] as [number, number, number, number],
            }}
            className="md:col-span-7 md:col-start-6 flex flex-col gap-5 mt-12 md:mt-0"
          >
            {paragraphs.map((para, i) => (
              <p key={i} className="t-body text-ink">
                {para}
              </p>
            ))}
            <div className="flex items-center gap-6 mt-4">
              <Link href={`${prefix}/about`} className="arrow-link">
                {locale === "it" ? "Biografia completa" : "Full biography"}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="rule" />
    </section>
  );
}
