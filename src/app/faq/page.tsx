import type { Metadata } from "next";
import { FinalCta, InteriorHero, InteriorLayout } from "../components/SiteShell";
import { customerFaqs } from "../content/site-content";

export const metadata: Metadata = { title: "Frequently Asked Questions", description: "Answers about requesting, comparing, and selecting transportation quotes through Regia Rides.", alternates: { canonical: "/faq" } };

export default function FaqPage(){return <InteriorLayout>
  <InteriorHero eyebrow="FREQUENTLY ASKED QUESTIONS" title="Answers before you request a ride." copy="Understand the information providers need, the choices you can make, and what to review before selecting a quote." image="/images/regia-final-cta.webp" />
  <section className="interior-section faq-page-section"><div className="interior-section-heading"><p className="eyebrow">CUSTOMER QUESTIONS</p><h2>Plan with more clarity.</h2></div><div className="faq-list">{customerFaqs.map(([question,answer],index)=><details key={question} open={index===0}><summary><span>{question}</span><i aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>
  <FinalCta />
 </InteriorLayout>}
