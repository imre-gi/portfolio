import Link from "next/link";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { recommendations } from "@/data/recommendations";
import ChapterHeader from "@/components/shared/ChapterHeader";
import PullQuote from "@/components/shared/PullQuote";

export const metadata = {
  title: "About",
  description: profile.tagline,
};

export default function AboutPage() {
  const paragraphs = profile.bio.split(/\n\n/);
  return (
    <article className="pb-24">
      {/* Cover */}
      <header className="container-wide pt-12 md:pt-16 pb-12 md:pb-16">
        <p className="t-mono mb-4">FILE · BIOGRAPHY</p>
        <h1 className="t-display max-w-[18ch] mb-8">
          A career as a sequence of decisions.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6">
          <div className="md:col-start-4 md:col-span-9">
            <p className="t-lead text-ink">{profile.tagline}</p>
          </div>
        </div>
      </header>

      <div className="rule" />

      {/* Bio long-form */}
      <section className="container-wide py-16 md:py-20">
        <ChapterHeader number="01 · BIOGRAPHY" title="Who I am, by way of work." />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6">
          <div className="md:col-start-4 md:col-span-9 max-w-prose">
            {paragraphs.map((para, i) => (
              <p key={i} className="t-body mb-5">
                {para}
              </p>
            ))}
            <p className="t-mono mt-6">
              <a
                href="/imre-guaglianone-cv.pdf"
                className="inline-link"
              >
                DOWNLOAD CV (PDF)
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* Experience timeline */}
      <section className="container-wide py-16 md:py-20">
        <ChapterHeader
          number="02 · EXPERIENCE"
          title="Where I have practised."
          lead="Reverse-chronological, with the role and the industry. Each entry was a sequence of decisions whose record lives under Work."
        />
        <ol className="border-t border-ink">
          {experience.map((entry, i) => (
            <li key={i} className="border-b border-rule">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-3 py-7 md:py-8">
                <span className="md:col-span-2 t-mono t-num">
                  {entry.startDate} — {entry.endDate}
                </span>
                <div className="md:col-span-5">
                  <h3 className="t-h4">{entry.role}</h3>
                  <p className="t-meta mt-1 text-ink-2">
                    {entry.company} · {entry.industry} · {entry.location}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <p className="t-body text-ink max-w-prose">{entry.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="rule" />

      {/* Skills inventory */}
      <section className="container-wide py-16 md:py-20">
        <ChapterHeader
          number="03 · INVENTORY"
          title="Methods, tools, frameworks."
          lead="What's actually in the toolkit, organised by what each thing is for."
        />
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-10">
          {Object.entries(profile.skills).map(([group, items]) => (
            <div key={group} className="col-span-2 md:col-span-4">
              <p className="t-mono mb-4">{group.toUpperCase()}</p>
              <ul className="space-y-1.5">
                {items.map((it) => (
                  <li key={it} className="t-body">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="rule" />

      {/* Education + certifications + languages */}
      <section className="container-wide py-16 md:py-20">
        <ChapterHeader number="04 · CREDENTIALS" title="Trained where, in what." />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-10">
          <div className="md:col-span-4">
            <p className="t-mono mb-4">EDUCATION</p>
            <ul className="space-y-4">
              {profile.education.map((edu) => (
                <li key={edu.degree}>
                  <p className="t-body">{edu.degree}</p>
                  <p className="t-meta">
                    {edu.institution} · {edu.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5">
            <p className="t-mono mb-4">CERTIFICATIONS</p>
            <ul className="space-y-3">
              {profile.certifications.map((c) => (
                <li key={c.name} className="t-meta">
                  <span className="text-ink">{c.name}</span> — {c.issuer},{" "}
                  <span className="t-num">{c.year}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="t-mono mb-4">LANGUAGES</p>
            <ul className="space-y-2">
              {profile.languages.map((l) => (
                <li key={l.language} className="t-body">
                  {l.language}
                  <span className="t-meta text-ink-2"> · {l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* Recommendations */}
      <section className="container-wide py-16 md:py-20">
        <ChapterHeader
          number="05 · RECOMMENDATIONS"
          title="What colleagues have said."
          lead="Public testimony from LinkedIn. Attribution still being verified — the quotes are real."
        />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {recommendations.map((r, i) => (
            <li key={i}>
              <PullQuote attribution={r.author} role={r.role}>
                {r.quote}
              </PullQuote>
              {r.context && <p className="t-mono text-ink-3 mt-2">{r.context}</p>}
            </li>
          ))}
        </ul>
      </section>

      <div className="rule" />

      {/* CTA back */}
      <div className="container-wide py-12">
        <Link href="/contact" className="arrow-link">
          Let&apos;s talk about your decision
        </Link>
      </div>
    </article>
  );
}
