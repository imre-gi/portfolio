"use client";

import { useState } from "react";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyCard from "@/components/work/CaseStudyCard";
import { AnimatePresence, motion } from "framer-motion";

const categories = ["all", "design", "research", "strategy", "founding"] as const;
type Category = (typeof categories)[number];

export default function WorkPage() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all"
      ? caseStudies
      : caseStudies.filter((cs) => cs.category === active);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="mb-20">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-6">
            Portfolio
          </p>
          <h1
            className="font-[family-name:var(--font-serif)] text-[#F5F0E8] leading-none"
            style={{ fontSize: "clamp(4rem, 10vw, 10rem)" }}
          >
            Work
          </h1>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-16 border-b border-[#222222] pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 text-xs tracking-[0.15em] uppercase font-[family-name:var(--font-sans)] border transition-colors duration-200 ${
                active === cat
                  ? "border-[#C8A96E] text-[#C8A96E]"
                  : "border-[#333333] text-[#888888] hover:border-[#555555] hover:text-[#F5F0E8]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filtered.map((study, i) => (
              <CaseStudyCard key={study.slug} study={study} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
