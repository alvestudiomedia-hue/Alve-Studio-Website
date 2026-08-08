import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center lg:text-left">
          <p className="text-sm text-start font-semibold uppercase tracking-widest text-purple-mid">
            Get in touch
          </p>
          <h1 className="mt-2 text-3xl text-start font-bold tracking-tight sm:text-4xl md:text-5xl text-purple-ink">
            LET'S BUILD SOMETHING <br className="hidden sm:block" />
            GREAT TOGETHER
          </h1>
          <p className="mt-4 max-w-2xl text-start text-[#333] lg:mx-0">
            Whether you're launching a new venture or scaling an existing product,
            our end-to-end design and growth strategy will get you there.
          </p>
        </div>

        {/* Two‑column layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}