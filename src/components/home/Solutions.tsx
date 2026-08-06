import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CheckCircle } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

type Solution = {
  title: string;
  items: string[];
  wide?: boolean;
};

const solutions: Solution[] = [
  {
    title: "Growth & Marketing",
    items: [
      "SEO & Performance Marketing",
      "Conversion Rate Optimization",
      "Product-Led Growth Strategy",
    ],
  },
  {
    title: "Web & Development",
    items: [
      "Modern Web Applications",
      "Custom API Integrations",
      "Headless E-commerce Solutions",
    ],
  },
  {
    title: "QA & Testing",
    items: [
      "Automated End-to-End Testing",
      "Security Vulnerability Audits",
      "Performance & Load Testing",
    ],
  },
  {
    title: "Project Delivery",
    items: [
      "Agile Management Office",
      "Product Roadmap Definition",
      "Resource Optimization",
    ],
  },
  {
    title: "Creative Services",
    wide: true,
    items: [
      "UX Research & Branding",
      "Motion Graphics & 3D",
      "UI/Visual Interface Design",
      "Design System Creation",
    ],
  },
];

function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <article
      className={cn(
        "rounded-sm border border-border bg-surface p-7 transition-colors duration-200 hover:border-border-strong",
        solution.wide && "lg:col-span-2",
      )}
    >
      <h3 className="text-h2 text-purple-ink">{solution.title}</h3>

      <ul
        className={cn(
          "mt-6 space-y-3.5",
          solution.wide &&
            "sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-3.5 sm:space-y-0",
        )}
      >
        {solution.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <CheckCircle className="mt-1 size-3.5 shrink-0 text-purple-mid" />
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
        <h2 className="max-w-2xl font-display text-display-sm text-purple-ink text-balance lg:text-h1">
          Digital Solutions Designed Around Your Business
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} solution={solution} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
