import Image from "next/image";

const serviceTypes = [
  { number: "01", title: "Airport Transfer", description: "Prearranged airport pickup or drop-off with the trip details providers need to quote accurately.", detail: "Flight-aware request details", image: "/images/regia-service-airport-transfer-v2.webp", alt: "Professional chauffeur welcoming an airport passenger beside a black sedan" },
  { number: "02", title: "Point-to-Point", description: "One scheduled transfer between an airport, hotel, home, office, venue, or other destination.", detail: "One pickup · One destination", image: "/images/regia-service-point-to-point-v2.webp", alt: "Black executive sedan arriving at a Los Angeles hotel" },
  { number: "03", title: "Multiple Transfers", description: "Organize several independent transfers in one request, each with its own date, time, and route.", detail: "Multi-day and business schedules", image: "/images/regia-service-multiple-transfers-v2.webp", alt: "Dark map showing multiple destinations connected by a planned route" },
  { number: "04", title: "Hourly Transportation", description: "Reserve a private vehicle for a continuous block of time when your schedule needs flexibility.", detail: "Flexible, time-based service", image: "/images/regia-service-hourly-v2.webp", alt: "Professional chauffeur waiting beside a black full-size SUV" },
  { number: "05", title: "Long Distance", description: "Plan private transportation between cities or for a longer regional journey.", detail: "Intercity and regional travel", image: "/images/regia-service-long-distance-v2.webp", alt: "Black premium SUV traveling along a Southern California coastal highway" },
  { number: "06", title: "Custom Transportation", description: "Describe an executive, VIP, or itinerary-specific request that needs a tailored quote.", detail: "Built around your requirements", image: "/images/regia-service-custom-v2.webp", alt: "Chauffeur and transportation coordinator preparing for a VIP arrival" },
] as const;

const steps = [
  ["01", "Request", "Tell us where and when you need transportation, plus passenger, luggage, vehicle, and service preferences."],
  ["02", "Compare", "Review up to three quotes from participating transportation providers as they become available."],
  ["03", "Select", "Choose the provider, vehicle, included service options, and price that fit your trip."],
] as const;

const vehicles = [
  { title: "Black Sedan", description: "For smaller parties and lighter luggage needs.", image: "/images/regia-black-sedan.webp", alt: "Black executive sedan at a Los Angeles hotel entrance at blue hour" },
  { title: "Standard SUV", description: "More passenger and luggage flexibility for many trips.", image: "/images/regia-standard-suv.webp", alt: "Black standard SUV at a Los Angeles hotel entrance at blue hour" },
  { title: "Full-Size Premium SUV", description: "A more spacious, elevated option for premium travel and additional luggage needs.", image: "/images/regia-premium-suv.webp", alt: "Black full-size premium SUV at a Los Angeles hotel entrance" },
  { title: "Luxury Van / Sprinter", description: "Additional cabin and cargo flexibility for groups, subject to configuration.", image: "/images/regia-luxury-van.webp", alt: "Black luxury passenger van prepared for executive group transportation" },
] as const;

const audiences = [
  ["Business Travel", "Coordinate airports, hotels, offices, meetings, and event movements with trip details set in advance."],
  ["VIP & Guest Care", "Arrange a considered arrival experience for executives, artists, private guests, and people who matter to you."],
  ["Families & Groups", "Share accurate passenger and luggage needs so providers can quote an appropriate vehicle category."],
  ["Complex Itineraries", "Organize multiple independent transfers or reserve hourly service for schedules that need flexibility."],
] as const;

const faqs = [
  ["Does Regia Rides operate its own fleet?", "No. Regia Rides is a quote and booking platform connecting customers with participating independent transportation providers. Transportation is performed by the selected provider."],
  ["How many quotes can I receive?", "You may receive up to three provider quotes for an eligible request. The number of quotes can vary based on coverage, trip details, and availability."],
  ["What is the difference between Black Ride and Signature Chauffeur?", "Black Ride offers professional transportation across standard vehicle classes. Signature Chauffeur is a curated premium service level with qualified providers, drivers, vehicles, and enhanced service standards."],
  ["Can I arrange several rides in one request?", "Yes. Choose Multiple Transfers when you have two or more independent rides with separate pickup locations, destinations, dates, or times."],
  ["Can I request an airport pickup or drop-off?", "Yes. Airport requests collect the relevant flight and schedule details so participating providers can prepare an accurate quote."],
] as const;

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Regia Rides home"><span>REGIA</span><small>RIDES</small></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#services">Services</a><a href="#for-whom">Who We Serve</a><a href="#how-it-works">How It Works</a><a href="#fleet">Vehicles</a><a href="#providers">For Providers</a>
        </nav>
        <div className="header-actions">
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><span /><span /></summary>
            <nav aria-label="Mobile navigation"><a href="#services">Services</a><a href="#for-whom">Who We Serve</a><a href="#how-it-works">How It Works</a><a href="#fleet">Vehicles</a><a href="#providers">For Providers</a><a href="#faq">FAQ</a></nav>
          </details>
          <a className="header-cta" href="#quote-entry">Get Quotes <ArrowIcon /></a>
        </div>
      </header>

      <section className="hero" id="top">
        <Image className="hero-image" src="/images/regia-hotel-arrival.webp" alt="" fill priority sizes="100vw" />
        <div className="hero-atmosphere" aria-hidden="true" />
        <div className="hero-grid">
          <div className="hero-content">
            <p className="eyebrow">PREARRANGED PRIVATE TRANSPORTATION</p>
            <h1>Premium private transportation, <span className="keep-line">compared in one place.</span></h1>
            <p className="tagline">Compare Premium Rides. Select Your Ride.</p>
            <p className="hero-copy">Plan before the trip. Request your ride, compare up to three quotes from participating transportation providers, and choose the option that fits your trip.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#quote-entry">Start Your Request <ArrowIcon /></a>
              <a className="text-link" href="#how-it-works">See how it works</a>
            </div>
            <div className="process-line" aria-label="Request, compare, select">
              <span><b>01</b> Request</span><i /><span><b>02</b> Compare</span><i /><span><b>03</b> Select</span>
            </div>
          </div>

          <aside className="quote-panel" id="quote-entry" aria-labelledby="quote-title">
            <div className="panel-heading">
              <p className="eyebrow">START YOUR REQUEST</p>
              <h2 id="quote-title">Choose your service</h2>
              <p>Select one service level to begin. You can compare the differences before continuing.</p>
            </div>
            <form className="service-selector" action="#services">
              <label className="service-choice">
                <input type="radio" name="service-level" value="black-ride" defaultChecked />
                <span className="choice-control" aria-hidden="true" />
                <span className="choice-copy"><span className="choice-topline">STANDARD</span><strong>Black Ride</strong><small>Professional private transportation with flexible vehicle-class options.</small></span>
              </label>
              <label className="service-choice signature-choice">
                <input type="radio" name="service-level" value="signature-chauffeur" />
                <span className="choice-control" aria-hidden="true" />
                <span className="choice-copy"><span className="choice-topline">CURATED</span><strong>Signature Chauffeur</strong><small>A refined chauffeur experience from qualified providers and premium vehicles.</small></span>
              </label>
              <a className="compare-link" href="#service-levels">Compare service levels</a>
              <button className="button button-primary panel-button" type="submit">Continue to Trip Type <ArrowIcon /></button>
            </form>
            <p className="panel-note"><span aria-hidden="true">●</span> Next: choose the transportation format for your trip.</p>
          </aside>
        </div>
      </section>

      <section className="service-level-section" id="service-levels">
        <div className="section-intro compact-intro">
          <p className="eyebrow">TWO WAYS TO RIDE</p><h2>Choose the level of service that matches the occasion.</h2>
        </div>
        <div className="level-grid">
          <article className="level-card level-card-standard">
            <Image className="level-card-image" src="/images/regia-black-sedan.webp" alt="Black executive sedan ready for a prearranged Black Ride" fill sizes="(max-width: 760px) 100vw, 50vw" />
            <div><p className="card-kicker">BLACK RIDE · STANDARD</p><h3>Flexible choice for every planned journey.</h3><p>Compare quotes across Black Sedan, Standard SUV, Full-Size Premium SUV, and Luxury Van / Sprinter options from participating providers.</p></div>
            <ul><li><CheckIcon /> Up to three provider quotes</li><li><CheckIcon /> Flexible vehicle-class selection</li><li><CheckIcon /> Airport, business, and private trips</li></ul>
            <a href="#quote-entry">Choose Black Ride <ArrowIcon /></a>
          </article>
          <article className="level-card level-card-signature">
            <Image className="level-card-image" src="/images/regia-airport-chauffeur.webp" alt="Professional chauffeur in a suit welcoming a passenger beside a black vehicle" fill sizes="(max-width: 760px) 100vw, 50vw" />
            <div><p className="card-kicker">SIGNATURE CHAUFFEUR · CURATED</p><h3>Elevated chauffeur service, tailored around your journey.</h3><p>For VIP arrivals, executive travel, and special occasions, compare curated providers prepared for refined presentation and trip-specific requests.</p></div>
            <ul><li><CheckIcon /> Curated professional chauffeur presentation</li><li><CheckIcon /> Full-Size Cadillac Escalade recommended</li><li><CheckIcon /> Meet-and-greet and personalized service requests</li></ul>
            <a href="#quote-entry">Choose Signature <ArrowIcon /></a>
          </article>
        </div>
      </section>

      <section className="section audience-section" id="for-whom">
        <div className="section-intro">
          <div><p className="eyebrow">DESIGNED AROUND THE JOURNEY</p><h2>For travel that deserves more preparation.</h2></div>
          <p>Regia Rides is for customers who want to compare considered transportation options before the day of travel—not rely on an on-demand match at the last moment.</p>
        </div>
        <div className="audience-grid">
          {audiences.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-intro">
          <div><p className="eyebrow">TRANSPORTATION FORMATS</p><h2>Built around the way your trip moves.</h2></div>
          <p>Start with the format that best describes your schedule. Your request will collect the details providers need to quote accurately.</p>
        </div>
        <div className="service-grid">
          {serviceTypes.map((service) => (
            <article className="service-card" key={service.title}>
              <Image className="service-card-image" src={service.image} alt={service.alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" />
              <div className="service-number">{service.number}</div>
              <div className="service-card-copy"><h3>{service.title}</h3><p>{service.description}</p></div>
              <div className="service-footer"><span>{service.detail}</span><ArrowIcon /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section how-section" id="how-it-works">
        <div className="section-intro compact-intro"><p className="eyebrow">HOW REGIA RIDES WORKS</p><h2>Request. Compare. Select.</h2></div>
        <div className="step-grid">
          {steps.map(([, title, description]) => <article className="step-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </section>

      <section className="section vehicle-section" id="fleet">
        <div className="vehicle-heading"><p className="eyebrow">VEHICLE CATEGORIES</p><h2>Space for the people and luggage that matter.</h2><p>Capacity depends on the actual configuration quoted by the provider. Enter accurate passenger and luggage counts so providers can recommend the right category.</p></div>
        <div className="vehicle-list">
          {vehicles.map((vehicle) => <article key={vehicle.title}><div className="vehicle-thumb"><Image src={vehicle.image} alt={vehicle.alt} fill sizes="(max-width: 760px) 100vw, 55vw" /></div><div className="vehicle-card-copy"><h3>{vehicle.title}</h3><p>{vehicle.description}</p></div></article>)}
        </div>
      </section>

      <section className="trust-section">
        <div><p className="eyebrow">WHY REGIA RIDES</p><h2>Compare with more clarity before you book.</h2></div>
        <div className="trust-copy">
          <p>One detailed request helps participating providers prepare quotes around your itinerary. Review the vehicle category, included services, and price before selecting the option that fits your trip.</p>
          <div className="trust-points">
            <span><CheckIcon /> Up to three provider quotes to review</span>
            <span><CheckIcon /> Vehicle category and included services shown clearly</span>
            <span><CheckIcon /> Meet-and-greet, child seats, additional stops, and other requests</span>
            <span><CheckIcon /> Airport, business, VIP, and multi-transfer planning</span>
          </div>
        </div>
      </section>

      <section className="section service-area-section" id="service-area">
        <div className="service-area-copy">
          <p className="eyebrow">SOUTHERN CALIFORNIA SERVICE AREA</p>
          <h2>Planned transportation across Los Angeles and Orange County.</h2>
          <p>Share complete pickup, destination, date, and schedule details when requesting a quote. Provider coverage and availability vary by trip.</p>
        </div>
        <div className="service-area-grid">
          <article className="area-card"><h3>LAX &amp; Regional Airports</h3><p>Prearranged airport pickups and drop-offs with the flight and timing details providers need.</p></article>
          <article className="area-card"><h3>Los Angeles</h3><p>Transportation requests for hotels, offices, meetings, venues, private addresses, and special occasions.</p></article>
          <article className="area-card"><h3>Orange County</h3><p>Planned rides serving Irvine, Anaheim, coastal communities, business districts, and surrounding areas.</p></article>
          <article className="area-card"><h3>Regional Travel</h3><p>Intercity and long-distance requests to select Southern California destinations, subject to provider coverage.</p></article>
        </div>
      </section>

      <section className="provider-section" id="providers">
        <div className="provider-visual">
          <Image src="/images/regia-airport-chauffeur.webp" alt="Professional chauffeur greeting a business traveler beside a black executive sedan at an airport" fill sizes="(max-width: 1100px) 100vw, 50vw" />
          <div className="provider-photo-label"><span>PREARRANGED</span><small>AIRPORT · BUSINESS · PRIVATE</small></div>
        </div>
        <div className="provider-content">
          <p className="eyebrow">FOR TRANSPORTATION PROVIDERS</p>
          <h2>Bring your service to customers planning ahead.</h2>
          <p>Qualified independent transportation providers can receive eligible opportunities based on service area, review each request, and submit their own quote. Customers compare available options and select the ride that works best for them.</p>
          <ul><li><CheckIcon /> You decide which requests to quote</li><li><CheckIcon /> Present the vehicle and included options clearly</li><li><CheckIcon /> Provider identity remains protected during anonymous quote comparison</li></ul>
          <button className="button button-secondary button-pending" type="button" disabled>Provider Applications Opening Soon</button>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-heading"><p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p><h2>Before you request a ride.</h2><p>Clear answers about how the Regia Rides marketplace works.</p></div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{question}</span><i aria-hidden="true" /></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <section className="final-cta">
        <Image className="final-cta-image" src="/images/regia-final-cta.webp" alt="" fill sizes="100vw" />
        <div className="final-cta-content"><p className="eyebrow">READY WHEN YOUR PLANS ARE</p><h2>Compare premium transportation quotes for your next trip.</h2><a className="button button-primary" href="#quote-entry">Get Quotes <ArrowIcon /></a></div>
      </section>

      <footer>
        <div className="footer-main">
          <div><a className="brand footer-brand" href="#top"><span>REGIA</span><small>RIDES</small></a><p>Premium private transportation, compared in one place.</p></div>
          <div className="footer-links">
            <div><strong>Explore</strong><a href="#services">Services</a><a href="#how-it-works">How It Works</a><a href="#fleet">Vehicles</a></div>
            <div><strong>Company</strong><a href="#providers">For Providers</a><a href="#for-whom">Who We Serve</a><a href="#faq">Contact &amp; Help</a></div>
            <div><strong>Legal</strong><span className="footer-pending">Terms — publishing later</span><span className="footer-pending">Privacy — publishing later</span></div>
          </div>
        </div>
        <div className="footer-legal"><p>Regia Rides is a quote and booking platform connecting customers with participating independent transportation providers. Transportation is performed by the selected provider, not by Regia Rides.</p><small>© {new Date().getFullYear()} Regia Mobility Group LLC</small></div>
      </footer>
    </main>
  );
}
