import type { Metadata } from "next";
import Image from "next/image";
import { CheckIcon, InteriorHero, InteriorLayout } from "../components/SiteShell";

export const metadata: Metadata = { title: "For Transportation Providers", description: "Learn how qualified independent transportation providers can review eligible Regia Rides requests and submit clear quotes.", alternates: { canonical: "/providers" } };

export default function ProvidersPage(){return <InteriorLayout>
  <InteriorHero eyebrow="FOR TRANSPORTATION PROVIDERS" title="Bring your service to customers planning ahead." copy="Qualified independent providers can review eligible transportation requests, decide which opportunities to quote, and present a clear vehicle and service offer." image="/images/regia-airport-chauffeur.webp" />
  <section className="interior-section provider-steps-section"><div className="provider-page-image"><Image src="/images/regia-service-custom-v2.webp" alt="Transportation professionals preparing for a client arrival" fill sizes="(max-width:1100px) 100vw, 50vw" /></div><div><p className="eyebrow">A CLEARER QUOTE EXPERIENCE</p><h2>Compete on the complete offer.</h2><p>Customers compare the vehicle, confirmed service requests, provider terms, and price—not just a generic category.</p><div className="check-list"><span><CheckIcon /> Review trips that match your service area</span><span><CheckIcon /> Choose which requests to quote</span><span><CheckIcon /> Offer up to two suitable vehicles when recommendation is requested</span><span><CheckIcon /> Confirm every included option clearly</span></div></div></section>
  <section className="interior-section provider-onboarding-section"><div><p className="eyebrow">PROVIDER ONBOARDING</p><h2>Applications are opening soon.</h2><p>Provider qualification, service area, vehicles, insurance, and operating information will be reviewed before marketplace access is activated.</p></div><button className="button button-secondary button-pending" type="button" disabled>Provider Applications Opening Soon</button></section>
 </InteriorLayout>}
