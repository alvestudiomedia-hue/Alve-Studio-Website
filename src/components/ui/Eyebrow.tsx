import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  variant?: "plain" | "dot" | "chip";
  className?: string;
};

export function Eyebrow({
  children,
  variant = "plain",
  className,
}: EyebrowProps) {
  if (variant === "chip") {
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-pill bg-purple-tint px-3 py-2 font-sans text-eyebrow uppercase text-purple-deep",
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
        "inline-flex items-center gap-2 font-sans text-eyebrow uppercase",
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
