import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

import logo from "@/assets/logo.png";
import { services } from "@/lib/content";
import { site } from "@/lib/site";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/our-work", label: "Our Work" },
  { to: "/contact", label: "Contact Us" },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border bg-surface/40">
      <div className="rule-gradient absolute inset-x-0 top-0" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={logo}
            alt="Galactic Growth Hub logo"
            width={56}
            height={56}
            loading="lazy"
            className="h-14 w-14 rounded-xl object-contain"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">{site.description}</p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Galactic Growth Hub Instagram page"
              className="glass rounded-full p-2.5 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-primary"
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.2em] text-foreground">QUICK LINKS</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-muted-foreground transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.2em] text-foreground">ALL SERVICES</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  to="/services"
                  hash={s.id}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.2em] text-foreground">CONTACT</h2>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`mailto:${site.email}`} className="hover:text-primary">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={site.phoneHref} className="hover:text-primary">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                {site.city}, {site.region}, {site.country}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Galactic Growth Hub. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link to="/terms-and-conditions" className="hover:text-primary">
              Terms &amp; Conditions
            </Link>
            <Link to="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <a href="/sitemap.xml" className="hover:text-primary">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
