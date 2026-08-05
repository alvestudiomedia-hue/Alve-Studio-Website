import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "@/components/ui/icons";

export function Hero() {
  return (
    <Section tone="hero" className="relative overflow-hidden">
      <Container className="relative">
        <div className="max-w-4xl">
          <Eyebrow variant="dot" className="text-purple-light">
            Full-cycle product studio
          </Eyebrow>

          <h1 className="mt-7 font-display text-display-sm text-balance md:text-h1 lg:text-display">
            One Team. Every Stage.{" "}
            <span className="block">
              Zero Vendor{" "}
              <em className="text-purple-light">Juggling.</em>
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-body-lg text-dark-ink-soft text-pretty">
            From initial discovery through technical development to global
            scale — we provide the strategic oversight and execution excellence
            to launch market-leading products.
          </p>

          <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" variant="light" size="lg">
              Start Your Project
            </Button>
            <Button
              href="/process"
              variant="outline"
              size="lg"
              iconRight={<ArrowRight className="size-4" />}
            >
              See How We Work
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
