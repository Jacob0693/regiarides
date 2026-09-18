import type { Metadata } from "next";
import Image from "next/image";
import { FinalCta, InteriorHero, InteriorLayout } from "../components/SiteShell";

export const metadata: Metadata = { title: "Vehicle Categories", description: "Choose a vehicle category, request a preferred model, or ask providers to recommend suitable options for your passengers and luggage.", alternates: { canonical: "/vehicles" } };

const vehicles = [
  ["Black Sedan", "For smaller parties and lighter luggage needs.", "/images/regia-black-sedan.webp", "Black executive sedan"],
  ["Standard SUV", "More passenger and luggage flexibility for many trips.", "/images/regia-standard-suv.webp", "Black standard SUV"],
  ["Full-Size Premium SUV", "A spacious premium option for passengers, luggage, and elevated travel.", "/images/regia-premium-suv.webp", "Black full-size premium SUV"],
  ["Luxury Van / Sprinter", "Additional cabin and cargo flexibility for groups, subject to configuration.", "/images/regia-luxury-van.webp", "Black luxury passenger van"],
] as const;

export default function VehiclesPage(){return <InteriorLayout>
  <InteriorHero eyebrow="VEHICLE CATEGORIES" title="Space for the people and luggage that matter." copy="Capacity depends on the actual vehicle configuration. Give providers accurate passenger, luggage, and special-equipment counts so the quote fits the journey." image="/images/regia-premium-suv.webp" />
  <section className="interior-section"><div className="interior-section-heading"><p className="eyebrow">EXPLORE THE CATEGORIES</p><h2>Choose directly—or let providers recommend.</h2></div><div className="vehicle-page-grid">{vehicles.map(([title,copy,image,alt])=><article key={title}><div><Image src={image} alt={alt} fill sizes="(max-width:760px) 100vw, 50vw" /></div><section><h3>{title}</h3><p>{copy}</p></section></article>)}</div></section>
  <section className="interior-section recommendation-section"><div><p className="eyebrow">RECOMMEND A VEHICLE</p><h2>You do not have to decide first.</h2></div><div><p>Select Recommend a Vehicle and share accurate passenger and luggage details. Each participating provider may include up to two suitable vehicle options in its quote, allowing you to compare capacity, included service, and price.</p><p>A preferred make or model may also be added as a Special Request. It is confirmed only when the selected quote explicitly includes it.</p></div></section>
  <FinalCta />
 </InteriorLayout>}
