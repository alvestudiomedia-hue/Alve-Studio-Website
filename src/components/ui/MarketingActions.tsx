import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type MarketingActionProps = {
  href: string;
  children: string;
};

export function PrimaryMarketingAction({ href, children }: MarketingActionProps) {
  return (
    <Button
      href={href}
      size="md"
      className="h-auto rounded-pill bg-service-accent px-6 py-[0.9rem] font-service text-[0.95rem] text-white shadow-service-pop hover:-translate-y-0.5 hover:bg-service-accent-hover hover:shadow-service-pop"
    >
      {children}
    </Button>
  );
}

export function SecondaryMarketingAction({
  href,
  children,
  onDark = false,
}: MarketingActionProps & { onDark?: boolean }) {
  return (
    <Button
      href={href}
      variant={onDark ? "outline" : "secondary"}
      size="md"
      iconRight={<ArrowRight className="size-[1.1rem]" />}
      className={cn(
        "h-auto rounded-pill px-6 py-[0.9rem] font-service text-[0.95rem] hover:-translate-y-0.5",
        onDark
          ? "border-white/35 text-white hover:border-white/60 hover:bg-white/8"
          : "border-service-line bg-transparent text-service-ink hover:border-service-accent hover:bg-white",
      )}
    >
      {children}
    </Button>
  );
}
