import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import {
  PrimaryMarketingAction,
  SecondaryMarketingAction,
} from "@/components/ui/MarketingActions";
import type { ServicePageConfig } from "./types";

type ServiceHeroProps = Pick<ServicePageConfig, "name" | "hero">;

export function ServiceHero({ name, hero }: ServiceHeroProps) {
  return (
    <Section tone="hero" className="py-0">
      <Container>
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 pt-6 text-[0.85rem] text-white/55"
        >
          <Link href="/" className="hover:text-service-accent-light">
            Home
          </Link>
          <span aria-hidden="true" className="opacity-50">/</span>
          <Link href="/#process" className="hover:text-service-accent-light">
            Services
          </Link>
          <span aria-hidden="true" className="opacity-50">/</span>
          <span className="font-semibold text-white">{name}</span>
        </nav>

        <div className="max-w-[720px] py-[clamp(3.5rem,7vw,5.5rem)] pt-10">
          <Eyebrow
            variant="line"
            className="font-service text-[0.72rem] font-semibold tracking-[0.14em] text-service-accent-light"
          >
            {hero.eyebrow}
          </Eyebrow>
          <h1 className="mt-4 font-service text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.04] font-extrabold tracking-[-0.02em] text-balance">
            {hero.title}
          </h1>
          <p className="mt-[1.1rem] text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.65] text-white/72 text-pretty">
            {hero.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryMarketingAction href="/contact">Start Your Project</PrimaryMarketingAction>
            <SecondaryMarketingAction href="/pricing" onDark>View Pricing</SecondaryMarketingAction>
          </div>
        </div>
      </Container>
    </Section>
  );
}
