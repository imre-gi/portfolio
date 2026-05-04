import Hero from "@/components/home/Hero";
import FeaturedDecision from "@/components/home/FeaturedDecision";
import SelectedWork from "@/components/home/SelectedWork";
import Practice from "@/components/home/Practice";
import AboutTeaser from "@/components/home/AboutTeaser";
import Services from "@/components/home/Services";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero locale="en" />
      <FeaturedDecision locale="en" slug="betika" decisionIndex={0} />
      <SelectedWork locale="en" />
      <Practice locale="en" />
      <AboutTeaser locale="en" />
      <Services locale="en" />
      <ContactCTA locale="en" />
    </>
  );
}
