import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, Minus, Sparkles, X } from "lucide-react";

import { GLink } from "@/components/GButton";
import { Reveal } from "@/components/Reveal";
import {
  Breadcrumbs,
  CtaSection,
  FaqSection,
  QuickAnswer,
  Section,
  SectionHeading,
} from "@/components/sections";
import { plans, pricingFaqs } from "@/lib/content";
import { breadcrumbSchema, faqSchema, pageMeta } from "@/lib/site";
import { cn } from "@/lib/utils";

const excluded = [
  "Advertising / Ad Spend Budget — paid directly to Meta or Google, separate from the service fee",
  "Third-party tool or stock subscription costs, if required for a specific project",
  "One-time projects such as a new website build, logo design, or brochure (quoted separately)",
];

const paymentTerms = [
  "50% advance payment to begin work",
  "Remaining 50% due before month-end",
  "Monthly plans renew automatically every 30 days",
  "Content approval required before publishing",
];

type Cell = boolean | string;
const comparison: { label: string; values: [Cell, Cell, Cell] }[] = [
  { label: "Social media posts", values: ["12 / month", "20 / month", "Unlimited creatives"] },
  { label: "Reels", values: ["8 / month", "12 / month", "Reels production"] },
  { label: "Story updates", values: [true, true, true] },
  { label: "Graphic design", values: ["Basic", "Enhanced", "Enhanced"] },
  { label: "Video editing", values: [false, true, true] },
  { label: "Meta Ads management", values: [false, true, true] },
  { label: "Google Ads management", values: [false, false, true] },
  { label: "SEO", values: [false, false, true] },
  { label: "Website updates", values: [false, false, true] },
  { label: "Monthly performance report", values: [true, true, true] },
  { label: "Monthly strategy meeting", values: [false, false, true] },
  { label: "Priority support", values: [false, false, true] },
];

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: pageMeta({
      title: "Digital Marketing Pricing & Packages | Galactic Growth Hub",
      description:
        "Transparent digital marketing pricing from Galactic Growth Hub. Starter, Growth, and Premium monthly packages starting at ₹20,000 — social media, ads, SEO & more.",
      path: "/pricing",
    }),
    links: [{ rel: "canonical", href: "/pricing" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema(pricingFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Pricing", item: "/pricing" },
          ]),
        ),
      },
    ],
  }),
  component: Pricing,
});

function CellValue({ value }: { value: Cell }) {
  if (value === true) return <Check className="mx-auto size-4 text-primary" aria-label="Included" />;
  if (value === false)
    return <Minus className="mx-auto size-4 text-muted-foreground/50" aria-label="Not included" />;
  return <span className="text-xs text-muted-foreground">{value}</span>;
}

function Pricing() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Pricing" }]} />

      {/* Hero */}
      <Section>
        <div className="relative">
          <span
            aria-hidden
            className="animate-orb pointer-events-none absolute -top-24 left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_14%,transparent),transparent_65%)]"
          />
          <SectionHeading
            level="h1"
            eyebrow="Pricing"
            title={
              <>
                Digital marketing <span className="text-gradient-gold">packages</span>
              </>
            }
            intro="Every plan is built to grow with your business. Choose the plan that fits where you are today — you can upgrade anytime as your needs grow."
          />
        </div>
        <div className="mt-12">
          <QuickAnswer>
            Galactic Growth Hub offers three monthly digital marketing packages: the Starter Plan at
            ₹20,000/month (social media basics), the Growth Plan at ₹30,000/month (adds Meta Ads and video
            editing), and the Premium Plan at ₹45,000/month (full-funnel marketing including Google Ads, SEO,
            and website updates). Ad spend is billed separately.
          </QuickAnswer>
        </div>
      </Section>

      {/* Plan cards */}
      <Section>
        <div className="grid items-stretch gap-8 pt-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 110} className="h-full">
              <div
                className={cn(
                  "group card-premium relative isolate flex h-full flex-col p-8 pt-10 transition-all duration-500 hover:-translate-y-2",
                  p.featured &&
                    "border-primary/50 shadow-[var(--shadow-glow)] lg:-translate-y-4 lg:hover:-translate-y-6",
                )}
              >
                {p.featured && (
                  <>
                    <span className="absolute -top-3.5 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-primary-foreground shadow-[var(--shadow-glow)] [background-image:var(--gradient-gold)]">
                      <Sparkles className="size-3" />
                      RECOMMENDED
                    </span>
                    <span
                      aria-hidden
                      className="animate-orb pointer-events-none absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklab,var(--gold)_20%,transparent),transparent_60%)]"
                    />
                  </>
                )}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-6 top-0 h-px scale-x-0 [background-image:var(--gradient-gold)] transition-transform duration-700 group-hover:scale-x-100"
                />

                <h2 className="text-xs font-semibold tracking-[0.28em] text-muted-foreground uppercase">
                  {p.name} Plan
                </h2>
                <p className="mt-5 flex items-end gap-1.5">
                  <span className="text-5xl font-bold leading-none text-gradient-gold md:text-6xl">
                    {p.price}
                  </span>
                  <span className="pb-1 text-sm font-medium text-muted-foreground">{p.period}</span>
                </p>
                <p className="mt-5 text-xs italic leading-relaxed text-muted-foreground">{p.best}</p>

                <ul className="mt-7 space-y-3 text-sm">
                  {p.features.map((f, fi) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90"
                      style={{ transitionDelay: `${fi * 30}ms` }}
                    >
                      <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-primary/15 transition-transform duration-300 group-hover:scale-110">
                        <Check className="size-3 text-primary" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <GLink
                    to="/contact"
                    variant={p.featured ? "gold" : "outline"}
                    className="w-full text-xs"
                  >
                    Choose {p.name}
                  </GLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6">
          <p className="text-center text-xs text-muted-foreground">
            All prices are per month, exclusive of Meta and Google ad spend.
          </p>
        </Reveal>
      </Section>

      {/* Comparison */}
      <Section>
        <SectionHeading eyebrow="Compare" title="What's included in each plan" />
        <Reveal className="mt-10">
          <div className="card-premium overflow-x-auto p-2">
            <table className="w-full min-w-[36rem] border-collapse text-left">
              <caption className="sr-only">
                Comparison of Starter, Growth and Premium digital marketing plans
              </caption>
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="p-4 text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                    Feature
                  </th>
                  {plans.map((p) => (
                    <th
                      key={p.name}
                      scope="col"
                      className={cn(
                        "p-4 text-center text-xs font-semibold tracking-[0.2em] uppercase",
                        p.featured ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      {p.name}
                      <span className="mt-1 block text-sm font-bold normal-case tracking-normal text-foreground">
                        {p.price}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-b border-border/60 last:border-0 hover:bg-foreground/[0.03]">
                    <th scope="row" className="p-4 text-sm font-medium">
                      {row.label}
                    </th>
                    {row.values.map((v, vi) => (
                      <td key={vi} className="p-4 text-center">
                        <CellValue value={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Section>

      {/* Not included + terms */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card-premium h-full p-8">
              <h2 className="text-2xl font-semibold">What's not included in the monthly fee</h2>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {excluded.map((e) => (
                  <li key={e} className="flex items-start gap-2.5">
                    <X className="mt-0.5 size-4 shrink-0 text-destructive" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-premium h-full p-8">
              <h2 className="text-2xl font-semibold">Payment terms</h2>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {paymentTerms.map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Custom */}
      <Section>
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-10 text-center">
            <span
              aria-hidden
              className="animate-orb pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,color-mix(in_oklab,var(--gold)_16%,transparent),transparent_60%)]"
            />
            <h2 className="text-3xl font-semibold md:text-4xl">Need something custom?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Every business is different. If none of the plans above fit exactly, we build custom packages
              based on your budget, goals, and industry — just reach out for a free consultation.
            </p>
            <GLink to="/contact" className="mt-8 group">
              Talk to Us About a Custom Digital Marketing Plan
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </GLink>
          </div>
        </Reveal>
      </Section>

      <FaqSection faqs={pricingFaqs} />
      <CtaSection />
    </>
  );
}
