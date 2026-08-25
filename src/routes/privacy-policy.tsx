import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { Breadcrumbs, Section, SectionHeading } from "@/components/sections";
import { pageMeta, site } from "@/lib/site";

const sections = [
  {
    title: "1. Information We Collect",
    list: [
      "Contact details you provide, such as name, email address, phone number, and business information, when you fill out a contact or consultation form",
      "Communication records, including emails, messages, and call notes related to your inquiry or project",
      "Basic website usage data (such as pages visited and browser type) collected automatically through standard analytics tools",
    ],
  },
  {
    title: "2. How We Use Your Information",
    list: [
      "To respond to inquiries and provide consultations",
      "To deliver and manage the services you've engaged us for",
      "To send updates, reports, or communication related to your ongoing project",
      "To improve our website and services",
    ],
  },
  {
    title: "3. Sharing of Information",
    body: "We do not sell, rent, or trade your personal information. Information may be shared only with trusted third-party platforms necessary to deliver services (such as Meta Ads Manager or Google Ads), or if required by law.",
  },
  {
    title: "4. Data Security",
    body: "We take reasonable measures to protect your information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "5. Cookies",
    body: "Our website may use cookies to improve user experience and understand site traffic. You can choose to disable cookies through your browser settings; this may affect certain website features.",
  },
  {
    title: "6. Third-Party Links",
    body: "Our website may contain links to third-party sites, including social media platforms. We are not responsible for the privacy practices or content of those external sites.",
  },
  {
    title: "7. Your Rights",
    body: "You may request to access, correct, or delete your personal information held by us at any time by contacting us directly.",
  },
  {
    title: "8. Children's Privacy",
    body: "Our services are intended for businesses and individuals above 18 years of age. We do not knowingly collect personal information from minors.",
  },
  {
    title: "9. Changes to This Policy",
    body: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last Updated" date.',
  },
];

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: pageMeta({
      title: "Privacy Policy | Galactic Growth Hub",
      description:
        "Learn how Galactic Growth Hub collects, uses, and protects your personal information when you visit our website or use our digital marketing services.",
      path: "/privacy-policy",
    }),
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]} />
      <Section className="max-w-4xl">
        <SectionHeading level="h1" eyebrow="Legal" title="Privacy Policy" />
        <Reveal className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p className="text-xs italic">Last Updated: 23 August 2026</p>
          <p>
            Galactic Growth Hub ("we", "us", "our") respects your privacy. This Privacy Policy explains how we
            collect, use, and protect information when you visit our website or engage our services.
          </p>
        </Reveal>

        <div className="mt-10 space-y-8">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 40}>
              <h2 className="text-xl font-semibold">{s.title}</h2>
              {s.body && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>}
              {s.list && (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                  {s.list.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}

          <Reveal>
            <h2 className="text-xl font-semibold">10. Contact Us</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              For any questions about this Privacy Policy or how your information is handled, contact us at{" "}
              <a href={`mailto:${site.email}`} className="text-primary hover:underline">
                {site.email}
              </a>{" "}
              or {site.phone}.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
