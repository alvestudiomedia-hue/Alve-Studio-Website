import type { ComponentType, SVGProps } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  Crosshair,
  Layers,
  ShieldCheck,
  Sync,
  TrendingUp,
} from "@/components/ui/icons";
import { cn } from "@/lib/cn";

type CardTone = "surface" | "dark" | "light";

type AdvantageItem = {
  title: string;
  body: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  tone: CardTone;
  /** Spans two columns in the bento grid on large screens. */
  wide?: boolean;
};

const items: AdvantageItem[] = [
  {
    title: "Strategy First",
    body: "We align every pixel and every line of code with your core business objectives. We don't build features; we build solutions that move the needle on your KPIs from day one.",
    icon: Crosshair,
    tone: "surface",
    wide: true,
  },
  {
    title: "End-to-End Expertise",
    body: "From back-end architecture to front-end delight, our integrated team handles the full stack of modern digital commerce and SaaS needs.",
    icon: Layers,
    tone: "dark",
  },
  {
    title: "Quality You Can Trust",
    body: "Rigorous testing and peer reviews are baked into our DNA. We deliver secure, scalable, and resilient products.",
    icon: ShieldCheck,
    tone: "surface",
  },
  {
    title: "Transparent Collaboration",
    body: "Real-time dashboards, weekly syncs, and dedicated Slack channels. You're never in the dark about your project status.",
    icon: Sync,
    tone: "surface",
  },
  {
    title: "Built for Growth",
    body: "We don't launch and leave. Our performance team scales your user base while our devs optimise the infrastructure.",
    icon: TrendingUp,
    tone: "light",
  },
];

const cardToneStyles: Record<CardTone, string> = {
  surface: "border-border bg-surface text-ink",
  dark: "border-transparent bg-dark-background text-dark-ink",
  light: "border-transparent bg-purple-light text-dark-ink",
};

const chipToneStyles: Record<CardTone, string> = {
  surface: "bg-purple-tint text-purple-deep",
  dark: "bg-dark-surface-2 text-purple-light",
  light: "bg-dark-ink/20 text-dark-ink",
};

const bodyToneStyles: Record<CardTone, string> = {
  surface: "text-ink-soft",
  dark: "text-dark-ink-soft",
  light: "text-dark-ink/85",
};

function BentoCard({ item }: { item: AdvantageItem }) {
  const Icon = item.icon;

  return (
    <article
      className={cn(
        "flex flex-col rounded-lg border p-8 transition-shadow duration-200 hover:shadow-soft",
        cardToneStyles[item.tone],
        item.wide && "lg:col-span-2",
      )}
    >
      <span
        className={cn(
          "inline-flex size-11 items-center justify-center rounded-sm",
          chipToneStyles[item.tone],
        )}
      >
        <Icon />
      </span>

      <h3 className="mt-7 text-h2">{item.title}</h3>
      <p className={cn("mt-3 text-body-sm text-pretty", bodyToneStyles[item.tone])}>
        {item.body}
      </p>
    </article>
  );
}

export function Advantage() {
  return (
    <Section tone="tint">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-display-sm text-purple-deep text-balance lg:text-h1">
            One Partner. Every Stage.
          </h2>
          <p className="mt-5 text-body text-ink-soft text-pretty">
            The Alve advantage is built on integration, eliminating the friction
            of managing multiple specialised vendors.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <BentoCard key={item.title} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
