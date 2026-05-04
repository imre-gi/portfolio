import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { services } from "@/data/services";
import ChapterHeader from "@/components/shared/ChapterHeader";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.tagline,
  };
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  const idx = services.findIndex((s) => s.slug === slug);
  const prev = idx > 0 ? services[idx - 1] : null;
  const next = idx < services.length - 1 ? services[idx + 1] : null;

  return (
    <article className="pb-24">
      <header className="container-wide pt-10 md:pt-14 pb-10 md:pb-14">
        <div className="flex items-center justify-between mb-12">
          <Link href="/services" className="arrow-link rotate-180">
            <span className="rotate-180 inline-block">All services</span>
          </Link>
          <p className="t-mono text-ink-2">S/{service.index}</p>
        </div>

        <p className="t-mono mb-3">SERVICE FILE · {service.slug.toUpperCase()}</p>
        <h1 className="t-display max-w-[18ch] mb-8">{service.title}</h1>
        <p className="t-lead max-w-3xl text-ink">{service.tagline}</p>
      </header>

      <div className="rule" />

      <section className="container-wide py-16 md:py-20">
        <ChapterHeader number="OVERVIEW" title="What it is, in plain terms." />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6">
          <div className="md:col-start-4 md:col-span-9 max-w-prose">
            <p className="t-body">{service.description}</p>
          </div>
        </div>
      </section>

      <div className="rule" />

      <section className="container-wide py-16 md:py-20">
        <ChapterHeader number="WHO" title="Who it's for." />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6">
          <div className="md:col-start-4 md:col-span-9 max-w-prose">
            <p className="t-body">{service.whoItsFor}</p>
          </div>
        </div>
      </section>

      <div className="rule" />

      <section className="container-wide py-16 md:py-20">
        <ChapterHeader
          number="STAGES"
          title="How it works."
          lead="A sequence of stages, not a fixed playbook. The order is reliable; the depth at each stage is shaped by your context."
        />
        <ol className="grid grid-cols-1 md:grid-cols-12 gap-y-0">
          {service.process.map((p, i) => (
            <li
              key={p.step}
              className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-3 py-7 border-t border-rule first:border-t-0"
            >
              <span className="md:col-span-2 t-mono t-num">
                STAGE {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="md:col-span-3 t-decision">{p.step}</h3>
              <p className="md:col-span-7 t-body text-ink-2 max-w-prose">
                {p.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <div className="rule" />

      <section className="container-wide py-16 md:py-20">
        <ChapterHeader number="INCLUDED" title="What you get." />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 md:col-start-4">
          {service.whatIsIncluded.map((it, i) => (
            <li key={it} className="t-body flex gap-3 py-2 border-t border-rule-soft">
              <span className="t-mono text-ink-3 w-6 t-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="rule" />

      <nav className="container-wide py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {prev && (
          <Link
            href={`/services/${prev.slug}`}
            className="group block border border-rule p-6 hover:border-accent transition-colors"
          >
            <p className="t-mono text-ink-2 mb-2">← S/{prev.index}</p>
            <p className="t-h4 group-hover:text-accent transition-colors">{prev.title}</p>
          </Link>
        )}
        {next && (
          <Link
            href={`/services/${next.slug}`}
            className={`group block border border-rule p-6 hover:border-accent transition-colors ${
              prev ? "" : "md:col-start-2"
            }`}
          >
            <p className="t-mono text-ink-2 mb-2 text-right">S/{next.index} →</p>
            <p className="t-h4 text-right group-hover:text-accent transition-colors">
              {next.title}
            </p>
          </Link>
        )}
      </nav>

      <div className="container-wide pt-6">
        <Link href="/contact" className="arrow-link">
          Start the conversation
        </Link>
      </div>
    </article>
  );
}
