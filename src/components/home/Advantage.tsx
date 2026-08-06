import type { ComponentType, SVGProps } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  Engineering,
  Handshake,
  Strategy,
  TrendingUp,
  VerifiedUser,
} from "@/components/ui/icons";
import { cn } from "@/lib/cn";

type CardTone = "surface" | "dark" | "light";

type AdvantageItem = {
  title: string;
  body: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  tone: CardTone;
  wide?: boolean;
};

const items: AdvantageItem[] = [
  {
    title: "Strategy First",
    body: "We align every pixel and every line of code with your core business objectives. We don't build features; we build solutions that move the needle on your KPIs from day one.",
    icon: Strategy,
    tone: "surface",
    wide: true,
  },
  {
    title: "End-to-End Expertise",
    body: "From back-end architecture to front-end delight, our integrated team handles the full stack of modern digital commerce and SaaS needs.",
    icon: Engineering,
    tone: "dark",
  },
  {
    title: "Quality You Can Trust",
    body: "Rigorous testing and peer reviews are baked into our DNA. We deliver secure, scalable, and resilient products.",
    icon: VerifiedUser,
    tone: "surface",
  },
  {
    title: "Transparent Collaboration",
    body: "Real-time dashboards, weekly syncs, and dedicated Slack channels. You're never in the dark about your project status.",
    icon: Handshake,
    tone: "surface",
  },
  {
    title: "Built for Growth",
    body: "We don't launch and leave. Our performance team scales your user base while our devs optimize the infrastructure.",
    icon: TrendingUp,
    tone: "light",
  },
];

const cardStyles: Record<CardTone, string> = {
  surface: "border-border bg-surface",
  dark: "border-transparent bg-purple-ink",
  light: "border-transparent bg-purple-mid",
};

const iconStyles: Record<CardTone, string> = {
  surface: "text-purple-mid",
  dark: "text-purple-pale",
  light: "text-purple-pale",
};

const titleStyles: Record<CardTone, string> = {
  surface: "text-purple-ink",
  dark: "text-dark-ink",
  light: "text-dark-ink",
};

const bodyStyles: Record<CardTone, string> = {
  surface: "text-ink-soft",
  dark: "text-dark-ink",
  light: "text-dark-ink",
};

function BentoCard({ item }: { item: AdvantageItem }) {
  const Icon = item.icon;

  return (
    <article
      className={cn(
        "flex w-full flex-col rounded-sm border p-8 transition-shadow duration-200 hover:shadow-soft",
        cardStyles[item.tone],
        item.wide && "lg:col-span-2",
      )}
    >
      <Icon className={cn("size-8", iconStyles[item.tone])} />

      <h3 className={cn("mt-7 text-h2", titleStyles[item.tone])}>
        {item.title}
      </h3>
      <p className={cn("mt-3 text-body-sm text-pretty", bodyStyles[item.tone])}>
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
          <h2 className="font-display text-display-sm text-purple-ink text-balance lg:text-h1">
            One Partner. Every Stage.
          </h2>
          <p className="mt-5 text-body text-ink-soft text-pretty">
            The Alve Advantage is built on integration, eliminating the friction
            of managing multiple specialized vendors.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <BentoCard key={item.title} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
