"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "@/data/profile";

export default function ContactCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section className="py-32 px-6 md:px-12 border-t border-[#222222]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] }}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-10">
            Get in touch
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="block group w-fit"
          >
            <h2
              className="font-[family-name:var(--font-serif)] text-[#F5F0E8] leading-none hover:text-[#C8A96E] transition-colors duration-300"
              style={{ fontSize: "clamp(1.6rem, 4vw, 5rem)" }}
            >
              {profile.email}
            </h2>
          </a>

          <div className="mt-10 flex items-center gap-8">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#888888] hover:text-[#F5F0E8] transition-colors font-[family-name:var(--font-sans)] group"
            >
              LinkedIn
              <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
