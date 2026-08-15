export type ServiceOffer = {
  number: string;
  title: string;
  description: string;
  details: {
    title: string;
    description: string;
    items: string[];
  }[];
};

export type ServiceStep = {
  label: string;
  title: string;
  description: string;
};

export type ServiceCard =
  | {
      title: string;
      description?: string;
      value?: never;
    }
  | {
      title?: never;
      description: string;
      value: string;
    };

export type ServiceContentSection = {
  tone: "paper" | "lavender";
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  kind?: "questions" | "engagement";
  columns?: 3 | 4 | 5;
  cards?: ServiceCard[];
  chips?: string[];
  trailingDescription?: string;
  action?: {
    label: string;
    href: string;
  };
};

export type ServicePageConfig = {
  name: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  introduction: {
    eyebrow: string;
    title: string;
    description: string;
  };
  offers: ServiceOffer[];
  process: {
    eyebrow: string;
    title: string;
    description?: string;
    steps: ServiceStep[];
  };
  sections: ServiceContentSection[];
  faqTone?: "paper" | "lavender";
  faq: {
    question: string;
    answer: string;
  }[];
  cta: {
    eyebrow: string;
    title: string;
    description: string;
  };
};
