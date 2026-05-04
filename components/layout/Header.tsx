"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = getDict(locale);
  const alternate = getAlternatePath(pathname);

  const prefix = locale === "it" ? "/it" : "";
  const navLinks = [
    { href: `${prefix}/work`, label: t.nav.work },
    { href: `${prefix}/services`, label: t.nav.services },
    { href: `${prefix}/writing`, label: t.nav.writing },
    { href: `${prefix}/about`, label: t.nav.about },
    { href: `${prefix}/contact`, label: t.nav.contact },
  ];

  return (
    <header className="border-b border-rule-soft bg-paper">
      <div className="container-wide flex items-center justify-between py-5">
        <Link
          href={locale === "it" ? "/it" : "/"}
          className="flex items-baseline gap-2 group"
          aria-label="Imre Guaglianone — home"
        >
          <span className="t-mono text-ink group-hover:text-accent transition-colors">
            IG / IMRE GUAGLIANONE
          </span>
        </Link>

        <nav className="flex items-center gap-5 md:gap-7">
          {navLinks.map((link) => {
            const active =
              link.href === pathname ||
              (link.href !== `${prefix}` &&
                pathname.startsWith(link.href + "/"));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`hidden sm:inline t-mono transition-colors ${
                  active ? "text-ink" : "text-ink-2 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href={alternate.href}
            className="t-mono border border-rule px-2 py-1 text-ink-2 hover:text-ink hover:border-ink transition-colors"
            aria-label={`Switch to ${alternate.locale.toUpperCase()}`}
          >
            {alternate.locale === "it" ? "IT" : "EN"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
