import Link from "next/link";
import type { Metadata } from "next";
import { talks } from "@/data/talks";
import ChapterHeader from "@/components/shared/ChapterHeader";

export const metadata: Metadata = {
  title: "Speaking",
  description: "Talks, podcasts, workshops and mentoring.",
};

export default function SpeakingIndex() {
  return (
    <article className="pb-24">
      <header className="container-wide pt-12 md:pt-16 pb-12 md:pb-16">
        <ChapterHeader
          number="INDEX · SPEAKING"
          title="Talks, podcasts, workshops, mentoring."
          lead="Available for keynotes and panel sessions on UX research, evidence-led design and decision intelligence. Mentoring on a limited basis through the Interaction Design Foundation."
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
              {t.description && (
                <p className="t-body text-ink-2 mt-3 max-w-3xl md:ml-[calc(2/12*100%)]">
                  {t.description}
                </p>
              )}
              {t.url && (
                <a
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="arrow-link mt-3 inline-flex"
                >
                  Open
                </a>
              )}
            </li>
          ))}
        </ol>
      ) : (
        <div className="container-wide py-20">
          <p className="t-lead text-ink-2 max-w-2xl">
            Public engagements will appear here. To invite Imre to speak,
            <Link href="/contact" className="inline-link mx-1">get in touch</Link>.
          </p>
        </div>
      )}
    </article>
  );
}
