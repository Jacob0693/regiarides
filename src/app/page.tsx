const services = [
  ["Airport Transfer", "Prearranged airport pickup or drop-off with airport-specific trip details."],
  ["Point-to-Point", "One scheduled transfer between airports, hotels, homes, offices, events, and more."],
  ["Multiple Transfers", "Several independent transfers organized within one transportation request."],
  ["Hourly Transportation", "A private vehicle reserved for a continuous block of time."],
  ["Long Distance", "Prearranged intercity transportation for trips beyond the local market."],
  ["Custom Transportation", "A flexible request for executive, VIP, and itinerary-specific transportation."],
] as const;

const steps = [
  ["01", "Request", "Tell us where and when you need transportation, plus passenger, luggage, vehicle, and service preferences."],
  ["02", "Compare", "Review up to three quotes from participating transportation providers."],
  ["03", "Select", "Choose based on the provider, vehicle, included service options, and price."],
] as const;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Regia Rides home"><span>REGIA</span><small>RIDES</small></a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#how-it-works">How It Works</a>
          <a className="nav-cta" href="#request">Get Quotes</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <p className="eyebrow">REGIA RIDES · PREARRANGED TRANSPORTATION</p>
        <h1>Premium Private Transportation, Compared in One Place</h1>
        <p className="tagline">Compare Black Rides. Select Your Ride.</p>
        <p className="hero-copy">Plan your transportation before the trip. Request your ride, compare up to three quotes from participating licensed transportation providers, and select based on the vehicle, provider, service options, and price.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#request">Get Quotes</a>
          <a className="button button-secondary" href="#services">Explore Services</a>
        </div>
        <p className="process-line">1. Request <span>·</span> 2. Compare <span>·</span> 3. Select</p>
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">TRANSPORTATION OPTIONS</p>
          <h2>Choose the Format That Fits Your Trip</h2>
          <p>From airport transfers to multi-day executive movement, begin with the transportation format that matches your plans.</p>
        </div>
        <div className="service-grid">
          {services.map(([title, description]) => (
            <article className="service-card" key={title}>
              <span aria-hidden="true">↗</span><h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-contrast" id="how-it-works">
        <div className="section-heading">
          <p className="eyebrow">HOW REGIA RIDES WORKS</p>
          <h2>A Clearer Way to Arrange Your Ride</h2>
        </div>
        <div className="step-grid">
          {steps.map(([number, title, description]) => (
            <article className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>

      <section className="request-section" id="request">
        <p className="eyebrow">RESERVED AROUND YOUR SCHEDULE</p>
        <h2>Start Your Transportation Request</h2>
        <p>Quote-request functionality will open during the next development phase.</p>
        <button className="button button-disabled" type="button" disabled>Request Form Coming Soon</button>
      </section>

      <footer>
        <div className="brand footer-brand"><span>REGIA</span><small>RIDES</small></div>
        <p>Regia Rides is a quote and booking platform connecting customers with participating independent transportation providers.</p>
        <p>Transportation is performed by the selected provider, not by Regia Rides.</p>
        <small>© {new Date().getFullYear()} Regia Mobility Group LLC</small>
      </footer>
    </main>
  );
}
