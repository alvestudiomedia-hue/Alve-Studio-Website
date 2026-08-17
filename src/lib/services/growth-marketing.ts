import type {
  CapabilityGroup,
  Faq,
  Feature,
  Step,
} from "@/components/services/ServiceSections";

export const groups: CapabilityGroup[] = [
  {
    title: "Strategy & Growth",
    body: "Know where you're going before you start spending. Every effective marketing programme starts with a clear understanding of the business, audience, market, and opportunities.",
    items: [
      {
        title: "Digital Marketing Strategy",
        body: "Practical marketing strategies that connect your business objectives with the channels and activities most likely to drive growth.",
        coveredIntro: "",
        covered: [
          "Digital marketing strategy",
          "Audience research",
          "Competitor analysis",
          "Channel strategy",
          "Campaign planning",
          "Customer journey mapping",
          "Marketing goals & KPIs",
          "Growth opportunities",
          "Marketing roadmaps",
        ],
      },
    ],
  },
  {
    title: "SEO & Organic Growth",
    body: "Get discovered by the people already looking for you. We build SEO foundations that improve visibility across traditional search and emerging answer-driven search experiences.",
    items: [
      {
        title: "Search Engine Optimization (SEO)",
        body: "Improve your organic visibility and attract relevant traffic over time.",
        coveredIntro: "",
        covered: [
          "Keyword research",
          "On-page SEO",
          "Technical SEO",
          "Content optimization",
          "Internal linking",
          "SEO strategy",
          "Search performance analysis",
        ],
      },
      {
        title: "Local SEO",
        body: "Help customers find your business when they're searching locally.",
        coveredIntro: "",
        covered: [
          "Local search optimization",
          "Google Business Profile",
          "Local keyword research",
          "Local citations",
          "Location pages",
          "Review strategy",
        ],
      },
      {
        title: "Enterprise SEO",
        body: "SEO strategies for larger websites with complex structures, multiple markets, products, or locations.",
        coveredIntro: "",
        covered: [
          "Enterprise SEO strategy",
          "Large-scale technical SEO",
          "Site architecture",
          "International SEO",
          "SEO governance",
          "Scalable content strategies",
        ],
      },
      {
        title: "Technical SEO",
        body: "Make sure search engines can properly crawl, understand, and index your website.",
        coveredIntro: "",
        covered: [
          "Technical SEO audits",
          "Crawlability",
          "Indexation",
          "Core Web Vitals",
          "Structured data",
          "Canonicalization",
        ],
      },
      {
        title: "SEO Audits & Migration",
        body: "Understand what's holding your website back — and protect your visibility when moving, redesigning, or rebuilding.",
        coveredIntro: "",
        covered: [
          "Migration planning",
          "URL mapping",
          "Redirect strategy",
          "Pre-launch checks",
          "Post-launch monitoring",
        ],
      },
      {
        title: "Off-Page SEO & SEO Copywriting",
        body: "Build authority beyond your own website and create content that's useful for people and structured for search.",
        coveredIntro: "",
        covered: [
          "Link strategy",
          "Digital PR",
          "Authority building",
          "Website copy",
          "Landing pages",
          "SEO articles",
        ],
      },
      {
        title: "Answer Engine Optimization (AEO)",
        body: "Optimize content for how people increasingly search through AI-powered and answer-based experiences.",
        coveredIntro: "",
        covered: [
          "Answer-focused content",
          "Structured information",
          "Entity optimization",
          "FAQ content",
          "Search intent analysis",
        ],
      },
    ],
  },
  {
    title: "Paid Advertising",
    body: "Put your brand in front of the right people — backed by the right audience, creative, messaging, targeting, and measurement.",
    items: [
      {
        title: "Google Ads",
        body: "Reach people actively searching for your products and services.",
        coveredIntro: "",
        covered: [
          "Search campaigns",
          "Display campaigns",
          "Shopping campaigns",
          "Conversion tracking",
          "Performance reporting",
        ],
      },
      {
        title: "Facebook & Instagram Ads",
        body: "Targeted campaigns across Meta's advertising ecosystem.",
        coveredIntro: "",
        covered: [
          "Audience targeting",
          "Ad creative direction",
          "Retargeting",
          "Conversion tracking",
          "Campaign optimization",
        ],
      },
      {
        title: "LinkedIn & Pinterest Ads",
        body: "Reach professional / B2B audiences, or people discovering products and inspiration.",
        coveredIntro: "",
        covered: [
          "Audience targeting",
          "Sponsored content",
          "Lead generation campaigns",
          "Campaign optimization",
        ],
      },
    ],
  },
  {
    title: "Social & Influencer Marketing",
    body: "Build an audience, not just a follower count.",
    items: [
      {
        title: "Social Media Management",
        body: "Keep your brand active, consistent, and relevant across the platforms that matter to your audience.",
        coveredIntro: "",
        covered: [
          "Social media strategy",
          "Content calendars",
          "Social creatives",
          "Publishing",
          "Community management",
          "Performance reporting",
        ],
      },
      {
        title: "Influencer Marketing",
        body: "Connect your brand with creators who have credibility and influence within your target audience.",
        coveredIntro: "",
        covered: [
          "Influencer research",
          "Creator selection",
          "Outreach",
          "Campaign coordination",
          "Performance analysis",
        ],
      },
    ],
  },
  {
    title: "Content & Copywriting",
    body: "Give people a reason to pay attention — content that educates, builds trust, and moves people towards action.",
    items: [
      {
        title: "Content Marketing",
        body: "Content systems that support your wider growth strategy.",
        coveredIntro: "",
        covered: [
          "Content strategy",
          "Editorial planning",
          "Blog content",
          "Website content",
          "Content distribution",
        ],
      },
      {
        title: "Copywriting",
        body: "Words that make your brand clearer and your marketing more persuasive.",
        coveredIntro: "",
        covered: [
          "Website copy",
          "Landing page copy",
          "Ad copy",
          "Email copy",
          "Brand messaging",
        ],
      },
    ],
  },
];

export const process: Step[] = [
  { label: "01 — Discover", title: "Understand", body: "Business, audience, competitors, current performance, growth objectives." },
  { label: "02 — Define", title: "Prioritize", body: "Identify the biggest opportunities and the most relevant channels." },
  { label: "03 — Strategize", title: "Plan", body: "Growth strategy, channel plan, content direction, campaign structure, KPIs." },
  { label: "04 — Create", title: "Produce", body: "Content, copy, creative, campaigns, and assets needed to execute." },
  { label: "05 — Launch", title: "Go live", body: "Campaigns, content, SEO initiatives, and social activity into market." },
  { label: "06 — Measure", title: "Track", body: "Performance against meaningful business and marketing metrics." },
  { label: "07 — Optimize", title: "Improve", body: "Campaigns, content, targeting, and landing pages based on the data." },
  { label: "08 — Scale", title: "Compound", body: "Double down on what works and build sustainable growth." },
];

export const measures: Feature[] = [
  { title: "Visibility", body: "Improve your presence across search, social, and paid channels." },
  { title: "Traffic", body: "Bring more relevant people to your website and digital products." },
  { title: "Engagement", body: "Build meaningful interactions with your audience." },
  { title: "Leads", body: "Turn attention into qualified enquiries and opportunities." },
  { title: "Conversions", body: "Improve the journey from visitor to customer." },
  { title: "Growth", body: "Build sustainable marketing systems that keep improving over time." },
];

export const fit: Feature[] = [
  { title: "Need more organic traffic?", body: "We build SEO strategies designed to improve visibility and attract relevant search traffic." },
  { title: "Launching a new business or product?", body: "We develop the marketing strategy, content, campaigns, and channels needed to enter the market." },
  { title: "Running paid advertising?", body: "We manage and optimize campaigns across Google, Meta, LinkedIn, Pinterest, and more." },
  { title: "Struggling with social media?", body: "We develop your strategy, create content, manage your channels, and measure performance." },
  { title: "Need better content?", body: "We create SEO content, website copy, campaign messaging, and social content." },
  { title: "Want to appear in AI-powered search?", body: "We optimize your content and information structure for answer-driven search experiences." },
];

export const engagement: Feature[] = [
  { title: "Strategy projects", body: "A clear growth strategy and roadmap before execution." },
  { title: "Campaign-based marketing", body: "Launches, promotions, paid campaigns, seasonal activity." },
  { title: "Ongoing growth management", body: "Continuous SEO, content, paid media, social, and optimization." },
  { title: "Dedicated growth support", body: "An external marketing team working alongside yours." },
  { title: "End-to-end growth", body: "One partner: strategy → execution → measurement → optimization." },
];

export const faqs: Faq[] = [
  { question: "Do you only do SEO?", answer: "No. SEO is one part of our Growth & Marketing offering. We also provide paid advertising, social media management, influencer marketing, content marketing, copywriting, and digital marketing strategy." },
  { question: "Can you manage our existing marketing channels?", answer: "Yes. We can audit your current activity, identify opportunities, and take over management where needed." },
  { question: "Do you manage Google and social media ads?", answer: "Yes. We can manage campaigns across Google Ads, Facebook, Instagram, LinkedIn, and Pinterest." },
  { question: "Can you help with SEO if we already have an agency?", answer: "Yes. We can provide an SEO audit, technical recommendations, content strategy, or work alongside your existing team." },
  { question: "Do you provide Local SEO?", answer: "Yes. We help businesses improve their visibility for location-based searches and local customers." },
  { question: "What is AEO?", answer: "Answer Engine Optimization focuses on structuring and improving content so it can better serve answer-based search experiences, including AI-powered search and conversational interfaces." },
  { question: "Do you create the content as well?", answer: "Yes. We provide content marketing, SEO copywriting, website copy, social content, campaign messaging, and other marketing copy." },
  { question: "Do you work with influencers?", answer: "Yes. We support influencer campaigns from creator research and selection through coordination and performance analysis." },
  { question: "How do you measure marketing success?", answer: "The metrics depend on the objective. We can track visibility, traffic, engagement, leads, conversions, acquisition costs, and other relevant KPIs." },
];
