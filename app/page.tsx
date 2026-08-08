import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustSection } from "@/components/sections/trust-section";
import { AboutSection } from "@/components/sections/about-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <AboutSection />
        <CapabilitiesSection />
      </main>
    </>
  );
}
