import { Cog, Factory, ShieldCheck, Truck } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { trustIndicators } from "@/data/trust";

const iconMap = {
  factory: Factory,
  shield: ShieldCheck,
  cog: Cog,
  truck: Truck,
};

export function TrustSection() {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="space-y-12">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 lg:text-5xl">
              Trusted by Manufacturers Worldwide
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Delivering precision engineering solutions with consistent
              quality, industry expertise, and reliable manufacturing processes.
            </p>
          </div>

          {/* Trust Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustIndicators.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];

              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="rounded-full bg-blue-100 p-4">
                      <Icon className="h-8 w-8 text-blue-700" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-slate-900">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-600">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
