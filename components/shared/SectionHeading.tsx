"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  heading: string;
  className?: string;
}

export default function SectionHeading({ label, heading, className = "" }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className={className}>
      {label && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs tracking-[0.2em] uppercase text-[#888888] mb-4 font-[family-name:var(--font-sans)]"
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] }}
        className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl lg:text-6xl text-[#F5F0E8] leading-[1.05]"
      >
        {heading}
      </motion.h2>
    </div>
  );
}
