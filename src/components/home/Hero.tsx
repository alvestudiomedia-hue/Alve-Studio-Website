import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "@/components/ui/icons";

export function Hero() {
  return (
    <Section tone="hero" className="relative overflow-hidden lg:py-36">
      {/* Background stock image with fill, cover, and high-impact bold visibility */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-team.jpg"
          alt="Alve Studio product team collaborating"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85 contrast-105 saturate-110"
        />
        {/* Directional gradient: ensures pristine text contrast on the left while keeping the photo bold and striking */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-purple-ink via-purple-ink/70 to-purple-ink/10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-dark-background/70 via-transparent to-transparent"
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl">
          <Eyebrow className="text-dark-ink">
            Full-cycle product studio
          </Eyebrow>

          {/* Inter, not Fraunces — the hero is the one headline set in the body face. */}
          <h1 className="mt-7 font-sans text-display-sm text-balance md:text-h1 lg:text-hero">
            One Team. Every Stage.{" "}
            <span className="block">Zero Vendor Juggling.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-body-lg text-dark-ink-soft text-pretty">
            From initial discovery through technical development to global scale—we provide the strategic oversight and execution excellence to launch market-leading products.
          </p>

          <div className="mt-11 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Button href="/contact" variant="primary" size="lg">
              Start Your Project
            </Button>
            <Button
              href="/#process"
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
