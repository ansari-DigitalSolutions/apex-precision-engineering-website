import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-4">
      <Button>Primary</Button>

      <Button variant="secondary">Secondary</Button>

      <Button variant="ghost">Ghost</Button>

      <Button size="lg">Large</Button>

      <Button disabled>Disabled</Button>
    </main>
  );
}
