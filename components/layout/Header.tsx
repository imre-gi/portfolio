"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { getDict, type Locale } from "@/lib/i18n";

function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith("/it") ? "it" : "en";
}

function getAlternatePath(pathname: string): { locale: Locale; href: string } {
  if (pathname.startsWith("/it")) {
    const stripped = pathname.replace(/^\/it/, "") || "/";
    return { locale: "en", href: stripped };
  }
  return { locale: "it", href: `/it${pathname === "/" ? "" : pathname}` };
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = getDict(locale);
  const alternate = getAlternatePath(pathname);

  const prefix = locale === "it" ? "/it" : "";
  const navLinks = [
    { href: `${prefix}/work`, label: t.nav.work },
    { href: `${prefix}/services`, label: t.nav.services },
    { href: `${prefix}/about`, label: t.nav.about },
    { href: `${prefix}/contact`, label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#222222]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <Link
          href={locale === "it" ? "/it" : "/"}
          className="font-[family-name:var(--font-serif)] text-xl text-[#F5F0E8] tracking-tight hover:text-[#C8A96E] transition-colors duration-300"
        >
          IG
        </Link>

        <nav className="flex items-center gap-6 md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-sans)] text-sm tracking-wide text-[#888888] hover:text-[#F5F0E8] transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}

          {/* Language toggle */}
          <Link
            href={alternate.href}
            className="font-[family-name:var(--font-sans)] text-xs tracking-[0.12em] uppercase border border-[#333333] px-2.5 py-1 text-[#888888] hover:border-[#C8A96E] hover:text-[#C8A96E] transition-colors duration-300"
          >
            {alternate.locale === "it" ? "IT" : "EN"}
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
