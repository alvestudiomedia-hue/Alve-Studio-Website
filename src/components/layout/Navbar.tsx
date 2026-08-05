"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Close, Menu } from "@/components/ui/icons";
import { Logo } from "@/components/layout/Logo";
import { primaryNav } from "@/lib/site";
import { cn } from "@/lib/cn";

type NavbarProps = {
  /** Label for the trailing call to action. */
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

const isActive = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

export function Navbar({
  ctaLabel = "Start Your Project",
  ctaHref = "/contact",
  className,
}: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock body scroll behind the mobile sheet.
  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-surface/85 backdrop-blur-md",
        className,
      )}
    >
      <Container className="flex h-18 items-center justify-between gap-6">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-9 lg:flex"
        >
          {primaryNav.map((link) => {
            const active = isActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-2 text-body-sm transition-colors duration-200",
                  active
                    ? "text-ink"
                    : "text-ink-faint hover:text-ink",
                )}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 -bottom-0.5 h-0.5 rounded-pill bg-purple-deep transition-opacity duration-200",
                    active ? "opacity-100" : "opacity-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button href={ctaHref} size="sm" className="hidden sm:inline-flex">
            {ctaLabel}
          </Button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-sm text-ink transition-colors duration-200 hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-deep lg:hidden"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </Container>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-surface lg:hidden"
      >
        <Container className="flex flex-col gap-1 py-4">
          {primaryNav.map((link) => {
            const active = isActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-sm px-3 py-3 text-body transition-colors duration-200",
                  active
                    ? "bg-purple-tint text-purple-deep"
                    : "text-ink-soft hover:bg-surface-2 hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}

          <Button href={ctaHref} size="md" fullWidth className="mt-3 sm:hidden">
            {ctaLabel}
          </Button>
        </Container>
      </div>
    </header>
  );
}
