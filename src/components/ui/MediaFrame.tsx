import Image from "next/image";
import { cn } from "@/lib/cn";

type MediaFrameProps = {
  /**
   * Drop a real photograph in `/public/images` and pass its path here.
   * Until then the frame renders a branded placeholder so layout and spacing
   * are already final.
   */
  src?: string;
  alt: string;
  /** Aspect ratio of the frame. */
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
          {/* Soft depth so the placeholder reads as art direction, not a gap. */}
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
