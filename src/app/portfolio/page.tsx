import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "@/components/ui/icons";
import { SelectedWork } from "@/components/portfolio/SelectedWork";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "From digital products and websites to quality assurance, growth campaigns, and field marketing — we help businesses build, launch, and grow.",
};

const numbers = [
  { value: "85+", label: "Field agents recruited, onboarded & managed" },
  { value: "500+", label: "Qualified corporate leads generated" },
  { value: "₦620K", label: "Peak daily campaign sales" },
  { value: "20+", label: "Strategic client engagements" },
];

const disciplines = [
  {
    title: "Web & Development",
    body: "Websites · E-commerce · Web Applications · APIs · Integrations",
  },
  {
    title: "Product & QA",
    body: "Functional Testing · API Testing · Regression · Load Testing · Smoke Testing",
  },
  {
    title: "Growth & Marketing",
    body: "SEO · Paid Advertising · Content · Social Media · AEO",
  },
  {
    title: "Field Marketing",
    body: "Activations · Campaigns · Customer Acquisition · Sales Activation",
  },
  {
    title: "Brand & Creative",
    body: "Brand Identity · Rebranding · Creative Direction · Campaign Design",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Section tone="hero" className="relative overflow-hidden">
        <Container>
          <div className="max-w-4xl">
            <Eyebrow className="text-dark-ink">Portfolio</Eyebrow>
            <h1 className="mt-7 font-sans text-display-sm text-balance md:text-hero">
              Work that moves businesses forward.
            </h1>
            <p className="mt-8 max-w-2xl text-body-lg text-dark-ink-soft text-pretty">
              From digital products and websites to quality assurance, growth
              campaigns, and field marketing — we help businesses build, launch,
              and grow.
            </p>
            <div className="mt-11">
              <Button
                href="/contact"
                size="lg"
                iconRight={<ArrowRight className="size-4" />}
              >
                Start a Project
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <SelectedWork />

      <Section tone="deep">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow className="text-purple-pale">Field Marketing</Eyebrow>
            <h2 className="mt-4 font-sans text-h1 text-balance">
              Growth doesn&apos;t always happen behind a screen.
            </h2>
            <p className="mt-6 text-body text-dark-ink-soft text-pretty">
              We help brands connect with their audiences through field
              campaigns, customer acquisition, sales activation, recruitment,
              and on-ground engagement.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow className="text-purple-deep">By The Numbers</Eyebrow>
            <h2 className="mt-4 font-sans text-h1 text-purple-ink text-balance">
              Experience that goes beyond the screenshots
            </h2>
            <p className="mt-6 text-body text-ink-soft text-pretty">
              The field marketing experience includes recruitment, onboarding,
              customer acquisition, market research, business development, and
              growth strategy.
            </p>
          </div>

          <dl className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {numbers.map((item) => (
              <div key={item.label}>
                <dt className="sr-only">{item.label}</dt>
                <dd>
                  <span className="block font-sans text-h1 text-purple-ink">
                    {item.value}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-3 block text-body-sm text-ink-soft"
                  >
                    {item.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section tone="tint">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow className="text-purple-deep">What We Deliver</Eyebrow>
            <h2 className="mt-4 font-sans text-h1 text-purple-ink text-balance">
              More than one discipline. One team.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {disciplines.map((item) => (
              <article
                key={item.title}
                className="rounded-sm border border-border bg-surface p-8"
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

      <Section tone="deep">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="text-purple-pale">
              Have a Project in Mind?
            </Eyebrow>
            <h2 className="mt-4 font-sans text-h1 text-balance">
              Let&apos;s build something worth showing.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-body text-dark-ink-soft text-pretty">
              Whether you&apos;re building a digital product, launching a
              campaign, strengthening your brand, or looking for a technology
              and growth partner — let&apos;s talk.
            </p>
            <div className="mt-10 flex justify-center">
              <Button
                href="/contact"
                variant="light"
                size="lg"
                iconRight={<ArrowRight className="size-4" />}
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
