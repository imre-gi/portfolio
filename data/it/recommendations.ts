import type { Recommendation } from "@/types";

/**
 * Italian-localised recommendations.
 * Quotes translated from the verbatim English captures in
 * data/recommendations.ts. Update once Imre confirms the originals
 * (he may prefer to keep the English quote even on /it).
 */
export const recommendations: Recommendation[] = [
  {
    quote:
      "Oltre a essere un piacere lavorare con lui, Imre è una persona proattiva, capace di presentare soluzioni creative a problemi complessi e di comunicarne i benefici all'azienda.",
    author: "Collega",
    role: "Senior Product Manager",
    context: "Da confermare",
    verified: false,
  },
  {
    quote:
      "È un UX designer molto preparato, con un'esperienza importante nel settore. Eccelle nel guidare un team, proteggendoci dai problemi, gestendoli tutti e restando al tempo stesso pienamente trasparente.",
    author: "Ex riporto diretto",
    role: "Product Designer",
    context: "Da confermare",
    verified: false,
  },
  {
    quote:
      "Ho avuto l'opportunità di lavorare con Imre durante la mia permanenza in Tembeza come Frontend developer, ed è il principale responsabile del bel periodo che ho passato lì.",
    author: "Ex collega",
    role: "Frontend Engineer, Tembeza International",
    context: "Tembeza International, 2019–2021",
    verified: false,
  },
  {
    quote:
      "Orientato ai risultati, esperto, efficiente e ottimo membro del team. Sempre puntuale, le sue conoscenze sono vaste e approfondite.",
    author: "Collega",
    role: "Operations Lead, Tembeza International",
    context: "Tembeza International — da confermare",
    verified: false,
  },
  {
    quote:
      "Lo raccomanderei senza esitazione come CX/UX & Front End Manager.",
    author: "Ex manager",
    role: "Director, Tembeza International",
    context: "Tembeza International — da confermare",
    verified: false,
  },
];

export const featuredRecommendations = recommendations.slice(0, 3);
