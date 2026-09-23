import { Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { PricingTier } from "./types";

export function PricingTierCard({
  tier,
  href,
  index,
  categoryTitle = "Studio Services",
}: {
  tier: PricingTier;
  href: string;
  index: number;
  categoryTitle?: string;
  categoryId?: string;
}) {
  const quoteSubject = `Quote Request: ${categoryTitle} — ${tier.name}`;
  const quoteBody = [
    "Hi Alve Studio Team,",
    "",
    `I would like to request a tailored quote for the ${tier.name} package under ${categoryTitle}.`,
    "",
    `• Service: ${categoryTitle}`,
    `• Package: ${tier.name}`,
    `• Scope: ${tier.meta}`,
    "",
    "Company / Brand Name: ",
    "Project Overview: ",
    "Target Timeline: ",
    "",
    "Best regards,",
  ].join("\n");

  const quoteMailto = `mailto:hello@alvestudioagency.com?subject=${encodeURIComponent(
    quoteSubject,
  )}&body=${encodeURIComponent(quoteBody)}`;

  return (
    <article
      className={cn(
        "service-card relative flex flex-col rounded-lg border bg-white p-7 transition-all duration-200 hover:shadow-lift",
        tier.featured ? "border-service-accent shadow-service-pop" : "border-service-line",
      )}
      data-aos="fade-up"
      data-aos-delay={index * 80}
    >
      {tier.featured ? (
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-pill bg-service-accent px-3.5 py-1 font-service text-[0.7rem] font-bold text-white shadow-sm">
          Most Popular
        </span>
      ) : null}

      <span className="font-service text-[0.78rem] font-bold tracking-[0.08em] uppercase text-service-accent-dark">
        {tier.name}
      </span>

      <div className="my-2.5 flex flex-wrap items-baseline gap-2">
        <p className="font-service text-[1.65rem] font-extrabold tracking-tight text-service-ink">
          {tier.price ?? "Custom Quote"}
        </p>
        {tier.suffix ? (
          <span className="text-[0.88rem] font-medium text-service-ink-soft">{tier.suffix}</span>
        ) : null}
      </div>

      <p className="mb-4 text-[0.82rem] font-medium text-service-ink-soft">{tier.meta}</p>

      <p className="mb-5 border-b border-service-line pb-5 text-[0.85rem] text-service-ink-soft">
        {tier.bestFor}
      </p>

      <ul className="mb-6 flex flex-1 flex-col gap-2.5">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-[0.85rem] text-service-ink">
            <Check className="mt-0.5 size-4 shrink-0 text-service-accent" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col gap-2.5 pt-4">
        <Button
          href={quoteMailto}
          variant="primary"
          size="sm"
          className={cn(
            "h-auto w-full justify-center rounded-pill py-3 font-service text-[0.85rem] font-semibold text-white shadow-sm transition-all",
            tier.featured
              ? "bg-service-accent hover:bg-service-accent-dark"
              : "bg-purple-ink hover:bg-purple-mid",
          )}
          iconRight={<Mail className="size-4" />}
        >
          Get a Quote
        </Button>

        <Button
          href={href}
          variant="secondary"
          size="sm"
          className="h-auto w-full justify-center rounded-pill border-service-line bg-transparent py-2 font-service text-[0.8rem] text-service-ink-soft hover:border-service-accent hover:bg-white hover:text-service-ink"
        >
          Full breakdown
        </Button>
      </div>
    </article>
  );
}
