"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { getDict, type Locale } from "@/lib/i18n";

interface AboutTeaserProps {
  locale?: Locale;
}

export default function AboutTeaser({ locale = "en" }: AboutTeaserProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });
  const t = getDict(locale);
  const prefix = locale === "it" ? "/it" : "";

  return (
    <section className="py-32 px-6 md:px-12 border-t border-[#222222]">
      <div className="max-w-350 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-end"
        >
          {/* Left: Large statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] }}
          >
            <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-sans mb-6">
              {t.home.aboutLabel}
            </p>
            <h2
              className="font-serif text-[#F5F0E8] leading-[1.08]"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)" }}
            >
              {t.home.aboutStatement}
            </h2>
          </motion.div>

          {/* Right: Bio excerpt + link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] }}
            className="flex flex-col justify-end gap-6"
          >
            <p className="text-[#888888] font-sans leading-relaxed" style={{ fontSize: "1rem" }}>
              {t.home.aboutExcerpt1}
            </p>
            <p className="text-[#888888] font-sans leading-relaxed" style={{ fontSize: "1rem" }}>
              {t.home.aboutExcerpt2}
            </p>
            <Link
              href={`${prefix}/about`}
              className="inline-flex items-center gap-2 text-sm text-[#C8A96E] hover:text-[#F5F0E8] transition-colors font-sans group w-fit"
            >
              {t.home.fullStory}
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
