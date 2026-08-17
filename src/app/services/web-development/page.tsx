import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "@/components/ui/icons";
import {
  FaqList,
  Features,
  GroupedCapabilities,
  ServiceHero,
  Steps,
} from "@/components/services/ServiceSections";
import {
  engagement,
  faqs,
  fit,
  groups,
  performance,
  process,
  stack,
} from "@/lib/services/web-development";

export const metadata: Metadata = {
  title: "Web & Development",
  description:
    "From high-converting websites to complex web applications and mobile products, we design and develop digital experiences that are fast, scalable, secure, and built around your business goals.",
};

export default function WebDevelopmentPage() {
  return (
    <>
      <ServiceHero
        breadcrumb="Home / Services / Web & Development"
        eyebrow="Web & Development"
        title="Build digital products that work as beautifully as they perform."
        body="From high-converting websites to complex web applications and mobile products, we design and develop digital experiences that are fast, scalable, secure, and built around your business goals. Whether you're launching something new, replacing an outdated platform, or scaling an existing product, we bring design, development, technology, and infrastructure together from idea to launch."
      >
        <Button
          href="/contact"
          size="lg"
          iconRight={<ArrowRight className="size-4" />}
        >
          Start Your Project
        </Button>
      </ServiceHero>

      <GroupedCapabilities
        eyebrow="What We Build"
        title="Your digital product is more than a website or an app."
        body="It's how your customers experience your business, how your team operates, and how your company grows. We bring together UX, design, engineering, integrations, and infrastructure to build digital products that are useful, reliable, and ready to scale."
        groups={groups}
      />

      <Steps
        eyebrow="From Idea to Launch"
        title="One team. One development process."
        body="Whether you have a complete specification or only an idea, we can help turn it into a working digital product."
        items={process}
      />

      <Features
        eyebrow="Built for Performance"
        title="Built to work today — and to handle tomorrow's users."
        body="A website that looks good but loads slowly isn't doing its job. We build with performance, accessibility, security, reliability, and scalability in mind from the beginning."
        items={performance}
      />

      <Features
        eyebrow="Technology That Fits the Project"
        title="We don't force every project into the same stack."
        body="The right technology depends on what you're building, who will use it, how it needs to scale, and how your team will manage it — selected based on the requirements of each project."
        items={stack}
        tone="tint"
      />

      <Features
        eyebrow="Let's Find Your Fit"
        title="What can we help you build?"
        items={fit}
      />

      <Features
        eyebrow="Flexible Engagement"
        title="Every development project is different"
        body="Some clients need a website built from the ground up. Others need an ongoing development team to support an existing product."
        items={engagement}
        tone="tint"
      />

      <FaqList eyebrow="FAQ" title="Frequently asked questions" items={faqs} />

      <Section tone="deep">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="text-purple-pale">Ready to Build?</Eyebrow>
            <h2 className="mt-4 font-sans text-h1 text-balance">
              Let&apos;s turn your idea into a working product.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-body text-dark-ink-soft text-pretty">
              Whether you&apos;re launching something new, replacing an outdated
              platform, or scaling an existing product, we&apos;ll bring design,
              development, and infrastructure together from idea to launch.
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
