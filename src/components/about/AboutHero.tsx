import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="relative mb-16 overflow-hidden rounded-2xl bg-purple-ink p-8 sm:p-12 md:p-16 shadow-lift text-dark-ink">
      {/* Background stock image with fill, cover, and high-impact bold visibility */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-about.jpg"
          alt="Alve Studio creative architectural workspace"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-80 contrast-105 saturate-110"
        />
        {/* Directional gradient: ensures pristine text contrast on the left while keeping the photo bold and striking */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-purple-ink via-purple-ink/80 to-purple-ink/20"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-dark-background/70 via-transparent to-transparent"
        />
      </div>

      <div className="relative z-10 max-w-3xl">
        <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-dark-ink backdrop-blur-sm border border-dark-border">
          About Us
        </span>
        <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-dark-ink">
          Our Story
        </h1>
        <p className="mt-4 max-w-2xl text-dark-ink-soft text-lg leading-relaxed text-pretty">
          At Alve Studio, we believe the digital landscape shouldn&apos;t be a maze.
          Our journey began with a single mission:{' '}
          <span className="text-purple-pale font-semibold">simplifying the digital journey</span>{' '}
          for visionary brands through architectural precision and creative excellence.
        </p>
      </div>
    </div>
  );
}