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

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Studio",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Process", href: "/process" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Expertise",
    links: [
      { label: "Strategy", href: "/services/strategy" },
      { label: "Design", href: "/services/design" },
      { label: "Development", href: "/services/development" },
      { label: "Growth", href: "/services/growth" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Privacy Policy", href: "/privacy" },
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
