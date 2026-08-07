import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { heroContent } from "@/data/home";

export function Hero() {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
              {heroContent.badge}
            </span>

            <h1 className="text-4xl font-bold leading-tight text-slate-900 lg:text-6xl">
              {heroContent.title}
            </h1>

            <p className="max-w-xl text-lg leading-8 text-slate-600">
              {heroContent.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href={heroContent.primaryCta.href}>
                <Button>{heroContent.primaryCta.label}</Button>
              </Link>

              <Link href={heroContent.secondaryCta.href}>
                <Button variant="secondary">
                  {heroContent.secondaryCta.label}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center">
            <Image
              src={heroContent.image.src}
              alt={heroContent.image.alt}
              width={700}
              height={600}
              priority
              className="h-auto w-full max-w-xl rounded-2xl object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
