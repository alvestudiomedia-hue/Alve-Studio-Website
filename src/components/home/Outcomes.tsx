import { Container } from "@/components/ui/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Section } from "@/components/ui/Section";

const stats = [
  { value: "98%", label: "Client retention" },
  { value: "150+", label: "Launches" },
];

export function Outcomes() {
  return (
    <Section tone="surface">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <MediaFrame
            alt="Inside the Alve studio"
            ratio="video"
            className="lg:order-first"
          />

          <div>
            <h2 className="font-display text-display-sm text-purple-deep text-balance lg:text-h1">
              We Don&apos;t Just Build Products. We Build Outcomes.
            </h2>

            <p className="mt-7 text-body text-ink-soft text-pretty">
              We bridge the gap between technical complexity and business
              growth. Most agencies specialise in a silo; Alve Studio is built
              for the entire lifecycle. Our approach integrates strategy,
              design, and development to ensure your product doesn&apos;t just
              work — it wins.
            </p>

            <dl className="mt-10 flex flex-wrap gap-x-16 gap-y-6 border-t border-border pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-h1 text-purple-deep">
                      {stat.value}
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-2 block font-mono text-eyebrow uppercase text-ink-faint"
                    >
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
}
