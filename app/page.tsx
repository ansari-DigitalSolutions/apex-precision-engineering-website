import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustSection } from "@/components/sections/trust-section";
import { AboutSection } from "@/components/sections/about-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { ProductsSection } from "@/components/sections/product-section";
import { IndustriesSection } from "@/components/sections/industries-section";
import { ContactCta } from "@/components/sections/contact-cta";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <AboutSection />
        <CapabilitiesSection />
        <ProductsSection />
        <IndustriesSection />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
