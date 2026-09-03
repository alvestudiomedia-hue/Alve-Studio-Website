import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import {
  MarketingSectionHeading,
  marketingSectionPadding,
} from "@/components/ui/MarketingSectionHeading";
import type { ServiceOffer, ServicePageConfig } from "./types";

function OfferAccordion({ offer }: { offer: ServiceOffer }) {
  return (
    <Reveal className="mb-10 last:mb-0">
      <div className="mb-2.5 flex flex-wrap items-baseline gap-3">
        <span className="font-service text-[0.85rem] font-bold text-service-accent">
          {offer.number}
        </span>
        <h3 className="font-service text-[1.4rem] leading-[1.3] font-bold tracking-[-0.02em]">
          {offer.title}
        </h3>
      </div>
      <p className="mb-5 max-w-2xl text-service-ink-soft">{offer.description}</p>

      {offer.details.map((detail, index) => (
        <details
          key={detail.title}
          className="group mt-3 overflow-hidden rounded-md border border-service-line bg-white first:mt-0"
          data-aos="fade-up"
          data-aos-delay={index * 70}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5.5 py-[1.15rem] [&::-webkit-details-marker]:hidden">
            <span>
              <span className="block font-service text-[0.98rem] font-bold tracking-[-0.02em]">
                {detail.title}
              </span>
              <span className="mt-1 block text-[0.83rem] text-service-ink-soft">
                {detail.description}
              </span>
            </span>
            <Plus className="size-6 shrink-0 text-service-accent transition-transform duration-200 group-open:rotate-45" />
          </summary>
          <div className="flex flex-wrap gap-2 px-5.5 pb-5">
            {detail.items.map((item) => (
              <span
                key={item}
                className="rounded-pill bg-service-lavender px-3.5 py-1.5 text-[0.8rem] text-service-accent-dark"
              >
                {item}
              </span>
            ))}
          </div>
        </details>
      ))}
    </Reveal>
  );
}

type ServiceOfferingsProps = Pick<ServicePageConfig, "introduction" | "offers">;

export function ServiceOfferings({ introduction, offers }: ServiceOfferingsProps) {
  return (
    <section className={`${marketingSectionPadding} bg-service-paper`}>
      <Container>
        <Reveal className="mb-[clamp(2rem,4vw,3rem)]">
          <MarketingSectionHeading {...introduction} />
        </Reveal>
        {offers.map((offer) => (
          <OfferAccordion key={offer.number} offer={offer} />
        ))}
      </Container>
    </section>
  );
}
