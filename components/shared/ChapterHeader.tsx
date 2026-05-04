import Link from "next/link";

interface ChapterHeaderProps {
  number: string;
  title: string;
  lead?: string;
  link?: { href: string; label: string };
  as?: "h1" | "h2";
}

export default function ChapterHeader({
  number,
  title,
  lead,
  link,
  as = "h2",
}: ChapterHeaderProps) {
  const Heading = as;
  return (
    <header className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 mb-10 md:mb-14">
      <div className="md:col-span-2">
        <p className="t-mono">— {number}</p>
      </div>

      <div className="md:col-span-7">
        <Heading className={as === "h1" ? "t-display" : "t-h2"}>
          {title}
        </Heading>
        {lead && (
          <p className="t-lead text-ink-2 mt-4 max-w-prose">
            {lead}
          </p>
        )}
      </div>

      {link && (
        <div className="md:col-span-3 md:flex md:items-end md:justify-end">
          <Link href={link.href} className="arrow-link">
            {link.label}
          </Link>
        </div>
      )}
    </header>
  );
}
