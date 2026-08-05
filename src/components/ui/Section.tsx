import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type SectionTone =
  | "background"
  | "surface"
  | "tint"
  | "dark"
  | "deep"
  | "hero";

const toneStyles: Record<SectionTone, string> = {
  background: "bg-background text-ink",
  surface: "bg-surface text-ink",
  tint: "bg-purple-tint text-ink",
  dark: "bg-dark-background text-dark-ink",
  deep: "gradient-deep text-dark-ink",
  hero: "gradient-hero text-dark-ink",
};

type SectionProps = {
  tone?: SectionTone;
  id?: string;
  children: ReactNode;
  className?: string;
};

/** Owns the vertical rhythm and surface colour of every band on the page. */
export function Section({
  tone = "background",
  id,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", toneStyles[tone], className)}
    >
      {children}
    </section>
  );
}
