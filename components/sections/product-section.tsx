import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { products } from "@/data/products";

export function ProductsSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-10">
          {/* Header */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-600">
              Featured Products
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Precision Components Built for Performance
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Explore examples of precision-machined components designed for
              demanding industrial applications.
            </p>
          </div>

          {/* Products */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="overflow-hidden">
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    width={800}
                    height={600}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {product.name}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {product.description}
                  </p>

                  <Link
                    href="/products"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700"
                  >
                    View Products
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
