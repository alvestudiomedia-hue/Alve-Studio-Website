import type {
  CapabilityGroup,
  Faq,
  Feature,
  Step,
} from "@/components/services/ServiceSections";

export const groups: CapabilityGroup[] = [
  {
    title: "Digital Experiences",
    body: "Websites, e-commerce & user experiences. Create digital experiences that look great, communicate clearly, and make it easy for people to take action.",
    items: [
      {
        title: "Website Design",
        body: "We design websites around your brand, audience, content, and business objectives.",
        coveredIntro: "",
        covered: [
          "Information architecture",
          "Sitemap & user journeys",
          "Wireframes",
          "UI design",
          "Responsive design",
          "Design systems",
          "Interactive prototypes",
        ],
      },
      {
        title: "Website Development",
        body: "We turn designs into fast, responsive, secure, and scalable websites.",
        coveredIntro: "",
        covered: [
          "Front-end development",
          "Responsive development",
          "CMS integration",
          "Interactive experiences",
          "Forms & functionality",
          "SEO-ready development",
          "Performance optimization",
          "Deployment",
        ],
      },
      {
        title: "UI/UX Design",
        body: "We create intuitive experiences that make digital products easier and more enjoyable to use.",
        coveredIntro: "",
        covered: [
          "User research",
          "User flows",
          "Information architecture",
          "Wireframing",
          "UI design",
          "Prototyping",
          "Design systems",
          "Usability testing",
        ],
      },
      {
        title: "WordPress Development",
        body: "Flexible WordPress websites built around your content and business requirements.",
        coveredIntro: "",
        covered: [
          "Custom WordPress websites",
          "Custom themes",
          "Theme development",
          "Plugin integration",
          "Custom functionality",
          "CMS configuration",
          "WordPress migration",
        ],
      },
      {
        title: "Shopify Development",
        body: "Custom Shopify experiences designed around your products, customers, and commercial goals.",
        coveredIntro: "",
        covered: [
          "Shopify store setup",
          "Custom theme development",
          "Theme customization",
          "Product & collection setup",
          "Payment configuration",
          "App integration",
          "Store optimization",
        ],
      },
      {
        title: "Ecommerce Development",
        body: "Complete online shopping experiences designed around the customer journey.",
        coveredIntro: "",
        covered: [
          "Product catalogues",
          "Shopping carts",
          "Checkout experiences",
          "Payment gateways",
          "Customer accounts",
          "Subscription functionality",
          "Order management",
          "Third-party integrations",
        ],
      },
    ],
  },
  {
    title: "Digital Products",
    body: "Custom applications & mobile products. When your requirements go beyond a standard website, we build digital products around your exact users, workflows, and business needs.",
    items: [
      {
        title: "Custom Web Applications",
        body: "Build bespoke platforms, SaaS products, portals, dashboards, and internal tools — solving the actual business problem without unnecessary complexity.",
        coveredIntro: "",
        covered: [
          "Product discovery",
          "User flows",
          "UI/UX design",
          "Application development",
          "User authentication",
          "Dashboards",
          "Database integration",
          "Third-party integrations",
        ],
      },
      {
        title: "Mobile App Development",
        body: "Bring your product into the hands of your customers with experiences designed for iOS and Android.",
        coveredIntro: "",
        covered: [
          "Mobile product strategy",
          "UI/UX design",
          "iOS development",
          "Android development",
          "Cross-platform development",
          "API integration",
          "Push notifications",
          "App testing",
          "App Store & Google Play prep",
        ],
      },
    ],
  },
  {
    title: "Technology & Engineering",
    body: "The technology behind the experience. A great interface needs a strong technical foundation — we build the backend systems, APIs, integrations, and infrastructure that let your product operate reliably and scale.",
    items: [
      {
        title: "APIs & Backend Development",
        body: "Build the systems that power your digital product.",
        coveredIntro: "",
        covered: [
          "REST APIs",
          "Custom APIs",
          "Backend development",
          "Database architecture",
          "Authentication & authorization",
          "User management",
          "Data processing",
          "Third-party API integration",
        ],
      },
      {
        title: "Integrations & Connected Systems",
        body: "Make your platforms and business tools work together, reducing manual processes.",
        coveredIntro: "",
        covered: [
          "CRM integrations",
          "Payment integrations",
          "Marketing platforms",
          "ERP integrations",
          "Accounting systems",
          "Data synchronization",
          "Webhooks",
          "Custom integrations",
        ],
      },
      {
        title: "Cloud & Infrastructure",
        body: "Create a reliable technical foundation for your product.",
        coveredIntro: "",
        covered: [
          "Cloud deployment",
          "Hosting architecture",
          "Server configuration",
          "Database infrastructure",
          "CI/CD pipelines",
          "Environment management",
          "Monitoring",
          "Scalability",
          "Backup & recovery",
        ],
      },
      {
        title: "Security & Performance",
        body: "Your product needs to be more than functional — it needs to be fast, reliable, and secure.",
        coveredIntro: "",
        covered: [
          "Page speed optimization",
          "Application performance",
          "Caching",
          "Authentication & authorization",
          "Secure data handling",
          "Dependency management",
          "Monitoring & error handling",
          "Backup strategies",
        ],
      },
    ],
  },
];

export const process: Step[] = [
  { label: "01 — Discover", title: "Understand", body: "Business, users, requirements, and technical environment — and what doesn't need building." },
  { label: "02 — Plan", title: "Define", body: "User flows, technical requirements, architecture, milestones, roadmap." },
  { label: "03 — Design", title: "Design", body: "Interfaces and experiences, with design and technology working together from day one." },
  { label: "04 — Develop", title: "Build", body: "Approved designs turned into a functional, scalable product." },
  { label: "05 — Integrate", title: "Connect", body: "APIs, payment providers, CRMs, platforms, and business systems." },
  { label: "06 — Test", title: "Verify", body: "Functionality, responsiveness, performance, compatibility, security." },
  { label: "07 — Deploy", title: "Ship", body: "Deployment and infrastructure setup, ready for real users." },
  { label: "08 — Improve", title: "Evolve", body: "Continued development based on feedback, analytics, and changing needs." },
];

export const performance: Feature[] = [
  { title: "Performance", body: "Fast experiences that reduce friction and keep users engaged." },
  { title: "Responsive", body: "Designed to work across mobile, tablet, desktop, and every screen size." },
  { title: "SEO-ready", body: "Strong technical foundations that help search engines discover your site." },
  { title: "Accessible", body: "Digital experiences designed to be usable by as many people as possible." },
  { title: "Secure", body: "Security considered throughout development, from auth to data handling." },
  { title: "Scalable", body: "Technology and architecture that evolve as your business grows." },
];

export const stack: Feature[] = [
  { title: "Frontend", body: "React · Next.js · TypeScript · JavaScript" },
  { title: "Backend", body: "Node.js · REST APIs · Databases · Authentication" },
  { title: "CMS & Platforms", body: "WordPress · Shopify · Headless CMS · Ecommerce platforms" },
  { title: "Mobile", body: "iOS · Android · Cross-platform development" },
  { title: "Infrastructure", body: "Cloud deployment · CI/CD · Monitoring · Scalable architecture" },
  { title: "Integrations", body: "Payment platforms · CRM systems · Marketing platforms · Third-party APIs" },
];

export const fit: Feature[] = [
  { title: "Have an idea?", body: "We can turn the concept into a working digital product." },
  { title: "Have an existing website?", body: "We can redesign, rebuild, migrate, or improve it." },
  { title: "Have a product that needs to scale?", body: "We can improve its performance, architecture, infrastructure, and functionality." },
  { title: "Have systems that don't talk to each other?", body: "We can connect them through APIs and integrations." },
  { title: "Have a slow internal process?", body: "We can build software to automate it." },
  { title: "Need a mobile experience?", body: "We can design and develop your product for iOS and Android." },
];

export const engagement: Feature[] = [
  { title: "Fixed-scope projects", body: "Clearly defined websites, applications, and ecommerce stores." },
  { title: "Ongoing development", body: "Continuous improvements, new features, and technical support." },
  { title: "Dedicated development support", body: "Additional engineering capacity without hiring internally." },
  { title: "End-to-end product development", body: "Idea → design → development → launch → growth." },
];

export const faqs: Faq[] = [
  { question: "Do you only build websites?", answer: "No. We build everything from marketing websites and ecommerce platforms to custom web applications, mobile apps, dashboards, internal tools, and software platforms." },
  { question: "Can you redesign an existing website?", answer: "Yes. We can audit your existing website, identify technical and UX issues, redesign it, and rebuild it where necessary." },
  { question: "Can you work with our existing development team?", answer: "Yes. We can join an existing team and provide additional development, technical expertise, integrations, or project capacity." },
  { question: "Can you work from an existing design?", answer: "Yes. If you already have designs or a design system, we can take them through development and bring them to life." },
  { question: "Can you help if we don't have technical requirements yet?", answer: "Absolutely. We can help define the requirements, user flows, technical scope, architecture, and roadmap before development begins." },
  { question: "Do you build APIs and backend systems?", answer: "Yes. We can design and develop APIs, backend systems, databases, authentication, and the technical infrastructure required to support your product." },
  { question: "Can you integrate third-party systems?", answer: "Yes. We can integrate payment providers, CRMs, marketing platforms, ecommerce tools, APIs, and other business systems." },
  { question: "Do you handle infrastructure and deployment?", answer: "Yes. Depending on the project, we can support cloud infrastructure, deployment, CI/CD, monitoring, environments, and performance optimization." },
  { question: "What happens after launch?", answer: "We can hand the product over to your team, or continue providing maintenance, technical support, improvements, infrastructure support, and new feature development." },
  { question: "How do you choose the technology?", answer: "We choose the technology based on the project's requirements, performance needs, scalability, security, integrations, and long-term maintainability." },
];
