import type { Metadata } from "next";
import Image from "next/image";
import { CheckIcon, FinalCta, InteriorHero, InteriorLayout } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Black Ride and Signature Chauffeur",
  description: "Compare Black Ride and Signature Chauffeur and choose the Regia Rides experience that matches your trip.",
  alternates: { canonical: "/ride-experience" },
};

const sharedBenefits = [
  "One detailed request for the complete itinerary",
  "Clear vehicle, service, and pricing information in each quote",
  "Up to three participating provider quotes when available",
  "Special requests confirmed before selection",
] as const;

export default function RideExperiencePage() {
  return (
    <InteriorLayout>
      <InteriorHero
        eyebrow="RIDE EXPERIENCE"
        title="Choose the experience that matches the occasion."
        copy="Black Ride offers flexible professional transportation. Signature Chauffeur adds a more curated premium experience, specific vehicle choices, and elevated service requests."
        image="/images/regia-airport-chauffeur.webp"
        imageAlt="Professional chauffeur beside a premium black vehicle"
      />

      <section className="interior-section service-level-page-grid">
        <article>
          <div className="level-page-image">
            <Image src="/images/regia-black-sedan.webp" alt="Black executive sedan" fill sizes="(max-width:760px) 100vw, 50vw" />
          </div>
          <p className="eyebrow">BLACK RIDE · FLEXIBLE</p>
          <h2>Professional transportation with more ways to choose.</h2>
          <p>Designed for planned airport, business, private, hourly, and regional transportation when you want to compare complete offers from participating providers.</p>
          <ul>
            <li><CheckIcon /> Choose a sedan, SUV, premium SUV, or luxury van category</li>
            <li><CheckIcon /> Add a preferred make or model as a Special Request</li>
            <li><CheckIcon /> Select Recommend a Vehicle when you prefer provider guidance</li>
            <li><CheckIcon /> Receive up to two suitable vehicle options from each provider when recommendation is requested</li>
            <li><CheckIcon /> Compare up to three provider quotes when available</li>
            <li><CheckIcon /> Request meet-and-greet, child seats, stops, assistance, or other trip-specific services</li>
            <li><CheckIcon /> Confirm the actual vehicle, included services, terms, and total price in the selected quote</li>
          </ul>
        </article>

        <article>
          <div className="level-page-image">
            <Image src="/images/regia-airport-chauffeur.webp" alt="Professional chauffeur greeting an airport passenger" fill sizes="(max-width:760px) 100vw, 50vw" />
          </div>
          <p className="eyebrow">SIGNATURE CHAUFFEUR · CURATED</p>
          <h2>Elevated service for journeys that need more attention.</h2>
          <p>Designed for VIP arrivals, executive travel, private guests, and special occasions where the specific vehicle and presentation of the service matter.</p>
          <ul>
            <li><CheckIcon /> Designate an eligible specific premium vehicle</li>
            <li><CheckIcon /> Request a Cadillac Escalade or another listed Signature vehicle</li>
            <li><CheckIcon /> Compare quotes from qualified participating providers</li>
            <li><CheckIcon /> Request elevated chauffeur and vehicle presentation</li>
            <li><CheckIcon /> Add personalized airport greeting, luggage assistance, and arrival instructions</li>
            <li><CheckIcon /> Describe executive, VIP, privacy, or guest-care requirements in detail</li>
            <li><CheckIcon /> Select only after the exact vehicle and requested services are confirmed in the quote</li>
          </ul>
        </article>
      </section>

      <section className="interior-section">
        <div className="interior-section-heading">
          <p className="eyebrow">WHICH EXPERIENCE FITS?</p>
          <h2>Choose by the journey—not only by the vehicle.</h2>
        </div>
        <div className="comparison-grid">
          <article>
            <h3>Choose Black Ride when</h3>
            <p>You want flexible professional transportation and the ability to compare vehicle categories, preferred models, or provider recommendations.</p>
          </article>
          <article>
            <h3>Choose Signature when</h3>
            <p>The occasion calls for a curated premium provider, a designated vehicle, and more detailed confirmation of presentation and guest care.</p>
          </article>
          <article>
            <h3>Not sure yet?</h3>
            <p>Review both experiences before continuing. Your trip details, passengers, luggage, vehicle expectations, and service priorities should guide the choice.</p>
          </article>
        </div>
      </section>

      <section className="interior-section split-feature-section">
        <div>
          <p className="eyebrow">A SHARED FOUNDATION</p>
          <h2>Clear information before you select.</h2>
        </div>
        <div className="check-list">
          {sharedBenefits.map((item) => <span key={item}><CheckIcon /> {item}</span>)}
        </div>
      </section>

      <section className="interior-section comparison-section">
        <div className="interior-section-heading">
          <p className="eyebrow">VEHICLE CHOICE</p>
          <h2>Recommendation, preference, and designation are different.</h2>
        </div>
        <div className="comparison-grid">
          <article>
            <h3>Recommend a Vehicle</h3>
            <p>You leave the vehicle open. Each provider may propose up to two suitable options based on passengers, luggage, and trip requirements.</p>
          </article>
          <article>
            <h3>Preferred Model</h3>
            <p>With Black Ride, a preferred make or model can be added as a Special Request. It is confirmed only when included in the selected quote.</p>
          </article>
          <article>
            <h3>Designated Vehicle</h3>
            <p>With Signature Chauffeur, an eligible specific premium vehicle can be selected and must be confirmed in the quote before you choose.</p>
          </article>
        </div>
        <p className="interior-note">Vehicle availability, exact configuration, capacity, and requested services are confirmed by the participating provider in the quote. Transportation is performed by the selected provider.</p>
      </section>

      <FinalCta title="Choose your ride experience and start one clear request." />
    </InteriorLayout>
  );
}
