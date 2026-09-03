"use client";

import { useEffect, useState } from "react";
import { PricingCategorySection } from "./PricingCategorySection";
import { PricingHero } from "./PricingHero";
import { PricingInfoSection } from "./PricingInfoSection";
import { MarketingCta } from "@/components/ui/MarketingCta";
import {
  packageGuidance,
  pricingCategories,
  pricingModels,
  pricingNotes,
} from "./pricingData";

export function PricingPage() {
  const [showQuickLinks, setShowQuickLinks] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const hero = document.getElementById("pricing-hero");
      setShowQuickLinks(Boolean(hero && hero.getBoundingClientRect().bottom <= 0));
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return (
    <div className="bg-service-paper font-sans text-service-ink">
      <div id="pricing-hero">
        <PricingHero />
      </div>
      <div className="relative">
        {showQuickLinks ? <nav
          aria-label="Pricing categories quick links"
          className="fixed top-44 right-6 z-40 hidden w-52 rounded-md border border-service-ink/10 bg-service-paper/95 p-3 shadow-lift backdrop-blur-md lg:block"
        >
          <p className="px-2 pb-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-service-ink/60">
            Pricing categories
          </p>
          <div className="flex flex-col gap-1">
            {pricingCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-sm px-2 py-2 text-body-sm text-service-ink transition-colors hover:bg-service-ink/8 hover:text-service-accent"
              >
                {category.quickLinkLabel ?? category.title}
              </a>
            ))}
          </div>
        </nav> : null}
        {pricingCategories.map((category) => (
          <PricingCategorySection key={category.id} category={category} />
        ))}
      </div>
      <PricingInfoSection
        tone="paper"
        eyebrow="How Our Pricing Works"
        title="Transparent pricing. Clear scope."
        description="We use a few primary engagement models depending on what you need."
        bordered
        items={pricingModels}
      />
      <PricingInfoSection
        tone="lavender"
        eyebrow="Which Package Is Right for You?"
        title="Find your starting point"
        items={packageGuidance}
      />
      <PricingInfoSection
        tone="paper"
        eyebrow="Pricing Notes"
        title="The fine print, made simple"
        items={pricingNotes}
      />
      <MarketingCta
        eyebrow="Build. Grow. Create. Deliver. Activate."
        title="Let's build something that works."
        description="Whether you're launching a product, improving your website, growing your customer base, strengthening your brand, managing a complex project, or taking your campaign into the field, Alve Studio can help."
      />
    </div>
  );
}
