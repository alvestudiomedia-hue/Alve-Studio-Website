import type { SVGProps } from "react";

/**
 * Inline icon set — no runtime dependency.
 * All icons inherit `currentColor` and size from the `size-*` utility, so they
 * take their colour from the surrounding text token.
 */

type IconProps = SVGProps<SVGSVGElement>;

function Stroke({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-5"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M4.5 12h15" />
      <path d="m13 5.5 6.5 6.5-6.5 6.5" />
    </Stroke>
  );
}

export function Crosshair(props: IconProps) {
  return (
    <Stroke {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3" />
    </Stroke>
  );
}

export function Layers(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 2.8 2.6 7.6 12 12.4l9.4-4.8L12 2.8Z" />
      <path d="m2.6 12.6 9.4 4.8 9.4-4.8" />
      <path d="m2.6 17 9.4 4.8L21.4 17" />
    </Stroke>
  );
}

export function ShieldCheck(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 2.6 4.8 5.4v5.2c0 4.6 2.9 8.2 7.2 10.2 4.3-2 7.2-5.6 7.2-10.2V5.4L12 2.6Z" />
      <path d="m9 11.8 2.2 2.2 4-4.2" />
    </Stroke>
  );
}

export function Sync(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M3.8 9.6a8.4 8.4 0 0 1 14-3.2l2.4 2.3" />
      <path d="M20.2 3.6v5h-5" />
      <path d="M20.2 14.4a8.4 8.4 0 0 1-14 3.2l-2.4-2.3" />
      <path d="M3.8 20.4v-5h5" />
    </Stroke>
  );
}

export function TrendingUp(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="m3 16.5 5.5-5.5 3.5 3.5L21 5.5" />
      <path d="M14.8 5.5H21v6.2" />
    </Stroke>
  );
}

export function BarChart(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M3 20.5h18" />
      <path d="M6.5 20.5v-6M12 20.5V6M17.5 20.5v-9.5" />
    </Stroke>
  );
}

export function Code(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="m8.5 7.5-5 4.5 5 4.5" />
      <path d="m15.5 7.5 5 4.5-5 4.5" />
    </Stroke>
  );
}

export function BadgeCheck(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="m12 2.6 2.5 2.1 3.2-.3.9 3.1 2.7 1.8-1.4 3 1.4 3-2.7 1.8-.9 3.1-3.2-.3L12 21.4l-2.5-2.1-3.2.3-.9-3.1L2.7 14.7l1.4-3-1.4-3L5.4 5.9l.9-3.1 3.2.3L12 2.6Z" />
      <path d="m9.2 12.2 2.1 2.1 3.9-4.2" />
    </Stroke>
  );
}

export function Clipboard(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M9.2 4.4H7.6a2 2 0 0 0-2 2v12.6a2 2 0 0 0 2 2h8.8a2 2 0 0 0 2-2V6.4a2 2 0 0 0-2-2h-1.6" />
      <rect x="9.2" y="2.6" width="5.6" height="3.6" rx="1.2" />
      <path d="M9.4 12h5.2M9.4 15.6h3.4" />
    </Stroke>
  );
}

export function Sparkle(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M12 2.8 13.9 9 20 11l-6.1 2L12 19.2 10.1 13 4 11l6.1-2L12 2.8Z" />
      <path d="M18.6 16.4 19.4 19l2.6.8-2.6.8-.8 2.6" />
    </Stroke>
  );
}

export function CheckCircle(props: IconProps) {
  return (
    <Stroke {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.4 12.2 2.4 2.4 4.8-5.2" />
    </Stroke>
  );
}

export function Menu(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Stroke>
  );
}

export function Close(props: IconProps) {
  return (
    <Stroke {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </Stroke>
  );
}

/* -------------------------------------------------------------------------
   Brand marks — filled, not stroked.
   ---------------------------------------------------------------------- */

function Brand({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="size-4"
      {...props}
    >
      {children}
    </svg>
  );
}

export function XMark(props: IconProps) {
  return (
    <Brand {...props}>
      <path d="M17.53 3h3.02l-6.6 7.54L21.7 21h-6.07l-4.76-6.22L5.42 21H2.4l7.06-8.07L2.3 3h6.22l4.3 5.69L17.53 3Zm-1.06 16.19h1.67L7.6 4.72H5.81l10.66 14.47Z" />
    </Brand>
  );
}

export function LinkedIn(props: IconProps) {
  return (
    <Brand {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.66c0-1.35-.02-3.09-1.96-3.09-1.96 0-2.26 1.47-2.26 2.99V21h-4V9Z" />
    </Brand>
  );
}

export function Instagram(props: IconProps) {
  return (
    <Brand {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.6 2.5h8.8a5.1 5.1 0 0 1 5.1 5.1v8.8a5.1 5.1 0 0 1-5.1 5.1H7.6a5.1 5.1 0 0 1-5.1-5.1V7.6a5.1 5.1 0 0 1 5.1-5.1Zm0 1.9A3.2 3.2 0 0 0 4.4 7.6v8.8a3.2 3.2 0 0 0 3.2 3.2h8.8a3.2 3.2 0 0 0 3.2-3.2V7.6a3.2 3.2 0 0 0-3.2-3.2H7.6ZM12 7.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.2-2.6a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z"
      />
    </Brand>
  );
}

export const socialIcons = {
  x: XMark,
  linkedin: LinkedIn,
  instagram: Instagram,
} as const;

export type SocialIconName = keyof typeof socialIcons;
