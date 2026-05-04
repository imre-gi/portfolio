"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { services as enServices } from "@/data/services";
import { services as itServices } from "@/data/it/services";
import ChapterHeader from "@/components/shared/ChapterHeader";
import { getDict, type Locale } from "@/lib/i18n";

interface ServicesProps {
  locale?: Locale;
}

export default function Services({ locale = "en" }: ServicesProps) {
  const t = getDict(locale);
  const list = locale === "it" ? itServices : enServices;
  const prefix = locale === "it" ? "/it" : "";
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="services" className="relative">
      <div className="container-wide py-20 md:py-28">
        <ChapterHeader
          number="04"
          title={t.home.chServices}
          lead={t.home.chServicesLead}
          link={{ href: `${prefix}/services`, label: t.home.chServicesAll }}
        />

        <ol ref={ref} className="border-t border-rule">
          {list.map((service, i) => (
            <motion.li
              key={service.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.04,
                ease: [0.2, 0.65, 0.3, 1] as [number, number, number, number],
              }}
              className="border-b border-rule"
            >
              <Link
                href={`${prefix}/services/${service.slug}`}
                className="group grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-2 py-6 md:py-7"
              >
                <span className="md:col-span-1 t-mono text-ink-2">
                  S/{service.index}
                </span>
                <span className="md:col-span-5 t-decision group-hover:text-accent transition-colors">
                  {service.title}
                </span>
                <span className="md:col-span-5 t-meta text-ink-2 max-w-prose">
                  {service.tagline}
                </span>
                <span className="md:col-span-1 md:text-right t-mono text-ink-2 group-hover:text-accent transition-colors">
                  →
                </span>
              </Link>
            </motion.li>
          ))}
        </ol>
      </div>
      <div className="rule" />
    </section>
  );
}
