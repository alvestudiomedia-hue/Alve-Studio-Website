import Image from "next/image";
import { cn } from "@/lib/cn";

type MediaFrameProps = {
  /** Omit to render a branded placeholder at the final size. */
  src?: string;
  alt: string;
  ratio?: "video" | "square" | "portrait";
  className?: string;
};

const ratioStyles = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-portrait",
} as const;

export function MediaFrame({
  src,
  alt,
  ratio = "video",
  className,
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-border bg-surface-2 shadow-soft",
        ratioStyles[ratio],
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="gradient-brand absolute inset-0 flex items-end p-6"
        >
          <span
            aria-hidden="true"
            className="sheen pointer-events-none absolute inset-0"
          />
          <span className="relative font-mono text-caption uppercase text-dark-ink/80">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
}
