import type {
  Capability,
  Faq,
  Feature,
  Step,
} from "@/components/services/ServiceSections";

export const capabilities: Capability[] = [
  {
    title: "Functional Testing",
    body: "Make sure everything works the way it should — we test against requirements and expected user journeys to catch issues before they reach production.",
    coveredIntro:
      "We verify that features work individually and together as part of the complete product.",
    covered: [
      "Functional testing",
      "Feature testing",
      "User flow testing",
      "Regression testing",
      "Smoke testing",
      "Sanity testing",
      "Integration testing",
      "System testing",
      "Acceptance testing",
    ],
  },
  {
    title: "Manual Testing",
    body: "Human testing for real-world experiences. Automation is powerful, but experienced testers catch issues automated tests may not.",
    coveredIntro:
      "We explore your product from a real user's perspective, looking for unexpected behaviour, usability issues, and edge cases.",
    covered: [
      "Exploratory testing",
      "Usability testing",
      "User journey testing",
      "Cross-browser testing",
      "Cross-device testing",
      "Edge-case testing",
      "UI testing",
      "Error handling testing",
    ],
  },
  {
    title: "Test Automation",
    body: "Catch issues faster and test more consistently. We build automation around the areas where it provides the greatest long-term value.",
    coveredIntro:
      "Automated testing helps development teams identify regressions quickly and gives you greater confidence as your product evolves.",
    covered: [
      "Automated functional testing",
      "Regression test automation",
      "API test automation",
      "End-to-end testing",
      "Integration test automation",
      "Automated test suites",
      "Continuous testing",
      "Test reporting",
    ],
  },
  {
    title: "API & Integration Testing",
    body: "Make sure your systems work together. We test the connections between your APIs, services, and third-party platforms so data moves correctly and failures are handled properly.",
    coveredIntro:
      "Modern products often depend on multiple APIs, services, and payment providers.",
    covered: [
      "API testing",
      "REST API testing",
      "Request & response validation",
      "Authentication testing",
      "Data validation",
      "Integration testing",
      "Third-party integration testing",
      "API regression testing",
    ],
  },
  {
    title: "Performance Testing",
    body: "Make sure your product performs under pressure. A product that works perfectly with ten users may behave very differently with thousands.",
    coveredIntro:
      "We identify bottlenecks and understand how your product behaves under different levels of demand.",
    covered: [
      "Load testing",
      "Stress testing",
      "Scalability testing",
      "Response-time analysis",
      "Database performance testing",
      "API performance testing",
      "Bottleneck identification",
      "Performance reporting",
    ],
  },
  {
    title: "Security Testing",
    body: "Find vulnerabilities before someone else does. Security issues can affect your users, your reputation, and your business.",
    coveredIntro:
      "We assess your application and identify potential vulnerabilities across key areas of the product. This is not a replacement for a specialist penetration test where one is required.",
    covered: [
      "Authentication testing",
      "Authorization testing",
      "Session management testing",
      "Input validation",
      "Access control testing",
      "API security testing",
      "Data protection checks",
      "Vulnerability assessment",
    ],
  },
  {
    title: "Compatibility Testing",
    body: "One product. Multiple devices, browsers, and environments. Your users won't all experience your product the same way.",
    coveredIntro:
      "We test across relevant combinations of devices, browsers, operating systems, and screen sizes.",
    covered: [
      "Desktop testing",
      "Mobile testing",
      "Tablet testing",
      "Browser testing",
      "Operating system testing",
      "Responsive testing",
      "Device compatibility",
    ],
  },
  {
    title: "Mobile App Testing",
    body: "Reliable experiences across iOS and Android. Mobile apps introduce their own challenges, from devices and OS versions to network conditions and permissions.",
    coveredIntro:
      "We test mobile products across real-world scenarios to ensure a consistent experience.",
    covered: [
      "iOS testing",
      "Android testing",
      "Functional testing",
      "UI testing",
      "Device testing",
      "Network testing",
      "Installation & update testing",
      "Push notification testing",
      "App release testing",
    ],
  },
];

export const lifecycle: Feature[] = [
  {
    title: "During planning",
    body: "We review requirements and user journeys to identify quality risks before development begins.",
  },
  {
    title: "During development",
    body: "We test features as they're built rather than waiting until the end of the project.",
  },
  {
    title: "Before release",
    body: "Structured testing across functionality, compatibility, performance, and critical journeys.",
  },
  {
    title: "After release",
    body: "We monitor, test new releases, and help prevent regressions as the product evolves.",
  },
];

export const process: Step[] = [
  {
    label: "01 — Understand",
    title: "Learn the product",
    body: "How it works, who uses it, what it needs to achieve, and where the biggest risks are.",
  },
  {
    label: "02 — Plan",
    title: "Build the strategy",
    body: "A testing strategy based on your product, technology, users, and release requirements.",
  },
  {
    label: "03 — Prepare",
    title: "Define scenarios",
    body: "Test cases, scenarios, environments, devices, browsers, and priorities.",
  },
  {
    label: "04 — Test",
    title: "Execute",
    body: "Functionality, usability, integrations, performance, security, and compatibility.",
  },
  {
    label: "05 — Report",
    title: "Document",
    body: "Issues documented clearly so your dev team can reproduce and resolve them.",
  },
  {
    label: "06 — Verify",
    title: "Retest",
    body: "We retest fixes and run regression testing to catch anything new.",
  },
  {
    label: "07 — Release",
    title: "Sign off",
    body: "A clear view of quality and outstanding risk so your team can decide with confidence.",
  },
];

export const outcomes: Feature[] = [
  {
    title: "Clear visibility",
    body: "Know what works, what doesn't, and where the remaining risks are.",
  },
  {
    title: "Fewer production issues",
    body: "Identify problems before they reach your customers.",
  },
  {
    title: "Better user experiences",
    body: "Testing from the perspective of real users across different environments.",
  },
  {
    title: "Faster development",
    body: "Automated and continuous testing catches regressions earlier.",
  },
  {
    title: "Reliable releases",
    body: "Release with confidence knowing critical journeys are tested.",
  },
  {
    title: "A repeatable QA process",
    body: "A quality framework that continues to support your product as it grows.",
  },
];

export const fit: Feature[] = [
  {
    title: "Launching a new website?",
    body: "We test functionality, responsiveness, compatibility, performance, and critical user journeys.",
  },
  {
    title: "Building a web application?",
    body: "We test workflows, APIs, integrations, permissions, performance, and edge cases.",
  },
  {
    title: "Running an ecommerce store?",
    body: "We test product discovery, carts, checkout, payments, orders, and accounts.",
  },
  {
    title: "Launching a mobile app?",
    body: "We test iOS and Android experiences across devices, networks, and releases.",
  },
  {
    title: "Adding a new feature?",
    body: "We test the feature and confirm existing functionality hasn't been affected.",
  },
  {
    title: "Releasing frequently?",
    body: "We build automated and regression testing into your development workflow.",
  },
];

export const engagement: Feature[] = [
  {
    title: "Pre-launch QA",
    body: "Comprehensive testing before release for products approaching launch.",
  },
  {
    title: "Project-based QA",
    body: "For a specific website, application, feature, or release.",
  },
  {
    title: "Ongoing QA",
    body: "Continuous testing as new features are developed and released.",
  },
  {
    title: "QA Automation",
    body: "Reduce repetitive manual testing with reliable automated coverage.",
  },
  {
    title: "Dedicated QA support",
    body: "Additional QA capacity without hiring internally.",
  },
];

export const faqs: Faq[] = [
  {
    question: "When should QA start?",
    answer:
      "As early as possible. Getting QA involved during planning and development helps identify issues before they become expensive to fix.",
  },
  {
    question: "Do you only test finished products?",
    answer:
      "No. We can test throughout the development lifecycle, from individual features to complete releases.",
  },
  {
    question: "Do you provide both manual and automated testing?",
    answer:
      "Yes. We use manual testing where human exploration and judgment are valuable, and automation where repeatability and speed provide greater value.",
  },
  {
    question: "Can you test an existing application?",
    answer:
      "Yes. We can assess an existing product, identify quality risks, and create a testing strategy around its current state.",
  },
  {
    question: "Can you work with our developers?",
    answer:
      "Yes. We can work alongside your existing development team and integrate into your current workflow.",
  },
  {
    question: "Do you test APIs and integrations?",
    answer:
      "Yes. We can test APIs, payment systems, CRMs, third-party services, databases, and other integrations.",
  },
  {
    question: "Do you test mobile applications?",
    answer: "Yes. We provide QA for both iOS and Android applications.",
  },
  {
    question: "Do you provide automated testing?",
    answer:
      "Yes. We can build automated test suites for appropriate areas of your product and integrate them into your development workflow.",
  },
  {
    question: "Can you test performance and scalability?",
    answer:
      "Yes. We can conduct load, stress, and performance testing to understand how your product behaves under different conditions.",
  },
  {
    question: "Do you provide security testing?",
    answer:
      "Yes, we provide application-level security testing and vulnerability assessment. For formal penetration testing or specialist security certification, we can scope the appropriate level of testing separately.",
  },
];
