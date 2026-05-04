import Link from "next/link";
import type { Metadata } from "next";
import { talks } from "@/data/it/talks";
import ChapterHeader from "@/components/shared/ChapterHeader";

export const metadata: Metadata = {
  title: "Talk",
  description: "Talk, podcast, workshop e mentoring.",
};

export default function SpeakingIndexIT() {
  return (
    <article className="pb-24">
      <header className="container-wide pt-12 md:pt-16 pb-12 md:pb-16">
        <ChapterHeader
          number="INDICE · TALK"
          title="Talk, podcast, workshop, mentoring."
          lead="Disponibile per keynote e panel su ricerca UX, design basato su evidenza e decision intelligence. Mentoring su base limitata tramite Interaction Design Foundation."
          as="h1"
        />
      </header>

      {talks.length > 0 ? (
        <ol className="container-wide border-t border-ink">
          {talks.map((t, i) => (
            <li key={i} className="border-b border-rule py-7">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-2">
                <span className="md:col-span-2 t-mono t-num">{t.year}</span>
                <span className="md:col-span-2 t-mono uppercase">{t.type}</span>
                <h3 className="md:col-span-5 t-h4">{t.title}</h3>
                <p className="md:col-span-3 t-meta text-ink-2">
                  {t.event}
                  {t.location ? ` · ${t.location}` : ""}
                </p>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <div className="container-wide py-20">
          <p className="t-lead text-ink-2 max-w-2xl">
            Gli interventi pubblici compariranno qui. Per invitare Imre a parlare,
            <Link href="/it/contact" className="inline-link mx-1">contattalo</Link>.
          </p>
        </div>
      )}
    </article>
  );
}
