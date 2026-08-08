"use client";

import { Target, WandSparkles } from 'lucide-react';

export default function AboutMission() {
  return (
    <div className="bg-surface rounded-radius-card rounded-sm border border-gray-200 p-8 h-full">
        <div className=" items-start ">
          <div className="rounded-full relative left-3">
            <Target className="h-6 w-6 text-purple-ink" />
          </div>
          <div className="flex-1 space-y-6 p-4">
            <h2 className="text-2xl font-bold tracking-tight text-purple-ink">Our Mission</h2>
            <p className="mt-4 max-w-3xl text-ink-soft text-lg leading-relaxed">
              We bridge the gap between technical omplexity and user-centric clarity.
              Our mission is to engineer high-end digital environments that empower
              companies to scale with confidence, turning intricate challenges into
              seamless, growth-driven experiences.
            </p>
            <div className="mt-6 pt-4 flex items-start gap-3">
              <div className="rounded-full bg-purple-ink h-10 w-10 p-2">
                <WandSparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-ink">
                  Precision Engineering
                </h3>
                <p className="mt-1 text-ink text-xs">Built to last, designed to evolve.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}