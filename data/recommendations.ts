import type { Recommendation } from "@/types";

/**
 * Public LinkedIn recommendations surfaced via search snippets.
 * Author / role fields are placeholders until Imre confirms the originals.
 * Set `verified: true` once each entry has been cross-checked against the
 * source on linkedin.com/in/imreguaglianone/details/recommendations.
 */
export const recommendations: Recommendation[] = [
  {
    quote:
      "Besides being a joy to work with, Imre is a take-charge person who is able to present creative solutions to complex problems and communicate the benefits to the company.",
    author: "Former colleague",
    role: "Senior Product Manager",
    context: "Worked together — to confirm",
    verified: false,
  },
  {
    quote:
      "He is a highly skilled UX designer with important experience in the sector. He excels at leading a team, isolating us from problems, handling all of them and at the same time being fully transparent.",
    author: "Former direct report",
    role: "Product Designer",
    context: "Reported to Imre — to confirm",
    verified: false,
  },
  {
    quote:
      "I had the opportunity of working with Imre during my stay in Tembeza as a Frontend developer, and he is the main responsible of the great time I had while being there.",
    author: "Former teammate",
    role: "Frontend Engineer, Tembeza International",
    context: "Tembeza International, 2019–2021",
    verified: false,
  },
  {
    quote:
      "Result driven, experienced and efficient team player. Always punctual, his knowledge is vast and thorough.",
    author: "Former colleague",
    role: "Operations Lead, Tembeza International",
    context: "Tembeza International — to confirm",
    verified: false,
  },
  {
    quote:
      "I absolutely would recommend him as CX/UX & Front End Manager.",
    author: "Former manager",
    role: "Director, Tembeza International",
    context: "Tembeza International — to confirm",
    verified: false,
  },
];

/** Featured for the home page strip — pick the most concrete three */
export const featuredRecommendations = recommendations.slice(0, 3);
