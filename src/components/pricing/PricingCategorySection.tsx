import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { PricingTierCard } from "./PricingTierCard";
import type { PricingCategory } from "./types";

export function PricingCategorySection({ category }: { category: PricingCategory }) {
  return (
    <section
      id={category.id}
      className={cn(
        "scroll-mt-30 py-[clamp(3.5rem,7vw,6.5rem)]",
        category.tone === "paper" ? "bg-service-paper" : "bg-service-lavender",
      )}
    >
      <Container>
        <div
          className="mb-2.5 flex flex-wrap items-baseline gap-3"
          data-aos="fade-up"
        >
          <span className="font-service text-[0.85rem] font-bold text-service-accent">
            {category.number}
          </span>
          <h2 className="font-service text-[1.4rem] leading-[1.3] font-bold tracking-[-0.02em]">
            {category.title}
          </h2>
        </div>
        <p className="mb-6 max-w-2xl text-service-ink-soft" data-aos="fade-up">
          {category.description}
        </p>

        <Reveal className="grid grid-cols-1 gap-4 min-[961px]:grid-cols-3">
          {category.tiers.map((tier, index) => (
            <PricingTierCard
              key={tier.name}
              tier={tier}
              href={category.breakdownHref}
              index={index}
            />
          ))}
        </Reveal>

        {category.note ? (
          <Reveal className="mt-6 max-w-2xl rounded-md bg-service-lavender p-5">
            <h3 className="font-service text-[0.94rem] font-bold">{category.note.title}</h3>
            <p className="mt-1.5 text-[0.84rem] text-service-ink-soft">
              {category.note.description}
            </p>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
