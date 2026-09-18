import type { Metadata } from "next";
import Image from "next/image";
import { CheckIcon, FinalCta, InteriorHero, InteriorLayout } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Black Ride and Signature Chauffeur",
  description: "Compare the character, service standards, ideal occasions, vehicle choices, and waiting benefits of Black Ride and Signature Chauffeur.",
  alternates: { canonical: "/ride-experience" },
};

const blackRideFeatures = [
  "Professional prearranged transportation from participating licensed providers",
  "Marketplace choice centered on vehicle category, capacity, included options, and price",
  "Sedan, Standard SUV, Full-Size SUV, and Sprinter Van categories",
  "Preferred make or model available through Special Request",
  "Recommend a Vehicle available when you want providers to evaluate the trip",
  "Standard complimentary waiting and the shared Regia Rides quote protections",
] as const;

const signatureFeatures = [
  "Available only through Signature-approved Providers, Drivers, and eligible Vehicles",
  "Professional or formal chauffeur presentation and a professional greeting",
  "Door assistance and luggage assistance",
  "Clean, presentation-ready premium vehicle",
  "Bottled water and phone charging availability",
  "Discreet, professional conduct with personalized privacy and comfort requests",
  "More specific premium vehicle choices and extended complimentary waiting",
] as const;

export default function RideExperiencePage() {
  return (
    <InteriorLayout>
      <InteriorHero
        eyebrow="RIDE EXPERIENCE"
        title="Two experiences. Different priorities."
        copy="Black Ride is a professional transportation marketplace built around choice and value. Signature Chauffeur is a curated premium experience built around presentation, discretion, vehicle specificity, and personalized service."
        image="/images/regia-airport-chauffeur.webp"
        imageAlt="Professional chauffeur beside a premium black vehicle"
      />

      <section className="interior-section service-level-page-grid">
        <article>
          <div className="level-page-image">
            <Image src="/images/regia-black-sedan.webp" alt="Black executive sedan" fill sizes="(max-width:760px) 100vw, 50vw" />
          </div>
          <p className="eyebrow">BLACK RIDE · PROFESSIONAL MARKETPLACE</p>
          <h2>Compare the complete transportation offer.</h2>
          <p>Black Ride is the flexible professional option. It lets customers compare participating providers by the vehicle, capacity, confirmed service options, terms, and price that fit the actual trip.</p>
          <ul>{blackRideFeatures.map((item) => <li key={item}><CheckIcon /> {item}</li>)}</ul>
        </article>

        <article>
          <div className="level-page-image">
            <Image src="/images/regia-airport-chauffeur.webp" alt="Professional chauffeur greeting an airport passenger" fill sizes="(max-width:760px) 100vw, 50vw" />
          </div>
          <p className="eyebrow">SIGNATURE CHAUFFEUR · CURATED PREMIUM</p>
          <h2>More attention to how the journey is presented.</h2>
          <p>Signature Chauffeur is not simply a more expensive Black Ride. It adds curated qualification and a defined premium service baseline for trips where the vehicle, presentation, assistance, and discretion matter.</p>
          <ul>{signatureFeatures.map((item) => <li key={item}><CheckIcon /> {item}</li>)}</ul>
        </article>
      </section>

      <section className="interior-section">
        <div className="interior-section-heading">
          <p className="eyebrow">WHO EACH EXPERIENCE IS FOR</p>
          <h2>Choose according to the traveler and the occasion.</h2>
        </div>
        <div className="detail-columns">
          <article>
            <h3>Black Ride is a strong fit for</h3>
            <ul>
              <li><CheckIcon /> Airport, hotel, office, event, and long-distance transportation</li>
              <li><CheckIcon /> Business travelers who want professional service with comparison choice</li>
              <li><CheckIcon /> Families and groups focused on the right passenger and luggage capacity</li>
              <li><CheckIcon /> Customers who want to compare several complete offers before deciding</li>
              <li><CheckIcon /> Trips where a vehicle category is sufficient, with optional model requests</li>
            </ul>
          </article>
          <article>
            <h3>Signature Chauffeur is a strong fit for</h3>
            <ul>
              <li><CheckIcon /> Executives, VIPs, artists, high-profile travelers, and private guests</li>
              <li><CheckIcon /> Welcoming an important client, family member, speaker, or special guest</li>
              <li><CheckIcon /> Airport arrivals requiring a polished greeting and luggage assistance</li>
              <li><CheckIcon /> Corporate roadshows, special occasions, and image-sensitive transportation</li>
              <li><CheckIcon /> Travelers who place greater value on privacy, discretion, and a designated premium vehicle</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="interior-section">
        <div className="interior-section-heading">
          <p className="eyebrow">THE EXPERIENCE DIFFERENCE</p>
          <h2>What changes when you choose Signature.</h2>
        </div>
        <div className="comparison-grid">
          <article>
            <h3>Curated qualification</h3>
            <p>Black Ride uses the qualified provider marketplace baseline. Signature requests are available only to separately approved Providers and may be assigned only to Signature-qualified Drivers and eligible Vehicles.</p>
          </article>
          <article>
            <h3>Defined presentation</h3>
            <p>Signature includes formal or professional presentation, greeting, door and luggage assistance, a presentation-ready premium vehicle, water, charging, and discreet conduct as its service baseline.</p>
          </article>
          <article>
            <h3>Personalized commitments</h3>
            <p>Quiet ride, temperature, privacy, beverage, name sign, extra assistance, and multiple-vehicle coordination can be requested and must be clearly confirmed when included.</p>
          </article>
        </div>
      </section>

      <section className="interior-section">
        <div className="interior-section-heading">
          <p className="eyebrow">COMPLIMENTARY WAITING</p>
          <h2>More time for journeys that require greater flexibility.</h2>
        </div>
        <div className="comparison-grid">
          <article>
            <h3>Black Ride</h3>
            <p>15 minutes for non-airport pickup. For airport pickup, 60 minutes after actual landing for domestic arrivals and 75 minutes for international arrivals.</p>
          </article>
          <article>
            <h3>Signature Chauffeur</h3>
            <p>45 minutes for non-airport pickup. For airport pickup, 120 minutes after actual landing for domestic arrivals and 135 minutes for international arrivals.</p>
          </article>
          <article>
            <h3>Airport timing</h3>
            <p>Airport complimentary waiting begins from the current valid actual aircraft landing time—not the scheduled arrival time or the time the driver reports arrival.</p>
          </article>
        </div>
      </section>

      <section className="interior-section comparison-section">
        <div className="interior-section-heading">
          <p className="eyebrow">VEHICLE EXPECTATIONS</p>
          <h2>Category choice and exact-vehicle commitment are not the same.</h2>
        </div>
        <div className="comparison-grid">
          <article>
            <h3>Black Ride</h3>
            <p>Select a vehicle category or add a preferred make and model as a Special Request. A model request is confirmed only when the selected Provider Quote explicitly includes and prices it.</p>
          </article>
          <article>
            <h3>Signature Chauffeur</h3>
            <p>Designate an eligible specific premium vehicle, including a Cadillac Escalade. The selected quote and final assignment must preserve the confirmed exact-vehicle requirement.</p>
          </article>
          <article>
            <h3>Recommend a Vehicle</h3>
            <p>Vehicle selection remains optional in both experiences. Each provider may include up to two suitable options based on passenger and luggage details.</p>
          </article>
        </div>
        <p className="interior-note">A substitute vehicle is not automatically equivalent to a confirmed Signature vehicle. An alternative must be clearly presented and knowingly approved through the applicable selection or change process.</p>
      </section>

      <FinalCta title="Choose the ride experience that fits the journey." />
    </InteriorLayout>
  );
}
