import type { Metadata } from "next";
import Image from "next/image";
import { CheckIcon, FinalCta, InteriorHero, InteriorLayout } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Vehicle Categories",
  description: "Compare Regia Rides vehicle categories, request a preferred model, or ask providers to recommend suitable options for your passengers and luggage.",
  alternates: { canonical: "/vehicles" },
};

const vehicles = [
  {
    title: "Black Sedan",
    copy: "A private, professional option for smaller parties and lighter luggage needs.",
    use: "Well suited to solo travelers, couples, business transportation, and airport trips with modest luggage.",
    image: "/images/regia-black-sedan.webp",
    alt: "Black executive sedan",
  },
  {
    title: "Standard SUV",
    copy: "More passenger and luggage flexibility than a sedan for many planned trips.",
    use: "Well suited to airport transportation, families, business travelers, and smaller groups needing additional space.",
    image: "/images/regia-standard-suv.webp",
    alt: "Black standard SUV",
  },
  {
    title: "Full-Size Premium SUV",
    copy: "Additional cabin and cargo capacity with a more substantial premium presentation.",
    use: "Well suited to executives, VIP guests, families with more luggage, and travelers requesting vehicles such as a Cadillac Escalade.",
    image: "/images/regia-premium-suv.webp",
    alt: "Black full-size premium SUV",
  },
  {
    title: "Luxury Van / Sprinter",
    copy: "A group transportation option when passenger capacity and luggage space are especially important.",
    use: "Well suited to larger groups, business teams, event movements, golf travel, and luggage-heavy airport transportation.",
    image: "/images/regia-luxury-van.webp",
    alt: "Black luxury passenger van",
  },
] as const;

export default function VehiclesPage() {
  return (
    <InteriorLayout>
      <InteriorHero
        eyebrow="VEHICLE CATEGORIES"
        title="Space for the people and luggage that matter."
        copy="Choose a vehicle category, request a preferred make or model, or leave the decision open for participating providers to recommend suitable options."
        image="/images/regia-premium-suv.webp"
        imageAlt="Black full-size premium SUV"
      />

      <section className="interior-section">
        <div className="interior-section-heading">
          <p className="eyebrow">EXPLORE THE CATEGORIES</p>
          <h2>Start with the space the journey requires.</h2>
        </div>
        <div className="vehicle-page-grid">
          {vehicles.map((vehicle) => (
            <article key={vehicle.title}>
              <div><Image src={vehicle.image} alt={vehicle.alt} fill sizes="(max-width:760px) 100vw, 50vw" /></div>
              <section>
                <h3>{vehicle.title}</h3>
                <p>{vehicle.copy}</p>
                <p>{vehicle.use}</p>
              </section>
            </article>
          ))}
        </div>
        <p className="interior-note">Passenger and luggage capacity is not determined by the category name alone. The actual make, model, seating layout, cargo configuration, standard luggage, golf bags, child seats, and accessibility needs must be evaluated in the provider quote.</p>
      </section>

      <section className="interior-section">
        <div className="interior-section-heading">
          <p className="eyebrow">THREE WAYS TO CHOOSE</p>
          <h2>You do not have to know the exact vehicle first.</h2>
        </div>
        <div className="comparison-grid">
          <article>
            <h3>Choose a category</h3>
            <p>Select Sedan, Standard SUV, Full-Size SUV, or Sprinter Van when you already know the general capacity and presentation that fit the trip.</p>
          </article>
          <article>
            <h3>Request a preferred model</h3>
            <p>Add a make or model through Special Request. With Black Ride, it is a preference until the selected provider explicitly confirms and prices it.</p>
          </article>
          <article>
            <h3>Recommend a Vehicle</h3>
            <p>Enter accurate passenger, standard luggage, golf bag, child-seat, and special-equipment details. Each provider may propose up to two suitable available options.</p>
          </article>
        </div>
      </section>

      <section className="interior-section recommendation-section">
        <div>
          <p className="eyebrow">RECOMMEND A VEHICLE</p>
          <h2>Let the trip details guide the recommendation.</h2>
        </div>
        <div>
          <p>Recommend a Vehicle is useful when luggage, golf bags, child seats, mobility equipment, or the number of passengers makes the correct category uncertain.</p>
          <p>Providers review the information independently. One provider may recommend a different vehicle from another, which allows you to compare capacity, actual make and model, included services, and price before selecting.</p>
          <p>A recommendation is not a generic automatic match. The suitable options must be identified in the provider quote.</p>
        </div>
      </section>

      <section className="interior-section">
        <div className="interior-section-heading">
          <p className="eyebrow">VEHICLES BY RIDE EXPERIENCE</p>
          <h2>The same trip can call for a different level of vehicle certainty.</h2>
        </div>
        <div className="detail-columns">
          <article>
            <h3>Black Ride</h3>
            <ul>
              <li><CheckIcon /> Choose the vehicle category that fits the trip</li>
              <li><CheckIcon /> Add a preferred make or model as a Special Request</li>
              <li><CheckIcon /> Compare the actual vehicles offered by participating providers</li>
              <li><CheckIcon /> Treat the make or model as confirmed only when included in the selected quote</li>
            </ul>
          </article>
          <article>
            <h3>Signature Chauffeur</h3>
            <ul>
              <li><CheckIcon /> Cadillac Escalade is the recommended Signature SUV preference</li>
              <li><CheckIcon /> Luxury Sedan may be selected and the provider identifies the offered make, model, and year</li>
              <li><CheckIcon /> An eligible specific premium vehicle may be designated</li>
              <li><CheckIcon /> A substitute or alternative requires clear presentation and customer approval</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="interior-section split-feature-section">
        <div>
          <p className="eyebrow">DETAILS THAT MATTER</p>
          <h2>Give providers a complete capacity picture.</h2>
        </div>
        <div className="check-list">
          <span><CheckIcon /> Total passenger count, including children</span>
          <span><CheckIcon /> Standard checked and carry-on luggage</span>
          <span><CheckIcon /> Golf bags, strollers, mobility equipment, or oversized items</span>
          <span><CheckIcon /> Child-seat type and quantity</span>
          <span><CheckIcon /> Comfort, presentation, and exact-vehicle priorities</span>
        </div>
      </section>

      <FinalCta title="Choose a category—or ask providers to recommend the right fit." />
    </InteriorLayout>
  );
}
