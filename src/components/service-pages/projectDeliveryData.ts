import type { ServicePageConfig } from "./types";

export const projectDeliveryData: ServicePageConfig = {
  name: "Project Delivery",
  hero: {
    eyebrow: "Project Delivery & Management",
    title: "From strategy to launch, we keep your project moving.",
    description:
      "Great ideas can still fail without clear planning, ownership, communication, and execution. Our Project Delivery & Management service brings structure to complex projects — aligning teams, managing priorities, tracking progress, and keeping everyone focused on the outcome. From the first planning session to launch and beyond, we help turn strategy into organized, measurable, and successful delivery.",
  },
  introduction: {
    eyebrow: "What We Manage",
    title: "Projects involve more than tasks and deadlines.",
    description:
      "They involve people, priorities, dependencies, decisions, risks, budgets, and moving requirements. We bring these pieces together to create a delivery process that keeps your project clear, coordinated, and moving forward.",
  },
  offers: [
    {
      number: "01",
      title: "Discovery & Planning",
      description:
        "Start with clarity. Before work begins, we make sure everyone understands what we're building, why we're building it, and what success looks like. We turn ideas and requirements into a practical plan your team can actually execute.",
      details: [{
        title: "Includes",
        description: "Project discovery, scope, roadmap, and resource planning.",
        items: ["Project discovery", "Requirements gathering", "Project scope definition", "Objectives & success criteria", "Project roadmap", "Delivery planning", "Milestone definition", "Dependencies identification", "Resource planning"],
      }],
    },
    {
      number: "02",
      title: "Agile Project Management",
      description:
        "Flexible enough to adapt. Structured enough to deliver. We use agile principles to help teams respond to changing priorities without losing sight of the bigger picture — creating a delivery rhythm that gives teams clarity while leaving room to adapt.",
      details: [{
        title: "Includes",
        description: "Sprint planning, reviews, retrospectives, and continuous improvement.",
        items: ["Agile project management", "Sprint planning", "Sprint reviews", "Retrospectives", "Daily stand-ups", "Backlog management", "Task prioritization", "Progress tracking", "Continuous improvement"],
      }],
    },
    {
      number: "03",
      title: "Product & Backlog Management",
      description:
        "Keep the right work moving at the right time. A growing product can quickly become a collection of competing priorities — we help organize the backlog and focus the team on the work that creates the greatest value.",
      details: [{
        title: "Includes",
        description: "Backlog management, prioritization, and release planning.",
        items: ["Product backlog management", "Feature prioritization", "User stories", "Acceptance criteria", "Task definition", "Dependency management", "Sprint preparation", "Backlog refinement", "Release planning"],
      }],
    },
    {
      number: "04",
      title: "Team & Resource Coordination",
      description:
        "Keep people, teams, and responsibilities aligned. Projects often involve multiple teams, specialists, agencies, and external partners — we coordinate the moving parts so everyone knows what they're responsible for and when their work is needed.",
      details: [{
        title: "Includes",
        description: "Team, vendor, and cross-functional coordination.",
        items: ["Team coordination", "Resource planning", "Responsibility tracking", "Cross-functional coordination", "Vendor coordination", "Agency coordination", "External partner management", "Dependency tracking"],
      }],
    },
    {
      number: "05",
      title: "Stakeholder Communication",
      description:
        "Keep everyone informed without slowing everyone down. We create communication structures that give stakeholders the information they need without overwhelming teams with unnecessary meetings and updates.",
      details: [{
        title: "Includes",
        description: "Reporting, meeting facilitation, and decision tracking.",
        items: ["Stakeholder communication", "Project updates", "Progress reporting", "Meeting facilitation", "Decision tracking", "Action tracking", "Status reporting", "Stakeholder alignment"],
      }],
    },
    {
      number: "06",
      title: "Timeline, Milestone & Risk Management",
      description:
        "Know where the project stands and what's coming next. Projects rarely go exactly according to the original plan — we monitor timelines, dependencies, milestones, and risks so potential issues can be addressed before they become major problems.",
      details: [{
        title: "Includes",
        description: "Risk identification, mitigation, and delivery forecasting.",
        items: ["Timeline tracking", "Milestone tracking", "Dependency management", "Risk identification", "Risk assessment", "Risk mitigation", "Issue tracking", "Project health monitoring", "Delivery forecasting"],
      }],
    },
  ],
  process: {
    eyebrow: "From Kickoff to Go-Live",
    title: "A structured approach to delivery",
    description:
      "We create a clear delivery process that keeps your team aligned from the first conversation through launch and beyond.",
    steps: [
      { label: "01 — Discover", title: "Understand", description: "The project, objectives, stakeholders, requirements, constraints, and desired outcomes." },
      { label: "02 — Plan", title: "Define", description: "Scope, roadmap, milestones, resources, dependencies, and delivery approach." },
      { label: "03 — Organize", title: "Structure", description: "Roles, responsibilities, communication channels, tools, workflows, reporting." },
      { label: "04 — Execute", title: "Deliver", description: "Coordinate teams, manage priorities, facilitate sprints, keep delivery moving." },
      { label: "05 — Monitor", title: "Track", description: "Timelines, milestones, risks, dependencies, and project health." },
      { label: "06 — Communicate", title: "Align", description: "Keep stakeholders informed, surface decisions early, stay aligned." },
      { label: "07 — Launch", title: "Ship", description: "Coordinate the activities required to move into the hands of real users." },
      { label: "08 — Support", title: "Sustain", description: "Post-launch activities, improvements, fixes, and ongoing development." },
    ],
  },
  sections: [
    {
      tone: "paper",
      eyebrow: "Launch Management",
      title: "Launch without the chaos",
      description:
        "Launching a product involves more than pressing a button — there can be content, infrastructure, testing, stakeholders, vendors, communications, training, approvals, and technical dependencies to coordinate. Our launch management helps make sure the right pieces are ready at the right time.",
      cards: [
        { title: "Launch planning", description: "Define the launch requirements, responsibilities, dependencies, and timeline." },
        { title: "Go-live coordination", description: "Coordinate teams and activities during the transition into production." },
        { title: "Final readiness", description: "Track outstanding issues, approvals, testing, content, and technical requirements." },
        { title: "Launch communication", description: "Keep stakeholders informed before, during, and after launch." },
        { title: "Post-launch support", description: "Coordinate the immediate activities and priorities following release." },
      ],
    },
    {
      tone: "lavender",
      eyebrow: "Built Around Visibility",
      title: "A well-managed project shouldn't feel like a black box.",
      description:
        "At any point, you should be able to understand what's happening and what's next. We create the systems and communication processes needed to give teams and stakeholders that visibility.",
      kind: "questions",
      cards: [
        { title: "What's been completed?" },
        { title: "What's currently being worked on?" },
        { title: "What's coming next?" },
        { title: "What's at risk?" },
        { title: "What decisions are needed?" },
        { title: "Are we still on track?" },
      ],
    },
    {
      tone: "paper",
      eyebrow: "What You'll Get",
      title: "Delivery you can actually predict",
      kind: "questions",
      cards: [
        { title: "Clear direction", description: "Everyone understands what we're building, why, and what needs to happen next." },
        { title: "Better coordination", description: "Teams, vendors, stakeholders, and partners stay aligned throughout the project." },
        { title: "Predictable delivery", description: "Milestones, timelines, dependencies, and risks are actively managed, not left to chance." },
        { title: "Faster decisions", description: "Issues and decisions are surfaced early so they don't quietly block progress." },
        { title: "Reduced delivery risk", description: "Potential problems are identified and addressed before they become disruptive." },
        { title: "A smoother launch", description: "The transition from development to go-live is planned, coordinated, managed." },
      ],
    },
    {
      tone: "lavender",
      eyebrow: "We Can Work With Your Existing Team",
      title: "You don't need to replace your current project team.",
      description:
        "We can integrate into the way your organization already works and provide the structure, coordination, and delivery support you need.",
      cards: [
        { title: "With your internal team", description: "We work alongside your product, design, engineering, marketing, or operations teams." },
        { title: "With external vendors", description: "We coordinate agencies, developers, designers, technology providers, and other partners." },
        { title: "Across multiple teams", description: "We create alignment between different departments, stakeholders, and delivery teams." },
        { title: "As your delivery partner", description: "We can take responsibility for managing the project from discovery through launch and post-launch support." },
      ],
    },
    {
      tone: "paper",
      eyebrow: "Flexible Engagement",
      title: "Every project needs a different level of delivery support",
      kind: "engagement",
      columns: 4,
      cards: [
        { title: "Project-based delivery", description: "For defined projects with a clear beginning, scope, and launch." },
        { title: "Ongoing project management", description: "For teams that need continuous delivery coordination and oversight." },
        { title: "Agile delivery support", description: "For product teams needing facilitation, planning, and backlog management." },
        { title: "End-to-end delivery management", description: "One partner: discovery → planning → execution → launch → post-launch." },
      ],
      action: { label: "View Pricing", href: "/pricing" },
    },
  ],
  faq: [
    { question: "Do you only manage projects you build?", answer: "No. We can manage projects involving your internal team, external vendors, or other development partners." },
    { question: "Can you work with our existing project management tools?", answer: "Yes. We can adapt to your existing workflows and tools rather than forcing you to change everything." },
    { question: "Do you work using Agile?", answer: "Yes. We can support agile delivery practices including sprint planning, backlog management, stand-ups, reviews, retrospectives, and continuous improvement." },
    { question: "Can you manage multiple teams or vendors?", answer: "Yes. We can coordinate internal teams, agencies, freelancers, technology providers, and other external partners." },
    { question: "Can you help us plan a project before development starts?", answer: "Absolutely. Discovery and planning are an important part of our approach — we can help define scope, requirements, milestones, dependencies, resources, and the delivery roadmap." },
    { question: "Can you manage an existing project that's already in progress?", answer: "Yes. We can assess the current state of the project, identify risks and blockers, establish priorities, and create a clearer path toward delivery." },
    { question: "Do you handle launch and go-live?", answer: "Yes. We can coordinate launch readiness, stakeholders, technical teams, vendors, communications, and post-launch activities." },
    { question: "What happens after launch?", answer: "We can continue supporting the project through post-launch coordination, issue tracking, improvements, and ongoing delivery." },
    { question: "Can you work with our internal project manager?", answer: "Yes. We can complement an existing project manager or provide additional delivery capacity where needed." },
  ],
  cta: {
    eyebrow: "Ready to Move Forward?",
    title: "Let's turn complexity into clear, coordinated delivery.",
    description:
      "Whether you're starting a new project, scaling an existing product, or preparing for launch, we'll help your team stay aligned, focused, and moving forward.",
  },
};
