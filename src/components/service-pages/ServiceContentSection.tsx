import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";
import { SecondaryMarketingAction } from "@/components/ui/MarketingActions";
import {
  MarketingSectionHeading,
  marketingSectionPadding,
} from "@/components/ui/MarketingSectionHeading";
import type { ServiceCard, ServiceContentSection as ContentSection } from "./types";

const engagementColumnStyles = {
  3: "grid-cols-2 min-[641px]:grid-cols-3",
  4: "grid-cols-2 min-[641px]:grid-cols-3 min-[1001px]:grid-cols-4",
  5: "grid-cols-2 min-[641px]:grid-cols-3 min-[1001px]:grid-cols-5",
} as const;

function ContentCard({ card, kind }: { card: ServiceCard; kind: ContentSection["kind"] }) {
  const isQuestion = kind === "questions";
  const isEngagement = kind === "engagement";

  return (
    <article
      className={cn(
        "rounded-md p-[1.3rem]",
        isQuestion && "bg-service-lavender",
        !isQuestion && "border border-service-line bg-white",
        isEngagement && "p-[1.1rem]",
      )}
    >
      <h3
        className={cn(
          "font-service text-[0.98rem] font-bold tracking-[-0.02em] text-service-ink",
          isEngagement && "text-[0.88rem]",
          card.value && "text-center text-[2rem] font-extrabold text-service-accent-dark",
        )}
      >
        {card.value ?? card.title}
      </h3>
      {card.description ? (
        <p
          className={cn(
            "mt-1.5 text-[0.85rem] text-service-ink-soft",
            isQuestion && "text-[0.84rem]",
            isEngagement && "text-[0.78rem]",
            card.value && "text-center",
          )}
        >
          {card.description}
        </p>
      ) : null}
    </article>
  );
}

export function ServiceContentSection({ section }: { section: ContentSection }) {
  const tone = section.tone === "paper" ? "bg-service-paper" : "bg-service-lavender";
  const columns = section.columns ?? 3;
  const cardColumns =
    section.kind === "engagement"
      ? engagementColumnStyles[columns]
      : "grid-cols-1 min-[561px]:grid-cols-2 min-[901px]:grid-cols-3";

  return (
    <section className={cn(marketingSectionPadding, tone)}>
      <Container>
        <Reveal className="mb-[clamp(2rem,4vw,3rem)]">
          <MarketingSectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
            centered={section.centered}
          />
        </Reveal>

        {section.cards ? (
          <Reveal
            className={cn(
              "grid gap-4",
              cardColumns,
            )}
          >
            {section.cards.map((card) => (
              <ContentCard
                key={`${card.value ?? ""}-${card.title}`}
                card={card}
                kind={section.kind}
              />
            ))}
          </Reveal>
        ) : null}

        {section.chips ? (
          <Reveal className="flex flex-wrap gap-2">
            {section.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-pill bg-service-lavender px-3.5 py-1.5 text-[0.8rem] text-service-accent-dark"
              >
                {chip}
              </span>
            ))}
          </Reveal>
        ) : null}

        {section.trailingDescription ? (
          <Reveal className="mt-6 max-w-3xl text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.65] text-service-ink-soft">
            <p>{section.trailingDescription}</p>
          </Reveal>
        ) : null}

        {section.action ? (
          <Reveal className="mt-8">
            <SecondaryMarketingAction href={section.action.href}>
              {section.action.label}
            </SecondaryMarketingAction>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
