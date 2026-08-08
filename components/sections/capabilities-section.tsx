import {
  Boxes,
  Cog,
  Factory,
  Gauge,
  Microscope,
  Settings2,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { capabilities } from "@/data/capabilities";

const iconMap = {
  milling: Settings2,
  turning: Cog,
  precision: Gauge,
  prototype: Boxes,
  production: Factory,
  quality: Microscope,
};

export function CapabilitiesSection() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="space-y-10">
          {/* Header */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Precision Manufacturing Capabilities
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Advanced machining solutions for demanding industrial
              applications, from prototypes to production components.
            </p>
          </div>

          {/* Capability Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => {
              const Icon = iconMap[capability.icon as keyof typeof iconMap];

              return (
                <article
                  key={capability.id}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                    <Icon className="h-6 w-6 text-blue-700" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    {capability.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {capability.description}
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
