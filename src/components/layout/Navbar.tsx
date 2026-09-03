"use client";

import { Fragment, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Close, Menu } from "@/components/ui/icons";
import { Logo } from "@/components/layout/Logo";
import { primaryNav, serviceNav } from "@/lib/site";
import { cn } from "@/lib/cn";

type NavbarProps = {
  /** Label for the trailing call to action. */
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

/** Ids of the home-page sections the nav jumps to, e.g. "/#portfolio". */
const jumpTargets = primaryNav
  .filter((link) => link.href.includes("#"))
  .map((link) => link.href.split("#")[1]);

/** The y-offset a section must cross to count as the one being read. */
const SPY_LINE = 200;

function isActive(pathname: string, href: string, section: string | null) {
  const [path, hash] = href.split("#");

  // Jump links only light up when their section is the one in view.
  if (hash) return pathname === (path || "/") && section === hash;

  // Home yields to whichever section has scrolled into view.
  if (href === "/") return pathname === "/" && !section;

  return pathname.startsWith(href);
}

export function Navbar({
  ctaLabel = "Start Your Project",
  ctaHref = "/contact",
  className,
}: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [section, setSection] = useState<string | null>(null);

  const closeMobileMenu = useCallback(() => {
    setOpen(false);
    setMobileServicesOpen(false);
  }, []);

  // Track which jump-target section is currently under the spy line.
  useEffect(() => {
    if (pathname !== "/" || jumpTargets.length === 0) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      let current: string | null = null;

      for (const id of jumpTargets) {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        if (rect && rect.top <= SPY_LINE && rect.bottom > SPY_LINE) {
          current = id;
        }
      }

      setSection(current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  // Lock body scroll behind the mobile sheet.
  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobileMenu();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeMobileMenu, open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-surface/85 backdrop-blur-md",
        className,
      )}
    >
      <Container className="flex h-30 items-center justify-between gap-6">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 min-[901px]:flex"
        >
          {primaryNav.map((link, index) => {
            const active = isActive(pathname, link.href, section);

            return (
              <Fragment key={link.href}>
                <Link
                  href={link.href}
                  aria-current={
                    active
                      ? link.href.includes("#")
                        ? "location"
                        : "page"
                      : undefined
                  }
                  className={cn(
                    "relative py-2 text-body-sm  transition-colors duration-200",
                    "text-ink hover:text-ink",
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

                {index === 0 ? (
                  <div className="group relative py-2">
                    <button
                      type="button"
                      aria-haspopup="true"
                      className={cn(
                        "flex items-center gap-1 text-body-sm transition-colors duration-200",
                        pathname.startsWith("/services/")
                          ? "text-ink"
                          : "text-ink hover:text-ink",
                      )}
                    >
                      Services
                      <ChevronDown className="size-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                    </button>
                    <div className="invisible absolute top-full left-1/2 z-20 grid w-[410px] -translate-x-1/2 translate-y-2 grid-cols-2 gap-1 rounded-md border border-border bg-surface p-2 opacity-0 shadow-lift transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      {serviceNav.map((service) => (
                        <Link
                          key={service.label}
                          href={service.href}
                          className="rounded-sm px-3 py-2.5 text-body-sm text-ink transition-colors hover:bg-purple-tint hover:text-purple-deep"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </Fragment>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button href={ctaHref} size="sm" className="hidden sm:inline-flex">
            {ctaLabel}
          </Button>

          <button
            type="button"
            onClick={() => {
              if (open) closeMobileMenu();
              else setOpen(true);
            }}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-sm text-ink transition-colors duration-200 hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-deep min-[901px]:hidden"
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </Container>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-surface min-[901px]:hidden"
      >
        <Container className="flex flex-col gap-1 py-4">
          <button
            type="button"
            onClick={() => setMobileServicesOpen((value) => !value)}
            aria-expanded={mobileServicesOpen}
            aria-controls="mobile-services-menu"
            className="flex items-center justify-between rounded-sm px-3 py-3 text-body text-ink transition-colors hover:bg-surface-2 hover:text-ink"
          >
            <span>Services</span>
            <ChevronDown
              aria-hidden="true"
              className={cn(
                "size-4 transition-transform duration-200",
                mobileServicesOpen && "rotate-180",
              )}
            />
          </button>

          <div
            id="mobile-services-menu"
            hidden={!mobileServicesOpen}
            className="mb-3 grid grid-cols-1 gap-1 pl-3 sm:grid-cols-2"
          >
            {serviceNav.map((service) => (
              <Link
                key={service.label}
                href={service.href}
                onClick={closeMobileMenu}
                className={cn(
                  "rounded-sm px-3 py-2.5 text-body-sm transition-colors duration-200",
                  pathname === service.href
                    ? "bg-purple-tint text-purple-deep"
                    : "text-ink hover:bg-surface-2 hover:text-ink",
                )}
              >
                {service.label}
              </Link>
            ))}
          </div>

          {primaryNav.map((link) => {
            const active = isActive(pathname, link.href, section);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                aria-current={
                  active
                    ? link.href.includes("#")
                      ? "location"
                      : "page"
                    : undefined
                }
                className={cn(
                  "rounded-sm px-3 py-3 text-body transition-colors duration-200",
                  active
                    ? "bg-purple-tint text-purple-deep"
                    : "text-ink hover:bg-surface-2 hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}

          <Button
            href={ctaHref}
            size="md"
            fullWidth
            onClick={closeMobileMenu}
            className="mt-3 sm:hidden"
          >
            {ctaLabel}
          </Button>
        </Container>
      </div>
    </header>
  );
}
