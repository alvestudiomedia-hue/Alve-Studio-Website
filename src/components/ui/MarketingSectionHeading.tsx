import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

type MarketingSectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  onDark?: boolean;
};

export function MarketingSectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  onDark = false,
}: MarketingSectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center")}>
      <Eyebrow
        variant="line"
        className={cn(
          "font-service text-[0.72rem] font-semibold tracking-[0.14em] text-service-accent-light",
          centered && "justify-center",
        )}
      >
        {eyebrow}
      </Eyebrow>
      <h2
        className={cn(
          "mt-[0.9rem] font-service text-[clamp(1.9rem,3.4vw,2.6rem)] leading-[1.12] font-bold tracking-[-0.02em] text-balance",
          onDark ? "text-white" : "text-service-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-[0.9rem] text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.65] text-pretty",
            onDark ? "text-white/72" : "text-service-ink-soft",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export const marketingSectionPadding = "py-[clamp(3.5rem,7vw,6.5rem)]";
