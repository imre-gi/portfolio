import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} — Imre Guaglianone`,
    description: service.tagline,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const prev = services[currentIndex - 1] ?? null;
  const next = services[currentIndex + 1] ?? null;

  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">

        {/* Breadcrumb */}
        <div className="mb-16">
          <Link
            href="/services"
            className="text-xs tracking-[0.2em] uppercase text-[#888888] hover:text-[#C8A96E] font-[family-name:var(--font-sans)] transition-colors"
          >
            ← Services
          </Link>
        </div>

        {/* Hero */}
        <div className="mb-24">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-6">
            {service.index}
          </p>
          <h1
            className="font-[family-name:var(--font-serif)] text-[#F5F0E8] leading-[1.0] mb-8"
            style={{ fontSize: "clamp(2.8rem, 6vw, 7rem)" }}
          >
            {service.title}
          </h1>
          <p
            className="text-[#C8A96E] font-[family-name:var(--font-sans)] max-w-2xl leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
          >
            {service.tagline}
          </p>
        </div>

        {/* Description */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-16 mb-32 pb-32 border-b border-[#222222]">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-6">
              Overview
            </p>
            <p
              className="text-[#F5F0E8]/80 font-[family-name:var(--font-sans)] leading-relaxed"
              style={{ fontSize: "1.05rem" }}
            >
              {service.description}
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-6">
              Who it's for
            </p>
            <p
              className="text-[#F5F0E8]/80 font-[family-name:var(--font-sans)] leading-relaxed"
              style={{ fontSize: "0.95rem" }}
            >
              {service.whoItsFor}
            </p>
          </div>
        </div>

        {/* Process */}
        <div className="mb-32 pb-32 border-b border-[#222222]">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-16">
            How it works
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {service.process.map((item, i) => (
              <div
                key={i}
                className="py-10 border-b border-[#1A1A1A] md:odd:border-r md:odd:border-r-[#1A1A1A] md:odd:pr-12 md:even:pl-12 lg:border-r lg:border-r-[#1A1A1A] lg:pr-10 lg:pl-10 lg:odd:pr-10 lg:odd:pl-10 lg:first:pl-0 lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n+1)]:pl-0"
              >
                <span className="font-[family-name:var(--font-serif)] text-[#C8A96E] text-sm leading-none mb-4 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="font-[family-name:var(--font-serif)] text-[#F5F0E8] mb-3 leading-snug"
                  style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
                >
                  {item.step}
                </h3>
                <p
                  className="text-[#888888] font-[family-name:var(--font-sans)] leading-relaxed"
                  style={{ fontSize: "0.9rem" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What's included */}
        <div className="mb-32 pb-32 border-b border-[#222222]">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-16">
            What's included
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
            {service.whatIsIncluded.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 py-5 border-b border-[#1A1A1A]"
              >
                <span className="text-[#C8A96E] font-[family-name:var(--font-serif)] text-sm shrink-0 mt-0.5">
                  →
                </span>
                <p
                  className="text-[#F5F0E8]/80 font-[family-name:var(--font-sans)] leading-relaxed"
                  style={{ fontSize: "0.9rem" }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mb-32 pb-32 border-b border-[#222222] flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-4">
              Ready to talk?
            </p>
            <p
              className="font-[family-name:var(--font-serif)] text-[#F5F0E8] leading-snug max-w-lg"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Every engagement starts with a conversation — no pitch, no proposal until I understand your situation.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-[#333333] px-6 py-4 text-xs tracking-[0.15em] uppercase text-[#F5F0E8] hover:border-[#C8A96E] hover:text-[#C8A96E] transition-colors font-[family-name:var(--font-sans)] shrink-0"
          >
            Get in touch
            <span>→</span>
          </Link>
        </div>

        {/* Service navigation */}
        <div className="flex items-center justify-between gap-8">
          {prev ? (
            <Link
              href={`/services/${prev.slug}`}
              className="group flex flex-col gap-1"
            >
              <span className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] group-hover:text-[#C8A96E] transition-colors">
                ← Previous
              </span>
              <span
                className="font-[family-name:var(--font-serif)] text-[#F5F0E8] group-hover:text-[#C8A96E] transition-colors"
                style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
              >
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/services/${next.slug}`}
              className="group flex flex-col gap-1 text-right"
            >
              <span className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] group-hover:text-[#C8A96E] transition-colors">
                Next →
              </span>
              <span
                className="font-[family-name:var(--font-serif)] text-[#F5F0E8] group-hover:text-[#C8A96E] transition-colors"
                style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
              >
                {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>

      </div>
    </div>
  );
}
