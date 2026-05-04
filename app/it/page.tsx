import Hero from "@/components/home/Hero";
import FeaturedDecision from "@/components/home/FeaturedDecision";
import SelectedWork from "@/components/home/SelectedWork";
import Practice from "@/components/home/Practice";
import AboutTeaser from "@/components/home/AboutTeaser";
import Services from "@/components/home/Services";
import ContactCTA from "@/components/home/ContactCTA";
import { caseStudies } from "@/data/it/caseStudies";

export const metadata = {
  title: "Imre Guaglianone — Experience Designer · Ricercatore · Founder",
  description:
    "Quindici anni di decisioni difficili in product design, ricerca UX, strategia. Bologna.",
};

export default function HomeIT() {
  return (
    <>
      <Hero locale="it" />
      <FeaturedDecision locale="it" slug="betika" decisionIndex={0} />
      <SelectedWork locale="it" studies={caseStudies} />
      <Practice locale="it" />
      <AboutTeaser locale="it" />
      <Services locale="it" />
      <ContactCTA locale="it" />
    </>
  );
}
