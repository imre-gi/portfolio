"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface MetricCalloutProps {
  value: string;
  label: string;
  index?: number;
}

export default function MetricCallout({ value, label, index = 0 }: MetricCalloutProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const isPlaceholder = value === "{PLACEHOLDER}";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] }}
      className="border border-[#222222] p-8"
    >
      <p
        className="font-[family-name:var(--font-serif)] leading-none mb-3"
        style={{
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          color: isPlaceholder ? "#444444" : "#C8A96E",
          fontStyle: isPlaceholder ? "italic" : "normal",
        }}
      >
        {isPlaceholder ? "TBD" : value}
      </p>
      <p className="text-xs tracking-[0.1em] uppercase text-[#888888] font-[family-name:var(--font-sans)] leading-relaxed">
        {label}
      </p>
      {isPlaceholder && (
        <p className="text-xs text-[#444444] font-[family-name:var(--font-sans)] mt-1 italic">
          data pending
        </p>
      )}
    </motion.div>
  );
}
