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
    <footer className="border-t border-rule mt-32">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {/* Colophon */}
          <div className="md:col-span-5">
            <p className="t-mono mb-3">{t.footer.colophonLabel}</p>
            <p className="t-h3 mb-4">Imre Guaglianone</p>
            <p className="t-body text-ink-2 max-w-md">
              {locale === "it"
                ? "Experience designer e ricercatore. Bologna, lavoro in remoto in tutta Europa. Disponibile da settembre per nuove collaborazioni."
                : "Experience designer and researcher. Based in Bologna, working remotely across Europe. Available from September for new engagements."}
            </p>
          </div>

          {/* Index */}
          <div className="md:col-span-3">
            <p className="t-mono mb-3">{t.footer.indexLabel}</p>
            <ul className="space-y-2">
              <li><Link href={`${prefix}/work`} className="t-body inline-link">{t.nav.work}</Link></li>
              <li><Link href={`${prefix}/services`} className="t-body inline-link">{t.nav.services}</Link></li>
              <li><Link href={`${prefix}/writing`} className="t-body inline-link">{t.nav.writing}</Link></li>
              <li><Link href={`${prefix}/speaking`} className="t-body inline-link">{t.nav.speaking}</Link></li>
              <li><Link href={`${prefix}/about`} className="t-body inline-link">{t.nav.about}</Link></li>
              <li><Link href={`${prefix}/contact`} className="t-body inline-link">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Direct */}
          <div className="md:col-span-4">
            <p className="t-mono mb-3">{t.footer.directLabel}</p>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${p.email}`} className="t-body inline-link">
                  {p.email}
                </a>
              </li>
              <li>
                <a
                  href={p.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-body inline-link"
                >
                  LinkedIn — /in/imreguaglianone
                </a>
              </li>
              <li className="t-body text-ink-2">{p.phone}</li>
              <li className="t-body text-ink-2">{p.location}</li>
            </ul>
          </div>
        </div>

        {/* Imprint */}
        <div className="mt-14 pt-6 border-t border-rule-soft flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="t-mono">
            © {year} Imre Guaglianone — {t.footer.imprint}
          </p>
          <p className="t-mono text-ink-3">
            {t.footer.colophonText}
          </p>
        </div>
      </div>
    </footer>
  );
}
