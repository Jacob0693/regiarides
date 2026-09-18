import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of the Regia Rides transportation quote and booking platform.",
  alternates: { canonical: "/terms" },
};

const sections: LegalSection[] = [
  { id: "agreement", title: "Agreement and eligibility", content: <>
    <p>These Terms of Use govern access to and use of the Regia Rides website, quote request tools, communications, and booking services (collectively, the “Platform”). Regia Rides is operated by Regia Mobility Group LLC (“Regia,” “we,” “us,” or “our”). By using the Platform, you agree to these Terms and the policies incorporated into them.</p>
    <p>You must be at least 18 years old and legally able to enter into a binding agreement. If you use the Platform for another traveler or an organization, you represent that you have authority to provide the information and accept these Terms for that request.</p>
  </> },
  { id: "platform-role", title: "Regia Rides’ role", content: <>
    <p>Regia Rides is a quote and booking platform. Regia does not operate its own transportation fleet and is not the motor carrier performing a ride. Transportation is performed by the independent transportation provider identified in the selected booking.</p>
    <p>Participating providers decide which eligible requests to quote and are responsible for the licenses, permits, insurance, vehicles, chauffeurs, operational decisions, and transportation services they provide. Nothing in these Terms creates an employment, agency, partnership, or joint-venture relationship between Regia and a participating provider.</p>
  </> },
  { id: "requests-quotes", title: "Requests, quotes, and confirmation", content: <>
    <ul>
      <li>A request is an invitation for eligible providers to prepare offers; it is not a confirmed ride.</li>
      <li>Quote availability is not guaranteed. An eligible request may receive up to three available provider quotes.</li>
      <li>A quote should identify the vehicle or category, confirmed inclusions, provider-specific terms, and total quoted price.</li>
      <li>A booking becomes confirmed only after you select a quote, accept the applicable terms, complete any required payment or authorization, and receive confirmation.</li>
      <li>If request details change, a quote may be revised or withdrawn before booking.</li>
    </ul>
  </> },
  { id: "vehicles-services", title: "Vehicles and service commitments", content: <>
    <p>Vehicle photos may be representative unless a quote expressly confirms a specific make, model, configuration, or vehicle. With Black Ride, a preferred make or model is a Special Request unless the selected quote explicitly confirms it. With Signature Chauffeur, an eligible specific premium vehicle may be designated and must be preserved in the selected quote and final assignment.</p>
    <p>Meet-and-greet, child seats, accessibility assistance, language preferences, luggage assistance, additional stops, beverages, name signs, and other requests are included only when they are expressly confirmed in the selected quote or later written booking record. Any proposed substitution or material service change must be communicated and accepted rather than assumed.</p>
  </> },
  { id: "customer-responsibilities", title: "Customer responsibilities", content: <>
    <p>You are responsible for providing accurate contact, itinerary, flight, passenger, luggage, accessibility, and special-request information; reviewing the complete quote before selection; keeping contact information available; and promptly communicating material changes.</p>
    <p>You must ensure that all passengers follow applicable law and reasonable safety instructions. The Platform may not be used for unlawful activity, fraud, harassment, transporting prohibited items, interfering with provider operations, or submitting false or misleading requests.</p>
  </> },
  { id: "price-payment", title: "Price, payment, and additional charges", content: <>
    <p>The selected quote controls the price and listed inclusions for the confirmed itinerary. Before booking, review whether parking, tolls, airport fees, gratuity, waiting, overtime, extra stops, cleaning, damage, or other charges are included or may be added under clearly disclosed terms.</p>
    <p>Payment processing may be performed by a third-party payment processor. You authorize the disclosed charge, deposit, hold, or payment schedule associated with the booking. A material customer-requested change may require a revised quote and additional authorization.</p>
  </> },
  { id: "cancellation", title: "Cancellation, changes, and refunds", content: <>
    <p>Our <Link href="/cancellation">Cancellation &amp; Changes Policy</Link> is incorporated into these Terms. Regia’s published default applies unless a quote conspicuously discloses a permitted trip-specific exception before selection. Special vehicles, multi-vehicle movements, events, custom itineraries, and documented non-refundable third-party costs may carry different terms when clearly stated in advance.</p>
    <p>Cancellation timing is measured from the scheduled local pickup time and the time a valid cancellation is received through the designated booking channel. Failure to appear may be treated as a no-show under the selected booking’s waiting terms.</p>
  </> },
  { id: "waiting-delays", title: "Waiting, delays, and no-shows", content: <>
    <p>Complimentary waiting and additional waiting charges are governed by the selected ride experience and quote. Airport waiting begins from the valid actual aircraft landing time when accurate flight information was provided. Non-airport waiting begins at the confirmed pickup time.</p>
    <p>A customer may be considered a no-show after the applicable waiting period expires and reasonable contact attempts are unsuccessful. Delays caused by traffic, weather, road closures, airport operations, government action, or other circumstances outside reasonable control may affect estimated travel time and are not guarantees of arrival at a particular time.</p>
  </> },
  { id: "communications", title: "Communications", content: <>
    <p>You agree that Regia and parties supporting a request or booking may contact you at the information provided for verification, quotes, confirmations, schedule updates, service messages, safety, and support. Consent to operational text messages is not consent to unrelated marketing. Carrier message and data rates may apply.</p>
  </> },
  { id: "privacy", title: "Privacy", content: <>
    <p>Our <Link href="/privacy">Privacy Policy</Link> explains how personal information is collected, used, retained, and disclosed. Do not include highly sensitive information in free-form fields unless it is necessary for the requested transportation or accommodation.</p>
  </> },
  { id: "disclaimers", title: "Disclaimers and limitation of responsibility", content: <>
    <p>The Platform is provided on an “as available” basis. To the fullest extent permitted by law, Regia does not guarantee that quotes will be available, that a provider will accept a request, or that uninterrupted access to the Platform will always be available.</p>
    <p>Regia is responsible for operating the Platform within the scope stated in these Terms. Each selected provider remains responsible for the transportation it performs. To the fullest extent permitted by law, Regia will not be liable for indirect, incidental, special, exemplary, or consequential damages arising from Platform use. Nothing in these Terms excludes rights or liabilities that cannot lawfully be excluded.</p>
  </> },
  { id: "disputes", title: "Disputes and governing law", content: <>
    <p>Contact customer support first so the parties can attempt to resolve a concern using the request, quote, booking, and communication record. These Terms are governed by the laws of the State of California, without regard to conflict-of-law principles, except where applicable law requires otherwise.</p>
  </> },
  { id: "changes-contact", title: "Changes and contact", content: <>
    <p>We may update these Terms to reflect changes to the Platform, law, or operations. The effective date will be revised when changes are published. Material changes will apply prospectively unless law requires otherwise.</p>
    <p>Questions about these Terms may be sent to <a href="mailto:support@regiarides.com">support@regiarides.com</a>. Regia Mobility Group LLC operates Regia Rides.</p>
  </> },
];

export default function TermsPage() {
  return <LegalPage eyebrow="LEGAL" title="Terms of Use" summary="The rules that govern use of the Regia Rides quote and booking platform, and the responsibilities attached to a selected transportation offer." effectiveDate="September 18, 2026" sections={sections} />;
}
