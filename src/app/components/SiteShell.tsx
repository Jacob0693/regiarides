import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

export function CheckIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>;
}

export function SiteHeader() {
  return (
    <header className="site-header interior-site-header">
      <Link className="brand" href="/" aria-label="Regia Rides home"><span>REGIA</span><small>RIDES</small></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <Link href="/services">Services</Link><Link href="/service-levels">Service Levels</Link><Link href="/how-it-works">How It Works</Link><Link href="/vehicles">Vehicles</Link><Link href="/providers">For Providers</Link>
      </nav>
      <div className="header-actions">
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /></summary>
          <nav aria-label="Mobile navigation"><Link href="/services">Services</Link><Link href="/service-levels">Service Levels</Link><Link href="/how-it-works">How It Works</Link><Link href="/vehicles">Vehicles</Link><Link href="/providers">For Providers</Link><Link href="/faq">FAQ</Link></nav>
        </details>
        <Link className="header-cta" href="/#quote-entry">Get Quotes <ArrowIcon /></Link>
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
          <div><strong>Explore</strong><Link href="/services">Services</Link><Link href="/how-it-works">How It Works</Link><Link href="/vehicles">Vehicles</Link></div>
          <div><strong>Company</strong><Link href="/providers">For Providers</Link><Link href="/service-levels">Service Levels</Link><Link href="/faq">FAQ &amp; Help</Link></div>
          <div><strong>Legal</strong><span className="footer-pending">Terms — publishing later</span><span className="footer-pending">Privacy — publishing later</span></div>
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

export function FinalCta({ title = "Ready to compare transportation options for your trip?" }: { title?: string }) {
  return (
    <section className="interior-final-cta">
      <div><p className="eyebrow">READY WHEN YOUR PLANS ARE</p><h2>{title}</h2></div>
      <Link className="button button-primary" href="/#quote-entry">Start Your Request <ArrowIcon /></Link>
    </section>
  );
}
