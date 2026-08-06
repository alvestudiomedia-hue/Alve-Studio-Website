import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

const stages = [
  { title: "Discover", body: "Insight-driven research & auditing." },
  { title: "Strategize", body: "Defining the roadmap to ROI." },
  { title: "Design", body: "Iterative, user-centric prototyping." },
  { title: "Develop", body: "Scalable, high-performance code." },
  { title: "Quality", body: "Comprehensive automated testing." },
  { title: "Launch", body: "Smooth, secure deployment." },
  { title: "Grow", body: "Continuous scaling & support." },
];

export function Lifecycle() {
  return (
    <Section tone="deep">
      <Container>
        <h2 className="font-sans text-h1 text-balance">
          The Alve Lifecycle
        </h2>

        <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-7 lg:gap-6">
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-12 hidden h-px bg-dark-border lg:block"
          />

          {stages.map((stage, index) => (
            <li key={stage.title} className="relative">
              <span
                className={cn(
                  "relative inline-flex size-12 items-center justify-center rounded-pill font-sans text-body-sm",
                  index === 0
                    ? "bg-purple-pale text-purple-ink"
                    : "bg-dark-ink text-purple-ink",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-h2">{stage.title}</h3>
              <p className="mt-2 text-body-sm text-dark-ink-soft text-pretty">
                {stage.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
