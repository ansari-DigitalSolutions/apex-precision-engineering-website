import Link from "next/link";

import { Container } from "@/components/ui/container";
import { footerContent } from "@/data/footer";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
          {/* Company */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-bold text-white">
              {footerContent.company.name}
            </Link>

            <p className="mt-4 max-w-sm leading-7 text-slate-400">
              {footerContent.company.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h2>

            <ul className="mt-4 space-y-3">
              {footerContent.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Capabilities
            </h2>

            <ul className="mt-4 space-y-3">
              {footerContent.capabilities.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h2>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${footerContent.contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {footerContent.contact.email}
                </a>
              </li>

              <li>
                <a
                  href={`tel:${footerContent.contact.phone}`}
                  className="transition-colors hover:text-white"
                >
                  {footerContent.contact.phone}
                </a>
              </li>

              <li>{footerContent.contact.location}</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 py-6">
          <p className="text-sm text-slate-500">{footerContent.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
