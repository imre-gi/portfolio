"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/data/experience";

export default function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-[2px] top-0 bottom-0 w-px bg-[#222222]" />

      <div className="space-y-16 pl-8 md:pl-12">
        {experience.map((entry, i) => (
          <TimelineEntry key={i} entry={entry} index={i} />
        ))}
      </div>
    </div>
  );
}

interface TimelineEntryProps {
  entry: (typeof experience)[0];
  index: number;
}

function TimelineEntry({ entry, index }: TimelineEntryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] }}
      className="relative"
    >
      {/* Dot */}
      <div className="absolute -left-8 md:-left-12 top-2 w-1.5 h-1.5 rounded-full bg-[#C8A96E] -translate-x-[calc(50%-0.5px)] md:-translate-x-[calc(50%-1px)]" />

      {/* Date range */}
      <p className="text-xs tracking-[0.15em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-3">
        {entry.startDate} — {entry.endDate} &middot; {entry.industry}
      </p>

      {/* Role */}
      <h3 className="font-[family-name:var(--font-serif)] text-[#F5F0E8] text-2xl md:text-3xl mb-1">
        {entry.role}
      </h3>

      {/* Company */}
      <p className="text-[#C8A96E] font-[family-name:var(--font-sans)] text-sm mb-4">
        {entry.company}
      </p>

      {/* Description */}
      <p className="text-[#888888] font-[family-name:var(--font-sans)] leading-relaxed mb-4 max-w-2xl" style={{ fontSize: "0.95rem" }}>
        {entry.description}
      </p>

      {/* Highlights */}
      <ul className="space-y-2 max-w-2xl">
        {entry.highlights.map((h, j) => (
          <li key={j} className="flex gap-3 text-sm font-[family-name:var(--font-sans)] text-[#888888]">
            <span className="text-[#C8A96E] mt-0.5 shrink-0">—</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
