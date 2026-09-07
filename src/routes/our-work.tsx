import { createFileRoute } from "@tanstack/react-router";
import { Check, Instagram } from "lucide-react";
import { useMemo, useState } from "react";

import { ReelPlayer } from "@/components/ReelPlayer";
import { Reveal } from "@/components/Reveal";
import {
  Breadcrumbs,
  CtaSection,
  FaqSection,
  QuickAnswer,
  Section,
  SectionHeading,
} from "@/components/sections";
import { projects, workFaqs } from "@/lib/content";
import { berlinReels, clientLogos, projectImages } from "@/lib/media";
import { breadcrumbSchema, faqSchema, pageMeta } from "@/lib/site";
import { cn } from "@/lib/utils";

const filters = ["All", "Social Media", "Graphic Design", "Video Editing", "Paid Ads"] as const;

export const Route = createFileRoute("/our-work")({
  head: () => ({
    meta: pageMeta({
      title: "Our Work | Galactic Growth Hub Digital Marketing Portfolio",
      description:
        "See how Galactic Growth Hub has helped brands like GRM Maternity Store, Eyal Muzik, and Berlin Men's Clothing grow through social media, ads, and content marketing.",
      path: "/our-work",
    }),
    links: [{ rel: "canonical", href: "/our-work" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema(workFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Our Work", item: "/our-work" },
          ]),
        ),
      },
    ],
  }),
  component: OurWork,
});

function OurWork() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const shown = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tags.some((t) => t === filter))),
    [filter],
  );

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Our Work" }]} />

      <Section>
        <SectionHeading
          level="h1"
          eyebrow="Portfolio"
          title={
            <>
              Our <span className="text-gradient-gold">Work</span>
            </>
          }
          intro="A closer look at the brands we've partnered with and the services we provide for each."
        />
        <div className="mt-12">
          <QuickAnswer>
            Galactic Growth Hub's portfolio includes GRM Maternity Store (maternity &amp; baby fashion), Eyal
            Muzik (music &amp; entertainment), and Berlin Men's Clothing (men's fashion, current project) —
            covering social media management, content creation, graphic design, video editing, and paid
            advertising.
          </QuickAnswer>
        </div>
      </Section>

      {/* Client logos */}
      <Section>
        <Reveal className="glass flex flex-wrap items-center justify-center gap-8 rounded-3xl px-8 py-8 md:gap-14">
          {projects.map((p) => (
            <img
              key={p.slug}
              src={clientLogos[p.slug]}
              alt={`${p.name} logo`}
              width={160}
              height={160}
              loading="lazy"
              className="h-16 w-auto rounded-xl object-contain opacity-80 transition-opacity duration-300 hover:opacity-100 md:h-20"
            />
          ))}
        </Reveal>
      </Section>

      <Section>
        <Reveal className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                "rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-300",
                filter === f
                  ? "text-primary-foreground [background-image:var(--gradient-gold)]"
                  : "glass text-muted-foreground hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 space-y-8">
          {shown.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <article id={p.slug} className="card-premium group scroll-mt-28 overflow-hidden">
                <div className="grid gap-0 lg:grid-cols-2">
                  <div className="overflow-hidden">
                    <img
                      src={projectImages[p.slug]}
                      alt={p.alt}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <img
                        src={clientLogos[p.slug]}
                        alt={`${p.name} logo`}
                        width={96}
                        height={96}
                        loading="lazy"
                        className="size-12 rounded-lg object-contain"
                      />
                      <span className="text-[10px] font-semibold tracking-[0.24em] text-primary uppercase">
                        {p.industry}
                      </span>
                      <span className="glass rounded-full px-3 py-1 text-[10px] tracking-wide text-muted-foreground">
                        {p.status}
                      </span>
                    </div>
                    <h2 className="mt-3 text-3xl font-semibold">{p.name}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.intro}</p>
                    <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                      {p.scope.map((s) => (
                        <li key={s} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={p.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary transition-transform duration-300 hover:translate-x-1"
                    >
                      <Instagram className="size-4" />
                      View on Instagram
                    </a>
                  </div>
                </div>

                {p.slug === "berlin-mens-clothing" && (
                  <div className="border-t border-border/60 p-8 md:p-10">
                    <h3 className="text-sm font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                      Reels we produced
                    </h3>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {berlinReels.map((r) => (
                        <ReelPlayer key={r.src} reel={r} />
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <FaqSection faqs={workFaqs} />
      <CtaSection title="Your brand could be next" text="Let's build a content and advertising engine for your business." />
    </>
  );
}
