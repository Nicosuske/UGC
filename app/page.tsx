import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Leistungen from "@/components/Leistungen";
import Portfolio from "@/components/Portfolio";
import OrganischeViews from "@/components/OrganischeViews";
import WarumIch from "@/components/WarumIch";
import UeberMich from "@/components/UeberMich";
import Kontakt from "@/components/Kontakt";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Leistungen />
        <Portfolio />
        <OrganischeViews />
        <WarumIch />
        <UeberMich />
        <Kontakt />
      </main>
      <Marquee />
      <Footer />
    </>
  );
}
