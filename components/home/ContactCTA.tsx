"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "@/data/profile";
import ChapterHeader from "@/components/shared/ChapterHeader";
import { getDict, type Locale } from "@/lib/i18n";

interface ContactCTAProps {
  locale?: Locale;
}

export default function ContactCTA({ locale = "en" }: ContactCTAProps) {
  const t = getDict(locale);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefix = locale === "it" ? "/it" : "";

  return (
    <section id="contact" className="relative">
      <div className="container-wide py-20 md:py-28">
        <ChapterHeader
          number="05"
          title={t.home.chContact}
          lead={t.home.chContactLead}
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              ease: [0.2, 0.65, 0.3, 1] as [number, number, number, number],
            }}
            className="md:col-span-6"
          >
            <p className="t-cover">
              {locale === "it"
                ? "Una conversazione di trenta minuti - nessun pitch, niente sales - sulla decisione di prodotto più difficile che hai davanti."
                : "A thirty-minute conversation — no pitch, no sales — about the hard product decision in front of you."}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link href={`${prefix}/contact`} className="arrow-link">
                {t.home.contactCtaCall}
              </Link>
              <a href={`mailto:${profile.email}`} className="arrow-link">
                {t.home.contactCtaEmail}
              </a>
            </div>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.2, 0.65, 0.3, 1] as [number, number, number, number],
            }}
            className="md:col-span-6 md:col-start-9 grid grid-cols-2 gap-x-6 gap-y-5"
          >
            <div className="w-fit">
              <dt className="t-mono mb-2">EMAIL</dt>
              <dd className="t-body w-fit">
                <a href={`mailto:${profile.email}`} className="inline-link ">
                  {profile.email}
                </a>
              </dd>
            </div>
            <div className="w-fit">
              <dt className="t-mono mb-2">PHONE</dt>
              <dd className="t-body">{profile.phone}</dd>
            </div>
            <div className="w-fit">
              <dt className="t-mono mb-2">LINKEDIN</dt>
              <dd className="t-body">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-link w-fit"
                >
                  /imreguaglianone
                </a>
              </dd>
            </div>
            <div className="w-fit">
              <dt className="t-mono mb-2">TZ</dt>
              <dd className="t-body">CET · UTC+1</dd>
            </div>
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
