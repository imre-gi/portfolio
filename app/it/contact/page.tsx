import { profile } from "@/data/it/profile";

export const metadata = {
  title: "Contatti — Imre Guaglianone",
  description: "Contatta Imre Guaglianone — Experience Designer, Ricercatore, Fondatore.",
};

export default function ContactPageIT() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 min-h-screen flex flex-col justify-between">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col gap-20">

        {/* Header */}
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-8">
            Contatti
          </p>
          <h1
            className="font-[family-name:var(--font-serif)] text-[#F5F0E8] leading-[1.0] mb-12"
            style={{ fontSize: "clamp(2.5rem, 6vw, 7rem)" }}
          >
            Lavoriamo<br />
            <span className="text-[#C8A96E]">insieme.</span>
          </h1>
        </div>

        {/* Email */}
        <div>
          <p className="text-xs tracking-[0.15em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-4">
            Scrivimi
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="block font-[family-name:var(--font-serif)] text-[#F5F0E8] hover:text-[#C8A96E] transition-colors duration-300 leading-none break-all"
            style={{ fontSize: "clamp(1.5rem, 3.5vw, 4.5rem)" }}
          >
            {profile.email}
          </a>
        </div>

        {/* Other links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#222222] pt-12">
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-3">
              LinkedIn
            </p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-sans)] text-[#F5F0E8] hover:text-[#C8A96E] transition-colors text-sm"
            >
              linkedin.com/in/imreguaglianone ↗
            </a>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-3">
              Telefono
            </p>
            <a
              href={`tel:${profile.phone}`}
              className="font-[family-name:var(--font-sans)] text-[#F5F0E8] hover:text-[#C8A96E] transition-colors text-sm"
            >
              {profile.phone}
            </a>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-3">
              Posizione
            </p>
            <p className="font-[family-name:var(--font-sans)] text-[#F5F0E8] text-sm">
              {profile.location}
            </p>
          </div>
        </div>

        {/* Philosophy closing */}
        <div className="border-t border-[#222222] pt-12">
          <p className="font-[family-name:var(--font-serif)] italic text-[#F5F0E8]/50 max-w-2xl leading-relaxed" style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}>
            &ldquo;{profile.philosophy}&rdquo;
          </p>
        </div>

      </div>
    </div>
  );
}
