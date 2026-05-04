import { ReactNode } from "react";

interface PullQuoteProps {
  children: ReactNode;
  attribution?: string;
  role?: string;
}

export default function PullQuote({ children, attribution, role }: PullQuoteProps) {
  return (
    <blockquote className="border-l-2 border-accent pl-6 my-10">
      <p className="t-pull">{children}</p>
      {(attribution || role) && (
        <footer className="mt-4 t-mono">
          {attribution && <span>— {attribution}</span>}
          {role && <span className="text-ink-3">, {role}</span>}
        </footer>
      )}
    </blockquote>
  );
}
