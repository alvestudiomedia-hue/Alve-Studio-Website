import { ArrowRight } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="rounded-radius-card rounded-t-md bg-purple-tint p-8  border-b-2 border-purple-ink  text-center sm:p-12 space-y-5">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-purple-ink">
        Ready to Alveiate Complexity?
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
        Let's build a digital presence that doesn't just look good, but performs
        with precision.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded bg-purple-ink px-6 py-4 font-semibold text-surface transition hover:scale-105 active:scale-95"
        >
          Work With Us
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded border border-purple-ink bg-transparent px-7 py-4 font-semibold text-purple-ink transition hover:bg-purple-tint"
        >
          View Portfolio
        </a>
      </div>
    </section>
  );
}