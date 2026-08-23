export const site = {
  name: "Galactic Growth Hub",
  tagline: "Grow Your Business with Smart Digital Marketing.",
  founder: "Sanjay",
  email: "galacticgrowthhub22@gmail.com",
  phone: "+91 8220632933",
  phoneHref: "tel:+918220632933",
  whatsapp: "https://wa.me/918220632933",
  instagram: "https://www.instagram.com/galactic_growth_hub",
  instagramHandle: "@galactic_growth_hub",
  city: "Salem",
  region: "Tamil Nadu",
  country: "India",
  hours: "Monday – Saturday, 10:00 AM – 7:00 PM",
  description:
    "Galactic Growth Hub is a digital marketing agency in Salem, Tamil Nadu, helping businesses across India grow through social media marketing, Meta & Google Ads, SEO, web development, and branding.",
} as const;

export type Faq = { q: string; a: string };

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: "/",
  email: site.email,
  telephone: site.phone,
  founder: { "@type": "Person", name: site.founder },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: "IN",
  },
  sameAs: [site.instagram],
  description: site.description,
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  image: "/favicon.png",
  email: site.email,
  telephone: site.phone,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 11.6643, longitude: 78.146 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  sameAs: [site.instagram],
};

export function faqSchema(faqs: readonly Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  };
}

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  type?: string;
}) {
  return [
    { title: opts.title },
    { name: "description", content: opts.description },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:type", content: opts.type ?? "website" },
    { property: "og:url", content: opts.path },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
  ];
}
