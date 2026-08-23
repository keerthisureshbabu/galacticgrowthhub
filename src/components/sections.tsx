import { Link } from "@tanstack/react-router";
import { ChevronDown, Sparkles } from "lucide-react";
import { useState, type ReactNode } from "react";

import { GLink } from "@/components/GButton";
import { Reveal } from "@/components/Reveal";
import type { Faq } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="grid-lines absolute inset-0" />
      <div className="starfield absolute inset-0 opacity-70" />
      <div className="animate-orb absolute -left-40 top-[-10%] size-[42rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--nebula)_38%,transparent),transparent_65%)] blur-3xl" />
      <div className="animate-orb absolute -right-52 top-1/3 size-[38rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_65%)] blur-3xl [animation-delay:-6s]" />
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] text-primary uppercase">
      <Sparkles className="size-3.5" />
      {children}
    </span>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-7xl scroll-mt-28 px-5 py-20 md:py-28", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  level = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  level?: "h1" | "h2";
}) {
  const Tag = level;
  return (
    <Reveal className="max-w-3xl">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag className="mt-5 text-balance text-4xl leading-[1.05] font-semibold md:text-5xl lg:text-6xl">
        {title}
      </Tag>
      {intro && <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>}
    </Reveal>
  );
}

export function QuickAnswer({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <div className="glass relative overflow-hidden rounded-3xl p-6 md:p-8">
        <div className="absolute inset-y-0 left-0 w-1 [background-image:var(--gradient-galaxy)]" />
        <p className="text-[11px] font-semibold tracking-[0.24em] text-primary uppercase">Quick Answer</p>
        <p className="mt-3 text-base leading-relaxed text-foreground/90 md:text-lg">{children}</p>
      </div>
    </Reveal>
  );
}

export function FaqSection({ faqs, title = "Frequently Asked Questions" }: { faqs: Faq[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <SectionHeading eyebrow="FAQ" title={title} />
      <div className="mt-12 space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={i * 60}>
              <div
                className={cn(
                  "card-premium overflow-hidden",
                  isOpen && "border-primary/40 shadow-[var(--shadow-glow)]",
                )}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-base font-medium md:text-lg"
                  >
                    {f.q}
                    <ChevronDown
                      className={cn(
                        "size-5 shrink-0 text-primary transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                </h3>
                <div
                  className="grid transition-[grid-template-rows] duration-400 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export function CtaSection({
  title = "Let's Grow Your Business Together",
  text = "Tell us where you want your brand to be in six months — we'll show you the fastest honest route there.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <Section>
      <Reveal>
        <div className="glass relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center md:px-16 md:py-24">
          <div className="animate-orb pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--nebula)_28%,transparent),transparent_65%)]" />
          <h2 className="mx-auto max-w-3xl text-balance text-4xl leading-[1.05] font-semibold md:text-6xl">
            <span className="text-gradient-galaxy">{title}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">{text}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <GLink to="/contact">Get a Free Consultation</GLink>
            <GLink to="/pricing" variant="ghost">
              View Pricing Plans
            </GLink>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-5 pt-28 text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((it, i) => (
          <li key={it.label} className="flex items-center gap-2">
            {it.to ? (
              <Link to={it.to} className="hover:text-primary">
                {it.label}
              </Link>
            ) : (
              <span className="text-foreground/80">{it.label}</span>
            )}
            {i < items.length - 1 && <span aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
