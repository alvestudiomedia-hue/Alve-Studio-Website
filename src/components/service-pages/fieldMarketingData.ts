import type { ServicePageConfig } from "./types";

export const fieldMarketingData: ServicePageConfig = {
  name: "Field Marketing",
  hero: {
    eyebrow: "Field Marketing",
    title: "Take your brand where your customers are.",
    description:
      "We plan, coordinate, and execute field campaigns that put your brand directly in front of your customers. Our field marketing services include activations, sampling, retail campaigns, campus campaigns, roadshows, brand ambassadors, and events — growth doesn't always happen behind a screen.",
  },
  introduction: {
    eyebrow: "What We Do",
    title: "Growth doesn't always happen behind a screen.",
    description:
      "We help brands connect with their audiences through field campaigns, customer acquisition, sales activation, recruitment, and on-ground engagement.",
  },
  offers: [
    {
      number: "01",
      title: "Campaign Strategy & Planning",
      description:
        "Every field campaign starts with a clear plan — objectives, locations, timelines, and the team required to bring it to life.",
      details: [
        {
          title: "Includes",
          description: "From single-market activations to national, multi-city rollouts.",
          items: [
            "Field campaign strategy",
            "Campaign planning",
            "Activation planning",
            "Campaign scheduling",
            "Multi-location planning",
            "National / multi-city campaign planning",
          ],
        },
      ],
    },
    {
      number: "02",
      title: "Field Activation & Execution",
      description:
        "From retail and campus activations to roadshows, product launches, and corporate events, we execute the on-ground moments that get your brand in front of real people.",
      details: [
        {
          title: "Includes",
          description: "Retail, campus, sampling, roadshow, and event execution.",
          items: [
            "Retail activation planning",
            "Campus activation planning",
            "Sampling campaign management",
            "Roadshow coordination",
            "Product launch coordination",
            "Corporate / brand event coordination",
          ],
        },
      ],
    },
    {
      number: "03",
      title: "Field Team & Brand Ambassador Management",
      description:
        "A campaign is only as strong as the people running it. We recruit, coordinate, and manage the field teams and brand ambassadors who represent you on the ground.",
      details: [
        {
          title: "Includes",
          description: "Recruitment, coordination, and supervision at any scale.",
          items: [
            "Field team coordination",
            "Field team management",
            "Brand ambassador coordination",
            "Brand ambassador network management",
            "Field supervisors",
            "Large field team coordination",
          ],
        },
      ],
    },
    {
      number: "04",
      title: "Monitoring, Reporting & Optimization",
      description:
        "A field campaign shouldn't be a black box once it's live. We track performance daily and report back with the numbers that matter.",
      details: [
        {
          title: "Includes",
          description: "Daily monitoring, logistics coordination, and post-campaign analysis.",
          items: [
            "Basic logistics coordination",
            "Daily campaign monitoring",
            "Field performance reporting",
            "Campaign optimisation",
            "Post-campaign analysis",
            "Executive campaign reporting",
          ],
        },
      ],
    },
  ],
  process: {
    eyebrow: "From Brief to Boots-on-Ground",
    title: "A structured approach to field execution",
    steps: [
      { label: "01 — Discover", title: "Understand", description: "Objectives, audience, target locations, and campaign requirements." },
      { label: "02 — Plan", title: "Design", description: "Campaign strategy, timeline, locations, staffing, and budget." },
      { label: "03 — Recruit", title: "Build the team", description: "Source, onboard, and brief field agents and brand ambassadors." },
      { label: "04 — Prepare", title: "Coordinate", description: "Materials, logistics, permits, and venue or location readiness." },
      { label: "05 — Activate", title: "Execute", description: "Run the campaign on the ground, day by day, location by location." },
      { label: "06 — Monitor", title: "Track", description: "Daily monitoring of performance, attendance, and results." },
      { label: "07 — Report", title: "Analyze", description: "Post-campaign analysis and executive reporting on outcomes." },
    ],
  },
  sections: [
    {
      tone: "paper",
      eyebrow: "By The Numbers",
      title: "Experience that goes beyond the screenshots",
      description:
        "Recruitment, onboarding, customer acquisition, market research, business development, and growth strategy — from a real field marketing campaign.",
      centered: true,
      cards: [
        { value: "85+", description: "Field agents recruited, onboarded & managed" },
        { value: "500+", description: "Qualified corporate leads generated" },
        { value: "₦620K", description: "Peak daily campaign sales" },
        { value: "20+", description: "Strategic client engagements" },
      ],
      action: { label: "See the BrandDrive Case Study", href: "/#portfolio" },
    },
    {
      tone: "lavender",
      eyebrow: "Campaign Execution",
      title: "Field management fees don't automatically include campaign execution costs.",
      description:
        "Depending on the campaign, the client may separately fund the materials and logistics required to run it. This keeps Alve's professional fee separate from the actual cost of executing the campaign.",
      chips: [
        "Field agents",
        "Brand ambassadors",
        "Transportation",
        "T-shirts",
        "Flyers",
        "Branded materials",
        "Generator",
        "Sound equipment",
        "Vehicles",
        "Venue",
        "Permits",
        "Accommodation",
        "Printing",
        "Production",
        "Promotional materials",
      ],
      trailingDescription:
        "Campaigns are quoted according to scope — a five-day activation is not automatically charged as \"one activation.\" The campaign price depends on the number of days, locations, and field staff, campaign objectives, materials required, logistics, production, transportation, equipment, and reporting requirements.",
    },
    {
      tone: "paper",
      eyebrow: "Let's Find Your Fit",
      title: "What can we help you activate?",
      kind: "questions",
      cards: [
        { title: "Launching a new product?", description: "We plan and execute launch activations that put it directly in front of customers." },
        { title: "Running a retail campaign?", description: "We coordinate in-store activations, sampling, and promotional staff." },
        { title: "Need brand ambassadors?", description: "We recruit, brief, and manage ambassadors who represent your brand well." },
        { title: "Reaching campus audiences?", description: "We plan and run campus activations built around student engagement." },
        { title: "Planning a roadshow?", description: "We coordinate multi-location roadshows from route to on-ground execution." },
        { title: "Hosting a corporate or brand event?", description: "We manage the field logistics and coordination around your event." },
      ],
    },
    {
      tone: "lavender",
      eyebrow: "Flexible Engagement",
      title: "Every field campaign needs a different level of support",
      kind: "engagement",
      columns: 3,
      cards: [
        { title: "Field Essential", description: "Best for brands running focused field campaigns or recurring activations." },
        { title: "Field Growth", description: "Best for brands running recurring or multi-location field campaigns." },
        { title: "Field Scale", description: "Best for large-scale or multi-location field operations." },
      ],
      action: { label: "View Pricing", href: "/pricing" },
    },
  ],
  faqTone: "paper",
  faq: [
    { question: "Does your management fee include execution costs?", answer: "No. Our field management fee covers strategy, planning, coordination, and reporting. Execution costs such as field agents, materials, transportation, and venue are normally funded separately by the client and identified clearly in the proposal." },
    { question: "Do you provide field staff and brand ambassadors?", answer: "Yes. We recruit, onboard, brief, and manage field agents and brand ambassadors for your campaign." },
    { question: "Can you run multi-location or national campaigns?", answer: "Yes. We plan and coordinate campaigns across multiple locations and cities, including large field team coordination and supervision." },
    { question: "How is campaign pricing calculated?", answer: "Pricing depends on the number of days, locations, and field staff, campaign objectives, materials required, logistics, production, transportation, equipment, and reporting requirements. A campaign is quoted based on scope, not a flat \"per activation\" rate." },
    { question: "Do you handle permits and logistics?", answer: "Yes. We coordinate the logistics required to run a campaign, and where permits are required for a location or activity, we can coordinate this as part of campaign planning." },
    { question: "Can you support product launches and corporate events?", answer: "Yes. We coordinate product launch activations and corporate or brand event logistics as part of our field execution services." },
    { question: "Do you provide campaign reporting?", answer: "Yes. We provide daily campaign monitoring, field performance reporting, post-campaign analysis, and executive reporting depending on the engagement tier." },
    { question: "Can you run campus and retail campaigns together?", answer: "Yes. We can plan and coordinate multiple activation types — retail, campus, sampling, and roadshows — within the same campaign." },
  ],
  cta: {
    eyebrow: "Ready to Activate?",
    title: "Let's take your brand into the real world.",
    description:
      "Whether you're launching a product, running a retail campaign, or planning a multi-city roadshow, we'll bring the strategy, team, and on-ground execution together.",
  },
};
