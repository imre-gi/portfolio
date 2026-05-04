import Link from "next/link";
import type { Metadata } from "next";
import { writings } from "@/data/it/writings";
import ChapterHeader from "@/components/shared/ChapterHeader";

export const metadata: Metadata = {
  title: "Scrittura",
  description:
    "Note su ricerca, design, qualità delle decisioni e il mestiere di lavorare con l'evidenza.",
};

export default function WritingIndexIT() {
  const drafts = writings.filter((w) => !w.published);
  const live = writings.filter((w) => w.published);

  return (
    <article className="pb-24">
      <header className="container-wide pt-12 md:pt-16 pb-12 md:pb-16">
        <ChapterHeader
          number="INDICE · SCRITTURA"
          title="Note dalla pratica."
          lead="Scrittura long-form su ricerca, design, qualità delle decisioni e il mestiere di lavorare con l'evidenza. Aggiornata quando c'è qualcosa da dire — mai a calendario."
          as="h1"
        />
      </header>

      {live.length > 0 && (
        <ol className="container-wide border-t border-ink">
          {live.map((w) => (
            <li key={w.slug} className="border-b border-rule">
              <Link
                href={`/it/writing/${w.slug}`}
                className="group grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-2 py-7 md:py-8"
              >
                <span className="md:col-span-2 t-mono t-num">
                  {new Date(w.date).toISOString().slice(0, 10)}
                </span>
                <h3 className="md:col-span-7 t-h4 group-hover:text-accent transition-colors">
                  {w.title}
                </h3>
                <p className="md:col-span-2 t-mono text-ink-2">{w.readingTime}</p>
                <span className="md:col-span-1 md:text-right t-mono group-hover:text-accent transition-colors">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      )}

      {drafts.length > 0 && (
        <section className="container-wide py-16">
          <p className="t-mono mb-6">BOZZE · IN ARRIVO</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            {drafts.map((w) => (
              <li key={w.slug} className="border-l-2 border-rule pl-5">
                <p className="t-mono text-ink-3 mb-2">
                  {new Date(w.date).toISOString().slice(0, 10)} · {w.readingTime}
                </p>
                <h3 className="t-h4 text-ink-2">{w.title}</h3>
                <p className="t-body text-ink-2 mt-2 max-w-prose">{w.excerpt}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {writings.length === 0 && (
        <div className="container-wide py-20">
          <p className="t-lead text-ink-2 max-w-2xl">
            Le note sono in arrivo. Nel frattempo, i case study sotto
            <Link href="/it/work" className="inline-link mx-1">Lavori</Link>
            sono scritti come record estesi delle decisioni.
          </p>
        </div>
      )}
    </article>
  );
}
