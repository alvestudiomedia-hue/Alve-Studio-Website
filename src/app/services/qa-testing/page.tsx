import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "@/components/ui/icons";
import {
  Capabilities,
  FaqList,
  Features,
  ServiceHero,
  Steps,
} from "@/components/services/ServiceSections";
import {
  capabilities,
  engagement,
  faqs,
  fit,
  lifecycle,
  outcomes,
  process,
} from "@/lib/services/qa-testing";

export const metadata: Metadata = {
  title: "QA & Testing",
  description:
    "We help identify issues before they reach your customers — improving quality, reliability, security, performance, and user experience at every stage of development.",
};

export default function QaTestingPage() {
  return (
    <>
      <ServiceHero
        breadcrumb="Home / Services / QA & Testing"
        eyebrow="QA & Testing"
        title="Build with confidence. Launch without surprises."
        body="A great digital product isn't just one that works in development. It needs to work reliably across devices, browsers, users, environments, and real-world conditions. We help identify issues before they reach your customers — improving quality, reliability, security, performance, and user experience at every stage of development."
      >
        <Button
          href="/contact"
          size="lg"
          iconRight={<ArrowRight className="size-4" />}
        >
          Start Your Project
        </Button>
      </ServiceHero>

      <Capabilities
        eyebrow="What We Test"
        title="Quality assurance should be part of development — not an afterthought."
        body="We combine manual testing, automated testing, performance testing, security testing, and continuous quality practices to make sure your product behaves as expected."
        items={capabilities}
      />

      <Features
        eyebrow="Quality Throughout the Lifecycle"
        title="QA shouldn't begin a few days before launch."
        body="We integrate quality assurance throughout your development process so issues are found earlier, when they're easier and cheaper to fix."
        items={lifecycle}
        tone="tint"
      />

      <Steps
        eyebrow="Our QA Process"
        title="A structured path from risk to release"
        items={process}
      />

      <Features
        eyebrow="What You'll Get"
        title="Release with fewer surprises"
        items={outcomes}
      />

      <Features
        eyebrow="Let's Find Your Fit"
        title="What can we help you test?"
        items={fit}
        tone="tint"
      />

      <Features
        eyebrow="QA That Works With Your Team"
        title="You don't need to replace your development team to improve quality"
        body="We can work alongside your team at any stage."
        items={engagement}
      />

      <FaqList eyebrow="FAQ" title="Frequently asked questions" items={faqs} />

      <Section tone="deep">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="text-purple-pale">Ready to Test?</Eyebrow>
            <h2 className="mt-4 font-sans text-h1 text-balance">
              Let&apos;s help you release with confidence.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-body text-dark-ink-soft text-pretty">
              Whether you&apos;re launching a new product, improving an existing
              platform, or need ongoing quality assurance, we&apos;ll help you
              find issues before your customers do.
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
