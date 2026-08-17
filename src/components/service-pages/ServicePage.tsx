import { ServiceContentSection } from "./ServiceContentSection";
import { ServiceFaq } from "./ServiceFaq";
import { ServiceHero } from "./ServiceHero";
import { ServiceOfferings } from "./ServiceOfferings";
import { ServiceProcess } from "./ServiceProcess";
import { MarketingCta } from "@/components/ui/MarketingCta";
import type { ServicePageConfig } from "./types";

export function ServicePage({ config }: { config: ServicePageConfig }) {
  return (
    <div className="bg-service-paper font-sans text-service-ink">
      <ServiceHero name={config.name} hero={config.hero} />
      <ServiceOfferings introduction={config.introduction} offers={config.offers} />
      <ServiceProcess process={config.process} />
      {config.sections.map((section) => (
        <ServiceContentSection
          key={`${section.eyebrow}-${section.title}`}
          section={section}
        />
      ))}
      <ServiceFaq faq={config.faq} faqTone={config.faqTone} />
      <MarketingCta
        {...config.cta}
        secondary={{ label: "View Pricing", href: "/pricing" }}
      />
    </div>
  );
}
