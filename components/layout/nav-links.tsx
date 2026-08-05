const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export function NavLinks() {
  return (
    <nav className="hidden gap-8 md:flex">
      {links.map((link) => (
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
