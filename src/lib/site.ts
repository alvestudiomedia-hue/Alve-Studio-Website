import type { SocialIconName } from "@/components/ui/icons";

/* Site-wide chrome. Page copy lives with its section component. */

export const site = {
  name: "Alve Studio",
  tagline: "Full-cycle product studio",
  description:
    "One team across every stage — strategy, design, development and growth. Alve Studio builds market-leading digital products without the vendor juggling.",
  url: "https://alve.studio",
  location: "Lagos · Remote",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

/* Process is still a jump into a home-page section; everything else is a route. */
export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact" },
];

/* Mirrors the footer in the design pages. Every href resolves to a page that
   exists or has a design in place — labels without one are left out. */
export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Studio",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Process", href: "/#process" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Expertise",
    links: [
      { label: "Growth", href: "/services/growth-marketing" },
      { label: "Development", href: "/services/web-development" },
      { label: "QA & Testing", href: "/services/qa-testing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "/portfolio" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Start a Project", href: "/contact" },
      { label: "Book a Call", href: "/contact" },
    ],
  },
];

export const socialLinks: {
  label: string;
  href: string;
  icon: SocialIconName;
}[] = [
  { label: "Alve Studio on X", href: "https://x.com", icon: "x" },
  {
    label: "Alve Studio on LinkedIn",
    href: "https://linkedin.com",
    icon: "linkedin",
  },
  {
    label: "Alve Studio on Instagram",
    href: "https://instagram.com",
    icon: "instagram",
  },
];
