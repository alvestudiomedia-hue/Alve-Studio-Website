import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import {
  MarketingSectionHeading,
  marketingSectionPadding,
} from "@/components/ui/MarketingSectionHeading";
import type { ServicePageConfig } from "./types";

type ServiceProcessProps = Pick<ServicePageConfig, "process">;

export function ServiceProcess({ process }: ServiceProcessProps) {
  return (
    <section className={`${marketingSectionPadding} service-deep-gradient text-white`}>
      <Container>
        <Reveal className="mb-[clamp(2rem,4vw,3rem)]">
          <MarketingSectionHeading {...process} onDark />
        </Reveal>
        <Reveal className="grid grid-cols-1 gap-4 min-[561px]:grid-cols-2 min-[901px]:grid-cols-4">
          {process.steps.map((step) => (
            <article key={step.label} className="border-t-2 border-white/14 py-5.5">
              <span className="font-service text-[0.85rem] font-bold text-service-accent">
                {step.label}
              </span>
              <h3 className="mt-2 font-service text-base font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-1.5 text-[0.86rem] leading-[1.6] text-white/65">
                {step.description}
              </p>
            </article>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
