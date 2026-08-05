import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

/** The single horizontal rhythm for every section on the site. */
export function Container({
  as: Tag = "div",
  children,
  className,
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-7xl px-6 md:px-10", className)}>
      {children}
    </Tag>
  );
}
