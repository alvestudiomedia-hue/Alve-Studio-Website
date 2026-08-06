import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

/** 1280px frame with 66px side margins, per the comp → 1152px of content. */
export function Container({
  as: Tag = "div",
  children,
  className,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
