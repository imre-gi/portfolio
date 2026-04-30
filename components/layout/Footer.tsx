"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import { profile as profileIt } from "@/data/it/profile";
import { getDict, type Locale } from "@/lib/i18n";

function getLocale(pathname: string): Locale {
  return pathname.startsWith("/it") ? "it" : "en";
}

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocale(pathname);
  const t = getDict(locale);
  const p = locale === "it" ? profileIt : profile;
  const prefix = locale === "it" ? "/it" : "";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#222222] py-12 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="font-[family-name:var(--font-serif)] text-lg text-[#F5F0E8]">
            Imre Guaglianone
          </p>
          <p className="text-xs text-[#888888] mt-1 font-[family-name:var(--font-sans)]">
            {p.title}
          </p>
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href={`${prefix}/work`}
            className="text-sm text-[#888888] hover:text-[#F5F0E8] transition-colors font-[family-name:var(--font-sans)]"
          >
            {t.footer.work}
          </Link>
          <Link
            href={`${prefix}/services`}
            className="text-sm text-[#888888] hover:text-[#F5F0E8] transition-colors font-[family-name:var(--font-sans)]"
          >
            {t.footer.services}
          </Link>
          <Link
            href={`${prefix}/about`}
            className="text-sm text-[#888888] hover:text-[#F5F0E8] transition-colors font-[family-name:var(--font-sans)]"
          >
            {t.footer.about}
          </Link>
          <Link
            href={`${prefix}/contact`}
            className="text-sm text-[#888888] hover:text-[#F5F0E8] transition-colors font-[family-name:var(--font-sans)]"
          >
            {t.footer.contact}
          </Link>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#888888] hover:text-[#F5F0E8] transition-colors font-[family-name:var(--font-sans)]"
          >
            LinkedIn
          </a>
        </nav>

        <p className="text-xs text-[#444444] font-[family-name:var(--font-sans)]">
          &copy; {year}
        </p>
      </div>
    </footer>
  );
}
