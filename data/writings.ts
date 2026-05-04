import type { WritingEntry } from "@/types";

/**
 * Index of writing entries.
 * Long-form bodies live as MDX/components inside app/writing/[slug]/page.tsx
 * once authored. Until then, set `published: false` so cards render in
 * "draft / coming soon" state.
 */
export const writings: WritingEntry[] = [
  {
    slug: "research-trustworthy",
    title: "Why insights lose their weight on the way to the meeting",
    date: "2026-04-15",
    readingTime: "8 min",
    excerpt:
      "A note on traceability — and why most research stops being useful the moment it leaves the researcher's screen.",
    published: false,
  },
  {
    slug: "designing-under-constraint",
    title: "Designing under constraint is designing for dignity",
    date: "2026-03-02",
    readingTime: "6 min",
    excerpt:
      "Lessons from rebuilding a betting platform for users who pay $15 per gigabyte.",
    published: false,
  },
];
