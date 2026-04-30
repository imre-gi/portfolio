"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/types";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
  prefix?: string;
}

const categoryColors: Record<string, string> = {
  design: "#C8A96E",
  research: "#7EB8C8",
  strategy: "#B8C87E",
  founding: "#C87EA8",
};

export default function CaseStudyCard({ study, index, prefix = "" }: CaseStudyCardProps) {
  const num = String(index + 1).padStart(2, "0");
  const accentColor = categoryColors[study.category] ?? "#888888";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <Link href={`${prefix}/work/${study.slug}`} className="block">
        <div className="flex flex-col md:flex-row md:items-center gap-4 py-6 border-b border-[#1A1A1A] group-hover:border-[#333333] transition-colors">
          {/* Index */}
          <span className="text-sm text-[#444444] font-[family-name:var(--font-sans)] w-10 shrink-0">
            {num}
          </span>

          {/* Colored block */}
          <div
            className="w-16 h-10 shrink-0 transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundColor: study.heroColor }}
          />

          {/* Title + client */}
          <div className="flex-1 min-w-0">
            <h3 className="font-[family-name:var(--font-serif)] text-[#F5F0E8] text-xl md:text-2xl group-hover:text-[#C8A96E] transition-colors leading-tight">
              {study.title}
            </h3>
            <p className="text-xs text-[#888888] font-[family-name:var(--font-sans)] mt-1">
              {study.client}
            </p>
          </div>

          {/* Year */}
          <span className="text-sm text-[#888888] font-[family-name:var(--font-sans)] shrink-0">
            {study.year}
          </span>

          {/* Category */}
          <span
            className="text-xs tracking-wide uppercase font-[family-name:var(--font-sans)] shrink-0 w-20 text-right"
            style={{ color: accentColor }}
          >
            {study.category}
          </span>

          {/* Arrow */}
          <span className="text-[#888888] group-hover:text-[#F5F0E8] group-hover:translate-x-1 transition-all font-[family-name:var(--font-sans)] shrink-0">
            →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
