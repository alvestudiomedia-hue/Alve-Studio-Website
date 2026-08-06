import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function FinalCta() {
  return (
    <Section tone="tint">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-sans text-h1 text-purple-ink text-balance">
            Ready to Stop Juggling Vendors?
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-body text-ink-soft text-pretty">
            Let&apos;s consolidate your vision into one powerhouse execution
            team. Book a free consultation and see why world-class brands trust
            Alve Studio.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              Start Your Project
            </Button>
            <Button href="/contact#consultation" variant="secondary" size="lg">
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
