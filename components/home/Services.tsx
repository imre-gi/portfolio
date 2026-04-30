"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    index: "01",
    title: "Product & idea validation",
    description: "Evidence-based validation to cut ambiguity early and move forward with confidence.",
  },
  {
    index: "02",
    title: "User research",
    description: "Qualitative and quantitative methods that surface real needs behind stated preferences.",
  },
  {
    index: "03",
    title: "User experience design",
    description: "End-to-end experience design rooted in systems thinking and behavioral insight.",
  },
  {
    index: "04",
    title: "Service design",
    description: "Aligning people, processes, and touchpoints so the backstage supports the front.",
  },
  {
    index: "05",
    title: "Business process optimisation",
    description: "Mapping and rethinking internal workflows to reduce friction and surface value faster.",
  },
  {
    index: "06",
    title: "Corporate training",
    description: "Hands-on programmes on user research and validation for product and business teams.",
  },
  {
    index: "07",
    title: "Fractional CXO",
    description: "Senior customer experience leadership on a fractional basis — strategy through execution.",
  },
];

export default function Services() {
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="py-32 px-6 md:px-12 border-t border-[#222222]">
      <div className="max-w-350 mx-auto">
        {/* Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20"
        >
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-sans mb-6">
              Services
            </p>
            <h2
              className="font-serif text-[#F5F0E8] leading-[1.08]"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)" }}
            >
              How I can help.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm text-[#C8A96E] hover:text-[#F5F0E8] transition-colors font-sans group w-fit shrink-0"
          >
            Start a conversation
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Link>
        </motion.div>

        {/* Service list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {services.map((service, i) => (
            <ServiceItem key={service.index} service={service} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceItemProps {
  service: (typeof services)[0];
  delay: number;
}

function ServiceItem({ service, delay }: ServiceItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] }}
      className="group py-8 border-b border-[#1A1A1A] md:odd:pr-12 md:even:pl-12 md:odd:border-r md:odd:border-r-[#1A1A1A]"
    >
      <span className="font-serif text-[#333333] text-sm leading-none mb-4 block">
        {service.index}
      </span>
      <h3
        className="font-serif text-[#F5F0E8] mb-3 leading-snug group-hover:text-[#C8A96E] transition-colors duration-300"
        style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
      >
        {service.title}
      </h3>
      <p className="text-[#888888] font-sans leading-relaxed" style={{ fontSize: "0.875rem" }}>
        {service.description}
      </p>
    </motion.div>
  );
}
