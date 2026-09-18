import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, CheckIcon, FinalCta, InteriorHero, InteriorLayout } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "About Regia Rides",
  description: "Learn why Regia Rides was created and how we help customers plan, compare, and select premium private transportation with greater clarity.",
  alternates: { canonical: "/about" },
};

const process = [
  ["01", "Prepare one detailed request", "Share the route, timing, passengers, luggage, vehicle preferences, and the service details that matter to the journey."],
  ["02", "Compare complete offers", "Review up to three available quotes by vehicle, included services, provider terms, and total quoted price."],
  ["03", "Choose with confidence", "Select the option that best fits the traveler, the occasion, and the priorities of the trip."],
] as const;

const commitments = [
  ["Clarity before selection", "We want customers to understand the vehicle, included services, terms, and price before choosing a ride."],
  ["Details shaped around the journey", "Passenger needs, luggage, flight information, stops, assistance, and special requests should inform every useful quote."],
  ["Customer-directed choice", "Customers can compare participating providers and choose the complete offer that works for them—not simply accept the first available match."],
  ["Service worth planning for", "We are building a more considered experience for important journeys, with professional providers and expectations established in advance."],
] as const;

export default function AboutPage() {
  return (
    <InteriorLayout>
      <InteriorHero
        eyebrow="ABOUT REGIA RIDES"
        title={"A clearer way to plan\npremium transportation."}
        copy="Regia Rides helps customers prepare one detailed request, compare available quotes from participating independent transportation providers, and choose the ride that best fits the journey."
        image="/images/regia-hotel-arrival.webp"
        imageAlt="Premium black vehicle arriving at an illuminated hotel entrance"
      >
        <Link className="button button-primary" href="/request">
          Start Your Request <ArrowIcon />
        </Link>
      </InteriorHero>

      <section className="interior-section about-story-section">
        <div className="about-story-image">
          <Image
            src="/images/regia-airport-chauffeur.webp"
            alt="Professional chauffeur welcoming a traveler at the airport"
            fill
            sizes="(max-width: 1100px) 100vw, 46vw"
          />
        </div>
        <div className="about-story-copy">
          <p className="eyebrow">WHY WE STARTED</p>
          <h2>Important journeys deserve more than a rushed decision.</h2>
          <p>Planning premium transportation can be unnecessarily fragmented. Customers may need to contact providers one by one, repeat the same trip details, or make a decision before the vehicle, included services, and terms are fully clear.</p>
          <p>Regia Rides was created to make that process more thoughtful and transparent. Instead of relying on a last-minute match, customers can describe the journey in advance and compare considered transportation options in one place.</p>
          <p>Our goal is simple: give customers better information, meaningful choice, and greater confidence before the day of travel.</p>
        </div>
      </section>

      <section className="interior-section about-name-section">
        <p className="eyebrow">THE MEANING OF REGIA</p>
        <div className="about-name-layout">
          <h2>A name rooted in a higher standard of care.</h2>
          <div>
            <p><strong>Regia</strong> draws from Latin, where the word is associated with what is royal or regal and with a royal residence.</p>
            <p>For us, the name is not a promise of extravagance for its own sake. It represents a standard: every journey should be prepared with care, presented with composure, and treated as important to the person taking it.</p>
            <p><strong>Rides</strong> keeps that idea practical—clear transportation choices for real itineraries, handled with greater thought from request to selection.</p>
          </div>
        </div>
      </section>

      <section className="interior-section">
        <div className="interior-section-heading">
          <p className="eyebrow">WHAT WE DO</p>
          <h2>One request. A more considered choice.</h2>
        </div>
        <div className="interior-process-grid about-process-grid">
          {process.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <p className="interior-note">Regia Rides is designed for prearranged transportation. Quote availability depends on participating providers, their service areas, and the details of each request.</p>
      </section>

      <section className="interior-section about-experience-section">
        <div>
          <p className="eyebrow">TWO RIDE EXPERIENCES</p>
          <h2>Choose the level of attention the journey requires.</h2>
        </div>
        <div className="about-experience-copy">
          <p><strong>Black Ride</strong> is the flexible professional marketplace experience, centered on comparing the vehicle, capacity, included options, terms, and price.</p>
          <p><strong>Signature Chauffeur</strong> is the curated premium experience for journeys where chauffeur presentation, assistance, discretion, and a designated premium vehicle matter more.</p>
          <Link className="button button-secondary" href="/ride-experience">Compare Ride Experiences <ArrowIcon /></Link>
        </div>
      </section>

      <section className="interior-section">
        <div className="interior-section-heading">
          <p className="eyebrow">OUR COMMITMENT</p>
          <h2>Better service begins before the vehicle arrives.</h2>
        </div>
        <div className="about-commitment-grid">
          {commitments.map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="interior-section about-marketplace-section">
        <div>
          <p className="eyebrow">OUR ROLE</p>
          <h2>A marketplace built around clear expectations.</h2>
        </div>
        <div>
          <p>Regia Rides is operated by Regia Mobility Group LLC. We provide the platform that connects customers with participating independent transportation providers, helps organize request details, and makes available quotes easier to compare.</p>
          <div className="check-list">
            <span><CheckIcon /> Customers decide which available quote to select.</span>
            <span><CheckIcon /> The selected independent provider performs the transportation.</span>
            <span><CheckIcon /> Vehicle and service commitments are defined by the selected quote.</span>
            <span><CheckIcon /> Special requests must be clearly included or confirmed to become part of the ride.</span>
          </div>
        </div>
      </section>

      <FinalCta title="Plan the journey with greater clarity from the start." />
    </InteriorLayout>
  );
}
