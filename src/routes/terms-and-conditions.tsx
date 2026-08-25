import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { Breadcrumbs, Section, SectionHeading } from "@/components/sections";
import { pageMeta, site } from "@/lib/site";

const sections = [
  {
    title: "1. Services",
    body: [
      "Galactic Growth Hub provides digital marketing services including but not limited to social media marketing, graphic design, video editing, paid advertising (Meta & Google Ads), SEO, website development, and branding. The exact scope of work for each client is defined in the agreed proposal or service package.",
    ],
  },
  {
    title: "2. Payment Terms",
    list: [
      "A 50% advance payment is required before work begins on any project or monthly package.",
      "The remaining balance is due before the end of the service month.",
      "Monthly plans automatically renew every 30 days unless cancelled in writing at least 7 days before renewal.",
      "Advertising budgets (ad spend) for Meta Ads and Google Ads are separate from the monthly service fee and are billed or paid directly by the client to the ad platform, unless otherwise agreed.",
    ],
  },
  {
    title: "3. Content Approval",
    body: [
      "All social media posts, ad creatives, and marketing content require client approval before publishing. Galactic Growth Hub is not responsible for delays caused by late client feedback or approval.",
    ],
  },
  {
    title: "4. Client Responsibilities",
    list: [
      "Providing timely access to necessary accounts (social media pages, ad accounts, website, etc.)",
      "Supplying product information, images, and brand assets required for content creation",
      "Reviewing and approving content/campaigns within agreed timelines",
    ],
  },
  {
    title: "5. Refund Policy",
    body: [
      "Advance payments are non-refundable once work has commenced. Refunds for undelivered work, if applicable, will be assessed on a case-by-case basis and communicated in writing.",
    ],
  },
  {
    title: "6. Campaign Performance",
    body: [
      "While Galactic Growth Hub uses data-driven strategies and industry best practices, we do not guarantee specific results (such as exact lead numbers, sales figures, or follower counts), as these depend on multiple external factors including market conditions, competition, and platform algorithm changes.",
    ],
  },
  {
    title: "7. Intellectual Property",
    body: [
      "Upon full payment, clients receive rights to the final creative deliverables produced specifically for their brand. Galactic Growth Hub retains the right to showcase completed work in its portfolio, website, and social media, unless the client requests confidentiality in writing.",
    ],
  },
  {
    title: "8. Termination",
    body: [
      "Either party may terminate an ongoing monthly engagement with at least 7 days' written notice. Any outstanding payments for work completed up to the termination date remain payable.",
    ],
  },
  {
    title: "9. Limitation of Liability",
    body: [
      "Galactic Growth Hub is not liable for indirect, incidental, or consequential damages arising from the use of our services, including but not limited to loss of profits, data, or business opportunities.",
    ],
  },
  {
    title: "10. Changes to Terms",
    body: [
      "Galactic Growth Hub reserves the right to update these Terms at any time. Continued use of our services after changes are posted constitutes acceptance of the revised Terms.",
    ],
  },
];

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: pageMeta({
      title: "Terms & Conditions | Galactic Growth Hub",
      description:
        "Read the Terms & Conditions for using Galactic Growth Hub's digital marketing services, including payment terms, content approval, and liability.",
      path: "/terms-and-conditions",
    }),
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Terms & Conditions" }]} />
      <Section className="max-w-4xl">
        <SectionHeading level="h1" eyebrow="Legal" title="Terms & Conditions" />
        <Reveal className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p className="text-xs italic">Last Updated: 23 August 2026</p>
          <p>
            These Terms &amp; Conditions ("Terms") govern your use of the Galactic Growth Hub website and
            services. By engaging our services or using this website, you agree to the following terms.
          </p>
        </Reveal>

        <div className="mt-10 space-y-8">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 40}>
              <h2 className="text-xl font-semibold">{s.title}</h2>
              {s.body?.map((b) => (
                <p key={b} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {b}
                </p>
              ))}
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
            <h2 className="text-xl font-semibold">11. Contact</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              For questions about these Terms, contact us at{" "}
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
