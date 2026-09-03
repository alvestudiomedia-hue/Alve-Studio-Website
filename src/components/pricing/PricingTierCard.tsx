import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { PricingTier } from "./types";

export function PricingTierCard({
  tier,
  href,
  index,
}: {
  tier: PricingTier;
  href: string;
  index: number;
}) {
  return (
    <article
      className={cn(
        "service-card relative flex flex-col rounded-lg border bg-white p-7",
        tier.featured ? "border-service-accent shadow-service-pop" : "border-service-line",
      )}
      data-aos="fade-up"
      data-aos-delay={index * 80}
    >
      {tier.featured ? (
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-pill bg-service-accent px-3 py-1 font-service text-[0.7rem] font-bold text-white">
          Most Popular
        </span>
      ) : null}
      <span className="font-service text-[0.78rem] font-bold tracking-[0.08em] uppercase text-service-accent-dark">
        {tier.name}
      </span>
      <p className="my-2 font-service text-[1.7rem] font-extrabold text-service-ink">
        {tier.price}
        {tier.suffix ? (
          <span className="text-[0.9rem] font-medium text-service-ink-soft"> {tier.suffix}</span>
        ) : null}
      </p>
      <p className="mb-4 text-[0.8rem] text-service-ink-soft">{tier.meta}</p>
      <p className="mb-5 border-b border-service-line pb-5 text-[0.85rem] text-service-ink-soft">
        {tier.bestFor}
      </p>
      <ul className="mb-6 flex flex-1 flex-col gap-2.5">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-[0.85rem]">
            <Check className="mt-0.5 size-4 shrink-0 text-service-accent" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        href={href}
        variant="secondary"
        size="sm"
        className="h-auto rounded-pill border-service-line bg-transparent px-4 py-2.5 font-service text-[0.82rem] text-service-ink hover:border-service-accent hover:bg-white"
      >
        Full breakdown
      </Button>
    </article>
  );
}
