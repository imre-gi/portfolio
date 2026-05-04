"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getDict, type Locale } from "@/lib/i18n";

const easing = [0.2, 0.65, 0.3, 1] as [number, number, number, number];

interface HeroProps {
  locale?: Locale;
}

export default function Hero({ locale = "en" }: HeroProps) {
  const t = getDict(locale);
  const prefix = locale === "it" ? "/it" : "";
  const today = new Date();
  const issue = `Vol. ${today.getFullYear() - 2008} · ${today
    .toLocaleString(locale === "it" ? "it-IT" : "en-GB", { month: "short" })
    .toUpperCase()} ${today.getFullYear()}`;

  return (
    <section className="relative">
      {/* Top metadata strip — masthead style */}
      <div className="container-wide pt-10 pb-6">
        <div className="flex items-center justify-between text-ink-2">
          <p className="t-mono">{issue}</p>
          <p className="t-mono hidden sm:block">
            {locale === "it" ? "Bologna · Italia" : "Bologna · Italy"}
          </p>
          <p className="t-mono">N° 04</p>
        </div>
      </div>

      <div className="rule" />

      {/* Thesis — the masthead-headline */}
      <div className="container-wide pt-16 md:pt-24 pb-16 md:pb-24 relative">
        <motion.p
          className="t-mono text-ink-2 mb-8"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easing }}
        >
          {locale === "it" ? "TESI" : "THESIS"}
        </motion.p>

        <motion.h1
          className="t-display max-w-[18ch]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easing, delay: 0.05 }}
        >
          {locale === "it" ? (
            <>
              Il design senior si misura sulle{" "}
              <span className="text-accent">decisioni</span> prese,
              non sui pixel prodotti.
            </>
          ) : (
            <>
              Senior design is measured by the{" "}
              <span className="text-accent">decisions</span> taken,
              not the pixels produced.
            </>
          )}
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-6 mt-14 md:mt-20"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easing, delay: 0.18 }}
        >
          <div className="md:col-span-3">
            <p className="t-mono mb-2">{locale === "it" ? "AUTORE" : "BY"}</p>
            <p className="t-body">Imre Guaglianone</p>
            <p className="t-meta">
              {locale === "it"
                ? "Experience designer · ricercatore · founder. Quindici anni di pratica."
                : "Experience designer · researcher · founder. Fifteen years of practice."}
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-5">
            <p className="t-mono mb-2">{locale === "it" ? "ARGOMENTO" : "ABSTRACT"}</p>
            <p className="t-lead">
              {locale === "it"
                ? "Questo portfolio non racconta progetti. Mappa decisioni: i bivi reali — tecnici, etici, politici — affrontati in 15 anni di pratica, con cosa ho scelto e cosa sarebbe successo se avessi scelto l'altra strada."
                : "This portfolio doesn't narrate projects. It maps decisions: the real forks — technical, ethical, political — faced in fifteen years of practice, with what I chose and what would have happened had I chosen the other path."}
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-11 md:flex md:items-end md:justify-end">
            <div className="flex md:flex-col gap-4 md:items-end">
              <Link href={`${prefix}/work`} className="arrow-link">
                {locale === "it" ? "Apri l'indice" : "Open index"}
              </Link>
              <Link href={`${prefix}/contact`} className="arrow-link">
                {locale === "it" ? "Prenota una call" : "Book a call"}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="rule" />

      {/* Tag strip showing the index */}
      <div className="container-wide py-5 flex items-center justify-between flex-wrap gap-3 text-ink-2">
        <p className="t-mono">
          {locale === "it" ? "INDICE" : "CONTENTS"}
        </p>
        <div className="flex items-center gap-x-5 gap-y-2 flex-wrap">
          <Link href={`${prefix}#decision`} className="t-mono hover:text-accent">01 · {t.home.chDecisions}</Link>
          <Link href={`${prefix}#work`} className="t-mono hover:text-accent">02 · {t.home.chSelectedWork}</Link>
          <Link href={`${prefix}#about`} className="t-mono hover:text-accent">03 · {t.home.chAbout}</Link>
          <Link href={`${prefix}#services`} className="t-mono hover:text-accent">04 · {t.home.chServices}</Link>
          <Link href={`${prefix}#contact`} className="t-mono hover:text-accent">05 · {t.home.chContact}</Link>
        </div>
      </div>

      <div className="rule" />
    </section>
  );
}
