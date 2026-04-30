import Link from "next/link";
import { services } from "@/data/it/services";

export const metadata = {
  title: "Servizi — Imre Guaglianone",
  description:
    "Validazione di prodotto, ricerca utente, service design, UX design, ottimizzazione dei processi aziendali, formazione aziendale e CXO Fractional.",
};

export default function ServicesPageIT() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">

        {/* Page heading */}
        <div className="mb-24">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-6">
            Servizi
          </p>
          <h1
            className="font-[family-name:var(--font-serif)] text-[#F5F0E8] leading-[1.0] mb-12"
            style={{ fontSize: "clamp(3rem, 7vw, 8rem)" }}
          >
            Come posso<br />
            <span className="text-[#C8A96E]">aiutarti</span>.
          </h1>
        </div>

        {/* Service list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-32">
          {services.map((service) => (
            <Link
              key={service.index}
              href={`/it/services/${service.slug}`}
              className="group py-10 border-b border-[#1A1A1A] md:odd:pr-16 md:even:pl-16 md:odd:border-r md:odd:border-r-[#1A1A1A] block"
            >
              <span className="font-[family-name:var(--font-serif)] text-[#333333] text-sm leading-none mb-4 block">
                {service.index}
              </span>
              <h2
                className="font-[family-name:var(--font-serif)] text-[#F5F0E8] mb-4 leading-snug group-hover:text-[#C8A96E] transition-colors duration-300"
                style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
              >
                {service.title}
              </h2>
              <p
                className="text-[#888888] font-[family-name:var(--font-sans)] leading-relaxed mb-4"
                style={{ fontSize: "0.9rem" }}
              >
                {service.description}
              </p>
              <span className="text-xs tracking-[0.15em] uppercase text-[#555555] group-hover:text-[#C8A96E] transition-colors font-[family-name:var(--font-sans)]">
                Scopri di più →
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-[#222222] pt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-4">
              Pronti a lavorare insieme?
            </p>
            <p
              className="font-[family-name:var(--font-serif)] text-[#F5F0E8] leading-snug max-w-lg"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Ogni collaborazione inizia con una conversazione — nessun pitch, nessuna proposta finché non capisco la tua situazione.
            </p>
          </div>
          <Link
            href="/it/contact"
            className="inline-flex items-center gap-2 border border-[#333333] px-6 py-4 text-xs tracking-[0.15em] uppercase text-[#F5F0E8] hover:border-[#C8A96E] hover:text-[#C8A96E] transition-colors font-[family-name:var(--font-sans)] shrink-0"
          >
            Contattami
            <span>→</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
