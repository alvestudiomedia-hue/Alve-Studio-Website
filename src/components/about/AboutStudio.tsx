import Image from "next/image";

const stats = [
  { number: '150+', label: 'PROJECTS LAUNCHED' },
  { number: '98%', label: 'CLIENT GROWTH' },
];

export default function AboutStudio() {
  return (
    <section className="mb-16">
     
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-6">
             <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-purple-ink">Inside the Studio</h2>
          <p className="max-w-2xl text-ink-soft pt-3 text-lg leading-relaxed">
            Our studio is a collaborative environment where strategy, design, and
            engineering collide. We've built a culture that prizes curiosity and
            technical rigor, ensuring that every project is handled with the same
            level of architectural care as a physical structure.
          </p>
          <div className="flex gap-12 pt-5">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="h-16 w-1 bg-purple-ink"></div>
                <div>
                  <div className="text-5xl ">{stat.number}</div>
                  <div className="text-xs font-medium uppercase tracking-wider text-ink-soft">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-70 lg:h-80">
          <Image 
            src="/images/about_img.png"
            alt="Studio"
            fill
            className="object-cover object-center rounded-md"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-white/20"></div>
        </div>
      </div>
    </section>
  );
}