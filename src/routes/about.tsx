import { createFileRoute } from "@tanstack/react-router";
import { Check, Quote } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import {
  Breadcrumbs,
  CtaSection,
  FaqSection,
  QuickAnswer,
  Section,
  SectionHeading,
} from "@/components/sections";
import { aboutFaqs, whyChooseUs } from "@/lib/content";
import { breadcrumbSchema, faqSchema, pageMeta } from "@/lib/site";

const journey = [
  { year: "Foundation", title: "M.Com graduate", text: "Built a business and commerce foundation in Salem, Tamil Nadu." },
  { year: "Specialisation", title: "Digital Marketing course", text: "Deep training in digital strategy, social media marketing, branding and business growth." },
  { year: "Creative edge", title: "Model & cinema artist", text: "Professional modelling shoots and work as a Junior Artist and Artist in Tamil film industry shoots." },
  { year: "Today", title: "Founder, Galactic Growth Hub", text: "Independently managing the agency and clients across multiple industries." },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta({
      title: "About Us | Galactic Growth Hub — Digital Marketing Agency, Salem",
      description:
        "Meet Galactic Growth Hub, a Salem-based digital marketing agency founded by Sanjay. Learn our mission, vision, and why businesses across Tamil Nadu trust us to grow.",
      path: "/about",
    }),
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema(aboutFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "About", item: "/about" },
          ]),
        ),
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About" }]} />

      <Section>
        <SectionHeading
          level="h1"
          eyebrow="About"
          title={
            <>
              Who <span className="text-gradient-gold">We Are</span>
            </>
          }
          intro="Galactic Growth Hub is a digital marketing agency built on one belief: every business deserves a smart, strategic path to growth. We combine strategy, creativity, and performance marketing to help brands across Tamil Nadu and India stand out in a crowded digital world — from social media and paid ads to websites and branding."
        />
        <div className="mt-12">
          <QuickAnswer>
            Galactic Growth Hub is a digital marketing agency founded by Sanjay, based in Salem, Tamil Nadu.
            The agency's mission is to help businesses grow through data-driven digital marketing strategy,
            creative content, and performance advertising.
          </QuickAnswer>
        </div>
      </Section>

      {/* Founder */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="card-premium relative overflow-hidden p-10">
              <div className="animate-orb pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--gold)_20%,transparent),transparent_60%)]" />
              <p className="text-[11px] font-semibold tracking-[0.24em] text-primary uppercase">Founder</p>
              <p className="mt-6 text-6xl font-bold text-gradient-gold md:text-7xl">S</p>
              <h2 className="mt-6 text-3xl font-semibold">Sanjay</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Founder · Digital Marketer · Model &amp; Artist
              </p>
              <div className="mt-8 flex gap-3">
                <Quote className="size-5 shrink-0 text-primary" />
                <p className="text-sm italic leading-relaxed text-foreground/85">
                  I believe in learning continuously, creating opportunities, taking challenges, and growing
                  every single day.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="space-y-5 self-center text-sm leading-relaxed text-muted-foreground md:text-base">
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Meet the founder — Sanjay</h2>
            <p>
              Sanjay is a passionate entrepreneur, digital marketer, model, and artist from Salem, Tamil Nadu.
              He completed his M.Com and went on to pursue a specialized course in Digital Marketing, building
              a strong foundation in digital strategy, social media marketing, branding, and business growth.
            </p>
            <p>
              As the founder of Galactic Growth Hub, Sanjay independently manages the agency and works with
              clients across a variety of industries, helping them strengthen their digital presence, build
              their brands, and achieve meaningful growth through effective, results-driven marketing
              strategies.
            </p>
            <p>
              Beyond the world of business, Sanjay has also built a presence in the creative and entertainment
              industry — working on professional modeling shoots and gaining experience as a model, as well as
              contributing to the Tamil film industry as a Junior Artist and Artist in cinema shoots. This
              blend of business acumen and on-camera experience gives him a unique creative edge in
              understanding audiences, storytelling, and brand presentation.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Journey timeline */}
      <Section>
        <SectionHeading eyebrow="The Journey" title="From commerce degree to growth agency" />
        <ol className="relative mt-14 space-y-8 border-l border-border pl-8">
          <span
            aria-hidden
            className="absolute left-0 top-0 h-full w-px [background-image:var(--gradient-galaxy)] opacity-60"
          />
          {journey.map((j, i) => (
            <Reveal as="li" key={j.title} delay={i * 90} className="relative">
              <span className="absolute -left-[41px] top-1.5 size-3 rounded-full bg-primary shadow-[0_0_0_5px_color-mix(in_oklab,var(--gold)_18%,transparent)]" />
              <p className="text-[11px] font-semibold tracking-[0.24em] text-primary uppercase">{j.year}</p>
              <h3 className="mt-2 text-xl font-semibold">{j.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{j.text}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Mission & vision */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card-premium h-full p-8">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                To help businesses of every size grow with smart, data-driven digital marketing — combining
                strategy, creativity, and performance to deliver real, measurable results.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-premium h-full p-8">
              <h2 className="text-2xl font-semibold">Our Vision</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                To become a trusted growth partner for brands across India — known for creative excellence,
                honest reporting, and marketing that actually moves the needle, while building Galactic Growth
                Hub into an agency recognized for turning small businesses into strong, visible brands.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Advantages" title="Why choose Galactic Growth Hub" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((w, i) => (
            <Reveal key={w} delay={i * 60}>
              <div className="glass flex items-start gap-3 rounded-2xl p-5">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <p className="text-sm">{w}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <FaqSection faqs={aboutFaqs} />
      <CtaSection />
    </>
  );
}
