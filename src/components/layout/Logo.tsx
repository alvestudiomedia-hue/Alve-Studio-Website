import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoTone = "light" | "dark" | "mono";

type LogoProps = {
  tone?: LogoTone;
  /** Crops to the square tile and hides the wordmark. */
  markOnly?: boolean;
  href?: string | null;
  className?: string;
};

/* Each lockup is trimmed differently, so they carry their own intrinsic size —
   sharing one would distort the mono lockup and shift layout on load. */

const lockups: Record<LogoTone, { src: string; width: number; height: number }> =
  {
    light: {
      src: "/logos/Alve Studio - deep purple logo.png",
      width: 3542,
      height: 788,
    },
    dark: {
      src: "/logos/Alve Studio - light purple logo.png",
      width: 3348,
      height: 772,
    },
    mono: {
      src: "/logos/Alve Studio - dark logo.png",
      width: 3296,
      height: 942,
    },
  };

export function Logo({
  tone = "light",
  markOnly = false,
  href = "/",
  className,
}: LogoProps) {
  const lockup = lockups[tone];

  const content = markOnly ? (
    <span className="relative inline-block size-9 overflow-hidden rounded-sm">
      <Image
        src={lockup.src}
        alt="Alve Studio"
        fill
        sizes="36px"
        className="object-cover object-left"
        priority
      />
      <span className="sr-only">Alve Studio</span>
    </span>
  ) : (
    <Image
      src={lockup.src}
      alt="Alve Studio"
      width={lockup.width}
      height={lockup.height}
      sizes="180px"
      className="h-9 w-auto"
      priority
    />
  );

  const classes = cn(
    "inline-flex items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-deep",
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
