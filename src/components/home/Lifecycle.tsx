import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

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
        <h2 className="font-display text-display-sm text-balance lg:text-h1">
          The Alve Lifecycle
        </h2>

        <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-7 lg:gap-6">
          {/* The rail every stage sits on — desktop only. */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-5 hidden h-px bg-dark-border-strong lg:block"
          />

          {stages.map((stage, index) => (
            <li key={stage.title} className="relative">
              <span className="relative inline-flex size-10 items-center justify-center rounded-pill border border-dark-border-strong bg-dark-background font-mono text-body-sm text-dark-ink">
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
