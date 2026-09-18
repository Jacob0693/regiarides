export type ServicePage = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  detail: string;
  image: string;
  alt: string;
  bestFor: string[];
  requestDetails: string[];
  process: string[];
};

export const services: ServicePage[] = [
  {
    slug: "airport-transfer",
    number: "01",
    title: "Airport Transfer",
    eyebrow: "FLIGHT-AWARE TRANSPORTATION",
    summary: "Prearranged airport pickup or drop-off with the flight, schedule, passenger, and luggage details providers need to quote accurately.",
    detail: "Airport pickup · Airport drop-off · Meet-and-greet requests",
    image: "/images/regia-service-airport-transfer-v2.webp",
    alt: "Professional chauffeur welcoming an airport passenger beside a black sedan",
    bestFor: ["LAX and regional airport arrivals", "Business and VIP travelers", "Families and groups traveling with luggage"],
    requestDetails: ["Airport, airline, and flight number for pickup", "Pickup or destination address", "Passenger, luggage, and golf-bag counts", "Meet-and-greet and assistance requests", "Vehicle selection or Recommend a Vehicle"],
    process: ["Enter the flight and itinerary details.", "Providers review timing, capacity, and requested services.", "Compare the confirmed vehicle options, inclusions, and price."],
  },
  {
    slug: "point-to-point",
    number: "02",
    title: "Point-to-Point",
    eyebrow: "ONE PICKUP · ONE DESTINATION",
    summary: "One scheduled transfer between an airport, hotel, home, office, venue, or other destination.",
    detail: "A clear route and schedule for one planned ride",
    image: "/images/regia-service-point-to-point-v2.webp",
    alt: "Black executive sedan arriving at a Los Angeles hotel",
    bestFor: ["Hotel and office transfers", "Dinner, meeting, and event transportation", "Private scheduled rides"],
    requestDetails: ["Pickup and destination", "Requested date and time", "Passenger and luggage counts", "Additional stop when part of one continuous trip", "Vehicle selection, model request, or recommendation"],
    process: ["Describe the route and timing.", "Add capacity and service preferences.", "Review up to three provider quotes as available."],
  },
  {
    slug: "multiple-transfers",
    number: "03",
    title: "Multiple Transfers",
    eyebrow: "SEVERAL RIDES · ONE ORGANIZED REQUEST",
    summary: "Organize independent transfers in one request, each with its own pickup, destination, date, and time.",
    detail: "Multi-day schedules · Business movements · Guest transportation",
    image: "/images/regia-service-multiple-transfers-v2.webp",
    alt: "Dark map showing multiple destinations connected by a planned route",
    bestFor: ["Business travel schedules", "Guest and executive movements", "Multi-day airport, hotel, and venue transfers"],
    requestDetails: ["A separate itinerary for every transfer", "Passenger and luggage needs by segment", "Timing dependencies and arrival notes", "Vehicle or service needs that differ by transfer", "Coordination and special requests"],
    process: ["Add each independent ride as a separate segment.", "Providers evaluate the complete schedule.", "Compare clearly organized package quotes."],
  },
  {
    slug: "hourly-transportation",
    number: "04",
    title: "Hourly Transportation",
    eyebrow: "FLEXIBLE · TIME-BASED SERVICE",
    summary: "Reserve a private vehicle for a continuous block of time when your schedule needs flexibility.",
    detail: "Meetings · Events · Flexible itineraries",
    image: "/images/regia-service-hourly-v2.webp",
    alt: "Professional chauffeur waiting beside a black full-size SUV",
    bestFor: ["Executive schedules with changing stops", "Events and evening transportation", "A vehicle that remains available for a planned period"],
    requestDetails: ["Start location, date, and time", "Expected duration", "Planned service area or stops", "Passenger and luggage needs", "Provider minimum-hour and overtime terms"],
    process: ["Enter the expected service window.", "Share the known stops and flexibility needed.", "Compare minimum hours, included terms, and vehicle options."],
  },
  {
    slug: "long-distance",
    number: "05",
    title: "Long Distance",
    eyebrow: "INTERCITY · REGIONAL TRAVEL",
    summary: "Plan private transportation between cities or for a longer regional journey with the route defined in advance.",
    detail: "Southern California and select regional destinations",
    image: "/images/regia-service-long-distance-v2.webp",
    alt: "Black premium SUV traveling along a Southern California coastal highway",
    bestFor: ["Los Angeles to Orange County or San Diego", "Airport-to-city regional travel", "Private one-way or return transportation"],
    requestDetails: ["Complete origin and destination", "Requested pickup date and time", "One-way or return itinerary", "Passenger and luggage counts", "Stops, waiting, or special service requirements"],
    process: ["Submit the full regional route.", "Providers assess time, distance, and requirements.", "Compare the complete trip terms before selecting."],
  },
  {
    slug: "custom-transportation",
    number: "06",
    title: "Custom Transportation",
    eyebrow: "BUILT AROUND YOUR REQUIREMENTS",
    summary: "Describe an executive, VIP, event, or itinerary-specific request that needs a tailored transportation plan and quote.",
    detail: "VIP care · Events · Complex requirements",
    image: "/images/regia-service-custom-v2.webp",
    alt: "Chauffeur and transportation coordinator preparing for a VIP arrival",
    bestFor: ["VIP and executive transportation", "Events and guest coordination", "Requests that do not fit a standard trip format"],
    requestDetails: ["The complete transportation objective", "Dates, routes, and service windows", "Passenger groups and luggage", "Vehicle, presentation, and assistance requirements", "A clear list of priorities and special requests"],
    process: ["Describe the complete requirement.", "Qualified providers evaluate the operational details.", "Compare tailored responses and confirmed inclusions."],
  },
];

const faqItems = {
  experience: ["What is the difference between Black Ride and Signature Chauffeur?", "Black Ride lets you compare professional transportation across available vehicle classes, request a preferred model, or ask providers to recommend a suitable vehicle. Signature Chauffeur is a curated premium service with qualified providers, elevated service standards, and the ability to designate a specific premium vehicle."],
  advance: ["How far in advance should I request a ride?", "Submit your request as early as possible so participating providers have time to review the itinerary and prepare an accurate quote. Coverage and availability vary by trip, and submitting a request does not guarantee that quotes will be available."],
  information: ["What information do I need to request quotes?", "Provide the pickup and destination, date and time, passenger and luggage counts, flight details when applicable, additional stops, and any service or accessibility requests. Accurate details help providers confirm capacity and prepare comparable quotes."],
  changes: ["Can I update a request after I submit it?", "If the itinerary changes before you select a quote, update the request when that option is available or submit the corrected details before proceeding. Changes after a quote is selected may affect vehicle availability, inclusions, or price and must be confirmed."],
  quoteGuarantee: ["Does submitting a request guarantee that I will receive quotes?", "No. Quote availability depends on provider coverage, schedule, trip requirements, and vehicle availability. Regia Rides may present up to three quotes when eligible providers respond."],
  quoteCount: ["How many quotes can I receive?", "You may receive up to three provider quotes for an eligible request. The number can vary based on coverage, trip details, service requirements, and availability."],
  compare: ["What should I compare in each quote?", "Review the confirmed vehicle, passenger and luggage capacity, included services, pickup terms, waiting terms, requested options, and total price. Choose the complete offer that best fits the journey—not price alone."],
  includedPrice: ["How do I know what is included in the price?", "Each quote should identify the confirmed vehicle and included service options. Review any stated waiting, parking, toll, gratuity, overtime, or additional-stop terms before selecting."],
  bookingConfirmed: ["When is my transportation confirmed?", "A request by itself is not a confirmed ride. Confirmation occurs only after you select an available quote and complete the required booking steps shown for that offer."],
  cancellation: ["What if I need to cancel or change a confirmed ride?", "Regia's standard policy allows point-to-point and airport bookings to be cancelled without charge at least 24 hours before pickup, and hourly, long-distance, multiple-transfer, and custom bookings at least 48 hours before the first pickup. Later cancellations may be charged 50% or 100%. A clearly disclosed special-booking term may replace the standard schedule, so review the quote before confirming and request changes as early as possible."],
  chooseVehicle: ["Do I have to choose a vehicle?", "No. Select Recommend a Vehicle and each participating provider may include up to two suitable vehicle options in its quote based on your passenger and luggage details."],
  specificVehicle: ["Can I request a specific vehicle, such as a Cadillac Escalade?", "Yes. With Black Ride, add a preferred make or model as a Special Request and a provider can confirm and price it in the quote. With Signature Chauffeur, you can designate a specific premium vehicle and the quote you select must confirm it."],
  capacity: ["How do I choose the right vehicle size?", "Enter accurate passenger, checked-luggage, carry-on, golf-bag, and special-equipment counts. You can then choose a category or ask providers to recommend up to two suitable options. Final capacity depends on the quoted vehicle configuration."],
  substitution: ["Can the confirmed vehicle be changed?", "The quote should identify the confirmed vehicle or category. Any later substitution must follow the selected booking terms and should be communicated and confirmed rather than assumed."],
  meetGreet: ["Can I request airport meet-and-greet service?", "Yes. Add meet-and-greet, a name sign, luggage assistance, or other arrival preferences. Each quote should show which requested services are confirmed and included."],
  flightDelay: ["What happens if my flight is delayed?", "Include the correct airline and flight number. Providers can state their flight-monitoring, complimentary-waiting, and additional-waiting terms in the quote so you can review them before selecting."],
  airportMeeting: ["Where will I meet the chauffeur at the airport?", "The meeting location depends on the airport, pickup type, and confirmed meet-and-greet option. Review the selected provider's pickup instructions before travel and keep the flight information current."],
  waitingTime: ["Is airport waiting time included?", "Waiting terms vary by quote and ride experience. Review the complimentary waiting period, when it begins, and any additional waiting charges before selecting a provider."],
  extraStops: ["Can I add extra stops or arrange multiple rides?", "Add stops to a single continuous trip when appropriate, or choose Multiple Transfers for independent rides with separate pickup locations, destinations, dates, or times."],
  hourlyDifference: ["When should I choose Hourly Transportation instead of Point-to-Point?", "Choose Point-to-Point for one scheduled transfer with a defined destination. Choose Hourly Transportation when the vehicle should remain available for a continuous service window, flexible stops, meetings, or an evolving schedule."],
  longDistance: ["Can I request transportation between cities?", "Yes. Use Long Distance for intercity or regional travel and include the full route, one-way or return plan, stops, passenger and luggage details, and requested timing."],
  accommodations: ["Can I request child seats or accessibility assistance?", "Yes. Add the seat type and quantity, accessibility details, mobility equipment, or other accommodations. A requested item is confirmed only when it appears in the quote you select."],
  language: ["Can I request a chauffeur who speaks a specific language?", "Yes. Add the preferred language to your request. Language availability is not guaranteed unless the selected quote explicitly confirms it."],
  specialRequests: ["How are special requests confirmed?", "Add each priority clearly to the request. A preference—such as a specific model, child seat, language, name sign, or presentation detail—is confirmed only when it is explicitly included in the quote you select."],
  ownFleet: ["Does Regia Rides operate its own fleet?", "No. Regia Rides is a quote and booking platform connecting customers with participating independent transportation providers. Transportation is performed by the selected provider."],
  operator: ["Who provides the transportation service?", "The independent transportation provider identified in the selected booking performs the ride and is responsible for the transportation service, vehicle, and chauffeur it confirms."],
  serviceArea: ["Where is Regia Rides available?", "Initial requests focus on Los Angeles, Orange County, regional airports, and select Southern California routes. Actual coverage depends on the trip and participating provider availability."],
} as const;

export const faqGroups = [
  { title: "Getting Started", description: "Choosing the experience and preparing a clear request.", items: [faqItems.experience, faqItems.advance, faqItems.information, faqItems.changes] },
  { title: "Quotes & Booking", description: "What happens after a request and what to review before selecting.", items: [faqItems.quoteGuarantee, faqItems.quoteCount, faqItems.compare, faqItems.includedPrice, faqItems.bookingConfirmed, faqItems.cancellation] },
  { title: "Vehicles", description: "Vehicle choice, capacity, recommendations, and confirmation.", items: [faqItems.chooseVehicle, faqItems.specificVehicle, faqItems.capacity, faqItems.substitution] },
  { title: "Airport Travel", description: "Flight details, meeting arrangements, and waiting terms.", items: [faqItems.meetGreet, faqItems.flightDelay, faqItems.airportMeeting, faqItems.waitingTime] },
  { title: "Itineraries & Special Requests", description: "Stops, hourly service, regional travel, and trip-specific needs.", items: [faqItems.extraStops, faqItems.hourlyDifference, faqItems.longDistance, faqItems.accommodations, faqItems.language, faqItems.specialRequests] },
  { title: "About Regia Rides", description: "The marketplace role, transportation provider, and initial coverage.", items: [faqItems.ownFleet, faqItems.operator, faqItems.serviceArea] },
] as const;

export const homeFaqs = [faqItems.experience, faqItems.advance, faqItems.chooseVehicle, faqItems.specificVehicle, faqItems.quoteCount] as const;
