import type { ComponentType, SVGProps } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  BadgeCheck,
  BarChart,
  CheckCircle,
  Clipboard,
  Code,
  Sparkle,
} from "@/components/ui/icons";
import { cn } from "@/lib/cn";

type Solution = {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  items: string[];
  /** Renders across two columns with a two-up item list. */
  wide?: boolean;
};

const solutions: Solution[] = [
  {
    title: "Growth & Marketing",
    icon: BarChart,
    items: [
      "SEO & performance marketing",
      "Conversion rate optimisation",
      "Product-led growth strategy",
    ],
  },
  {
    title: "Web & Development",
    icon: Code,
    items: [
      "Modern web applications",
      "Custom API integrations",
      "Headless e-commerce solutions",
    ],
  },
  {
    title: "QA & Testing",
    icon: BadgeCheck,
    items: [
      "Automated end-to-end testing",
      "Security vulnerability audits",
      "Performance & load testing",
    ],
  },
  {
    title: "Project Delivery",
    icon: Clipboard,
    items: [
      "Agile management office",
      "Product roadmap definition",
      "Resource optimisation",
    ],
  },
  {
    title: "Creative Services",
    icon: Sparkle,
    wide: true,
    items: [
      "UX research & branding",
      "Motion graphics & 3D",
      "UI / visual interface design",
      "Design system creation",
    ],
  },
];

function SolutionCard({ solution }: { solution: Solution }) {
  const Icon = solution.icon;

  return (
    <article
      className={cn(
        "rounded-md border border-border bg-surface p-7 transition-colors duration-200 hover:border-border-strong",
        solution.wide && "lg:col-span-2",
      )}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex size-9 items-center justify-center rounded-sm bg-purple-tint text-purple-deep">
          <Icon className="size-4.5" />
        </span>
        <h3 className="text-h2 text-purple-deep">{solution.title}</h3>
      </div>

      <ul
        className={cn(
          "mt-6 space-y-3.5",
          solution.wide && "sm:grid sm:grid-cols-2 sm:gap-x-8 sm:space-y-0 sm:gap-y-3.5",
        )}
      >
        {solution.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <CheckCircle
              className="mt-0.5 size-4 shrink-0 text-purple-light"
              aria-hidden="true"
            />
            <span className="text-body-sm text-ink-soft">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Solutions() {
  return (
    <Section tone="background">
      <Container>
        <h2 className="max-w-2xl font-display text-display-sm text-purple-deep text-balance lg:text-h1">
          Digital Solutions Designed Around Your Business
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} solution={solution} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
