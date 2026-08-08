import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustSection } from "@/components/sections/trust-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
      </main>
    </>
  );
}
