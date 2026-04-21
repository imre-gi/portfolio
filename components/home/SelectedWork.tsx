"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { caseStudies } from "@/data/caseStudies";

const featured = caseStudies.filter((cs) => cs.featured);

const indices = ["01", "02", "03"];

export default function SelectedWork() {
  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-350 mx-auto">
        {/* Section label */}
        <div className="flex items-center justify-between mb-20">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-sans">
            Selected Work
          </p>
          <Link
            href="/work"
            className="text-xs tracking-[0.15em] uppercase text-[#888888] hover:text-[#C8A96E] transition-colors font-sans group"
          >
            All projects
            <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Project 1: Large left + right text */}
        <ProjectRow
          index={indices[0]}
          study={featured[0]}
          layout="image-left"
        />

        {/* Project 2: Right image + left text */}
        <ProjectRow
          index={indices[1]}
          study={featured[1]}
          layout="image-right"
        />

        {/* Project 3: Full-width strip */}
        <ProjectFullWidth
          index={indices[2]}
          study={featured[2]}
        />
      </div>
    </section>
  );
}

interface ProjectRowProps {
  index: string;
  study: (typeof caseStudies)[0];
  layout: "image-left" | "image-right";
}

function ProjectRow({ index, study, layout }: ProjectRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  const imageCol = (
    <Link href={`/work/${study.slug}`} className="block group">
      <motion.div
        className="w-full aspect-4/3 relative overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundColor: study.heroColor }}
        />
        {study.heroImage && (
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            style={{ objectFit: "cover", objectPosition: "center top", opacity: 0.5 }}
            className="transition-transform duration-700 group-hover:scale-105"
          />
        )}
        {/* Hover reveal overlay */}
        <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/30 transition-all duration-500 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs tracking-[0.2em] uppercase text-[#F5F0E8] font-sans">
            View case study →
          </span>
        </div>
      </motion.div>
    </Link>
  );

  const textCol = (
    <div className="flex flex-col justify-between py-4">
      <div>
        <p className="font-serif text-[#444444] text-6xl leading-none mb-6">
          {index}
        </p>
        <h3
          className="font-serif text-[#F5F0E8] leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
        >
          {study.title}
        </h3>
        <p className="text-[#888888] text-sm font-sans mb-2">
          {study.client}
        </p>
        <p className="text-[#F5F0E8]/60 font-sans leading-relaxed mb-8 max-w-sm" style={{ fontSize: "0.9rem" }}>
          {study.summary}
        </p>
      </div>

      <div className="flex items-center gap-4">
        {study.roles.slice(0, 2).map((role) => (
          <span
            key={role}
            className="text-xs tracking-wide text-[#888888] border border-[#333333] px-3 py-1 font-sans"
          >
            {role}
          </span>
        ))}
        <Link
          href={`/work/${study.slug}`}
          className="ml-auto text-sm text-[#C8A96E] hover:text-[#F5F0E8] transition-colors font-sans group"
        >
          Read →
        </Link>
      </div>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] }}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 pb-24 border-b border-[#1A1A1A]"
    >
      {layout === "image-left" ? (
        <>
          <div>{imageCol}</div>
          <div>{textCol}</div>
        </>
      ) : (
        <>
          <div className="md:order-2">{imageCol}</div>
          <div className="md:order-1">{textCol}</div>
        </>
      )}
    </motion.div>
  );
}

interface ProjectFullWidthProps {
  index: string;
  study: (typeof caseStudies)[0];
}

function ProjectFullWidth({ index, study }: ProjectFullWidthProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] }}
    >
      <Link href={`/work/${study.slug}`} className="block group">
        <div className="relative w-full overflow-hidden" style={{ minHeight: 320 }}>
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.01]"
            style={{ backgroundColor: study.heroColor }}
          />
          {study.heroImage && (
            <Image
              src={study.heroImage}
              alt={study.title}
              fill
              style={{ objectFit: "cover", objectPosition: "center top", opacity: 0.35 }}
              className="transition-transform duration-700 group-hover:scale-[1.01]"
            />
          )}
          <div className="absolute inset-0 bg-[#0A0A0A]/50" />

          <div className="relative z-10 p-12 md:p-16 flex flex-col justify-between min-h-80">
            <p className="font-serif text-[#F5F0E8]/30 text-6xl leading-none">
              {index}
            </p>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h3
                  className="font-serif text-[#F5F0E8] leading-tight mb-3"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
                >
                  {study.title}
                </h3>
                <p className="text-[#F5F0E8]/60 font-sans max-w-2xl leading-relaxed" style={{ fontSize: "0.95rem" }}>
                  {study.summary}
                </p>
              </div>

              <div className="shrink-0">
                <span className="inline-flex items-center gap-2 text-sm text-[#C8A96E] group-hover:text-[#F5F0E8] transition-colors font-sans">
                  Read case study
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
