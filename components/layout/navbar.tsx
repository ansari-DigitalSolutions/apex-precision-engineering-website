import { Container } from "@/components/ui/container";
import { NavLogo } from "./nav-logo";
import { NavLinks } from "./nav-links";
import { NavActions } from "./nav-actions";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <NavLogo />

          <NavLinks />

          <NavActions />
        </div>
      </Container>
    </header>
  );
}
