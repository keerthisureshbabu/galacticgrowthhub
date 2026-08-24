import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { GLink } from "@/components/GButton";
import { Eyebrow } from "@/components/sections";
import { cn } from "@/lib/utils";

const banners = [
  {
    headline: "Grow Your Business with Smart Digital Marketing",
    sub: "From strategy to execution, we help Tamil Nadu businesses build online visibility, generate leads, and drive real sales growth.",
    cta: { label: "Get a Free Consultation", to: "/contact" },
  },
  {
    headline: "Social Media Marketing & Creative That Converts",
    sub: "Scroll-stopping reels, posts, and design from an experienced social media marketing agency in India.",
    cta: { label: "View Our Work", to: "/our-work" },
  },
  {
    headline: "Meta & Google Ads Management That Delivers ROI",
    sub: "Performance-driven ad campaigns managed by experts, optimized for the best return on your ad spend.",
    cta: { label: "See Our Pricing Plans", to: "/pricing" },
  },
];

const floaters = [
  { label: "SEO", className: "left-[6%] top-[22%]", delay: "0s" },
  { label: "META ADS", className: "right-[8%] top-[16%]", delay: "-1.4s" },
  { label: "GOOGLE ADS", className: "right-[14%] bottom-[18%]", delay: "-2.8s" },
  { label: "SOCIAL MEDIA", className: "left-[10%] bottom-[22%]", delay: "-2s" },
  { label: "GROWTH", className: "left-[46%] top-[8%]", delay: "-3.6s" },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % banners.length), 6000);
    return () => clearInterval(id);
  }, []);

  const banner = banners[index];

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {floaters.map((f) => (
          <span
            key={f.label}
            style={{ animationDelay: f.delay }}
            className={cn(
              "animate-float-slow glass absolute hidden rounded-full px-4 py-2 text-[10px] font-semibold tracking-[0.25em] text-primary/80 md:block",
              f.className,
            )}
          >
            {f.label}
          </span>
        ))}
      </div>

      <div className="mx-auto max-w-5xl px-5 pt-40 pb-20 text-center md:pt-48 md:pb-28">
        <div className="animate-rise">
          <Eyebrow>Digital Marketing Agency · Salem, Tamil Nadu</Eyebrow>
        </div>

        <h1 className="mt-8 text-balance text-5xl leading-[0.95] font-bold tracking-tight md:text-7xl lg:text-8xl">
          <span className="animate-rise block">DIGITAL MARKETING</span>
          <span className="animate-rise block [animation-delay:120ms]">THAT MOVES YOUR</span>
          <span className="animate-rise block text-gradient-galaxy [animation-delay:240ms]">
            BUSINESS FORWARD.
          </span>
        </h1>

        <p className="animate-rise mx-auto mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground [animation-delay:360ms] md:text-lg">
          Galactic Growth Hub is a digital marketing agency in Salem, Tamil Nadu helping businesses grow
          through social media, paid advertising, SEO, websites and branding.
        </p>

        <div className="animate-rise mt-10 flex flex-wrap justify-center gap-4 [animation-delay:460ms]">
          <GLink to="/contact">
            Get Free Consultation <ArrowRight className="size-4" />
          </GLink>
          <GLink to="/our-work" variant="ghost">
            View Our Work
          </GLink>
        </div>

        {/* Rotating banner messages */}
        <div className="animate-rise mt-16 [animation-delay:560ms]">
          <div key={index} className="glass animate-rise mx-auto max-w-3xl rounded-3xl px-6 py-8 md:px-10">
            <h2 className="text-balance text-xl font-semibold md:text-2xl">{banner.headline}</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {banner.sub}
            </p>
            <GLink to={banner.cta.to} variant="outline" className="mt-6 px-6 py-2.5 text-xs">
              {banner.cta.label}
            </GLink>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {banners.map((b, i) => (
              <button
                key={b.headline}
                type="button"
                aria-label={`Show banner ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === index ? "w-10 bg-primary" : "w-4 bg-border hover:bg-muted-foreground",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
