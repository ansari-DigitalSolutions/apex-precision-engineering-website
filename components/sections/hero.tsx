import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { heroContent } from "@/data/home";
import Image from "next/image";

export function Hero() {
  return (
    <section className="py-20 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h1>{heroContent.title}</h1>

          <p>{heroContent.description}</p>

          <div>
            <Button>{heroContent.primaryButton}</Button>

            <Button variant="secondary">{heroContent.secondaryButton}</Button>
          </div>
        </div>
        <Image
          src="/images/cnc-machine.jpg"
          alt="Precision CNC machining"
          width={700}
          height={600}
          priority
        />
      </Container>
    </section>
  );
}
