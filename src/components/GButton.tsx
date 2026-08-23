import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-transform duration-300 will-change-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants = {
  gold: "text-primary-foreground shadow-[var(--shadow-glow)] [background-image:var(--gradient-gold)]",
  ghost: "glass text-foreground hover:border-primary/50",
  outline: "border border-primary/40 text-primary hover:bg-primary/10",
} as const;

type Variant = keyof typeof variants;

function Sheen() {
  return (
    <span className="pointer-events-none absolute inset-0 -z-0 overflow-hidden rounded-full">
      <span className="absolute inset-y-0 -left-1/2 w-1/3 skew-x-12 bg-white/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:[animation:sheen_0.9s_ease-out]" />
    </span>
  );
}

export function GLink({
  to,
  variant = "gold",
  className,
  children,
  ...rest
}: { to: string; variant?: Variant; className?: string; children: ReactNode } & Omit<
  ComponentProps<typeof Link>,
  "to" | "className" | "children"
>) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)} {...rest}>
      <Sheen />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}

export function GAnchor({
  variant = "gold",
  className,
  children,
  ...rest
}: { variant?: Variant } & ComponentProps<"a">) {
  return (
    <a className={cn(base, variants[variant], className)} {...rest}>
      <Sheen />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </a>
  );
}

export function GButton({
  variant = "gold",
  className,
  children,
  ...rest
}: { variant?: Variant } & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      <Sheen />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </button>
  );
}
