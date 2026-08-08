import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { aboutContent } from "@/data/about";

export function AboutSection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={aboutContent.image.src}
              alt={aboutContent.image.alt}
              width={800}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
              {aboutContent.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 lg:text-5xl">
              {aboutContent.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {aboutContent.description}
            </p>

            <ul className="mt-8 space-y-4">
              {aboutContent.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-slate-700"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <Check className="h-4 w-4 text-blue-700" />
                  </span>

                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link href={aboutContent.cta.href}>
                <Button>{aboutContent.cta.label}</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
