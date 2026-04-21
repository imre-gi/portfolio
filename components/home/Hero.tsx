"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const easing = [0.215, 0.61, 0.355, 1] as [number, number, number, number];

function fadeUpProps(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: easing },
  };
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 px-6 md:px-12 pt-24 overflow-hidden">
      {/* Subtle background noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      <div className="relative z-10 max-w-350 mx-auto w-full">
        <div className="space-y-8">
          {/* Index marker */}
          <motion.p
            {...fadeUpProps(0.1)}
            className="text-xs tracking-[0.3em] uppercase text-[#888888] font-sans"
          >
            Portfolio — 2025
          </motion.p>

          {/* Main name — massive type */}
          <div className="overflow-hidden">
            <motion.h1
              {...fadeUpProps(0.2)}
              className="font-serif leading-[0.92] text-[#F5F0E8]"
              style={{ fontSize: "clamp(4rem, 10vw, 12rem)" }}
            >
              IMRE
              <br />
              GUAGLIANONE
            </motion.h1>
          </div>

          {/* Title */}
          <motion.p
            {...fadeUpProps(0.4)}
            className="font-sans text-sm tracking-[0.15em] uppercase text-[#888888]"
          >
            {profile.title}
          </motion.p>

          {/* Philosophy quote */}
          <motion.p
            {...fadeUpProps(0.55)}
            className="font-serif italic text-[#F5F0E8]/70 max-w-2xl leading-relaxed"
            style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
          >
            &ldquo;{profile.philosophy}&rdquo;
          </motion.p>

          {/* Bottom row */}
          <motion.div
            {...fadeUpProps(0.7)}
            className="flex items-center justify-between pt-4 border-t border-[#222222]"
          >
            <p className="text-xs text-[#888888] font-sans">
              {profile.location}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#888888] font-sans">
                Scroll
              </span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-px h-8 bg-[#444444] ml-1"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
