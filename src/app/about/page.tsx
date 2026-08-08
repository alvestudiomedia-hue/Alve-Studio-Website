import AboutHero from '@/components/about/AboutHero';
import AboutMission from '@/components/about/AboutMission';
import AboutVision from '@/components/about/AboutVision';
import AboutValues from '@/components/about/AboutValues';
import AboutStudio from '@/components/about/AboutStudio';
import AboutCTA from '@/components/about/AboutCTA';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <AboutHero />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <AboutMission />
          </div>
          <div className="lg:col-span-1">
            <AboutVision />
          </div>
        </div>
        <AboutValues />
        <AboutStudio />
        <AboutCTA />
      </div>
    </div>
  );
}