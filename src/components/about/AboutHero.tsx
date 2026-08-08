export default function AboutHero() {
  return (
    <div className="mb-16">
      <span className="inline-block rounded-full bg-purple-ink px-4 py-2 text-sm font-semibold uppercase tracking-wider text-surface">
        About Us
      </span>
      <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-ink">
        Our Story
      </h1>
      <p className="mt-4 max-w-3xl text-ink-soft text-lg leading-relaxed">
        At Alve Studio, we believe the digital landscape shouldn't be a maze.
        Our journey began with a single mission:{' '}
        <span className="text-purple-ink font-semibold">simplifying the digital journey</span>{' '}
        for visionary brands through architectural precision and creative excellence.
      </p>
    </div>
  );
}