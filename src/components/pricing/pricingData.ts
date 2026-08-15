import type { PricingCategory } from "./types";

export const pricingCategories: PricingCategory[] = [
  {
    number: "01",
    id: "growth",
    title: "Growth & Marketing",
    breakdownHref: "/#growth-marketing",
    description:
      "Turn attention into measurable growth. Our growth team combines strategy, performance marketing, organic marketing, SEO, content, customer acquisition, and analytics to help businesses grow consistently.",
    tone: "paper",
    tiers: [
      {
        name: "Growth",
        price: "₦550,000",
        suffix: "/mo",
        meta: "Minimum engagement: 3 months",
        bestFor: "Best for businesses looking to establish a consistent growth engine.",
        features: [
          "Monthly growth strategy & campaign planning",
          "Meta & Google Ads management",
          "Social media management",
          "Content calendar development",
          "SEO strategy & SEO copywriting",
          "Monthly KPI dashboard & reporting",
        ],
      },
      {
        name: "Growth Plus",
        price: "₦850,000",
        suffix: "/mo",
        meta: "Minimum engagement: 6 months",
        bestFor: "Best for businesses ready to scale customer acquisition and market activity.",
        features: [
          "Everything in Growth, plus:",
          "Conversion & landing page optimisation",
          "Technical, local & enterprise SEO support",
          "LinkedIn / TikTok & other channels",
          "Content marketing & community growth",
          "Weekly review + monthly executive report",
        ],
        featured: true,
      },
      {
        name: "Growth Enterprise",
        price: "₦1,750,000",
        suffix: "/mo",
        meta: "Minimum engagement: 12 months",
        bestFor: "Best for businesses looking for an integrated growth partner.",
        features: [
          "Everything in Growth Plus, plus:",
          "Multi-market & geographic expansion strategy",
          "Multi-channel acquisition & growth experiments",
          "Bi-weekly leadership meetings",
          "Strategic partnership development",
          "Field growth & activation strategy",
        ],
      },
    ],
    note: {
      title: "Ad spend is separate",
      description:
        "Your monthly Alve fee covers strategy, management, execution, and optimisation. Advertising budgets — Meta, Google, TikTok, LinkedIn spend, influencer fees, promotional budgets, referral incentives, and sponsorships — are paid separately by the client.",
    },
  },
  {
    number: "02",
    id: "web",
    title: "Web & Development",
    breakdownHref: "/#web-development",
    description:
      "Build digital products that work as beautifully as they perform. From business websites to custom applications, APIs, integrations, and digital infrastructure, designed and developed around your business goals.",
    tone: "lavender",
    tiers: [
      {
        name: "Essential Web",
        price: "₦750,000",
        meta: "One-time project",
        bestFor: "Best for businesses that need a professional digital presence.",
        features: [
          "Website strategy & UI/UX design",
          "Responsive website — up to 5 core pages",
          "CMS setup & contact / lead forms",
          "Basic SEO setup & analytics integration",
          "Performance optimisation & deployment",
          "Basic post-launch support",
        ],
      },
      {
        name: "Business Web",
        price: "₦1,500,000",
        meta: "One-time project",
        bestFor: "Best for growing businesses that need a more advanced website.",
        features: [
          "Everything in Essential Web, plus:",
          "Custom UI/UX — up to 10–15 pages",
          "Advanced CMS & blog / content management",
          "Third-party & payment integrations",
          "SEO foundations & security configuration",
          "Extended post-launch support",
        ],
        featured: true,
      },
      {
        name: "Advanced Digital Product",
        price: "₦3,000,000+",
        meta: "Custom project",
        bestFor: "Best for businesses building complex digital products.",
        features: [
          "Product discovery & UX research",
          "Custom frontend, backend & APIs",
          "Authentication, dashboards & database architecture",
          "Cloud infrastructure, CI/CD & monitoring",
          "Ecommerce, Shopify, WordPress, mobile & API development",
          "Complex products quoted based on scope",
        ],
      },
    ],
    note: {
      title: "Website maintenance",
      description:
        "From ₦100,000 / month, available after launch. Includes bug fixes, security updates, monitoring, performance optimisation, content updates, minor improvements, and technical support.",
    },
  },
  {
    number: "03",
    id: "qa",
    title: "Quality Assurance & Testing",
    quickLinkLabel: "QA & Testing",
    breakdownHref: "/#qa-testing",
    description:
      "Find problems before your customers do. We test websites, applications, APIs, and digital products across functionality, performance, integrations, and release readiness.",
    tone: "paper",
    tiers: [
      {
        name: "QA Essential",
        price: "₦300,000",
        meta: "Per engagement",
        bestFor: "Best for businesses that need structured testing for a product or release.",
        features: ["Test planning & functional testing", "User flow & UI testing", "Cross-device testing", "Defect reporting", "Test summary report"],
      },
      {
        name: "QA Professional",
        price: "₦600,000",
        meta: "Per engagement",
        bestFor: "Best for products requiring deeper testing before release.",
        features: ["Everything in QA Essential, plus:", "Regression, smoke & API testing", "Integration & authentication testing", "Cross-browser & staging validation", "Release readiness report"],
        featured: true,
      },
      {
        name: "QA Continuous",
        price: "₦1,000,000",
        suffix: "/mo",
        meta: "Ongoing engagement",
        bestFor: "Best for teams releasing products continuously.",
        features: ["Continuous functional & regression testing", "Load / performance testing", "Staging & production validation", "Test case & defect tracking", "Sprint QA & release readiness support"],
      },
    ],
  },
  {
    number: "04",
    id: "delivery",
    title: "Project Delivery & Management",
    breakdownHref: "/services/project-delivery",
    description:
      "Keep your product, people, and deadlines moving. We provide delivery structure, coordination, and accountability across product, engineering, creative, and business teams.",
    tone: "lavender",
    tiers: [
      {
        name: "Delivery Essential",
        price: "₦400,000",
        suffix: "/mo",
        meta: "Monthly engagement",
        bestFor: "Best for small teams that need structure and visibility.",
        features: ["Project planning & timeline management", "Milestone tracking", "Weekly progress reporting", "Sprint coordination & task tracking", "Basic risk management"],
      },
      {
        name: "Delivery Professional",
        price: "₦750,000",
        suffix: "/mo",
        meta: "Monthly engagement",
        bestFor: "Best for growing teams managing complex projects.",
        features: ["Everything in Delivery Essential, plus:", "Agile project management & sprint facilitation", "Product backlog management", "Vendor & stakeholder management", "Launch planning & go-live coordination"],
        featured: true,
      },
      {
        name: "Delivery Partner",
        price: "₦1,250,000",
        suffix: "/mo",
        meta: "Monthly engagement",
        bestFor: "Best for businesses that need Alve to operate as an extension of their delivery team.",
        features: ["Dedicated delivery leadership", "Product, engineering & creative coordination", "Backlog, sprint & vendor management", "Launch & go-live management", "Executive reporting"],
      },
    ],
  },
  {
    number: "05",
    id: "creative",
    title: "Creative Services",
    breakdownHref: "/services/creative-services",
    description:
      "Create a brand people recognize. From brand identity to campaign creatives and video production, we create the visual systems businesses need to communicate clearly and consistently.",
    tone: "paper",
    tiers: [
      {
        name: "Creative Starter",
        price: "₦350,000",
        meta: "Per project",
        bestFor: "Best for new businesses that need a strong visual foundation.",
        features: ["Logo design", "Colour palette & typography", "Basic visual direction", "Social profile assets", "Basic brand assets"],
      },
      {
        name: "Brand & Creative",
        price: "₦750,000",
        meta: "Per project",
        bestFor: "Best for businesses building or refreshing their brand identity.",
        features: ["Brand identity & logo system", "Colour system & typography", "Brand guidelines", "Social templates & marketing collateral", "Product mockups"],
        featured: true,
      },
      {
        name: "Creative Partner",
        price: "₦1,500,000+",
        meta: "Project / ongoing engagement",
        bestFor: "Best for businesses requiring a complete brand and creative system.",
        features: ["Brand strategy & visual identity system", "Campaign & social creative direction", "Marketing collateral & product mockups", "Advertising creatives", "Video creative direction & production coordination"],
      },
    ],
    note: {
      title: "Ongoing creative retainer",
      description: "From ₦500,000 / month, for businesses that need continuous creative production.",
    },
  },
  {
    number: "06",
    id: "field",
    title: "Field Marketing",
    breakdownHref: "/services/field-marketing",
    description:
      "Take your brand where your customers are. Activations, sampling, retail campaigns, campus campaigns, roadshows, brand ambassadors, and events.",
    tone: "lavender",
    tiers: [
      {
        name: "Field Essential",
        price: "₦350,000",
        suffix: "/mo",
        meta: "Management fee",
        bestFor: "Best for brands running focused field campaigns or recurring activations.",
        features: ["Field campaign strategy & planning", "Activation planning & scheduling", "Field team coordination", "Basic logistics coordination", "Campaign performance reporting"],
      },
      {
        name: "Field Growth",
        price: "₦750,000",
        suffix: "/mo",
        meta: "Management fee",
        bestFor: "Best for brands running recurring or multi-location field campaigns.",
        features: ["Everything in Field Essential, plus:", "Multi-location planning", "Brand ambassador coordination", "Retail, campus & sampling campaigns", "Daily monitoring & post-campaign analysis"],
        featured: true,
      },
      {
        name: "Field Scale",
        price: "₦1,500,000+",
        suffix: "/mo",
        meta: "Management fee",
        bestFor: "Best for large-scale or multi-location field operations.",
        features: ["National / multi-city campaign planning", "Brand ambassador network management", "Roadshow & retail activation management", "Field supervisors", "Executive campaign reporting"],
      },
    ],
    note: {
      title: "Field campaign execution costs",
      description:
        "Field management fees do not automatically include campaign execution costs — field agents, transportation, materials, venue, permits, and production are normally funded separately. A five-day activation is not automatically charged as \"one activation\"; campaigns are quoted according to scope.",
    },
  },
];

export const pricingModels = [
  {
    title: "Project-Based",
    description:
      "For clearly defined projects — website development, brand identity, a QA engagement, a creative project, a product launch, a roadshow. You pay for the agreed project scope.",
  },
  {
    title: "Monthly Partnership",
    description:
      "For businesses that need Alve continuously involved — Growth & Marketing, Project Delivery, Continuous QA, Creative support, Field Marketing, website maintenance. You pay a monthly professional fee for the agreed scope of work.",
  },
  {
    title: "Fee + Execution Costs",
    description:
      "For engagements involving external spend — advertising, field staff, production, or venues. Alve's professional fee stays separate from the execution costs, which are identified clearly before work begins.",
  },
];

export const packageGuidance = [
  {
    title: "Starting something new?",
    emphasis: "Essential",
    description: "a focused engagement for businesses that need to get started.",
  },
  {
    title: "Growing and scaling?",
    emphasis: "Professional / Growth",
    description: "more channels, more support, and deeper execution.",
  },
  {
    title: "Need Alve as an extension of your team?",
    emphasis: "Scale / Enterprise",
    description: "a strategic, ongoing partnership with deeper involvement across your business.",
  },
];

export const pricingNotes = [
  {
    title: "Starting prices",
    description:
      "All prices shown are starting prices. Final pricing depends on project scope, complexity, timeline, team requirements, and deliverables.",
  },
  {
    title: "No hidden execution costs",
    description: "Where external costs apply, they will be identified before the project begins.",
  },
  {
    title: "Custom projects",
    description:
      "Complex web applications, software platforms, large-scale campaigns, multi-city activations, and enterprise engagements require a custom quotation.",
  },
  {
    title: "Advertising",
    description: "Advertising spend is separate from Alve's Growth & Marketing management fee.",
  },
  {
    title: "Field Marketing",
    description:
      "Field execution costs are separate from Alve's field marketing management fee unless specifically included in the agreed campaign budget.",
  },
  {
    title: "Execution & third-party costs",
    description:
      "Advertising spend, field staff, transportation, printing, production, venue, permits, influencer fees, software, hosting, third-party APIs, payment gateway charges, and event costs are normally paid separately by the client where required.",
  },
];
