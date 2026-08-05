import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { socialIcons } from "@/components/ui/icons";
import { footerNav, site, socialLinks } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-2">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-8">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-5 text-body-sm text-ink-soft">
              Building market-leading products from strategy to growth — one
              team, every stage.
            </p>

            <ul className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon];

                return (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="inline-flex size-9 items-center justify-center rounded-pill border border-border bg-surface text-ink-soft transition-colors duration-200 hover:border-purple-deep hover:text-purple-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-deep"
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="font-mono text-eyebrow uppercase text-ink-faint">
                {group.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-ink-soft transition-colors duration-200 hover:text-purple-deep"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-caption text-ink-faint">
            © {year} {site.name} · {site.location}
          </p>
          <p className="font-mono text-caption text-ink-faint">
            All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
