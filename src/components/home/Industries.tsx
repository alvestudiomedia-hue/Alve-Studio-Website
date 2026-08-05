const industries = [
  "Fintech",
  "E-commerce",
  "SaaS",
  "Healthtech",
  "Logistics",
  "Web3",
  "AI & ML",
];

export function Industries() {
  return (
    <section
      aria-label="Industries we build for"
      className="border-y border-border bg-surface py-6"
    >
      <div className="mask-edges flex overflow-hidden">
        {/* Two identical tracks so the loop is seamless at -50%. */}
        {[0, 1].map((track) => (
          <ul
            key={track}
            aria-hidden={track === 1}
            className="flex shrink-0 animate-marquee items-center gap-16 pr-16"
          >
            {industries.map((industry) => (
              <li
                key={industry}
                className="font-mono text-eyebrow uppercase whitespace-nowrap text-ink-faint"
              >
                {industry}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
