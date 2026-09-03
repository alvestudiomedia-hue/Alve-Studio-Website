import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { pricingCategories } from "./pricingData";

export function PricingHero() {
  return (
    <Section tone="hero" className="-py-4">
      <Container>
        <div
          className="max-w-180 py-[clamp(2.5rem,5vw,4rem)]"
          data-aos="fade-up"
        >
          <Eyebrow
            variant="line"
            className="font-service text-[0.72rem] font-semibold tracking-[0.14em] text-service-accent-light"
          >
            Pricing
          </Eyebrow>
          <h1 className="mt-4 font-service text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.04] font-extrabold tracking-[-0.02em] text-balance">
            Digital products. Growth. Creative. Delivery. Field execution.
          </h1>
          <p className="mt-[1.1rem] text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.65] text-white/72 text-pretty">
            At Alve Studio, we help businesses build, launch, improve, and grow. Our services are available through flexible engagement models depending on what you need — from one-time projects to ongoing monthly partnerships. All prices shown are starting prices; complex projects are quoted based on scope, requirements, and execution needs.
          </p>
        </div>
        <nav
          aria-label="Pricing categories"
          className="flex flex-wrap gap-2 pb-10"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {pricingCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="rounded-pill bg-white/10 px-3.5 py-1.5 text-[0.8rem] text-white transition-colors hover:bg-white/20"
            >
              {category.quickLinkLabel ?? category.title}
            </a>
          ))}
        </nav>
      </Container>
    </Section>
  );
}
