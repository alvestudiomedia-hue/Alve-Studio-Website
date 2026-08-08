import { Award, Handshake, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'EXCELLENCE',
    description:
      'We don’t just deliver; we over-deliver on every pixel and every line of code.',
  },
  {
    icon: Lightbulb,
    title: 'INNOVATION',
    description:
      'Solving tomorrow’s problems with bleeding-edge technology today.',
  },
  {
    icon: Handshake,
    title: 'ACCOUNTABILITY',
    description:
      'We take full ownership of the end-to-end journey from design to growth.',
  },
];

export default function AboutValues() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-ink">Our Core Values</h2>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {values.map(({ icon: Icon, title, description }) => (
          <div key={title} className="bg-surface rrounded-radius-card rounded-sm border border-purple-pale p-6">
            <Icon className="h-8 w-8 text-purple-ink mb-4" />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-ink"> 
              {title}
            </h3>
            <p className="mt-2 text-ink-soft text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}