import { Eye } from 'lucide-react';

export default function AboutVision() {
  return (
    <div className="bg-purple-ink rounded-radius-card rounded-sm border border-gray-200 p-8 h-full">
        <div className="items-start space-y-5 p-3 gap-4">
          <div className="rounded-full">
            <Eye className="h-8 w-8 text-surface" />
          </div>
          <div className="flex-1 ">
            <h2 className="text-xl font-bold tracking-tight text-surface">Our Vision</h2>
            <p className="mt-4 max-w-3xl text-surface/80 text-lg leading-relaxed">
              To become the world's most trusted catalyst for digital transformation,
              setting the standard for how brands navigate the intersection of human
              creativity and technical innovation.
            </p>
          </div>
        </div>
      </div>
  );
}