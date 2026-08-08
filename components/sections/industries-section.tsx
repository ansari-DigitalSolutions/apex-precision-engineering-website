import { Cpu, Factory, HeartPulse, Plane, Plug, Settings } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { industries } from "@/data/industries";

const iconMap = {
  automotive: Factory,
  aerospace: Plane,
  industrial: Settings,
  medical: HeartPulse,
  energy: Plug,
  electronics: Cpu,
};

export function IndustriesSection() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="space-y-10">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
              Industries We Serve
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Engineering Solutions Across Industries
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Precision manufacturing capabilities adaptable to the unique
              requirements of different industrial applications.
            </p>
          </div>

          {/* Industries */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon as keyof typeof iconMap];

              return (
                <article
                  key={industry.id}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                    <Icon className="h-6 w-6 text-blue-700" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    {industry.name}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {industry.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
