import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  /** `dot` prefixes the small bullet used across the design system. */
  variant?: "plain" | "dot" | "chip";
  className?: string;
};

/** Eyebrow / Tag — Plex Mono, uppercase, 0.14em tracking. */
export function Eyebrow({
  children,
  variant = "plain",
  className,
}: EyebrowProps) {
  if (variant === "chip") {
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-pill bg-purple-tint px-3 py-2 font-mono text-eyebrow uppercase text-purple-deep",
          className,
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-eyebrow uppercase",
        className,
      )}
    >
      {variant === "dot" ? (
        <span
          aria-hidden="true"
          className="size-1.5 rounded-pill bg-current opacity-70"
        />
      ) : null}
      {children}
    </span>
  );
}
