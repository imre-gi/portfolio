import Link from "next/link";
import type { Metadata } from "next";
import { profile } from "@/data/profile";
import ChapterHeader from "@/components/shared/ChapterHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a thirty-minute call about the hard decision in front of you. Or write directly.",
};

export default function ContactPage() {
  return (
    <article className="pb-24">
      <header className="container-wide pt-12 md:pt-16 pb-12 md:pb-16">
        <p className="t-mono mb-4">FILE · CONTACT</p>
        <h1 className="t-display max-w-[18ch] mb-8">
          Tell me about the decision in front of you.
        </h1>
        <p className="t-lead max-w-3xl text-ink">
          A thirty-minute call. No pitch. No proposal. The shape of the
          conversation depends on what you're trying to decide — funding,
          launching, redesigning, fixing, hiring. Pick the channel that
          suits you.
        </p>
      </header>

      <div className="rule" />

      {/* Booking + email — two large channels */}
      <section className="container-wide py-16 md:py-20">
        <ChapterHeader number="01 · CHANNELS" title="How to reach me." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          <article className="border border-ink p-8 relative tick-corner">
            <p className="t-mono mb-3">CHANNEL · CALL</p>
            <h3 className="t-h3 mb-3">Book a 30-min call</h3>
            <p className="t-body text-ink-2 mb-6 max-w-prose">
              The fastest way to find out whether I'm the right person for
              your problem. Bring the situation, not a brief. I bring
              questions and a calendar.
            </p>
            <a
              href="https://cal.com/imre-guaglianone/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-link"
            >
              Open calendar
            </a>
            <p className="t-mono text-ink-3 mt-4">
              Booking link to be configured. Until then, write to email.
            </p>
          </article>

          <article className="border border-rule p-8">
            <p className="t-mono mb-3">CHANNEL · EMAIL</p>
            <h3 className="t-h3 mb-3">Write directly</h3>
            <p className="t-body text-ink-2 mb-6 max-w-prose">
              I read every message. Tell me the situation in your own words —
              the more concrete, the better.
            </p>
            <a href={`mailto:${profile.email}`} className="arrow-link">
              {profile.email}
            </a>
          </article>
        </div>
      </section>

      <div className="rule" />

      <section className="container-wide py-16 md:py-20">
        <ChapterHeader number="02 · DETAILS" title="Other coordinates." />
        <dl className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-2 md:col-span-3">
            <dt className="t-mono mb-2">PHONE</dt>
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
            <dt className="t-mono mb-2">BASED IN</dt>
            <dd className="t-body">{profile.location}</dd>
          </div>
          <div className="col-span-2 md:col-span-3">
            <dt className="t-mono mb-2">TIMEZONE</dt>
            <dd className="t-body">CET · UTC+1</dd>
          </div>
        </dl>
      </section>

      <div className="rule" />

      <div className="container-wide pt-12 flex items-center gap-6">
        <Link href="/work" className="arrow-link">
          Read selected work first
        </Link>
        <Link href="/about" className="arrow-link">
          Read the bio first
        </Link>
      </div>
    </article>
  );
}
