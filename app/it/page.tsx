import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import Services from "@/components/home/Services";
import AboutTeaser from "@/components/home/AboutTeaser";
import ContactCTA from "@/components/home/ContactCTA";
import { profile } from "@/data/it/profile";
import { caseStudies } from "@/data/it/caseStudies";
import { services } from "@/data/it/services";

export const metadata = {
  title: "Imre Guaglianone — Experience Designer · Ricercatore · Founder · Mentor · Speaker",
  description:
    "Design lead con oltre 15 anni di esperienza all'incrocio tra design comportamentale, pensiero sistemico ed esecuzione di prodotto.",
};

export default function HomeIT() {
  return (
    <>
      <Hero locale="it" profile={profile} />
      <SelectedWork locale="it" studies={caseStudies} />
      <Services locale="it" services={services} />
      <AboutTeaser locale="it" />
      <ContactCTA />
    </>
  );
}
