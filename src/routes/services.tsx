import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import {
  Breadcrumbs,
  CtaSection,
  FaqSection,
  QuickAnswer,
  Section,
  SectionHeading,
} from "@/components/sections";
import { processSteps, serviceFaqs, services } from "@/lib/content";
import { breadcrumbSchema, faqSchema, pageMeta, site } from "@/lib/site";

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": services.map((s) => ({
    "@type": "Service",
    name: s.title,
    serviceType: s.title,
    description: s.summary,
    areaServed: { "@type": "Country", name: "India" },
    provider: { "@type": "Organization", name: site.name },
  })),
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: pageMeta({
      title: "Digital Marketing Services | Social Media, SEO, Ads & Web Design",
      description:
        "Explore Galactic Growth Hub's digital marketing services: social media marketing, graphic design, video editing, Meta & Google Ads, SEO, website development, and branding.",
      path: "/services",
    }),
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(serviceFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Services", item: "/services" },
          ]),
        ),
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />

      <Section>
        <SectionHeading
          level="h1"
          eyebrow="Services"
          title={
            <>
              All <span className="text-gradient-gold">Services</span>
            </>
          }
          intro="Seven core disciplines, delivered through one seven-step process — from business analysis to monthly performance reporting."
        />
        <div className="mt-12">
          <QuickAnswer>
            Galactic Growth Hub offers seven core digital marketing services: social media marketing, graphic
            design, video editing, Meta &amp; Google Ads management, SEO, website development, and branding —
            delivered through a seven-step process from business analysis to monthly performance reporting.
          </QuickAnswer>
        </div>
      </Section>

      <Section>
        <div className="space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 50}>
              <article id={s.id} className="card-premium scroll-mt-28 p-8 md:p-10">
                <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <span className="text-xs font-semibold tracking-[0.3em] text-primary/70">{s.number}</span>
                    <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">{s.title}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {s.items.map((it) => (
                      <li
                        key={it}
                        className="glass flex items-start gap-2.5 rounded-xl px-4 py-3 text-sm transition-colors duration-300 hover:border-primary/40"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process">
        <SectionHeading eyebrow="Our Process" title="A seven-step growth system" />
        <ol className="relative mt-14 space-y-6 border-l border-border pl-8">
          <span
            aria-hidden
            className="absolute left-0 top-0 h-full w-px [background-image:var(--gradient-galaxy)] opacity-60"
          />
          {processSteps.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 80} className="relative">
              <span className="absolute -left-[45px] top-0 grid size-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <FaqSection faqs={serviceFaqs} />
      <CtaSection title="Ready to pick your services?" text="Book a free consultation and we'll map the right mix for your business and budget." />
    </>
  );
}
