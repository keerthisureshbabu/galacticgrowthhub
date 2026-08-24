import { createFileRoute } from "@tanstack/react-router";
import { Check, X } from "lucide-react";

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

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: pageMeta({
      title: "Digital Marketing Pricing & Packages | Galactic Growth Hub",
      description:
        "Transparent digital marketing pricing from Galactic Growth Hub. Starter, Growth, and Premium monthly packages starting at ₹10,000 — social media, ads, SEO & more.",
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

function Pricing() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Pricing" }]} />

      <Section>
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
        <div className="mt-12">
          <QuickAnswer>
            Galactic Growth Hub offers three monthly digital marketing packages: the Starter Plan at
            ₹10,000/month (social media basics), the Growth Plan at ₹20,000/month (adds Meta Ads and video
            editing), and the Premium Plan at ₹35,000/month (full-funnel marketing including Google Ads, SEO,
            and website updates). Ad spend is billed separately.
          </QuickAnswer>
        </div>
      </Section>

      <Section>
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 110}>
              <div
                className={`card-premium relative h-full p-8 ${
                  p.featured ? "border-primary/50 shadow-[var(--shadow-glow)] lg:-translate-y-4" : ""
                }`}
              >
                {p.featured && (
                  <>
                    <span className="absolute -top-3 left-8 rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-primary-foreground [background-image:var(--gradient-gold)]">
                      RECOMMENDED
                    </span>
                    <span
                      aria-hidden
                      className="animate-orb pointer-events-none absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklab,var(--gold)_20%,transparent),transparent_60%)]"
                    />
                  </>
                )}
                <h2 className="text-sm font-semibold tracking-[0.24em] uppercase text-muted-foreground">
                  {p.name} Plan
                </h2>
                <p className="mt-4 text-4xl font-bold text-gradient-gold md:text-5xl">
                  {p.price}
                  <span className="text-sm font-medium text-muted-foreground"> {p.period}</span>
                </p>
                <p className="mt-4 text-xs italic leading-relaxed text-muted-foreground">{p.best}</p>
                <ul className="mt-7 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <GLink
                  to="/contact"
                  variant={p.featured ? "gold" : "outline"}
                  className="mt-8 w-full text-xs"
                >
                  Choose {p.name}
                </GLink>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

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

      <Section>
        <Reveal>
          <div className="glass rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Need something custom?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Every business is different. If none of the plans above fit exactly, we build custom packages
              based on your budget, goals, and industry — just reach out for a free consultation.
            </p>
            <GLink to="/contact" className="mt-8">
              Talk to Us About a Custom Digital Marketing Plan
            </GLink>
          </div>
        </Reveal>
      </Section>

      <FaqSection faqs={pricingFaqs} />
      <CtaSection />
    </>
  );
}
