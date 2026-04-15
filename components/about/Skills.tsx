"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "@/data/profile";

const skillColumns = [
  { label: "Research Methods", items: profile.skills.research },
  { label: "Design & Tools", items: [...profile.skills.design, ...profile.skills.tools] },
  { label: "Frameworks & Strategy", items: [...profile.skills.frameworks, ...profile.skills.strategy] },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16"
    >
      {skillColumns.map((col, colIndex) => (
        <motion.div
          key={col.label}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: colIndex * 0.15, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] }}
        >
          <h3 className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-6 pb-3 border-b border-[#222222]">
            {col.label}
          </h3>
          <ul className="space-y-3">
            {col.items.map((item) => (
              <li
                key={item}
                className="font-[family-name:var(--font-sans)] text-[#F5F0E8]/80 text-sm leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
