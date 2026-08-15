import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import {
  PrimaryMarketingAction,
  SecondaryMarketingAction,
} from "@/components/ui/MarketingActions";

type MarketingCtaProps = {
  eyebrow: string;
  title: string;
  description: string;
  secondary?: {
    label: string;
    href: string;
  };
};

export function MarketingCta({
  eyebrow,
  title,
  description,
  secondary,
}: MarketingCtaProps) {
  return (
    <section className="service-deep-gradient py-[clamp(2.5rem,5vw,4rem)] text-white">
      <Container>
        <Reveal className="mx-auto max-w-3xl px-4 py-[clamp(2.5rem,5vw,4rem)] text-center">
          <Eyebrow
            variant="line"
            className="justify-center font-service text-[0.72rem] font-semibold tracking-[0.14em] text-service-accent-light"
          >
            {eyebrow}
          </Eyebrow>
          <h2 className="mx-auto mt-[0.9rem] max-w-2xl font-service text-[clamp(1.9rem,3.4vw,2.6rem)] leading-[1.12] font-bold tracking-[-0.02em] text-balance">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.65] text-white/72 text-pretty">
            {description}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5">
            <PrimaryMarketingAction href="/contact">
              Start Your Project
            </PrimaryMarketingAction>
            {secondary ? (
              <SecondaryMarketingAction href={secondary.href} onDark>
                {secondary.label}
              </SecondaryMarketingAction>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
