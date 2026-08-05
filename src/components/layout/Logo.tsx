import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Logo lockups from the brand sheet. The tile colour changes per surface;
 * the wordmark is always Fraunces — "Alve" in ink, "Studio" in a lilac tint.
 */
type LogoTone =
  /** Purple tile, ink wordmark — default on light surfaces. */
  | "light"
  /** Purple tile, off-white wordmark — on dark surfaces. */
  | "dark"
  /** Ink tile, ink wordmark — monochrome contexts. */
  | "mono";

type LogoProps = {
  tone?: LogoTone;
  /** Hides the wordmark and renders the tile alone. */
  markOnly?: boolean;
  href?: string | null;
  className?: string;
};

const toneStyles: Record<LogoTone, { tile: string; alve: string; studio: string }> =
  {
    light: {
      tile: "bg-purple-deep-2 text-surface",
      alve: "text-ink",
      studio: "text-purple-light",
    },
    dark: {
      tile: "bg-purple-deep-2 text-surface",
      alve: "text-dark-ink",
      studio: "text-purple-light",
    },
    mono: {
      tile: "bg-ink text-background",
      alve: "text-ink",
      studio: "text-ink-faint",
    },
  };

/** The "A" monogram. Swap this single path for the production SVG. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={cn("size-5", className)}
      fill="currentColor"
    >
      <path d="M50.2 12.8 12 87.2h17.9l20.9-42.6 9.2 18.8h-9.6l-6.6 13.4h22.8l5.1 10.4H88L50.2 12.8Z" />
    </svg>
  );
}

export function Logo({
  tone = "light",
  markOnly = false,
  href = "/",
  className,
}: LogoProps) {
  const styles = toneStyles[tone];

  const content = (
    <>
      <span
        className={cn(
          "inline-flex size-9 items-center justify-center rounded-sm",
          styles.tile,
        )}
      >
        <LogoMark />
      </span>

      {markOnly ? (
        <span className="sr-only">Alve Studio</span>
      ) : (
        <span className="font-display text-h2">
          <span className={styles.alve}>Alve</span>{" "}
          <span className={styles.studio}>Studio</span>
        </span>
      )}
    </>
  );

  const classes = cn(
    "inline-flex items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-deep",
    className,
  );

  if (href === null) {
    return <span className={classes}>{content}</span>;
  }

  return (
    <Link href={href} className={classes} aria-label="Alve Studio — home">
      {content}
    </Link>
  );
}
