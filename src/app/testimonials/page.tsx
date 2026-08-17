import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Across web development, growth, creative, QA, project delivery, and field marketing — what it's actually like to work with Alve Studio.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Section tone="hero" className="relative overflow-hidden">
        <Container>
          <div className="max-w-4xl">
            <Eyebrow className="text-dark-ink">Client Voices</Eyebrow>
            <h1 className="mt-7 font-sans text-display-sm text-balance md:text-hero">
              What our clients say
            </h1>
            <p className="mt-8 max-w-2xl text-body-lg text-dark-ink-soft text-pretty">
              Across web development, growth, creative, QA, project delivery,
              and field marketing — here&apos;s what it&apos;s actually like to
              work with Alve Studio.
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="background">
        <Container>
          <ul className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <li key={item.name}>
                <figure className="flex h-full flex-col rounded-sm border border-border bg-surface p-8">
                  <figcaption className="font-sans text-eyebrow uppercase text-ink-faint">
                    {String(index + 1).padStart(2, "0")} — {item.discipline}
                  </figcaption>

                  <blockquote className="mt-5 flex-1 text-body text-ink text-pretty">
                    {item.quote}
                  </blockquote>

                  <div className="mt-7 flex items-center gap-3.5 border-t border-border pt-6">
                    <span
                      aria-hidden="true"
                      className="inline-flex size-11 shrink-0 items-center justify-center rounded-pill bg-purple-tint text-body-sm text-purple-deep"
                    >
                      {item.initials}
                    </span>
                    <span>
                      <span className="block text-body-sm text-ink">
                        {item.name}
                      </span>
                      <span className="block text-body-sm text-ink-faint">
                        {item.role}
                      </span>
                    </span>
                  </div>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="tint">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow className="text-purple-deep">Join Them</Eyebrow>
            <h2 className="mt-4 font-sans text-h1 text-purple-ink text-balance">
              Ready to stop juggling vendors?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-body text-ink-soft text-pretty">
              Let&apos;s consolidate your vision into one powerhouse execution
              team. Book a free consultation and see why world-class brands
              trust Alve Studio.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Start Your Project
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
