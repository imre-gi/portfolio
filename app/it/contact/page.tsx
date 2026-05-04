import Link from "next/link";
import type { Metadata } from "next";
import { profile } from "@/data/it/profile";
import ChapterHeader from "@/components/shared/ChapterHeader";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Una call di trenta minuti sulla decisione difficile che hai davanti. Oppure scrivi direttamente.",
};

export default function ContactPageIT() {
  return (
    <article className="pb-24">
      <header className="container-wide pt-12 md:pt-16 pb-12 md:pb-16">
        <p className="t-mono mb-4">FASCICOLO · CONTATTI</p>
        <h1 className="t-display max-w-[18ch] mb-8">
          Raccontami la decisione che hai davanti.
        </h1>
        <p className="t-lead max-w-3xl text-ink">
          Una call di trenta minuti. Niente pitch. Niente proposta. La forma
          della conversazione dipende da cosa stai cercando di decidere — un
          finanziamento, un lancio, un redesign, una correzione, un'assunzione.
          Scegli il canale che preferisci.
        </p>
      </header>

      <div className="rule" />

      <section className="container-wide py-16 md:py-20">
        <ChapterHeader number="01 · CANALI" title="Come raggiungermi." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          <article className="border border-ink p-8 relative tick-corner">
            <p className="t-mono mb-3">CANALE · CALL</p>
            <h3 className="t-h3 mb-3">Prenota una call di 30 min</h3>
            <p className="t-body text-ink-2 mb-6 max-w-prose">
              Il modo più rapido per capire se sono la persona giusta per il tuo
              problema. Porta la situazione, non un brief. Io porto domande e
              calendario.
            </p>
            <a
              href="https://cal.com/imre-guaglianone/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-link"
            >
              Apri il calendario
            </a>
            <p className="t-mono text-ink-3 mt-4">
              Booking link da configurare. Per ora, scrivi via email.
            </p>
          </article>

          <article className="border border-rule p-8">
            <p className="t-mono mb-3">CANALE · EMAIL</p>
            <h3 className="t-h3 mb-3">Scrivi direttamente</h3>
            <p className="t-body text-ink-2 mb-6 max-w-prose">
              Leggo ogni messaggio. Raccontami la situazione con parole tue —
              più è concreto, meglio è.
            </p>
            <a href={`mailto:${profile.email}`} className="arrow-link">
              {profile.email}
            </a>
          </article>
        </div>
      </section>

      <div className="rule" />

      <section className="container-wide py-16 md:py-20">
        <ChapterHeader number="02 · DETTAGLI" title="Altre coordinate." />
        <dl className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-2 md:col-span-3">
            <dt className="t-mono mb-2">TELEFONO</dt>
            <dd className="t-body t-num">{profile.phone}</dd>
          </div>
          <div className="col-span-2 md:col-span-3">
            <dt className="t-mono mb-2">LINKEDIN</dt>
            <dd className="t-body">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                /imreguaglianone
              </a>
            </dd>
          </div>
          <div className="col-span-2 md:col-span-3">
            <dt className="t-mono mb-2">SEDE</dt>
            <dd className="t-body">{profile.location}</dd>
          </div>
          <div className="col-span-2 md:col-span-3">
            <dt className="t-mono mb-2">FUSO ORARIO</dt>
            <dd className="t-body">CET · UTC+1</dd>
          </div>
        </dl>
      </section>

      <div className="rule" />

      <div className="container-wide pt-12 flex items-center gap-6">
        <Link href="/it/work" className="arrow-link">
          Leggi prima i lavori
        </Link>
        <Link href="/it/about" className="arrow-link">
          Leggi prima la bio
        </Link>
      </div>
    </article>
  );
}
