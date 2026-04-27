import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import LanguageToggle from "@/components/LanguageToggle";

export default function Home() {
  return (
    <main style={{ maxWidth: 480, margin: "0 auto", width: "100%" }}>
      <LanguageToggle />
      <Hero />
      <Stats />
      <Services />
      <Contact />
    </main>
  );
}
