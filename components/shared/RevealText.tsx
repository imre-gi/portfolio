"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface RevealTextProps {
  as?: "div" | "span" | "p" | "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
  children: ReactNode;
}

export default function RevealText({
  as = "div",
  className = "",
  delay = 0,
  children,
}: RevealTextProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: [0.2, 0.65, 0.3, 1] as [number, number, number, number],
      }}
    >
      {children}
    </MotionTag>
  );
}
