import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import Services from "@/components/home/Services";
import AboutTeaser from "@/components/home/AboutTeaser";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Services />
      <AboutTeaser />
      <ContactCTA />
    </>
  );
}
