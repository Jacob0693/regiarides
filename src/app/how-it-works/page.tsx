import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, CheckIcon, FinalCta, InteriorHero, InteriorLayout } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "How Regia Rides Works",
  description: "Prepare one detailed transportation request, compare participating provider quotes, and select the option that fits your trip.",
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  ["01", "Choose your service", "Start with Black Ride or Signature Chauffeur so providers understand the level of service you expect."],
  ["02", "Describe the trip", "Enter the route, timing, passengers, luggage, flight information, stops, and requested services."],
  ["03", "Set the vehicle preference", "Choose a category, request a preferred model, designate an eligible Signature vehicle, or ask providers to recommend."],
  ["04", "Compare clear quotes", "Review the confirmed vehicle, included services, provider terms, and complete quoted price."],
  ["05", "Select your ride", "Choose the transportation option that best matches your itinerary, priorities, and budget."],
] as const;

const vehicleChoices = [
  ["Choose a category", "Select the vehicle class you already know fits the trip, such as a sedan, SUV, premium SUV, or luxury van."],
  ["Request a vehicle", "Add a preferred make or model as a Black Ride Special Request, or designate an eligible specific vehicle with Signature Chauffeur."],
  ["Recommend a Vehicle", "Leave the choice open. Each provider may include up to two suitable vehicle options based on the passenger and luggage details."],
] as const;

export default function HowItWorksPage() {
  return (
    <InteriorLayout>
      <InteriorHero
        eyebrow="HOW REGIA RIDES WORKS"
        title="One request. A considered choice."
        copy="Prepare the trip once, receive clear offers from participating transportation providers, and compare what is actually included before selecting."
        image="/images/regia-final-cta.webp"
      >
        <Link className="button button-primary" href="/#quote-entry">
          Start Your Request <ArrowIcon />
        </Link>
      </InteriorHero>

      <section className="interior-section">
        <div className="interior-section-heading">
          <p className="eyebrow">THE PROCESS</p>
          <h2>Request. Compare. Select.</h2>
        </div>
        <div className="timeline-grid">
          {steps.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="interior-section">
        <div className="interior-section-heading">
          <p className="eyebrow">BEFORE YOU REQUEST</p>
          <h2>Accurate details lead to more useful quotes.</h2>
        </div>
        <div className="detail-columns">
          <article>
            <h3>Trip essentials</h3>
            <ul>
              <li><CheckIcon /> Pickup, destination, date, and time</li>
              <li><CheckIcon /> Passenger and luggage counts</li>
              <li><CheckIcon /> Flight number when airport service is involved</li>
              <li><CheckIcon /> Stops, return trips, or multiple transfers</li>
            </ul>
          </article>
          <article>
            <h3>Service preferences</h3>
            <ul>
              <li><CheckIcon /> Vehicle choice or recommendation request</li>
              <li><CheckIcon /> Meet-and-greet and luggage assistance</li>
              <li><CheckIcon /> Child seats and accessibility needs</li>
              <li><CheckIcon /> VIP, business, presentation, or other special requests</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="interior-section">
        <div className="interior-section-heading">
          <p className="eyebrow">VEHICLE CHOICE</p>
          <h2>Choose directly—or let providers recommend.</h2>
        </div>
        <div className="comparison-grid">
          {vehicleChoices.map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <p className="interior-note">
          A requested make or model is confirmed only when it appears in the selected quote. When Recommend a Vehicle is selected, each participating provider may offer up to two suitable vehicle options within its quote.
        </p>
      </section>

      <section className="interior-section split-feature-section">
        <div>
          <p className="eyebrow">WHAT TO COMPARE</p>
          <h2>Look beyond the vehicle photo.</h2>
        </div>
        <div className="check-list">
          <span><CheckIcon /> Confirmed vehicle category, requested model, or recommended option</span>
          <span><CheckIcon /> Meet-and-greet, child seats, stops, and assistance</span>
          <span><CheckIcon /> Waiting time, overtime, cancellation, and trip-specific terms</span>
          <span><CheckIcon /> Complete quoted price and all included services</span>
          <span><CheckIcon /> The complete offer that best fits the journey—not price alone</span>
        </div>
      </section>

      <FinalCta />
    </InteriorLayout>
  );
}
