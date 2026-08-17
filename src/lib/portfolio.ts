import type { ComponentType, SVGProps } from "react";
import {
  Bank,
  CreditCard,
  Megaphone,
  School,
  Truck,
} from "@/components/ui/icons";

export type ProjectCategory = "technology" | "field-marketing";

export type Project = {
  slug: string;
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  category: ProjectCategory;
  meta: string;
  tagline: string;
  summary: string;
  workLabel: string;
  work: string[];
  detail?: { label: string; body: string }[];
  stats: { value: string; label: string }[];
};

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "technology", label: "Technology" },
  { id: "field-marketing", label: "Field Marketing" },
] as const;

export const projects: Project[] = [
  {
    slug: "wayabank",
    name: "WayaBank",
    icon: Bank,
    category: "technology",
    meta: "Fintech · QA · API Testing · Integrations · Release Delivery",
    tagline:
      "Taking a digital banking product from early-stage development to production.",
    summary:
      "We joined WayaBank while the product was still in an early stage and took ownership of the QA and delivery process — working across frontend, backend, services, APIs, UI/UX implementation, third-party integrations, testing, staging, production deployment, and app-store releases.",
    workLabel: "Testing, banking functionality & integrations",
    work: [
      "Functional testing",
      "Regression testing",
      "Smoke testing",
      "Load testing",
      "API testing",
      "Staging & production validation",
      "Backend & service validation",
      "Frontend validation",
      "UI/UX implementation support",
      "Release delivery",
    ],
    detail: [
      {
        label: "Banking functionality",
        body: "Authentication, login & registration, KYC, own-account transfers, intra-bank transfers, inter-bank transfers, POS services, card services, loan functionality, bill payments.",
      },
      {
        label: "Third-party integrations",
        body: "NIBSS · Mono · UP · Interswitch · Prembly · Afrigo · Baxi",
      },
      {
        label: "Key highlight",
        body: "18 Afrigo endpoints tested, including request, activation, and related card-service workflows.",
      },
    ],
    stats: [
      { value: "18", label: "Afrigo endpoints tested" },
      { value: "App Store & Play", label: "Outcome: live release" },
    ],
  },
  {
    slug: "moovable",
    name: "Moovable",
    icon: Truck,
    category: "technology",
    meta: "Logistics Technology · QA · API Testing · System Testing",
    tagline: "Building confidence into a logistics platform.",
    summary:
      "We established a structured testing process across the Driver, Operator, and Admin platforms, validating the workflows that connect logistics operations from assignment through delivery.",
    workLabel: "Core operational workflows across the platform",
    work: [
      "Functional testing",
      "API testing",
      "Regression testing",
      "System integration testing",
      "Driver workflows",
      "Trip assignment",
      "GPS tracking",
      "Delivery confirmation",
      "Payment reconciliation",
      "Requirements validation",
    ],
    stats: [{ value: "3", label: "Platforms tested: Driver, Operator, Admin" }],
  },
  {
    slug: "credpal",
    name: "CredPal",
    icon: CreditCard,
    category: "technology",
    meta: "Fintech · QA · API Testing · Mobile & Web",
    tagline: "Supporting a fintech product through structured testing.",
    summary:
      "We supported testing across mobile and web platforms, taking the product through requirements analysis, test planning, system integration testing, API validation, regression testing, and release-readiness checks. The test cycle was completed four weeks ahead of the original six-week plan, enabling an earlier release of the customer onboarding feature.",
    workLabel: "Requirements analysis through release-readiness reporting",
    work: [
      "Requirements analysis",
      "Test planning",
      "SIT",
      "API testing",
      "Mobile testing",
      "Web testing",
      "Regression testing",
      "Defect tracking",
      "Release-readiness reporting",
    ],
    stats: [
      { value: "150", label: "SIT test scripts" },
      { value: "4 weeks", label: "Test cycle completed" },
    ],
  },
  {
    slug: "edukoya",
    name: "Edukoya",
    icon: School,
    category: "technology",
    meta: "EdTech · QA · Mobile · API Testing",
    tagline: "Testing the logic behind online learning.",
    summary:
      "We worked across student onboarding, course enrolment, content consumption, examinations, grading, and results processing — using structured test-design techniques to validate complex examination and grading workflows.",
    workLabel: "Onboarding through results processing",
    work: [
      "Student onboarding",
      "Course enrolment",
      "Content consumption",
      "Examination workflows",
      "Exam grading",
      "Results processing",
      "API validation",
      "SIT",
      "Regression testing",
      "UAT",
    ],
    stats: [
      { value: "50+", label: "Test scenarios created" },
      { value: "0", label: "Grading defects found during UAT" },
    ],
  },
  {
    slug: "branddrive",
    name: "BrandDrive",
    icon: Megaphone,
    category: "field-marketing",
    meta: "Field Marketing · Sales Activation · Customer Acquisition",
    tagline: "Turning field activity into measurable commercial results.",
    summary:
      "We supported a recruitment and sales activation campaign focused on direct customer engagement and commercial acquisition. The campaign generated ₦620,000 in customer orders during a single campaign day.",
    workLabel: "Recruitment through customer acquisition",
    work: [
      "Recruitment",
      "Sales activation",
      "Customer engagement",
      "Field execution",
      "Campaign coordination",
      "Customer acquisition",
    ],
    stats: [{ value: "₦620,000", label: "Peak daily campaign sales" }],
  },
];
