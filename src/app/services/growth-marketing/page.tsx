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
  measures,
  process,
} from "@/lib/services/growth-marketing";

export const metadata: Metadata = {
  title: "Growth & Marketing",
  description:
    "We build growth strategies that help businesses get discovered, attract the right audience, convert attention into customers, and build lasting visibility.",
};

export default function GrowthMarketingPage() {
  return (
    <>
      <ServiceHero
        breadcrumb="Home / Services / Growth & Marketing"
        eyebrow="Growth & Marketing"
        title="Turn attention into measurable growth."
        body="Getting people to notice your brand is only the beginning. We build growth strategies that help businesses get discovered, attract the right audience, convert attention into customers, and build lasting visibility — combining SEO, paid advertising, social, content, and influencer marketing around clear business objectives."
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
        eyebrow="What We Do"
        title="Growth doesn't come from one channel working in isolation."
        body="We combine strategy, search, paid media, social, content, and conversion to create marketing systems designed around your business and your customers."
        groups={groups}
      />

      <Steps
        eyebrow="From Strategy to Growth"
        title="One connected growth process"
        body="We don't believe in running disconnected marketing activities. We build a process where each channel supports the next."
        items={process}
      />

      <Features
        eyebrow="Growth That Can Be Measured"
        title="Marketing shouldn't feel like guesswork."
        body="We use performance data to understand what's working, what's not, and where your next opportunity lies."
        items={measures}
      />

      <Features
        eyebrow="Let's Find Your Fit"
        title="What can we help you grow?"
        items={fit}
        tone="tint"
      />

      <Features
        eyebrow="Flexible Engagement"
        title="Every business needs a different level of marketing support"
        items={engagement}
      />

      <FaqList eyebrow="FAQ" title="Frequently asked questions" items={faqs} />

      <Section tone="deep">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="text-purple-pale">Ready to Grow?</Eyebrow>
            <h2 className="mt-4 font-sans text-h1 text-balance">
              Let&apos;s turn attention into measurable growth.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-body text-dark-ink-soft text-pretty">
              Whether you need better search visibility, stronger campaigns,
              more engaging content, or a complete growth strategy, we&apos;ll
              build a marketing system designed around your business.
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
