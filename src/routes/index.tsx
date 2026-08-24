import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";

import { GLink } from "@/components/GButton";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import {
  CtaSection,
  FaqSection,
  QuickAnswer,
  Section,
  SectionHeading,
} from "@/components/sections";
import workBerlin from "@/assets/work-berlin.jpg";
import workEyal from "@/assets/work-eyal.jpg";
import workGrm from "@/assets/work-grm.jpg";
import { homeFaqs, plans, projects, services, whyChooseUs } from "@/lib/content";
import { faqSchema, localBusinessSchema, pageMeta, site } from "@/lib/site";

const images: Record<string, string> = {
  "grm-maternity-store": workGrm,
  "eyal-muzik": workEyal,
  "berlin-mens-clothing": workBerlin,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({
      title: "Digital Marketing Agency in Salem, Tamil Nadu | Galactic Growth Hub",
      description:
        "Galactic Growth Hub is a Salem-based digital marketing agency offering social media marketing, Meta & Google Ads, SEO, website development, video editing, and branding for businesses across India.",
      path: "/",
    }),
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(homeFaqs)) },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />

      <Section id="who-we-are">
        <QuickAnswer>
          Galactic Growth Hub is a digital marketing agency based in Salem, Tamil Nadu, founded by Sanjay. It
          offers social media marketing, paid advertising (Meta &amp; Google Ads), SEO, website development,
          video editing, and branding services for small and growing businesses across India, with monthly
          plans starting at ₹10,000.
        </QuickAnswer>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionHeading
            eyebrow="Who We Are"
            title={
              <>
                A full-service growth partner for <span className="text-gradient-gold">ambitious brands</span>
              </>
            }
            intro="Galactic Growth Hub is a full-service digital marketing agency based in Salem, Tamil Nadu, dedicated to helping businesses across India increase their online visibility, generate quality leads, boost sales, and build a strong brand presence through data-driven digital marketing strategies. Our mission is simple: grow your business with smart digital marketing."
          />
          <Reveal delay={120} className="grid grid-cols-2 gap-4 self-center">
            {[
              { k: "₹10,000", v: "Starting monthly plan" },
              { k: "7", v: "Core service lines" },
              { k: "3", v: "Brands partnered" },
              { k: "Mon–Sat", v: "10 AM – 7 PM support" },
            ].map((s) => (
              <div key={s.v} className="card-premium p-6">
                <p className="text-2xl font-semibold text-gradient-gold md:text-3xl">{s.k}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* Services */}
      <Section id="services">
        <SectionHeading
          eyebrow="What We Offer"
          title="Services Universe"
          intro="Seven connected disciplines that take a brand from invisible to unmissable."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 70}>
              <Link
                to="/services"
                hash={s.id}
                className="card-premium group flex h-full flex-col p-7"
              >
                <span className="text-xs font-semibold tracking-[0.3em] text-primary/70">{s.number}</span>
                <h3 className="mt-4 text-xl font-semibold leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                <ul className="mt-4 max-h-0 space-y-1.5 overflow-hidden text-xs text-muted-foreground opacity-0 transition-all duration-500 group-hover:max-h-64 group-hover:opacity-100">
                  {s.items.slice(0, 5).map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-3 shrink-0 text-primary" />
                      {it}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Explore
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Why choose us */}
      <Section>
        <SectionHeading eyebrow="Why Choose Us" title="Reasons brands stay with us" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((w, i) => (
            <Reveal key={w} delay={i * 60}>
              <div className="glass flex items-start gap-3 rounded-2xl p-5 transition-colors duration-300 hover:border-primary/40">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <p className="text-sm">{w}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Pricing snapshot */}
      <Section>
        <SectionHeading
          eyebrow="Pricing Snapshot"
          title="Plans that grow with you"
          intro="Transparent monthly packages. Ad spend is billed separately."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <div
                className={`card-premium relative h-full p-8 ${p.featured ? "border-primary/50 shadow-[var(--shadow-glow)]" : ""}`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-8 rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-primary-foreground [background-image:var(--gradient-gold)]">
                    RECOMMENDED
                  </span>
                )}
                <h3 className="text-sm font-semibold tracking-[0.24em] uppercase text-muted-foreground">
                  {p.name} Plan
                </h3>
                <p className="mt-4 text-4xl font-bold text-gradient-gold">
                  {p.price}
                  <span className="text-sm font-medium text-muted-foreground"> {p.period}</span>
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
                  {p.features.slice(0, 5).map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <GLink to="/pricing" variant="outline">
            View Full Digital Marketing Pricing
          </GLink>
        </Reveal>
      </Section>

      {/* Work preview */}
      <Section>
        <SectionHeading eyebrow="Our Work" title="Featured brands" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <Link to="/our-work" hash={p.slug} className="card-premium group block overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={images[p.slug]}
                    alt={p.alt}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-semibold tracking-[0.24em] text-primary uppercase">
                    {p.industry}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{p.name}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <GLink to="/our-work" variant="outline">
            See Our Full Digital Marketing Portfolio
          </GLink>
        </Reveal>
      </Section>

      {/* Contact strip */}
      <Section>
        <Reveal>
          <div className="glass flex flex-col gap-6 rounded-3xl p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Talk to {site.founder} directly</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {site.hours} · {site.city}, {site.region}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <GLink to="/contact">Get Free Consultation</GLink>
            </div>
          </div>
        </Reveal>
      </Section>

      <FaqSection faqs={homeFaqs} />
      <CtaSection />
    </>
  );
}
