import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/data/services";
import ChapterHeader from "@/components/shared/ChapterHeader";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Seven ways to engage. Each starts with a conversation about your situation.",
};

export default function ServicesIndex() {
  return (
    <article className="pb-24">
      <header className="container-wide pt-12 md:pt-16 pb-12 md:pb-16">
        <ChapterHeader
          number="INDEX · SERVICES"
          title="Seven ways to engage."
          lead="Each engagement starts as a conversation about your situation, not as a rate card. The list below is what I most often get asked to lead — but problems rarely fit a single line item."
          as="h1"
        />
      </header>

      <ol className="container-wide border-t border-ink">
        {services.map((s) => (
          <li key={s.slug} className="border-b border-rule">
            <Link
              href={`/services/${s.slug}`}
              className="group grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-3 py-8 md:py-10"
            >
              <span className="md:col-span-1 t-mono">S/{s.index}</span>
              <div className="md:col-span-5">
                <h3 className="t-h3 group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="t-meta mt-2 text-ink-2">{s.tagline}</p>
              </div>
              <p className="md:col-span-5 t-body text-ink-2 max-w-prose">
                {s.description.length > 200
                  ? s.description.slice(0, 198) + "…"
                  : s.description}
              </p>
              <span className="md:col-span-1 md:text-right t-mono group-hover:text-accent transition-colors">
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </article>
  );
}
