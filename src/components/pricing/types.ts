export type PricingTier = {
  name: string;
  price: string;
  suffix?: string;
  meta: string;
  bestFor: string;
  features: string[];
  featured?: boolean;
};

export type PricingCategory = {
  number: string;
  id: string;
  title: string;
  quickLinkLabel?: string;
  breakdownHref: string;
  description: string;
  tone: "paper" | "lavender";
  tiers: PricingTier[];
  note?: {
    title: string;
    description: string;
  };
};
