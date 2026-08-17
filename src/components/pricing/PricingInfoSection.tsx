import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MarketingSectionHeading } from "@/components/ui/MarketingSectionHeading";
import { cn } from "@/lib/cn";

type PricingInfoItem = {
  title: string;
  description: string;
  emphasis?: string;
};

type PricingInfoSectionProps = {
  tone: "paper" | "lavender";
  eyebrow: string;
  title: string;
  description?: string;
  bordered?: boolean;
  items: PricingInfoItem[];
};

export function PricingInfoSection({
  tone,
  eyebrow,
  title,
  description,
  bordered = false,
  items,
}: PricingInfoSectionProps) {
  return (
    <section
      className={cn(
        "py-[clamp(3.5rem,7vw,6.5rem)]",
        tone === "paper" ? "bg-service-paper" : "bg-service-lavender",
      )}
    >
      <Container>
        <Reveal className="mb-[clamp(2rem,4vw,3rem)]">
          <MarketingSectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </Reveal>
        <Reveal className="grid grid-cols-1 gap-4 min-[561px]:grid-cols-2 min-[901px]:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className={cn(
                "rounded-md p-5",
                bordered ? "border border-service-line bg-white" : "bg-service-lavender",
              )}
            >
              <h3 className={cn("font-service font-bold", bordered ? "text-[0.98rem]" : "text-[0.94rem]")}>
                {item.title}
              </h3>
              <p className={cn("mt-1.5 text-service-ink-soft", bordered ? "text-[0.85rem]" : "text-[0.84rem]")}>
                {item.emphasis ? <><strong>{item.emphasis}</strong> — </> : null}
                {item.description}
              </p>
            </article>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
