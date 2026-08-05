import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant =
  /** Filled purple. The default call to action on light surfaces. */
  | "primary"
  /** White card on a hairline border. Pairs with `primary` on light. */
  | "secondary"
  /** Filled off-white. The default call to action on dark surfaces. */
  | "light"
  /** Hairline outline. Pairs with `light` on dark surfaces. */
  | "outline"
  /** No chrome until hovered. Tertiary actions, nav items. */
  | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex shrink-0 items-center justify-center gap-2 rounded-pill font-sans text-button whitespace-nowrap " +
  "transition-[background-color,border-color,color,box-shadow] duration-200 ease-out " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "disabled:pointer-events-none disabled:opacity-45";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-purple-deep text-surface hover:bg-purple-deep-2 focus-visible:outline-purple-deep",
  secondary:
    "border border-border bg-surface text-ink hover:border-border-strong hover:bg-surface-2 focus-visible:outline-purple-deep",
  light:
    "bg-dark-ink text-ink hover:bg-purple-tint focus-visible:outline-dark-ink",
  outline:
    "border border-dark-border-strong text-dark-ink hover:border-dark-ink hover:bg-dark-ink/10 focus-visible:outline-dark-ink",
  ghost:
    "text-ink hover:bg-purple-tint hover:text-purple-deep focus-visible:outline-purple-deep",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4",
  md: "h-11 px-5",
  lg: "h-13 px-7",
};

type StyleOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
};

/** Exposed so non-button elements can borrow the exact button look. */
export function buttonStyles({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: StyleOptions = {}) {
  return cn(
    base,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    className,
  );
}

type CommonProps = StyleOptions & {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children?: ReactNode;
};

type ButtonElementProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: never;
  };

type AnchorElementProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = ButtonElementProps | AnchorElementProps;

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

/**
 * The single button in the system.
 *
 * Renders a `<button>` by default, a Next `<Link>` when given an internal
 * `href`, and a plain `<a>` for external destinations.
 */
export function Button(props: ButtonProps) {
  const {
    variant,
    size,
    fullWidth,
    className,
    iconLeft,
    iconRight,
    children,
    ...rest
  } = props;

  const classes = buttonStyles({ variant, size, fullWidth, className });

  const content = (
    <>
      {iconLeft ? (
        <span aria-hidden="true" className="-ml-0.5 shrink-0">
          {iconLeft}
        </span>
      ) : null}
      {children}
      {iconRight ? (
        <span
          aria-hidden="true"
          className="-mr-0.5 shrink-0 transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5"
        >
          {iconRight}
        </span>
      ) : null}
    </>
  );

  if (typeof rest.href === "string") {
    const { href, ...anchorProps } = rest as Omit<
      AnchorElementProps,
      keyof CommonProps
    >;

    if (isExternal(href)) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...anchorProps}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...anchorProps}>
        {content}
      </Link>
    );
  }

  const buttonProps = rest as Omit<ButtonElementProps, keyof CommonProps>;

  return (
    <button type="button" className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
