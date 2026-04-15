import { profile } from "@/data/profile";
import Timeline from "@/components/about/Timeline";
import Skills from "@/components/about/Skills";

export const metadata = {
  title: "About — Imre Guaglianone",
  description: profile.tagline,
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">

        {/* Hero heading */}
        <div className="mb-24">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-6">
            About
          </p>
          <h1
            className="font-[family-name:var(--font-serif)] text-[#F5F0E8] leading-[1.0] mb-12"
            style={{ fontSize: "clamp(3rem, 7vw, 8rem)" }}
          >
            Design lead at the<br />
            <span className="text-[#C8A96E]">intersection</span> of<br />
            systems &amp; behavior.
          </h1>
        </div>

        {/* Bio */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-16 mb-32 pb-32 border-b border-[#222222]">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-4">
              Biography
            </p>
            <div className="flex flex-col gap-2">
              <p className="text-[#F5F0E8] font-[family-name:var(--font-sans)] text-sm">
                {profile.location}
              </p>
              <p className="text-[#888888] font-[family-name:var(--font-sans)] text-sm">
                {profile.email}
              </p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#888888] hover:text-[#C8A96E] font-[family-name:var(--font-sans)] text-sm transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>

            {/* CV Download */}
            <div className="mt-8">
              <a
                href="/docs/cv_imre_guaglianone.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#333333] px-5 py-3 text-xs tracking-[0.15em] uppercase text-[#F5F0E8] hover:border-[#C8A96E] hover:text-[#C8A96E] transition-colors font-[family-name:var(--font-sans)]"
              >
                Download CV
                <span>↓</span>
              </a>
            </div>
          </div>

          <div>
            {profile.bio.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-[#F5F0E8]/80 font-[family-name:var(--font-sans)] leading-relaxed mb-5 last:mb-0"
                style={{ fontSize: "1.05rem" }}
              >
                {para.trim()}
              </p>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-32 pb-32 border-b border-[#222222]">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-16">
            Experience
          </p>
          <Timeline />
        </div>

        {/* Skills */}
        <div className="mb-32 pb-32 border-b border-[#222222]">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-16">
            Skills &amp; Methods
          </p>
          <Skills />
        </div>

        {/* Education */}
        <div className="mb-24 pb-24 border-b border-[#222222]">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-12">
            Education
          </p>
          <div className="space-y-6">
            {profile.education.map((edu, i) => (
              <div key={i} className="grid grid-cols-[1fr_auto] items-baseline border-b border-[#1A1A1A] pb-4">
                <div>
                  <p className="font-[family-name:var(--font-serif)] text-[#F5F0E8] text-xl">{edu.degree}</p>
                  <p className="text-[#888888] font-[family-name:var(--font-sans)] text-sm mt-1">{edu.institution}</p>
                </div>
                <p className="text-[#888888] font-[family-name:var(--font-sans)] text-sm">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-24 pb-24 border-b border-[#222222]">
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-12">
            Certifications
          </p>
          <div className="space-y-4">
            {profile.certifications.map((cert, i) => (
              <div key={i} className="grid grid-cols-[1fr_auto] items-baseline border-b border-[#1A1A1A] pb-4">
                <div>
                  <p className="font-[family-name:var(--font-sans)] text-[#F5F0E8] text-sm">{cert.name}</p>
                  <p className="text-[#888888] font-[family-name:var(--font-sans)] text-xs mt-1">{cert.issuer}</p>
                </div>
                <p className="text-[#888888] font-[family-name:var(--font-sans)] text-xs">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[#888888] font-[family-name:var(--font-sans)] mb-12">
            Languages
          </p>
          <div className="flex flex-wrap gap-8">
            {profile.languages.map((lang, i) => (
              <div key={i}>
                <p className="font-[family-name:var(--font-serif)] text-[#F5F0E8] text-xl">{lang.language}</p>
                <p className="text-[#888888] font-[family-name:var(--font-sans)] text-xs mt-1">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
