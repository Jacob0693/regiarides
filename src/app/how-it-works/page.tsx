import type { Metadata } from "next";
import { CheckIcon, FinalCta, InteriorHero, InteriorLayout } from "../components/SiteShell";

export const metadata: Metadata = { title: "How Regia Rides Works", description: "Submit one detailed request, compare participating provider quotes, and select the transportation option that fits your trip.", alternates: { canonical: "/how-it-works" } };

const steps = [
  ["01", "Choose your service", "Start with Black Ride or Signature Chauffeur so providers understand the level of service you expect."],
  ["02", "Describe the trip", "Enter the route, timing, passengers, luggage, flight information, and requested services."],
  ["03", "Choose or recommend a vehicle", "Select a vehicle category, request a preferred model, or ask providers to recommend up to two suitable options."],
  ["04", "Compare quotes", "Review the vehicle, included services, provider terms, and total quoted price."],
  ["05", "Select your ride", "Choose the option that best matches your itinerary and priorities."],
] as const;

export default function HowItWorksPage() {
  return <InteriorLayout>
    <InteriorHero eyebrow="HOW REGIA RIDES WORKS" title="Request. Compare. Select." copy="Regia Rides helps you prepare one complete request and compare considered transportation options before the day of travel." image="/images/regia-final-cta.webp" />
    <section className="interior-section"><div className="interior-section-heading"><p className="eyebrow">THE PROCESS</p><h2>Clear decisions at every step.</h2></div><div className="timeline-grid">{steps.map(([number,title,copy])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="interior-section split-feature-section"><div><p className="eyebrow">WHAT TO COMPARE</p><h2>Look beyond the vehicle photo.</h2></div><div className="check-list"><span><CheckIcon /> Confirmed vehicle category or exact model</span><span><CheckIcon /> Meet-and-greet, child seats, stops, and assistance</span><span><CheckIcon /> Waiting, overtime, and trip-specific terms</span><span><CheckIcon /> Complete quoted price and included services</span></div></section>
    <FinalCta />
  </InteriorLayout>;
}
