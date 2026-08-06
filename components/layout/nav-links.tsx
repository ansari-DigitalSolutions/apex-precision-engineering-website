import { NAVIGATION } from "@/components/contents/navigation";

export function NavLinks() {
  return (
    <nav className="hidden gap-8 md:flex">
      {NAVIGATION.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-sm font-medium hover:text-orange-600"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
