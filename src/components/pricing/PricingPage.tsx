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
  return (
    <div className="bg-service-paper font-sans text-service-ink">
      <PricingHero />
      {pricingCategories.map((category) => (
        <PricingCategorySection key={category.id} category={category} />
      ))}
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
