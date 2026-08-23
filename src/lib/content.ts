import type { Faq } from "./site";

export const services = [
  {
    id: "social-media-marketing",
    number: "01",
    title: "Social Media Marketing",
    summary: "Scroll-stopping content, community growth and brand visibility on Instagram & Facebook.",
    items: [
      "Instagram Management",
      "Facebook Management",
      "Content Strategy",
      "Reels & Short Video Marketing",
      "Daily Story Updates",
      "Audience Engagement",
    ],
  },
  {
    id: "graphic-design",
    number: "02",
    title: "Graphic Design Services",
    summary: "Design that makes your brand instantly recognisable across every feed.",
    items: [
      "Social Media Posters",
      "Festival Creatives",
      "Offer Banners",
      "Product Posters",
      "Carousel Designs",
      "Brand Identity Designs",
    ],
  },
  {
    id: "video-editing",
    number: "03",
    title: "Video Editing Services",
    summary: "Short-form video built to hold attention and convert viewers into customers.",
    items: [
      "Instagram Reels",
      "YouTube Shorts",
      "Promotional Videos",
      "Product Videos",
      "Motion Graphics",
    ],
  },
  {
    id: "paid-advertising",
    number: "04",
    title: "Meta & Google Ads Management",
    summary: "Performance-driven ad campaigns optimised for the best return on ad spend.",
    items: [
      "Facebook Ads",
      "Instagram Ads",
      "Lead Generation Campaigns",
      "Website Traffic Campaigns",
      "Sales Campaigns",
      "Google Search Ads",
      "Display Ads",
      "YouTube Ads",
    ],
  },
  {
    id: "seo",
    number: "05",
    title: "SEO Services",
    summary: "Get found on Google by the customers already searching for what you sell.",
    items: [
      "Website SEO",
      "Local SEO",
      "Google Business Profile Optimization",
      "Keyword Research",
      "Monthly SEO Reports",
    ],
  },
  {
    id: "website-development",
    number: "06",
    title: "Website Development",
    summary: "Fast, mobile-first websites built to turn traffic into enquiries.",
    items: ["Business Websites", "Landing Pages", "Portfolio Websites", "Ecommerce Websites"],
  },
  {
    id: "branding",
    number: "07",
    title: "Branding & Logo Design",
    summary: "A complete visual identity that makes a small business look established.",
    items: [
      "Logo Design",
      "Brand Guidelines",
      "Business Profile Design",
      "Brochure Design",
      "Company Presentation Design",
    ],
  },
] as const;

export const processSteps = [
  { title: "Business Analysis", text: "We learn your product, margins, audience and goals before anything else." },
  { title: "Competitor Research", text: "We map what's working in your category and where the gaps are." },
  { title: "Content Planning", text: "A monthly content calendar aligned to offers, festivals and launches." },
  { title: "Creative Design", text: "Posters, carousels and reels produced to a consistent brand system." },
  { title: "Campaign Launch", text: "Organic publishing plus Meta and Google campaigns go live." },
  { title: "Optimization", text: "Creatives, audiences and budgets tuned against real performance data." },
  { title: "Monthly Performance Report", text: "Transparent reporting on reach, leads, spend and next steps." },
] as const;

export const whyChooseUs = [
  "Experienced Digital Marketing Team in Tamil Nadu",
  "Creative Content Strategy",
  "Performance-Based Marketing",
  "Transparent Monthly Reports",
  "Affordable Digital Marketing Packages",
  "Fast, Responsive Support",
  "Dedicated Account Manager",
] as const;

export const plans = [
  {
    name: "Starter",
    price: "₹10,000",
    period: "/ month",
    best: "Best for small businesses and new brands wanting a consistent, professional social media presence.",
    featured: false,
    features: [
      "12 Social Media Posts per month",
      "8 Reels per month",
      "Regular Story Updates",
      "Basic Graphic Design (posters, banners)",
      "Monthly Performance Report",
    ],
  },
  {
    name: "Growth",
    price: "₹20,000",
    period: "/ month",
    best: "Best for growing businesses ready to add paid advertising and stronger creative output.",
    featured: true,
    features: [
      "20 Social Media Posts per month",
      "12 Reels per month",
      "Meta Ads Management (Facebook & Instagram)",
      "Enhanced Graphic Design",
      "Video Editing",
      "Monthly Performance Report",
    ],
  },
  {
    name: "Premium",
    price: "₹35,000",
    period: "/ month",
    best: "Best for established businesses wanting full-funnel marketing across social, search and web.",
    featured: false,
    features: [
      "Unlimited Creatives",
      "Reels Production",
      "Meta Ads Management",
      "Google Ads Management",
      "Search Engine Optimization (SEO)",
      "Website Updates",
      "Priority Support",
      "Monthly Strategy Meeting",
    ],
  },
] as const;

export const projects = [
  {
    slug: "grm-maternity-store",
    name: "GRM Maternity Store",
    industry: "Maternity & Baby Fashion",
    status: "Completed",
    alt: "GRM Maternity Store social media marketing by Galactic Growth Hub",
    instagram: "https://www.instagram.com/grm.maternitystore",
    intro:
      "GRM Maternity Store is a maternity and kids'-wear brand. Galactic Growth Hub supported the brand's digital presence with:",
    scope: [
      "Social Media Management (Instagram & Facebook)",
      "Content Creation & Product Photography Styling Direction",
      "Graphic Design — Posters, Offer Banners, Product Creatives",
      "Reels & Short-Form Video Content",
      "Audience Engagement & Community Growth",
    ],
    tags: ["Social Media", "Graphic Design", "Video Editing"],
  },
  {
    slug: "eyal-muzik",
    name: "Eyal Muzik",
    industry: "Music & Entertainment",
    status: "Completed",
    alt: "Eyal Muzik promotional content by Galactic Growth Hub",
    instagram: "https://www.instagram.com/eyalmuzik",
    intro: "Eyal Muzik is a music and entertainment brand. Galactic Growth Hub's work with the brand included:",
    scope: [
      "Social Media Strategy & Management",
      "Content Planning for Releases & Announcements",
      "Promotional Graphic Design",
      "Reels & Video Content Editing",
      "Audience Engagement & Fan Community Building",
    ],
    tags: ["Social Media", "Graphic Design", "Video Editing"],
  },
  {
    slug: "berlin-mens-clothing",
    name: "Berlin Men's Clothing",
    industry: "Men's Fashion & Apparel",
    status: "Current Project",
    alt: "Berlin Men's Clothing Instagram campaign by Galactic Growth Hub",
    instagram: "https://www.instagram.com/berlin_mens_clothing",
    intro: "Berlin Men's Clothing is an ongoing project with Galactic Growth Hub, covering:",
    scope: [
      "Social Media Marketing (Instagram Growth & Management)",
      "Product Photography-Led Content & Posters",
      "Reels & Video Editing for Product Launches",
      "Paid Advertising Support (Meta Ads)",
      "Brand Content Strategy & Audience Engagement",
    ],
    tags: ["Social Media", "Paid Ads", "Video Editing"],
  },
] as const;

export const homeFaqs: Faq[] = [
  {
    q: "What does Galactic Growth Hub do?",
    a: "Galactic Growth Hub is a digital marketing agency that offers social media marketing, Meta & Google Ads management, SEO, website development, video editing, and branding for small and growing businesses.",
  },
  {
    q: "Where is Galactic Growth Hub located?",
    a: "Galactic Growth Hub is based in Salem, Tamil Nadu, and serves clients across India through remote digital marketing services.",
  },
  {
    q: "How much does digital marketing cost with Galactic Growth Hub?",
    a: "Monthly packages start at ₹10,000 for the Starter Plan, ₹20,000 for the Growth Plan, and ₹35,000 for the Premium Plan. Custom packages are also available.",
  },
  {
    q: "Who founded Galactic Growth Hub?",
    a: "Galactic Growth Hub was founded by Sanjay, a digital marketer and entrepreneur from Salem, Tamil Nadu.",
  },
];

export const aboutFaqs: Faq[] = [
  {
    q: "Who is the founder of Galactic Growth Hub?",
    a: "Galactic Growth Hub was founded by Sanjay, a digital marketer, entrepreneur, and M.Com graduate from Salem, Tamil Nadu.",
  },
  {
    q: "What is Galactic Growth Hub's mission?",
    a: "To help businesses grow with smart, data-driven digital marketing that combines strategy, creativity, and performance for measurable results.",
  },
  {
    q: "Is Galactic Growth Hub a Tamil Nadu-based agency?",
    a: "Yes. Galactic Growth Hub is headquartered in Salem, Tamil Nadu, and serves clients throughout India.",
  },
];

export const serviceFaqs: Faq[] = [
  {
    q: "What digital marketing services does Galactic Growth Hub provide?",
    a: "Social media marketing, graphic design, video editing, Meta & Google Ads management, SEO, website development, and branding.",
  },
  {
    q: "Does Galactic Growth Hub manage Google Ads and Meta Ads?",
    a: "Yes. Galactic Growth Hub manages Facebook Ads, Instagram Ads, Google Search Ads, Display Ads, and YouTube Ads for lead generation, traffic, and sales campaigns.",
  },
  {
    q: "What is Galactic Growth Hub's process for a new project?",
    a: "A seven-step process: business analysis, competitor research, content planning, creative design, campaign launch, optimization, and monthly performance reporting.",
  },
];

export const pricingFaqs: Faq[] = [
  {
    q: "How much does Galactic Growth Hub charge per month?",
    a: "Plans range from ₹10,000/month (Starter) to ₹35,000/month (Premium), depending on the services and ad platforms included.",
  },
  {
    q: "Is advertising budget included in the package price?",
    a: "No. Meta and Google ad spend is separate from the monthly management fee and is billed independently.",
  },
  {
    q: "Can I get a custom digital marketing package?",
    a: "Yes. Galactic Growth Hub builds custom packages based on your budget, goals, and industry — contact us for a free consultation.",
  },
  {
    q: "What is the payment structure?",
    a: "A 50% advance payment is required to start work, with the remaining 50% due before month-end. Plans renew automatically every 30 days.",
  },
];

export const workFaqs: Faq[] = [
  {
    q: "What brands has Galactic Growth Hub worked with?",
    a: "GRM Maternity Store, Eyal Muzik, and Berlin Men's Clothing (an ongoing project), spanning maternity fashion, music, and men's apparel.",
  },
  {
    q: "What kind of results can I expect from Galactic Growth Hub?",
    a: "Clients typically see improved brand awareness, higher engagement, more website traffic, better quality leads, and increased sales through consistent content and paid advertising.",
  },
];

export const contactFaqs: Faq[] = [
  {
    q: "How can I contact Galactic Growth Hub?",
    a: "Email galacticgrowthhub22@gmail.com, call or WhatsApp +91 8220632933, or message @galactic_growth_hub on Instagram.",
  },
  {
    q: "What are Galactic Growth Hub's business hours?",
    a: "Monday to Saturday, 10:00 AM to 7:00 PM.",
  },
  {
    q: "Does Galactic Growth Hub offer a free consultation?",
    a: "Yes, businesses can request a free consultation through the Contact page before choosing a plan.",
  },
];
