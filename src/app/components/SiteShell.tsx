import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

export function CheckIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>;
}

const tripTypes = [
  { href: "/services/airport-transfer", label: "Airport Transfer", copy: "Prearranged airport pickup or drop-off" },
  { href: "/services/point-to-point", label: "Point-to-Point", copy: "One pickup and one destination" },
  { href: "/services/multiple-transfers", label: "Multiple Transfers", copy: "Several rides in one request" },
  { href: "/services/hourly-transportation", label: "Hourly Transportation", copy: "Flexible, time-based service" },
  { href: "/services/long-distance", label: "Long Distance", copy: "Intercity and regional travel" },
  { href: "/services/custom-transportation", label: "Custom Transportation", copy: "Built around your requirements" },
];

function NavChevron() {
  return <svg viewBox="0 0 12 8" aria-hidden="true"><path d="m1 1 5 5 5-5" /></svg>;
}

export function TripTypesDropdown() {
  return (
    <div className="nav-dropdown">
      <Link className="nav-dropdown-trigger" href="/services" aria-haspopup="true">Trip Types <NavChevron /></Link>
      <div className="nav-dropdown-panel" aria-label="Trip types">
        {tripTypes.map((item) => (
          <Link href={item.href} key={item.href}><span>{item.label}</span><small>{item.copy}</small></Link>
        ))}
        <Link className="nav-dropdown-all" href="/services">View All Trip Types <ArrowIcon /></Link>
      </div>
    </div>
  );
}

export function MobileTripTypesMenu() {
  return (
    <details className="mobile-trip-types">
      <summary>Trip Types</summary>
      <div>
        {tripTypes.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        <Link className="mobile-trip-types-all" href="/services">View All Trip Types</Link>
      </div>
    </details>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header interior-site-header">
      <Link className="brand" href="/" aria-label="Regia Rides home"><span>REGIA</span><small>RIDES</small></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/ride-experience">Ride Experience</Link><TripTypesDropdown /><Link href="/how-it-works">How It Works</Link><Link href="/vehicles">Vehicles</Link><Link href="/faq">FAQ</Link>
      </nav>
      <div className="header-actions">
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /></summary>
          <nav aria-label="Mobile navigation"><Link href="/ride-experience">Ride Experience</Link><MobileTripTypesMenu /><Link href="/how-it-works">How It Works</Link><Link href="/vehicles">Vehicles</Link><Link href="/faq">FAQ</Link><Link href="/request">Get Quotes</Link></nav>
        </details>
        <Link className="header-cta" href="/request">Get Quotes <ArrowIcon /></Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-main">
        <div><Link className="brand footer-brand" href="/"><span>REGIA</span><small>RIDES</small></Link><p>Premium private transportation, compared in one place.</p></div>
        <div className="footer-links">
          <div><strong>Explore</strong><Link href="/ride-experience">Ride Experience</Link><Link href="/services">Trip Types</Link><Link href="/how-it-works">How It Works</Link><Link href="/vehicles">Vehicles</Link></div>
          <div><strong>Company</strong><Link href="/about">About Regia Rides</Link><Link href="/providers">For Providers</Link><Link href="/faq">FAQ &amp; Help</Link></div>
          <div><strong>Legal</strong><Link href="/terms">Terms of Use</Link><Link href="/privacy">Privacy Policy</Link><Link href="/cancellation">Cancellation &amp; Changes</Link><Link href="/accessibility">Accessibility</Link><Link href="/cookies">Cookie Policy</Link></div>
        </div>
      </div>
      <div className="footer-legal"><p>Regia Rides is a quote and booking platform connecting customers with participating independent transportation providers. Transportation is performed by the selected provider, not by Regia Rides.</p><small>© {new Date().getFullYear()} Regia Mobility Group LLC</small></div>
    </footer>
  );
}

export function InteriorHero({ eyebrow, title, copy, image, imageAlt = "", children }: { eyebrow: string; title: string; copy: string; image: string; imageAlt?: string; children?: ReactNode }) {
  return (
    <section className="interior-hero">
      <Image className="interior-hero-image" src={image} alt={imageAlt} fill priority sizes="100vw" />
      <div className="interior-hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
        {children}
      </div>
    </section>
  );
}

export function InteriorLayout({ children }: { children: ReactNode }) {
  return <main className="interior-page"><SiteHeader />{children}<SiteFooter /></main>;
}

export function FinalCta({ title = "Ready to compare transportation options for your trip?", href = "/request" }: { title?: string; href?: string }) {
  return (
    <section className="interior-final-cta">
      <div><p className="eyebrow">READY WHEN YOUR PLANS ARE</p><h2>{title}</h2></div>
      <Link className="button button-primary" href={href}>Start Your Request <ArrowIcon /></Link>
    </section>
  );
}
