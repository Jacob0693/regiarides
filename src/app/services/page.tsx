import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, FinalCta, InteriorHero, InteriorLayout } from "../components/SiteShell";
import { services } from "../content/site-content";

export const metadata: Metadata = {
  title: "Private Transportation Services",
  description: "Compare provider quotes for airport transfers, point-to-point rides, hourly transportation, multiple transfers, long-distance trips, and custom transportation.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <InteriorLayout>
      <InteriorHero eyebrow="TRANSPORTATION FORMATS" title="Choose the structure that fits your trip." copy="Start with the transportation format that best describes your schedule. Each request gathers the details participating providers need to prepare a clear quote." image="/images/regia-service-point-to-point-v2.webp" />
      <section className="interior-section services-index-section">
        <div className="interior-section-heading"><p className="eyebrow">EXPLORE THE SERVICES</p><h2>From one planned ride to a complex itinerary.</h2></div>
        <div className="interior-service-grid">
          {services.map((service) => (
            <Link className="interior-service-card" href={`/services/${service.slug}`} key={service.slug}>
              <div className="interior-service-image"><Image src={service.image} alt={service.alt} fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
              <div className="interior-service-copy"><span>{service.number}</span><h3>{service.title}</h3><p>{service.summary}</p><small>{service.detail}</small><ArrowIcon /></div>
            </Link>
          ))}
        </div>
      </section>
      <FinalCta />
    </InteriorLayout>
  );
}
