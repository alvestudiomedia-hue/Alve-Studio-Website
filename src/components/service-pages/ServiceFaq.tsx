import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";
import {
  MarketingSectionHeading,
  marketingSectionPadding,
} from "@/components/ui/MarketingSectionHeading";
import type { ServicePageConfig } from "./types";

type ServiceFaqProps = Pick<ServicePageConfig, "faq" | "faqTone">;

export function ServiceFaq({ faq, faqTone }: ServiceFaqProps) {
  return (
    <section
      className={cn(
        marketingSectionPadding,
        faqTone === "paper" ? "bg-service-paper" : "bg-service-lavender",
      )}
    >
      <Container>
        <Reveal className="mb-[clamp(2rem,4vw,3rem)]">
          <MarketingSectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        </Reveal>
        <Reveal className="max-w-3xl">
          {faq.map((item) => (
            <details key={item.question} className="group border-b border-service-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-service text-base font-semibold [&::-webkit-details-marker]:hidden">
                {item.question}
                <Plus className="size-6 shrink-0 text-service-accent transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="max-w-2xl pb-5 text-[0.94rem] text-service-ink-soft">
                {item.answer}
              </p>
            </details>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
