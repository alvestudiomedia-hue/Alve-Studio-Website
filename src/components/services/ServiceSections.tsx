import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Plus } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

export type Capability = {
  title: string;
  body: string;
  coveredIntro: string;
  covered: string[];
};

export type Step = { label: string; title: string; body: string };
export type Feature = { title: string; body: string };
export type Faq = { question: string; answer: string };

function Heading({
  eyebrow,
  title,
  body,
  onDark = false,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  onDark?: boolean;
  centered?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
      <Eyebrow className={onDark ? "text-purple-pale" : "text-purple-deep"}>
        {eyebrow}
      </Eyebrow>
      <h2
        className={cn(
          "mt-4 font-sans text-h1 text-balance",
          onDark ? "text-dark-ink" : "text-purple-ink",
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-6 text-body text-pretty",
            onDark ? "text-dark-ink-soft" : "text-ink-soft",
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

export function Capabilities({
  eyebrow,
  title,
  body,
  items,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  items: Capability[];
}) {
  return (
    <Section tone="background">
      <Container>
        <Heading eyebrow={eyebrow} title={title} body={body} />

        <div className="mt-14 grid items-start gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="service-card flex flex-col rounded-sm border border-border bg-surface p-8"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <span className="font-sans text-eyebrow text-purple-mid">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-h2 text-purple-ink">{item.title}</h3>
              <p className="mt-3 flex-1 text-body-sm text-ink-soft text-pretty">
                {item.body}
              </p>

              <details className="group mt-6 rounded-sm border border-border bg-background">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-4 marker:content-['']">
                  <span className="font-sans text-eyebrow uppercase text-ink-faint">
                    What&apos;s covered
                  </span>
                  <Plus
                    aria-hidden="true"
                    className="size-4 shrink-0 text-purple-deep transition-transform duration-200 group-open:rotate-45"
                  />
                </summary>
                <div className="border-t border-border p-4">
                  <p className="text-body-sm text-ink-soft text-pretty">
                    {item.coveredIntro}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.covered.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-pill bg-purple-tint px-3 py-1.5 text-body-sm text-purple-deep"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function Steps({
  eyebrow,
  title,
  body,
  items,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  items: Step[];
}) {
  return (
    <Section tone="deep">
      <Container>
        <Heading eyebrow={eyebrow} title={title} body={body} onDark />

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((step, index) => (
            <li key={step.title} data-aos="fade-up" data-aos-delay={index * 70}>
              <span className="font-sans text-eyebrow uppercase text-purple-pale">
                {step.label}
              </span>
              <h3 className="mt-3 text-h2 text-dark-ink">{step.title}</h3>
              <p className="mt-2 text-body-sm text-dark-ink-soft text-pretty">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

export function Features({
  eyebrow,
  title,
  body,
  items,
  tone = "surface",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  items: Feature[];
  tone?: "surface" | "tint";
}) {
  return (
    <Section tone={tone}>
      <Container>
        <Heading eyebrow={eyebrow} title={title} body={body} />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="service-card rounded-sm border border-border bg-surface p-8"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <h3 className="text-h2 text-purple-ink">{item.title}</h3>
              <p className="mt-3 text-body-sm text-ink-soft text-pretty">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function FaqList({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: Faq[];
}) {
  return (
    <Section tone="background">
      <Container>
        <Heading eyebrow={eyebrow} title={title} />

        <ul className="mt-12 max-w-3xl space-y-3">
          {items.map((faq, index) => (
            <li key={faq.question} data-aos="fade-up" data-aos-delay={index * 70}>
              <details className="group rounded-sm border border-border bg-surface">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-body text-ink marker:content-['']">
                  {faq.question}
                  <Plus
                    aria-hidden="true"
                    className="size-5 shrink-0 text-purple-deep transition-transform duration-200 group-open:rotate-45"
                  />
                </summary>
                <p className="border-t border-border p-5 text-body-sm text-ink-soft text-pretty">
                  {faq.answer}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export function ServiceHero({
  breadcrumb,
  eyebrow,
  title,
  body,
  children,
}: {
  breadcrumb: string;
  eyebrow: string;
  title: string;
  body: string;
  children?: ReactNode;
}) {
  return (
    <Section tone="hero" className="relative overflow-hidden">
      <Container>
        <div className="max-w-4xl">
          <p className="font-sans text-eyebrow uppercase text-dark-ink-faint">
            {breadcrumb}
          </p>
          <div className="mt-6">
            <Eyebrow className="text-dark-ink">{eyebrow}</Eyebrow>
          </div>
          <h1 className="mt-7 font-sans text-display-sm text-balance md:text-hero">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-body-lg text-dark-ink-soft text-pretty">
            {body}
          </p>
          {children ? <div className="mt-11">{children}</div> : null}
        </div>
      </Container>
    </Section>
  );
}

export type CapabilityGroup = {
  title: string;
  body: string;
  items: Capability[];
};

export function GroupedCapabilities({
  eyebrow,
  title,
  body,
  groups,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  groups: CapabilityGroup[];
}) {
  return (
    <Section tone="background">
      <Container>
        <Heading eyebrow={eyebrow} title={title} body={body} />

        <div className="mt-14 space-y-16">
          {groups.map((group, groupIndex) => (
            <div key={group.title}>
              <div
                className="max-w-3xl border-t border-border pt-8"
                data-aos="fade-up"
              >
                <span className="font-sans text-eyebrow text-purple-mid">
                  {String(groupIndex + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-sans text-h1 text-purple-ink text-balance">
                  {group.title}
                </h3>
                <p className="mt-4 text-body text-ink-soft text-pretty">
                  {group.body}
                </p>
              </div>

              <div className="mt-8 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item, itemIndex) => (
                  <article
                    key={item.title}
                    className="service-card flex flex-col rounded-sm border border-border bg-surface p-7"
                    data-aos="fade-up"
                    data-aos-delay={itemIndex * 80}
                  >
                    <h4 className="text-h2 text-purple-ink">{item.title}</h4>
                    <p className="mt-3 flex-1 text-body-sm text-ink-soft text-pretty">
                      {item.body}
                    </p>

                    <details className="group mt-5 rounded-sm border border-border bg-background">
                      <summary className="flex cursor-pointer items-center justify-between gap-3 p-4 marker:content-['']">
                        <span className="font-sans text-eyebrow uppercase text-ink-faint">
                          What&apos;s covered
                        </span>
                        <Plus
                          aria-hidden="true"
                          className="size-4 shrink-0 text-purple-deep transition-transform duration-200 group-open:rotate-45"
                        />
                      </summary>
                      <ul className="flex flex-wrap gap-2 border-t border-border p-4">
                        {item.covered.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-pill bg-purple-tint px-3 py-1.5 text-body-sm text-purple-deep"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </details>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
