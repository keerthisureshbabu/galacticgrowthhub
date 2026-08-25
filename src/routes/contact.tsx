import { createFileRoute } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

import { GAnchor, GButton } from "@/components/GButton";
import { Reveal } from "@/components/Reveal";
import {
  Breadcrumbs,
  FaqSection,
  QuickAnswer,
  Section,
  SectionHeading,
} from "@/components/sections";
import { contactFaqs } from "@/lib/content";
import { breadcrumbSchema, faqSchema, localBusinessSchema, pageMeta, site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: pageMeta({
      title: "Contact Us | Galactic Growth Hub — Digital Marketing Agency Salem",
      description:
        "Get in touch with Galactic Growth Hub for a free digital marketing consultation. Call, email, or message us on Instagram — based in Salem, Tamil Nadu.",
      path: "/contact",
    }),
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(contactFaqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Contact", item: "/contact" },
          ]),
        ),
      },
    ],
  }),
  component: Contact,
});

const fieldClass =
  "w-full rounded-xl border border-input bg-surface/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60";

function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Business: ${data.get("business")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Service: ${data.get("service")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `New enquiry from ${data.get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />

      <Section>
        <SectionHeading
          level="h1"
          eyebrow="Contact"
          title={
            <>
              Let's Grow Your Business <span className="text-gradient-galaxy">Together!</span>
            </>
          }
          intro="Have a project in mind or want to know which plan fits your business best? Reach out — we'd love to hear from you."
        />
        <div className="mt-12">
          <QuickAnswer>
            You can reach Galactic Growth Hub by email at {site.email}, by phone/WhatsApp at {site.phone}, or
            on Instagram {site.instagramHandle}. The agency is based in Salem, Tamil Nadu, and is open
            Monday–Saturday, 10:00 AM–7:00 PM.
          </QuickAnswer>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
              { icon: Phone, label: "Phone / WhatsApp", value: site.phone, href: site.phoneHref },
              {
                icon: Instagram,
                label: "Instagram",
                value: site.instagramHandle,
                href: site.instagram,
              },
              { icon: MapPin, label: "Location", value: `${site.city}, ${site.region}, ${site.country}` },
              { icon: Clock, label: "Business Hours", value: site.hours },
            ].map((c) => (
              <div key={c.label} className="card-premium flex items-start gap-4 p-5">
                <span className="glass rounded-xl p-2.5 text-primary">
                  <c.icon className="size-4" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-foreground hover:text-primary"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-sm text-foreground">{c.value}</p>
                  )}
                </div>
              </div>
            ))}

            <GAnchor href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="w-full">
              <MessageCircle className="size-4" /> Chat on WhatsApp
            </GAnchor>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="card-premium space-y-4 p-8 md:p-10">
              <h2 className="text-2xl font-semibold">Send us a message</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs text-muted-foreground">
                    Full Name
                  </label>
                  <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="business" className="mb-1.5 block text-xs text-muted-foreground">
                    Business Name
                  </label>
                  <input id="business" name="business" className={fieldClass} placeholder="Your business" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs text-muted-foreground">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={fieldClass}
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-xs text-muted-foreground">
                    Phone Number
                  </label>
                  <input id="phone" name="phone" className={fieldClass} placeholder="+91" />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="mb-1.5 block text-xs text-muted-foreground">
                  Service Interested In
                </label>
                <select id="service" name="service" className={fieldClass} defaultValue="Social Media">
                  {["Social Media", "Paid Ads", "SEO", "Website", "Branding", "Other"].map((s) => (
                    <option key={s} value={s} className="bg-surface">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={fieldClass}
                  placeholder="Tell us about your business and goals"
                />
              </div>
              <GButton type="submit" className="w-full">
                Send Message
              </GButton>
              {sent && (
                <p className="text-center text-xs text-primary">
                  Your email app should now be open with your message ready to send.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </Section>

      <FaqSection faqs={contactFaqs} />
    </>
  );
}
