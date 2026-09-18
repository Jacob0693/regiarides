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

export const customerFaqs = [
  ["What is the difference between Black Ride and Signature Chauffeur?", "Black Ride lets you compare professional transportation across available vehicle classes, request a preferred model, or ask providers to recommend a suitable vehicle. Signature Chauffeur is a curated premium service with qualified providers, elevated service standards, and the ability to designate a specific premium vehicle."],
  ["How far in advance should I request a ride?", "Submit your request as early as possible so participating providers have time to review the itinerary and prepare an accurate quote. Coverage and availability vary by trip."],
  ["What information do I need to request quotes?", "Provide the route, date and time, passenger and luggage counts, applicable flight details, additional stops, and service or accessibility requests."],
  ["Do I have to choose a vehicle?", "No. Select Recommend a Vehicle and each participating provider may include up to two suitable vehicle options in its quote based on your passenger and luggage details."],
  ["Can I request a specific vehicle, such as a Cadillac Escalade?", "Yes. With Black Ride, add a preferred make or model as a Special Request and a provider can confirm it in the quote. With Signature Chauffeur, you can designate a specific premium vehicle and the selected quote must confirm it."],
  ["Can I request airport meet-and-greet service?", "Yes. Add meet-and-greet, a name sign, luggage assistance, or other arrival preferences. Each quote should show which services are confirmed and included."],
  ["What happens if my flight is delayed?", "Include the correct airline and flight number. Providers can state their flight-monitoring, complimentary-waiting, and additional-waiting terms in the quote."],
  ["Can I add extra stops or arrange multiple rides?", "Add stops to a single continuous trip when appropriate, or choose Multiple Transfers for independent rides with separate routes or schedules."],
  ["Can I request child seats or other accommodations?", "Yes. Add the seat type and quantity, accessibility details, or other accommodations. A request is confirmed only when it appears in the selected quote."],
  ["How many quotes can I receive?", "You may receive up to three provider quotes for an eligible request. The number varies with coverage, trip details, requirements, and availability."],
  ["Does Regia Rides operate its own fleet?", "No. Regia Rides is a quote and booking platform connecting customers with participating independent transportation providers. Transportation is performed by the selected provider."],
] as const;
