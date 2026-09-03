import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CheckCircle } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

type Solution = {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    position?: string;
  };
  items: string[];
};

const solutions: Solution[] = [
  {
    id: "growth-marketing",
    title: "Growth & Marketing",
    description:
      "Getting people to notice your brand is only the beginning. We build growth strategies that help businesses get discovered, attract the right audience, convert attention into customers, and build lasting visibility — combining SEO...",
    image: {
      src: "/images/gw.jpg",
      alt: "A strategy team planning a product growth campaign",
      position: "center",
    },
    items: [
      "SEO & Performance Marketing",
      "Conversion Rate Optimization",
      "Product-Led Growth Strategy",
    ],
  },
  {
    id: "web-development",
    title: "Web & Development",
    description:
      "From high-converting websites to complex web applications and mobile products, we design and develop digital experiences that are fast, scalable, secure, and built around your business goals. Whether you're launching something new, replacing an outdated platform, or scaling an existing product, we bring design, development, technology, and infrastructure together from idea to launch.",
    image: {
      src: "/images/wb.jpg",
      alt: "A modern digital studio workspace",
      position: "center",
    },
    items: [
      "Modern Web Applications",
      "Custom API Integrations",
      "Headless E-commerce Solutions",
    ],
  },
  {
    id: "qa-testing",
    title: "QA & Testing",
    description:
      "A great digital product isn't just one that works in development. It needs to work reliably across devices, browsers, users, environments, and real-world conditions. We help identify issues before they reach your customers...",
    image: {
      src: "/images/outcomes-team.png",
      alt: "A product team reviewing software quality together",
      position: "center 58%",
    },
    items: [
      "Automated End-to-End Testing",
      "Security Vulnerability Audits",
      "Performance & Load Testing",
    ],
  },
  {
    id: "project-delivery",
    title: "Project Delivery",
    description:
      "Great ideas can still fail without clear planning, ownership, communication, and execution. Our Project Delivery & Management service brings structure to complex projects — aligning teams, managing priorities, tracking progress, and keeping everyone focused on the outcome.",
    image: {
      src: "/images/pd.jpg",
      alt: "A collaborative studio set up for project delivery",
      position: "center",
    },
    items: [
      "Agile Management Office",
      "Product Roadmap Definition",
      "Resource Optimization",
    ],
  },
  {
    id: "creative-services",
    title: "Creative Services",
    description:
      "Great creative work does more than look good. It gives your business a recognizable identity, communicates your value clearly, and creates experiences people remember. From brand identity and graphic design to social creatives, product visuals, and video...",
    image: {
      src: "/images/cs.jpg",
      alt: "Designers collaborating on a creative product experience",
      position: "center 38%",
    },
    items: [
      "UX Research & Branding",
      "Motion Graphics & 3D",
      "UI/Visual Interface Design",
      "Design System Creation",
    ],
  },
];

function SolutionCard({
  solution,
  imageOnRight,
}: {
  solution: Solution;
  imageOnRight: boolean;
}) {
  return (
    <article
      id={solution.id}
      // tone="hero"
      className="grid scroll-mt-30 md:min-h-120 md:grid-cols-2 lg:min-h-180"
    >
      <div
        className={cn(
           "relative aspect-4/3 min-h-64 md:aspect-auto md:min-h-full",
          imageOnRight && "md:order-2",
        )}
      >
        <Image
          src={solution.image.src}
          alt={solution.image.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          style={{ objectPosition: solution.image.position }}
        />
      </div>

      <div
        className={cn(
        
        "flex min-h-96 items-center px-7 py-14 sm:px-10 md:min-h-full md:px-12 lg:px-20",
          imageOnRight && "md:order-1",
        )}
      >
        <div className="w-full max-w-xl">
          <h3 className="font-sans text-h1 tracking-wide text-dark-ink uppercase text-balance">
            {solution.title}
          </h3>

          <p className="mt-5 text-body md:text-lg space-y-3.5 text-dark-ink-soft text-pretty">
            {solution.description}
          </p>

          <ul className="mt-8 max-w-md space-y-3.5 border-t border-dark-border pt-7">
            {solution.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 size-4 shrink-0 text-purple-pale" />
                <span className="text-body-sm text-dark-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function Solutions() {
  return (
    <Section
      id="process"
      tone="background"
      className="scroll-mt-30 pb-0 md:pb-0"
    >
      <Container>
        <h2 className="max-w-2xl font-sans text-h1 text-purple-ink text-balance">
          Digital Solutions Designed Around Your Business
        </h2>
      </Container>

      <div className="gradient-hero mt-14">
        {solutions.map((solution, index) => (
          <SolutionCard
            key={solution.id}
            solution={solution}
            imageOnRight={index % 2 === 1}
          />
        ))}
      </div>
    </Section>
  );
}
