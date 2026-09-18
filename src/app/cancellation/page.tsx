import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Cancellation and Changes Policy",
  description: "Default cancellation, change, no-show, provider cancellation, and refund rules for Regia Rides bookings.",
  alternates: { canonical: "/cancellation" },
};

const sections: LegalSection[] = [
  { id: "before-booking", title: "Before a booking is confirmed", content: <>
    <p>You may stop or withdraw an unconfirmed request without a cancellation charge. A request is not a booking, and selecting trip details or receiving quotes does not by itself confirm transportation.</p>
  </> },
  { id: "default-policy", title: "Default cancellation schedule", content: <>
    <p>Unless the selected quote clearly states a permitted trip-specific exception before booking, the following default applies. Timing is measured backward from the scheduled local pickup time.</p>
    <div className="policy-table" role="table" aria-label="Default cancellation schedule">
      <div role="row"><strong role="columnheader">Booking type</strong><strong role="columnheader">Cancellation received</strong><strong role="columnheader">Default charge</strong></div>
      <div role="row"><span role="cell">Point-to-point or airport transfer</span><span role="cell">24 hours or more before pickup</span><span role="cell">No cancellation charge</span></div>
      <div role="row"><span role="cell">Point-to-point or airport transfer</span><span role="cell">12 to less than 24 hours before pickup</span><span role="cell">50% of the booked price</span></div>
      <div role="row"><span role="cell">Point-to-point or airport transfer</span><span role="cell">Less than 12 hours before pickup</span><span role="cell">100% of the booked price</span></div>
      <div role="row"><span role="cell">Hourly, long-distance, multiple-transfer, or custom service</span><span role="cell">48 hours or more before the first pickup</span><span role="cell">No cancellation charge</span></div>
      <div role="row"><span role="cell">Hourly, long-distance, multiple-transfer, or custom service</span><span role="cell">24 to less than 48 hours before the first pickup</span><span role="cell">50% of the booked price</span></div>
      <div role="row"><span role="cell">Hourly, long-distance, multiple-transfer, or custom service</span><span role="cell">Less than 24 hours before the first pickup</span><span role="cell">100% of the booked price</span></div>
    </div>
  </> },
  { id: "exceptions", title: "Clearly disclosed exceptions", content: <>
    <p>Specific premium vehicles, multi-vehicle movements, major events, peak-demand dates, special permits, advance purchases, and custom itineraries may require a different cancellation schedule or a non-refundable deposit. An exception applies only when it is clearly displayed in the quote before selection and included in the confirmed booking record.</p>
    <p>Documented third-party costs already committed for the booking may be non-refundable only when their treatment was disclosed before booking. If a quote does not clearly state an exception, the default schedule above controls.</p>
  </> },
  { id: "how-to-cancel", title: "How and when to cancel", content: <>
    <p>Submit a cancellation through the booking channel or customer support method identified in the confirmation. A cancellation is effective when it is received and recorded—not when it is drafted or sent to an incorrect contact. Include the booking reference and the name used for the reservation.</p>
    <p>Cancellation deadlines use the time zone of the confirmed pickup location. If a trip contains multiple separately priced transfers, the policy may be applied to each affected transfer; if quoted as one bundled itinerary, it may apply to the complete booking.</p>
  </> },
  { id: "changes", title: "Changes and rescheduling", content: <>
    <p>Changes are subject to provider and vehicle availability. Correcting contact details or making a minor instruction change generally does not create a fee. Changing the date, pickup time, route, duration, passenger or luggage capacity, vehicle, or included services may require a revised quote.</p>
    <p>If the selected provider cannot accommodate a customer-requested material change, the customer may keep the original confirmed service or cancel it under the schedule measured from the original pickup time. A rescheduled booking becomes confirmed only after the revised details and price are accepted.</p>
  </> },
  { id: "flights", title: "Flight delays and cancellations", content: <>
    <p>Provide accurate airline and flight information. A delayed flight is handled under the selected booking’s flight-monitoring and complimentary-waiting terms and is not automatically treated as a cancellation.</p>
    <p>If an airline cancels a flight, notify support promptly. We will seek to coordinate a reasonable change with the selected provider, but vehicle and schedule availability are not guaranteed. Any cancellation or rebooking charge follows the confirmed booking terms unless the provider voluntarily waives it or applicable law requires otherwise.</p>
  </> },
  { id: "no-show", title: "No-shows", content: <>
    <p>A booking may be treated as a no-show when the passenger cannot be located or contacted and the applicable complimentary and purchased waiting time has expired. A no-show may be charged up to 100% of the booked price, plus only those additional amounts properly authorized under the selected booking.</p>
    <p>To avoid a no-show, keep the provided telephone available, follow confirmed pickup instructions, and contact support immediately if the passenger cannot locate the chauffeur or vehicle.</p>
  </> },
  { id: "provider-cancellation", title: "Provider cancellation or material failure", content: <>
    <p>If the selected provider cancels or cannot perform the confirmed transportation, the customer may receive a full refund for the unperformed service. Regia may attempt to present a replacement, but no substitute provider, vehicle, price, or service is accepted without the customer’s informed approval.</p>
    <p>A provider cancellation does not entitle the customer to both a completed replacement ride and a refund for that same service. Nothing in this section limits remedies that cannot lawfully be limited.</p>
  </> },
  { id: "refunds", title: "Refunds and processing time", content: <>
    <p>Approved refunds are returned to the original payment method when reasonably possible. Regia will initiate an approved refund promptly; banks and payment processors commonly require additional processing time, which may take approximately 5–10 business days after initiation.</p>
    <p>A refund calculation will identify the booked amount, any applicable cancellation charge, any properly disclosed non-refundable cost, and the net amount returned. A payment dispute or chargeback does not cancel the underlying booking unless cancellation is separately communicated and confirmed.</p>
  </> },
  { id: "extraordinary-events", title: "Extraordinary events", content: <>
    <p>Severe weather, road closures, airport shutdowns, government restrictions, emergencies, and other events outside reasonable control may require changes or cancellation. Regia and the selected provider will evaluate what service can reasonably be performed. Charges for unperformed service will be handled according to the confirmed terms and applicable law, with any non-refundable committed cost identified.</p>
  </> },
  { id: "contact", title: "Questions or cancellation assistance", content: <>
    <p>For assistance, use the support method in the booking confirmation or email <a href="mailto:support@regiarides.com">support@regiarides.com</a>. Time-sensitive cancellation messages should include the booking reference and pickup date.</p>
  </> },
];

export default function CancellationPage() {
  return <LegalPage eyebrow="BOOKING POLICY" title="Cancellation & Changes" summary="Default rules for cancellations, itinerary changes, no-shows, provider cancellations, and refunds—with trip-specific exceptions shown before booking." effectiveDate="September 18, 2026" sections={sections} />;
}
