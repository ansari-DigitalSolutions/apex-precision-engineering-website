import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ctaContent } from "@/data/cta";

export function ContactCta() {
  return (
    <Section>
      <Container>
        <div className="overflow-hidden rounded-3xl bg-blue-900 px-6 py-12 text-center lg:px-16 lg:py-16">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              {ctaContent.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-white lg:text-5xl">
              {ctaContent.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              {ctaContent.description}
            </p>

            <div className="mt-8">
              <Link href={ctaContent.button.href}>
                <Button
                  variant="secondary"
                  className="inline-flex items-center gap-2"
                >
                  {ctaContent.button.label}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
